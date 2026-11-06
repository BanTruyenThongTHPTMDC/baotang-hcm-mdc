// ============================================================================
// TRANG QUẢN TRỊ – KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH
// Thiết kế cho thầy cô Cấp ủy không chuyên công nghệ:
//  - Mỗi chuyên mục là một danh sách thẻ: Sửa / Ẩn-Hiện / Lên-Xuống / Xóa.
//  - Bấm "Lưu" trong biểu mẫu là lưu ngay (máy chủ: xuất bản luôn; GitHub: bản nháp).
//  - Mỗi mục có cờ "Đã đối chiếu nguồn" để Cấp ủy kiểm soát nội dung chính trị.
// ============================================================================
(function () {
  'use strict';
  const { esc, safeUrl } = KG;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const clone = o => JSON.parse(JSON.stringify(o));

  let MODE = 'static';
  let DATA = null;
  let PENDING = [];
  let page = 'tong-quan';
  let editor = null;        // { key, index, item, dirty }
  let onlyUnverified = false;

  // ------------------------------------------------------------------ CẤU HÌNH CHUYÊN MỤC
  const POSITIONS = [
    ['back', 'Vách chính diện (đối diện cửa vào)'],
    ['left', 'Vách bên trái'],
    ['right', 'Vách bên phải'],
    ['center', 'Giữa phòng (tủ kính, bục trưng bày)'],
    ['front', 'Gần cửa ra vào']
  ];
  const BOOK_TYPES = [
    ['text', 'Sách chữ – gõ hoặc dán nội dung từng trang'],
    ['images', 'Sách ảnh – ảnh chụp/scan từng trang'],
    ['pdf', 'Tệp PDF – tải lên tệp đã số hóa']
  ];
  const FLAGS = [
    { key: 'visible', type: 'toggle', label: 'Hiển thị trên trang', help: 'Bỏ chọn để tạm ẩn mục này với người xem (không xóa).' },
    { key: 'verified', type: 'verify' }
  ];

  const COLLECTIONS = {
    quotes: {
      title: 'Lời Bác dạy', icon: '❝', singular: 'lời Bác',
      desc: 'Các câu trích dẫn lời Chủ tịch Hồ Chí Minh hiển thị luân phiên trên trang chủ.',
      label: i => i.text, sub: i => i.source,
      newItem: () => ({ text: '', source: '', visible: true, verified: false }),
      fields: [
        { key: 'text', type: 'textarea', rows: 4, label: 'Nội dung trích dẫn', required: true, help: 'Chép đúng nguyên văn từ tài liệu gốc. Không cần gõ dấu ngoặc kép.' },
        { key: 'source', type: 'text', label: 'Nguồn trích dẫn', required: true, help: 'Ví dụ: Hồ Chí Minh Toàn tập, tập 4, NXB Chính trị quốc gia Sự thật, 2011, tr. 35.' }
      ].concat(FLAGS)
    },
    zones: {
      title: 'Mô hình bảo tàng 3D', icon: '🏛', singular: 'khu vực', tab: 1,
      desc: 'Các khu vực trong phòng trưng bày. Mỗi khu vực hiện thành một khung ảnh trong mô hình 3D; nên dùng ảnh chụp thực tế của phòng.',
      label: i => i.name, sub: i => (POSITIONS.find(p => p[0] === i.position) || ['', ''])[1], thumb: i => i.image,
      newItem: () => ({ name: '', position: 'back', description: '', exhibits: '', image: '', bookId: '', source: '', visible: true, verified: false }),
      fields: [
        { key: 'name', type: 'text', label: 'Tên khu vực', required: true },
        { key: 'position', type: 'select', label: 'Vị trí trong phòng', options: POSITIONS, help: 'Khu vực sẽ hiện ở vị trí tương ứng trong mô hình 3D.' },
        { key: 'image', type: 'image', label: 'Ảnh chụp khu vực', help: 'Chụp ngang, đủ sáng. Ảnh được tự động thu nhỏ.' },
        { key: 'description', type: 'textarea', rows: 5, label: 'Lời giới thiệu', help: 'Nội dung này cũng được dùng để đọc thuyết minh tự động.' },
        { key: 'exhibits', type: 'textarea', rows: 4, label: 'Hiện vật, tư liệu trưng bày', help: 'Mỗi dòng ghi một hiện vật.' },
        { key: 'bookId', type: 'bookRef', label: 'Sách liên quan (không bắt buộc)', help: 'Người xem có thể bấm để đọc cuốn sách này.' },
        { key: 'source', type: 'text', label: 'Nguồn tư liệu / ghi chú' }
      ].concat(FLAGS)
    },
    books: {
      title: 'Sách online', icon: '📖', singular: 'sách', tab: 2,
      desc: 'Tác phẩm của Bác và tư liệu viết về Người. Bộ phận số hóa có thể nhập chữ, tải ảnh scan từng trang hoặc tải tệp PDF.',
      label: i => i.title, sub: i => [i.author, i.year, i.category].filter(Boolean).join(' • '), thumb: i => i.cover,
      newItem: () => ({ id: KG.uid('b'), title: '', author: '', year: '', category: '', summary: '', cover: '', type: 'text', pages: [{ heading: '', body: '' }], pageImages: [], file: '', source: '', visible: true, verified: false }),
      fields: [
        { key: 'title', type: 'text', label: 'Tên sách / tư liệu', required: true },
        { key: 'author', type: 'text', label: 'Tác giả' },
        { key: 'year', type: 'text', label: 'Năm' },
        { key: 'category', type: 'category', label: 'Nhóm sách', help: 'Dùng để lọc trên trang, ví dụ: Tác phẩm, Tiểu sử, Bác Hồ với giáo dục.' },
        { key: 'summary', type: 'textarea', rows: 3, label: 'Tóm tắt ngắn' },
        { key: 'cover', type: 'image', label: 'Ảnh bìa (không bắt buộc)' },
        { key: 'type', type: 'select', label: 'Hình thức số hóa', options: BOOK_TYPES, rerender: true },
        { key: 'pages', type: 'pages', label: 'Các trang sách', showIf: i => i.type === 'text' },
        { key: 'pageImages', type: 'images', label: 'Ảnh từng trang (theo thứ tự)', showIf: i => i.type === 'images' },
        { key: 'file', type: 'pdf', label: 'Tệp PDF', showIf: i => i.type === 'pdf' },
        { key: 'source', type: 'text', label: 'Nguồn tư liệu', required: true, help: 'Ghi rõ tên tài liệu gốc, nhà xuất bản, năm, số trang.' }
      ].concat(FLAGS)
    },
    articles: {
      title: 'Bài viết cảm nhận', icon: '✍', singular: 'bài viết', tab: 3,
      desc: 'Bài viết đã đăng. Bài người xem gửi lên sẽ nằm ở phần "Bài chờ duyệt" phía trên.',
      label: i => i.title, sub: i => [i.name, i.className, i.date].filter(Boolean).join(' • '),
      newItem: () => ({ id: KG.uid('bv'), title: '', name: '', className: '', date: KG.todayVN(), content: '', visible: true }),
      fields: [
        { key: 'title', type: 'text', label: 'Tiêu đề', required: true },
        { key: 'name', type: 'text', label: 'Họ tên tác giả', required: true },
        { key: 'className', type: 'text', label: 'Lớp / Đơn vị' },
        { key: 'date', type: 'text', label: 'Ngày' },
        { key: 'content', type: 'textarea', rows: 12, label: 'Nội dung', required: true },
        FLAGS[0]
      ]
    },
    quiz: {
      title: 'Trắc nghiệm', icon: '❓', singular: 'câu hỏi', tab: 4,
      desc: 'Ngân hàng câu hỏi. Mỗi lượt làm bài, hệ thống chọn ngẫu nhiên một số câu (đặt ở mục Thông tin chung).',
      label: i => i.question, sub: i => 'Đáp án: ' + ((i.options || [])[i.answer] || '—'),
      newItem: () => ({ id: KG.uid('t'), question: '', options: ['', '', '', ''], answer: 0, explanation: '', visible: true, verified: false }),
      fields: [
        { key: 'question', type: 'textarea', rows: 2, label: 'Câu hỏi', required: true },
        { key: 'options', type: 'options', label: 'Các phương án trả lời', help: 'Chấm tròn bên trái để chọn đáp án đúng. Để trống phương án không dùng.' },
        { key: 'explanation', type: 'textarea', rows: 3, label: 'Giải thích (hiện sau khi trả lời)' }
      ].concat(FLAGS)
    }
  };

  const SETTINGS_FIELDS = [
    { key: 'siteTitle', type: 'text', label: 'Tên Không gian văn hóa', required: true },
    { key: 'unitName', type: 'text', label: 'Đơn vị thực hiện' },
    { key: 'partnerName', type: 'text', label: 'Đơn vị phối hợp' },
    { key: 'intro', type: 'textarea', rows: 5, label: 'Lời giới thiệu trên trang chủ' },
    { key: 'heroImage', type: 'image', label: 'Ảnh nền trang chủ (không bắt buộc)', help: 'Để trống sẽ dùng tranh Làng Sen quê Bác có sẵn.' },
    { key: 'noticeBanner', type: 'text', label: 'Dòng thông báo trên cùng', help: 'Để trống nếu không cần thông báo.' },
    { key: 'publicUrl', type: 'text', label: 'Địa chỉ trang dùng cho mã QR (không bắt buộc)', help: 'Để trống thì tự lấy địa chỉ hiện tại. Điền khi trang có tên miền chính thức, ví dụ https://kgvh.thptmacdinhchi.edu.vn/' },
    { key: 'onlyVerified', type: 'toggle', label: 'Chỉ hiển thị nội dung đã đối chiếu nguồn', help: 'Nên bật khi chính thức đưa vào sử dụng: mục nào chưa được đánh dấu "Đã đối chiếu" sẽ tự ẩn.' },
    { key: 'allowSubmissions', type: 'toggle', label: 'Cho phép người xem gửi bài cảm nhận' },
    { key: 'quizQuestionCount', type: 'number', label: 'Số câu hỏi mỗi lượt trắc nghiệm', min: 1, max: 50 },
    { key: 'kioskIdleSeconds', type: 'number', label: 'Màn hình cảm ứng: tự quay về trang chủ sau (giây) không có người dùng', min: 30, max: 1800 },
    { key: 'footerText', type: 'textarea', rows: 2, label: 'Dòng chữ cuối trang' }
  ];

  // ------------------------------------------------------------------ KHỞI ĐỘNG
  document.addEventListener('DOMContentLoaded', async () => {
    MODE = await KG.detectMode();
    if (MODE === 'server') {
      try {
        const st = await KG.api('trang-thai.php');
        if (!st.loggedIn) return showLogin(st.needSetup);
      } catch (e) { return showLogin(false); }
    }
    start();
  });

  function showLogin(needSetup) {
    $('#app').hidden = true;
    $('#loginScreen').hidden = false;
    $('#loginNormal').hidden = !!needSetup;
    $('#loginSetup').hidden = !needSetup;
    $$('#loginNormal input').forEach(i => { i.required = !needSetup; });
    const form = $('#loginForm');
    form.onsubmit = async e => {
      e.preventDefault();
      $('#loginError').textContent = '';
      try {
        if (needSetup) {
          const p1 = $('#setupPass1').value, p2 = $('#setupPass2').value;
          if (p1.length < 8) throw new Error('Mật khẩu cần tối thiểu 8 ký tự.');
          if (p1 !== p2) throw new Error('Hai lần nhập mật khẩu không khớp.');
          await KG.apiJson('cai-dat.php', { code: $('#setupCode').value.trim(), password: p1 });
        } else {
          await KG.apiJson('dang-nhap.php', { password: $('#loginPassword').value });
        }
        $('#loginScreen').hidden = true;
        start();
      } catch (err) {
        $('#loginError').textContent = err.message;
      }
    };
    setTimeout(() => (needSetup ? $('#setupCode') : $('#loginPassword')).focus(), 50);
  }

  async function start() {
    try {
      if (MODE === 'server') {
        DATA = await KG.loadPublished();
        const r = await KG.api('bai-cho-duyet.php');
        PENDING = r.items || [];
      } else {
        DATA = KG.loadDraft() || await KG.loadPublished();
        PENDING = KG.localPending();
      }
    } catch (e) {
      if (e.unauthorized) return showLogin(false);
      document.body.innerHTML = '<p style="padding:2rem">Không tải được dữ liệu: ' + esc(e.message) + '</p>';
      return;
    }
    $('#app').hidden = false;
    setupChrome();
    renderNav();
    go('tong-quan');
  }

  function setupChrome() {
    const banner = $('#modeBanner');
    if (MODE === 'static') {
      banner.hidden = false;
      banner.innerHTML = '<strong>Chế độ trình diễn (chưa có máy chủ):</strong> thay đổi được lưu trên <strong>máy tính này</strong> và xem được ở nút "Xem trang". ' +
        'Để mọi người cùng thấy, vào mục <em>Sao lưu &amp; xuất bản</em> và tải tệp dữ liệu gửi Ban Truyền thông.';
      $('#btnPreview').href = 'index.html?xemtruoc=1';
    } else {
      $('#btnLogout').hidden = false;
      $('#btnLogout').onclick = async () => {
        if (!(await guardEditor())) return;
        try { await KG.apiJson('dang-xuat.php', {}); } catch (e) { /* bỏ qua */ }
        location.reload();
      };
    }
    $('#btnSave').onclick = () => persist('Đã lưu.');
    setSaveState('saved');
    window.addEventListener('beforeunload', e => {
      if ((editor && editor.dirty) || saveState === 'error') { e.preventDefault(); e.returnValue = ''; }
    });
    $('#dialogNo').onclick = () => closeDialog(false);
    $('#dialogYes').onclick = () => closeDialog(true);
  }

  // ------------------------------------------------------------------ ĐIỀU HƯỚNG
  function renderNav() {
    const unverified = countUnverified();
    const btn = (id, ico, text, count) =>
      `<button type="button" class="nav-btn${page === id ? ' active' : ''}" data-go="${id}"><span class="ico">${ico}</span><span>${text}</span>${count ? `<span class="count">${count}</span>` : ''}</button>`;
    $('#sidebar').innerHTML =
      btn('tong-quan', '🏠', 'Tổng quan', unverified || '') +
      '<div class="group">Nội dung trang</div>' +
      btn('thong-tin', '⚙', 'Thông tin chung') +
      btn('quotes', '❝', 'Lời Bác dạy') +
      btn('zones', '🏛', '1. Mô hình bảo tàng 3D') +
      btn('books', '📖', '2. Sách online') +
      btn('articles', '✍', '3. Bài viết cảm nhận', PENDING.length || '') +
      btn('quiz', '❓', '4. Trắc nghiệm') +
      '<div class="group">Hệ thống</div>' +
      btn('sao-luu', '🗂', 'Sao lưu & xuất bản') +
      btn('huong-dan', '❔', 'Hướng dẫn sử dụng');
    $$('#sidebar [data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  }

  async function go(p) {
    if (!(await guardEditor())) return;
    page = p;
    editor = null;
    renderNav();
    const c = $('#content');
    if (p === 'tong-quan') renderDashboard(c);
    else if (p === 'thong-tin') renderSettings(c);
    else if (p === 'sao-luu') renderBackup(c);
    else if (p === 'huong-dan') renderHelp(c);
    else renderCollection(c, p);
    c.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }

  async function guardEditor() {
    if (editor && editor.dirty) {
      return confirmBox('Mục đang sửa chưa được lưu.\nBạn có muốn bỏ các thay đổi này không?', 'Bỏ thay đổi', 'Ở lại sửa tiếp');
    }
    return true;
  }

  // ------------------------------------------------------------------ LƯU DỮ LIỆU
  let saveState = 'saved';
  function setSaveState(s) {
    saveState = s;
    const el = $('#saveState');
    el.classList.toggle('dirty', s === 'error');
    el.textContent = s === 'saving' ? 'Đang lưu…' : s === 'error' ? '⚠ Chưa lưu được' :
      'Đã lưu ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    $('#btnSave').hidden = s !== 'error';
  }

  async function persist(msg) {
    DATA.updatedAt = new Date().toISOString();
    setSaveState('saving');
    try {
      if (MODE === 'server') await KG.apiJson('luu.php', DATA);
      else KG.saveDraft(DATA);
      setSaveState('saved');
      if (msg) toast(msg, 'ok');
      renderNav();
      return true;
    } catch (e) {
      setSaveState('error');
      if (e.unauthorized) { toast(e.message, 'err'); setTimeout(() => showLogin(false), 1200); return false; }
      if (e.name === 'QuotaExceededError') {
        toast('Bộ nhớ trình duyệt đã đầy (ảnh quá nhiều). Bản trình diễn chỉ chứa được ít ảnh; trên máy chủ trường sẽ không giới hạn.', 'err');
      } else {
        toast('Chưa lưu được: ' + e.message + '. Hãy bấm nút "Lưu thay đổi" để thử lại.', 'err');
      }
      return false;
    }
  }

  // ------------------------------------------------------------------ TỔNG QUAN
  function countUnverified() {
    return ['quotes', 'zones', 'books', 'quiz'].reduce((n, k) => n + DATA[k].filter(i => !i.verified).length, 0);
  }
  function renderDashboard(c) {
    const unv = countUnverified();
    const stat = (k, lbl) => `<button type="button" class="stat" data-go="${k}"><div class="num">${DATA[k].length}</div><div class="lbl">${lbl}</div></button>`;
    c.innerHTML = `
      <div class="page-head"><div><h1>Tổng quan</h1>
        <p>Xin chào! Chọn chuyên mục ở cột bên trái để xem và sửa nội dung. Mọi thay đổi được lưu ngay khi bấm nút <strong>Lưu</strong>.</p></div></div>
      <div class="stats">
        ${PENDING.length ? `<button type="button" class="stat warn" data-go="articles"><div class="num">${PENDING.length}</div><div class="lbl">Bài viết đang chờ duyệt</div></button>` : ''}
        ${unv ? `<button type="button" class="stat warn" data-unverified><div class="num">${unv}</div><div class="lbl">Mục chưa đối chiếu nguồn</div></button>` : ''}
        ${stat('zones', 'Khu vực mô hình 3D')}${stat('books', 'Sách online')}${stat('articles', 'Bài viết đã đăng')}${stat('quiz', 'Câu hỏi trắc nghiệm')}${stat('quotes', 'Lời Bác dạy')}
      </div>
      <div class="card"><h2>Ba bước để cập nhật nội dung</h2>
        <ol class="steps">
          <li>Chọn chuyên mục ở cột bên trái (ví dụ <em>2. Sách online</em>).</li>
          <li>Bấm <strong>✏ Sửa</strong> ở mục muốn sửa, hoặc <strong>＋ Thêm</strong> để thêm mới.</li>
          <li>Điền nội dung rồi bấm <strong>💾 Lưu</strong>. Bấm <strong>👁 Xem trang</strong> trên cùng để kiểm tra.</li>
        </ol></div>
      <div class="card" id="qrCard" hidden><h2>Mã QR của trang</h2>
        <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap">
          <canvas id="qrCanvas" style="width:170px;height:170px;image-rendering:pixelated;border:1px solid var(--line);border-radius:8px"></canvas>
          <div><p style="margin-top:0">In mã này dán tại phòng Không gian văn hóa, bảng tin, tài liệu tuyên truyền để mọi người quét bằng điện thoại.</p>
          <p class="hint" id="qrUrl"></p>
          <button type="button" class="btn btn-primary" id="qrDown">⬇ Tải mã QR để in (PNG)</button></div>
        </div></div>
      <div class="card"><h2>Kiểm soát nội dung chính trị</h2>
        <p>Mỗi mục có ô <strong>“Đã đối chiếu nguồn”</strong>. Chỉ đánh dấu ô này sau khi đã so sánh với văn bản gốc (Hồ Chí Minh Toàn tập, tài liệu của Bảo tàng Hồ Chí Minh, văn bản của Đảng, Nhà nước…).
        Mục chưa đối chiếu có nhãn <span class="tag warn">Chưa đối chiếu</span>.</p>
        <p>Khi chính thức đưa vào sử dụng, vào <em>Thông tin chung</em> bật <strong>“Chỉ hiển thị nội dung đã đối chiếu nguồn”</strong> để mục chưa được duyệt tự động ẩn.</p>
        <p class="hint">Hiện đang ${DATA.settings.onlyVerified ? '<strong>BẬT</strong>' : '<strong>TẮT</strong>'} chế độ này.</p></div>`;
    $$('[data-go]', c).forEach(b => b.onclick = () => go(b.dataset.go));
    if (window.KGQR && location.protocol !== 'file:') {
      const url = KGQR.siteUrl(DATA.settings.publicUrl);
      try {
        KGQR.toCanvas(url, $('#qrCanvas'), { scale: 6 });
        $('#qrUrl').textContent = url;
        $('#qrCard').hidden = false;
        $('#qrDown').onclick = () => {
          const big = KGQR.toCanvas(url, document.createElement('canvas'), { scale: 24 });
          const a = document.createElement('a');
          a.href = big.toDataURL('image/png');
          a.download = 'ma-qr-khong-gian-van-hoa-ho-chi-minh.png';
          document.body.appendChild(a); a.click(); a.remove();
        };
      } catch (e) { /* bỏ qua */ }
    }
    const u = $('[data-unverified]', c);
    if (u) u.onclick = () => {
      onlyUnverified = true;
      const first = ['quotes', 'zones', 'books', 'quiz'].find(k => DATA[k].some(i => !i.verified));
      go(first || 'books');
    };
  }

  // ------------------------------------------------------------------ DANH SÁCH CHUYÊN MỤC
  function renderCollection(c, key) {
    const cfg = COLLECTIONS[key];
    const list = DATA[key];
    const hasVerify = cfg.fields.some(f => f.type === 'verify');
    const rows = list.map((it, i) => ({ it, i })).filter(r => !(onlyUnverified && hasVerify && r.it.verified));
    c.innerHTML = `
      <div class="page-head">
        <div><h1>${cfg.icon} ${esc(cfg.title)}</h1><p>${esc(cfg.desc)}</p></div>
        <button type="button" class="btn btn-primary btn-big" id="btnAdd">＋ Thêm ${esc(cfg.singular)}</button>
      </div>
      ${key === 'articles' ? '<div id="pendingBox"></div><h2 style="color:var(--red-700)">Bài đã đăng</h2>' : ''}
      ${hasVerify ? `<label class="switch" style="margin-bottom:1rem;max-width:520px"><input type="checkbox" id="fUnv" ${onlyUnverified ? 'checked' : ''}><span class="sw-text"><strong>Chỉ xem mục chưa đối chiếu nguồn</strong></span></label>` : ''}
      <div class="item-list">${rows.length ? rows.map(({ it, i }) => itemRow(cfg, it, i, list.length)).join('') :
        `<div class="empty">${onlyUnverified ? 'Tất cả các mục đã được đối chiếu nguồn. ✔' : 'Chưa có ' + esc(cfg.singular) + ' nào. Bấm “＋ Thêm” để bắt đầu.'}</div>`}</div>`;
    $('#btnAdd').onclick = () => openEditor(key, -1);
    const f = $('#fUnv');
    if (f) f.onchange = () => { onlyUnverified = f.checked; renderCollection(c, key); };
    $$('[data-act]', c).forEach(b => b.onclick = () => itemAction(key, b.dataset.act, +b.dataset.i));
    if (key === 'articles') renderPending($('#pendingBox'));
  }

  function itemRow(cfg, it, i, n) {
    const thumb = cfg.thumb && safeUrl(cfg.thumb(it));
    const hasVerify = cfg.fields.some(f => f.type === 'verify');
    return `<div class="item${it.visible === false ? ' is-hidden' : ''}">
      ${thumb ? `<img class="thumb" src="${esc(thumb)}" alt="">` : `<span class="no">${i + 1}</span>`}
      <div class="item-main">
        <div class="item-title">${esc(cfg.label(it) || '(chưa có tiêu đề)')}</div>
        <div class="item-sub">${esc(cfg.sub(it) || '')}</div>
        <div class="tags">
          ${it.visible === false ? '<span class="tag off">Đang ẩn</span>' : '<span class="tag on">Đang hiển thị</span>'}
          ${hasVerify ? (it.verified ? '<span class="tag ok">✔ Đã đối chiếu</span>' : '<span class="tag warn">Chưa đối chiếu</span>') : ''}
        </div>
      </div>
      <div class="item-actions">
        <button type="button" class="btn btn-primary btn-sm" data-act="edit" data-i="${i}">✏ Sửa</button>
        <button type="button" class="btn btn-light btn-sm" data-act="toggle" data-i="${i}">${it.visible === false ? 'Hiện' : 'Ẩn'}</button>
        <button type="button" class="btn btn-light btn-sm" data-act="up" data-i="${i}" ${i === 0 ? 'disabled' : ''} title="Đưa lên trên">▲</button>
        <button type="button" class="btn btn-light btn-sm" data-act="down" data-i="${i}" ${i === n - 1 ? 'disabled' : ''} title="Đưa xuống dưới">▼</button>
        <button type="button" class="btn btn-danger btn-sm" data-act="del" data-i="${i}">Xóa</button>
      </div></div>`;
  }

  async function itemAction(key, act, i) {
    const list = DATA[key];
    const it = list[i];
    if (!it) return;
    if (act === 'edit') return openEditor(key, i);
    if (act === 'toggle') {
      it.visible = it.visible === false;
      await persist(it.visible ? 'Đã hiện mục này trên trang.' : 'Đã ẩn mục này.');
    } else if (act === 'up' || act === 'down') {
      const j = act === 'up' ? i - 1 : i + 1;
      if (j < 0 || j >= list.length) return;
      [list[i], list[j]] = [list[j], list[i]];
      await persist();
    } else if (act === 'del') {
      const cfg = COLLECTIONS[key];
      const ok = await confirmBox(`Xóa ${cfg.singular}:\n“${String(cfg.label(it) || '').slice(0, 120)}”?\n\nNếu chỉ muốn tạm thời không hiển thị, hãy bấm “Ẩn” thay vì xóa.`, 'Xóa', 'Không xóa');
      if (!ok) return;
      list.splice(i, 1);
      await persist('Đã xóa.');
    }
    renderCollection($('#content'), key);
  }

  // ------------------------------------------------------------------ BÀI CHỜ DUYỆT
  function renderPending(box) {
    if (!PENDING.length) {
      box.innerHTML = '<div class="card"><h2>Bài chờ duyệt</h2><p class="hint">Hiện không có bài nào chờ duyệt.</p></div>';
      return;
    }
    box.innerHTML = `<div class="card"><h2>Bài chờ duyệt (${PENDING.length})</h2><p class="hint">Đọc kỹ nội dung trước khi duyệt. Có thể bấm “Duyệt và đăng” rồi sửa lại lỗi chính tả ở danh sách bài đã đăng.</p></div>` +
      PENDING.map((a, k) => `<div class="card pending">
        <div class="item-title">${esc(a.title)}</div>
        <div class="item-sub">${esc([a.name, a.className, a.date].filter(Boolean).join(' • '))}</div>
        <div class="body" id="pb${k}">${esc(a.content)}</div>
        <div class="item-actions" style="justify-content:flex-start">
          <button type="button" class="btn btn-light btn-sm" data-pact="more" data-k="${k}">Xem toàn bài</button>
          <button type="button" class="btn btn-green btn-sm" data-pact="ok" data-k="${k}">✔ Duyệt và đăng</button>
          <button type="button" class="btn btn-danger btn-sm" data-pact="no" data-k="${k}">✘ Không duyệt</button>
        </div></div>`).join('');
    $$('[data-pact]', box).forEach(b => b.onclick = () => pendingAction(b.dataset.pact, +b.dataset.k));
  }
  async function pendingAction(act, k) {
    const a = PENDING[k];
    if (!a) return;
    if (act === 'more') { $('#pb' + k).classList.toggle('open'); return; }
    if (act === 'no' && !(await confirmBox('Không duyệt và xóa bài “' + a.title + '”?', 'Xóa bài', 'Quay lại'))) return;
    if (act === 'ok') {
      DATA.articles.unshift({ id: a.id || KG.uid('bv'), title: a.title, name: a.name, className: a.className || '', date: a.date || KG.todayVN(), content: a.content, visible: true });
      if (!(await persist('Đã duyệt và đăng bài.'))) { DATA.articles.shift(); return; }
    }
    try {
      if (MODE === 'server') await KG.apiJson('bai-cho-duyet.php', { action: 'xoa', id: a.id });
      PENDING.splice(k, 1);
      if (MODE === 'static') KG.setLocalPending(PENDING);
      if (act === 'no') toast('Đã xóa bài không duyệt.', 'ok');
    } catch (e) { toast(e.message, 'err'); }
    renderNav();
    renderCollection($('#content'), 'articles');
  }

  // ------------------------------------------------------------------ BIỂU MẪU SỬA
  function openEditor(key, index) {
    const cfg = COLLECTIONS[key];
    const item = index >= 0 ? clone(DATA[key][index]) : cfg.newItem();
    editor = { key, index, item, dirty: false };
    const c = $('#content');
    c.innerHTML = `
      <div class="page-head"><div>
        <button type="button" class="btn btn-light" id="btnBack">← Quay lại danh sách</button>
        <h1 style="margin-top:.8rem">${index >= 0 ? 'Sửa' : 'Thêm'} ${esc(cfg.singular)}</h1>
        <p>${esc(cfg.title)}</p></div></div>
      <form class="form card" id="editForm" novalidate></form>`;
    $('#btnBack').onclick = async () => { if (await guardEditor()) { editor = null; renderCollection(c, key); } };
    drawForm($('#editForm'), cfg.fields, item, async () => {
      for (const f of cfg.fields) {
        if (f.required && !(f.showIf && !f.showIf(item)) && !String(item[f.key] || '').trim()) {
          toast('Vui lòng điền: ' + f.label, 'err');
          const el = $(`[data-key="${f.key}"]`);
          if (el) el.focus();
          return;
        }
      }
      if (key === 'quiz' && !String((item.options || [])[item.answer] || '').trim()) {
        toast('Đáp án đúng đang là một phương án để trống. Hãy chọn lại đáp án đúng.', 'err');
        return;
      }
      if (index >= 0) DATA[key][index] = item; else DATA[key].push(item);
      if (!item.id) item.id = KG.uid(key.slice(0, 2));
      const ok = await persist(index >= 0 ? 'Đã lưu thay đổi.' : 'Đã thêm mới.');
      if (ok) { editor = null; renderCollection(c, key); }
    }, () => { editor.dirty = true; });
  }

  // Vẽ biểu mẫu từ danh sách trường. onSave: khi bấm Lưu; onChange: khi có sửa đổi
  function drawForm(form, fields, item, onSave, onChange) {
    const redraw = () => drawForm(form, fields, item, onSave, onChange);
    form.innerHTML = '';
    fields.forEach(f => {
      if (f.showIf && !f.showIf(item)) return;
      form.appendChild(buildField(f, item, () => { onChange(); if (f.rerender) redraw(); }));
    });
    const act = document.createElement('div');
    act.className = 'form-actions';
    act.innerHTML = '<button type="submit" class="btn btn-primary btn-big">💾 Lưu</button>';
    form.appendChild(act);
    form.onsubmit = e => { e.preventDefault(); onSave(); };
  }

  function wrap(f, inner) {
    const d = document.createElement('div');
    d.className = 'field';
    const id = 'f_' + f.key;
    d.innerHTML = (f.label ? `<label for="${id}">${esc(f.label)}${f.required ? ' <span style="color:var(--red-600)">*</span>' : ''}</label>` : '') +
      (f.help ? `<p class="help">${esc(f.help)}</p>` : '');
    if (typeof inner === 'string') d.insertAdjacentHTML('beforeend', inner); else d.appendChild(inner);
    return d;
  }

  function buildField(f, item, changed) {
    const id = 'f_' + f.key;
    const val = item[f.key];
    let el;
    switch (f.type) {
      case 'text':
      case 'number': {
        el = wrap(f, `<input type="${f.type}" id="${id}" data-key="${f.key}" ${f.min != null ? `min="${f.min}"` : ''} ${f.max != null ? `max="${f.max}"` : ''}>`);
        const inp = $('input', el);
        inp.value = val == null ? '' : val;
        inp.oninput = () => { item[f.key] = f.type === 'number' ? (inp.value === '' ? '' : +inp.value) : inp.value; changed(); };
        return el;
      }
      case 'textarea': {
        el = wrap(f, `<textarea id="${id}" data-key="${f.key}" rows="${f.rows || 4}"></textarea>`);
        const t = $('textarea', el);
        t.value = val || '';
        t.oninput = () => { item[f.key] = t.value; changed(); };
        return el;
      }
      case 'select': {
        el = wrap(f, `<select id="${id}" data-key="${f.key}">${f.options.map(o => `<option value="${esc(o[0])}">${esc(o[1])}</option>`).join('')}</select>`);
        const s = $('select', el);
        s.value = val || f.options[0][0];
        s.onchange = () => { item[f.key] = s.value; changed(); };
        return el;
      }
      case 'category': {
        const cats = [...new Set(DATA.books.map(b => b.category).filter(Boolean))];
        el = wrap(f, `<input type="text" id="${id}" data-key="${f.key}" list="${id}_dl"><datalist id="${id}_dl">${cats.map(c => `<option value="${esc(c)}">`).join('')}</datalist>`);
        const inp = $('input', el);
        inp.value = val || '';
        inp.oninput = () => { item[f.key] = inp.value; changed(); };
        return el;
      }
      case 'bookRef': {
        const opts = [['', '— Không liên kết —']].concat(DATA.books.map(b => [b.id, b.title]));
        return buildField(Object.assign({}, f, { type: 'select', options: opts }), item, changed);
      }
      case 'toggle':
      case 'verify': {
        const lbl = document.createElement('label');
        lbl.className = 'switch' + (f.type === 'verify' ? ' verify' : '');
        lbl.innerHTML = `<input type="checkbox" data-key="${f.key}"><span class="sw-text">` + (f.type === 'verify'
          ? '<strong>Đã đối chiếu nguồn</strong><span>Tôi xác nhận nội dung đã được so sánh với văn bản gốc và chính xác.</span>'
          : `<strong>${esc(f.label)}</strong>${f.help ? `<span>${esc(f.help)}</span>` : ''}`) + '</span>';
        const cb = $('input', lbl);
        cb.checked = f.key === 'visible' || f.key === 'allowSubmissions' ? val !== false : !!val;
        cb.onchange = () => { item[f.key] = cb.checked; changed(); };
        const d = document.createElement('div');
        d.className = 'field';
        d.appendChild(lbl);
        return d;
      }
      case 'image': return imageField(f, item, changed);
      case 'images': return imagesField(f, item, changed);
      case 'pdf': return pdfField(f, item, changed);
      case 'pages': return pagesField(f, item, changed);
      case 'options': return optionsField(f, item, changed);
    }
    return document.createElement('div');
  }

  async function prepareImage(file) {
    if (MODE === 'server') {
      const blob = await KG.compressImage(file, 1800, 0.85);
      return KG.uploadFile(blob, 'anh.jpg');
    }
    // Bản trình diễn: lưu ảnh nhỏ gọn ngay trong dữ liệu
    return KG.blobToDataUrl(await KG.compressImage(file, 1100, 0.75));
  }

  function imageField(f, item, changed) {
    const el = wrap(f, `<div class="img-field">
      <div class="img-preview"></div>
      <div style="display:flex;flex-direction:column;gap:.5rem">
        <span class="btn btn-gold file-pick">📷 Chọn ảnh từ máy<input type="file" accept="image/*"></span>
        <button type="button" class="btn btn-danger btn-sm" data-clear>Bỏ ảnh</button>
      </div></div>`);
    const pv = $('.img-preview', el), clear = $('[data-clear]', el);
    const show = () => {
      const u = safeUrl(item[f.key]);
      pv.classList.toggle('has', !!u);
      pv.style.backgroundImage = u ? `url("${u.replace(/"/g, '%22')}")` : '';
      pv.textContent = u ? '' : 'Chưa có ảnh';
      clear.hidden = !u;
    };
    $('input[type=file]', el).onchange = async e => {
      const file = e.target.files[0];
      e.target.value = '';
      if (!file) return;
      pv.textContent = 'Đang xử lý ảnh…';
      try { item[f.key] = await prepareImage(file); changed(); } catch (err) { toast(err.message, 'err'); }
      show();
    };
    clear.onclick = () => { item[f.key] = ''; changed(); show(); };
    show();
    return el;
  }

  function imagesField(f, item, changed) {
    if (!Array.isArray(item[f.key])) item[f.key] = [];
    const list = item[f.key];
    const el = wrap(Object.assign({}, f, { help: 'Chọn nhiều ảnh cùng lúc được. Ảnh được xếp theo tên tệp; dùng nút ◀ ▶ để đổi thứ tự.' + (MODE === 'static' ? ' Bản trình diễn chỉ nên thử vài trang vì bộ nhớ trình duyệt có hạn.' : '') }),
      `<div><span class="btn btn-gold file-pick">📷 Thêm ảnh trang sách<input type="file" accept="image/*" multiple></span> <span class="hint" data-status></span></div><div class="img-grid"></div>`);
    const grid = $('.img-grid', el), status = $('[data-status]', el);
    const draw = () => {
      grid.innerHTML = list.map((u, i) => `<figure><img src="${esc(safeUrl(u))}" alt="Trang ${i + 1}"><figcaption>
        <button type="button" data-mv="-1" data-i="${i}" title="Lên trước">◀</button><span>Trang ${i + 1}</span>
        <button type="button" data-mv="1" data-i="${i}" title="Ra sau">▶</button><button type="button" data-rm="${i}" title="Xóa trang">✕</button></figcaption></figure>`).join('');
      $$('[data-mv]', grid).forEach(b => b.onclick = () => {
        const i = +b.dataset.i, j = i + (+b.dataset.mv);
        if (j < 0 || j >= list.length) return;
        [list[i], list[j]] = [list[j], list[i]]; changed(); draw();
      });
      $$('[data-rm]', grid).forEach(b => b.onclick = () => { list.splice(+b.dataset.rm, 1); changed(); draw(); });
    };
    $('input[type=file]', el).onchange = async e => {
      const files = Array.from(e.target.files).sort((a, b) => a.name.localeCompare(b.name, 'vi', { numeric: true }));
      e.target.value = '';
      for (let k = 0; k < files.length; k++) {
        status.textContent = `Đang xử lý ảnh ${k + 1}/${files.length}…`;
        try { list.push(await prepareImage(files[k])); changed(); draw(); } catch (err) { toast(files[k].name + ': ' + err.message, 'err'); }
      }
      status.textContent = '';
    };
    draw();
    return el;
  }

  function pdfField(f, item, changed) {
    const server = MODE === 'server';
    const el = wrap(Object.assign({}, f, {
      help: server ? 'Chọn tệp PDF đã số hóa (tối đa theo cấu hình máy chủ, thường 50 MB).'
        : 'Bản trình diễn không tải được tệp lên. Có thể dán đường dẫn tới tệp PDF đã có sẵn trên mạng (ví dụ uploads/ten-tep.pdf).'
    }), `<input type="text" id="f_${f.key}" data-key="${f.key}" placeholder="Đường dẫn tệp PDF">
      ${server ? '<div style="margin-top:.5rem"><span class="btn btn-gold file-pick">📄 Chọn tệp PDF từ máy<input type="file" accept="application/pdf,.pdf"></span> <span class="hint" data-status></span></div>' : ''}`);
    const inp = $('input[type=text]', el);
    inp.value = item[f.key] || '';
    inp.oninput = () => { item[f.key] = inp.value.trim(); changed(); };
    const fi = $('input[type=file]', el);
    if (fi) fi.onchange = async e => {
      const file = e.target.files[0];
      e.target.value = '';
      if (!file) return;
      if (!/\.pdf$/i.test(file.name)) return toast('Vui lòng chọn tệp có đuôi .pdf', 'err');
      const st = $('[data-status]', el);
      st.textContent = 'Đang tải lên… (tệp lớn có thể mất vài phút)';
      try {
        item[f.key] = await KG.uploadFile(file, file.name);
        inp.value = item[f.key];
        changed();
        st.textContent = '✔ Đã tải lên';
      } catch (err) { st.textContent = ''; toast(err.message, 'err'); }
    };
    return el;
  }

  function pagesField(f, item, changed) {
    if (!Array.isArray(item.pages) || !item.pages.length) item.pages = [{ heading: '', body: '' }];
    const pages = item.pages;
    const el = wrap(Object.assign({}, f, { help: 'Mỗi trang gồm tiêu đề và nội dung. Để trống một dòng giữa hai đoạn văn.' }), '<div class="sub-list"></div><div><button type="button" class="btn btn-gold" data-add>＋ Thêm trang</button></div>');
    const box = $('.sub-list', el);
    const draw = () => {
      box.innerHTML = pages.map((p, i) => `<div class="sub-item">
        <div class="sub-item-head"><span>Trang ${i + 1}</span><span>
          <button type="button" class="btn btn-light btn-sm" data-mv="-1" data-i="${i}" ${i === 0 ? 'disabled' : ''}>▲</button>
          <button type="button" class="btn btn-light btn-sm" data-mv="1" data-i="${i}" ${i === pages.length - 1 ? 'disabled' : ''}>▼</button>
          <button type="button" class="btn btn-danger btn-sm" data-rm="${i}">Xóa trang</button></span></div>
        <input type="text" placeholder="Tiêu đề trang" data-h="${i}" style="width:100%;border:2px solid var(--line);border-radius:10px;padding:.6rem .8rem;min-height:48px">
        <textarea rows="8" placeholder="Nội dung trang" data-b="${i}" style="width:100%;border:2px solid var(--line);border-radius:10px;padding:.6rem .8rem;line-height:1.6"></textarea>
      </div>`).join('');
      pages.forEach((p, i) => {
        const h = $(`[data-h="${i}"]`, box), b = $(`[data-b="${i}"]`, box);
        h.value = p.heading || ''; b.value = p.body || '';
        h.oninput = () => { p.heading = h.value; changed(); };
        b.oninput = () => { p.body = b.value; changed(); };
      });
      $$('[data-mv]', box).forEach(btn => btn.onclick = () => {
        const i = +btn.dataset.i, j = i + (+btn.dataset.mv);
        [pages[i], pages[j]] = [pages[j], pages[i]]; changed(); draw();
      });
      $$('[data-rm]', box).forEach(btn => btn.onclick = async () => {
        if (!(await confirmBox('Xóa trang ' + (+btn.dataset.rm + 1) + '?', 'Xóa', 'Không'))) return;
        pages.splice(+btn.dataset.rm, 1); changed(); draw();
      });
    };
    $('[data-add]', el).onclick = () => { pages.push({ heading: '', body: '' }); changed(); draw(); const t = $$('textarea', box).pop(); if (t) t.focus(); };
    draw();
    return el;
  }

  function optionsField(f, item, changed) {
    if (!Array.isArray(item.options)) item.options = ['', '', '', ''];
    while (item.options.length < 4) item.options.push('');
    const el = wrap(f, '<div class="sub-list"></div>');
    const box = $('.sub-list', el);
    box.innerHTML = item.options.map((o, i) => `<label class="opt-row"><input type="radio" name="ans" value="${i}" ${+item.answer === i ? 'checked' : ''} title="Đáp án đúng">
      <span class="k">${'ABCD'[i]}.</span><input type="text" data-o="${i}" style="width:100%;border:2px solid var(--line);border-radius:10px;padding:.6rem .8rem;min-height:48px"></label>`).join('');
    item.options.forEach((o, i) => {
      const inp = $(`[data-o="${i}"]`, box);
      inp.value = o || '';
      inp.oninput = () => { item.options[i] = inp.value; changed(); };
    });
    $$('input[type=radio]', box).forEach(r => r.onchange = () => { item.answer = +r.value; changed(); });
    return el;
  }

  // ------------------------------------------------------------------ THÔNG TIN CHUNG
  function renderSettings(c) {
    const s = clone(DATA.settings);
    c.innerHTML = `<div class="page-head"><div><h1>⚙ Thông tin chung</h1><p>Tên gọi, lời giới thiệu, ảnh nền và các tùy chọn hiển thị.</p></div></div>
      <form class="form card" id="setForm" novalidate></form>
      ${MODE === 'server' ? `<form class="form card" id="pwForm"><h2>Đổi mật khẩu quản trị</h2>
        <div class="field"><label>Mật khẩu hiện tại<input type="password" id="pwOld" autocomplete="current-password"></label></div>
        <div class="field"><label>Mật khẩu mới (tối thiểu 8 ký tự)<input type="password" id="pwNew" autocomplete="new-password"></label></div>
        <div class="field"><label>Nhập lại mật khẩu mới<input type="password" id="pwNew2" autocomplete="new-password"></label></div>
        <div><button type="submit" class="btn btn-primary">Đổi mật khẩu</button></div></form>` : ''}`;
    editor = { key: 'settings', dirty: false };
    drawForm($('#setForm'), SETTINGS_FIELDS, s, async () => {
      if (!String(s.siteTitle || '').trim()) return toast('Vui lòng điền tên Không gian văn hóa.', 'err');
      const old = DATA.settings;
      DATA.settings = s;
      if (await persist('Đã lưu thông tin chung.')) { editor.dirty = false; renderSettings(c); } else DATA.settings = old;
    }, () => { editor.dirty = true; });
    $$('#pwForm input').forEach(i => { i.style.cssText = 'width:100%;border:2px solid var(--line);border-radius:10px;padding:.6rem .8rem;min-height:52px;margin-top:.3rem'; });
    const pw = $('#pwForm');
    if (pw) pw.onsubmit = async e => {
      e.preventDefault();
      const n1 = $('#pwNew').value, n2 = $('#pwNew2').value;
      if (n1.length < 8) return toast('Mật khẩu mới cần tối thiểu 8 ký tự.', 'err');
      if (n1 !== n2) return toast('Hai lần nhập mật khẩu mới không khớp.', 'err');
      try { await KG.apiJson('doi-mat-khau.php', { old: $('#pwOld').value, password: n1 }); pw.reset(); toast('Đã đổi mật khẩu.', 'ok'); }
      catch (err) { toast(err.message, 'err'); }
    };
  }

  // ------------------------------------------------------------------ SAO LƯU & XUẤT BẢN
  function download(name, text) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  async function renderBackup(c) {
    c.innerHTML = `<div class="page-head"><div><h1>🗂 Sao lưu &amp; xuất bản</h1><p>Lưu trữ toàn bộ nội dung ra tệp, khôi phục khi cần.</p></div></div>
      <div class="card"><h2>Tải toàn bộ nội dung về máy</h2>
        <p>Tệp <strong>noi-dung.json</strong> chứa toàn bộ nội dung (kể cả ảnh nhỏ trong bản trình diễn). Nên tải về định kỳ để lưu trữ.</p>
        <button type="button" class="btn btn-primary" id="bkDown">⬇ Tải tệp noi-dung.json</button></div>
      ${MODE === 'static' ? `<div class="card"><h2>Xuất bản lên trang chính thức (dành cho Ban Truyền thông)</h2>
        <ol class="steps"><li>Bấm nút tải tệp ở trên.</li>
        <li>Trên GitHub: mở thư mục <code>data</code> của kho mã → <em>Add file → Upload files</em> → kéo thả tệp <code>noi-dung.json</code> → <em>Commit changes</em>.</li>
        <li>Chờ 1–2 phút, tải lại trang chính thức.</li></ol>
        <p class="hint">Khi hệ thống chạy trên máy chủ trường, bước này không còn cần thiết: bấm Lưu là xuất bản ngay.</p></div>` : ''}
      <div class="card"><h2>Nhập nội dung từ tệp</h2>
        <p>Thay <strong>toàn bộ</strong> nội dung hiện tại bằng nội dung trong tệp noi-dung.json đã lưu trước đó.</p>
        <span class="btn btn-light file-pick">📂 Chọn tệp .json<input type="file" accept=".json,application/json" id="bkFile"></span></div>
      ${MODE === 'server' ? '<div class="card"><h2>Các bản sao lưu tự động</h2><p class="hint">Máy chủ tự sao lưu trước mỗi lần lưu (giữ 60 bản gần nhất).</p><div id="bkList" class="item-list">Đang tải…</div></div>'
        : `<div class="card"><h2>Bỏ bản nháp trên máy này</h2><p>Xóa mọi thay đổi đã lưu trên máy này, quay về nội dung chính thức đang đăng.</p>
          <button type="button" class="btn btn-danger" id="bkReset">Bỏ bản nháp</button></div>`}`;
    $('#bkDown').onclick = () => download('noi-dung.json', JSON.stringify(DATA, null, 2));
    $('#bkFile').onchange = async e => {
      const file = e.target.files[0];
      e.target.value = '';
      if (!file) return;
      try {
        const d = JSON.parse(await file.text());
        if (!d || typeof d !== 'object' || !d.settings || !Array.isArray(d.books)) throw new Error('Tệp không đúng định dạng nội dung của hệ thống.');
        if (!(await confirmBox('Thay toàn bộ nội dung hiện tại bằng nội dung trong tệp “' + file.name + '”?', 'Thay nội dung', 'Hủy'))) return;
        DATA = KG.normalize(d);
        await persist('Đã nhập nội dung từ tệp.');
        renderNav();
      } catch (err) { toast('Không đọc được tệp: ' + err.message, 'err'); }
    };
    const reset = $('#bkReset');
    if (reset) reset.onclick = async () => {
      if (!(await confirmBox('Bỏ toàn bộ thay đổi trên máy này?', 'Bỏ bản nháp', 'Hủy'))) return;
      KG.clearDraft();
      DATA = await KG.loadPublished();
      toast('Đã quay về nội dung chính thức.', 'ok');
      renderNav();
      renderBackup(c);
    };
    if (MODE === 'server') {
      try {
        const r = await KG.api('sao-luu.php');
        const box = $('#bkList');
        box.innerHTML = (r.items || []).length ? r.items.map(b => `<div class="item"><span class="no">🗂</span>
          <div class="item-main"><div class="item-title">${esc(b.time)}</div><div class="item-sub">${esc(Math.round(b.size / 1024) + ' KB')}</div></div>
          <div class="item-actions"><button type="button" class="btn btn-light btn-sm" data-restore="${esc(b.file)}">Khôi phục bản này</button></div></div>`).join('')
          : '<div class="empty">Chưa có bản sao lưu.</div>';
        $$('[data-restore]', box).forEach(b => b.onclick = async () => {
          if (!(await confirmBox('Khôi phục nội dung về thời điểm này?\n(Nội dung hiện tại cũng được sao lưu trước khi khôi phục.)', 'Khôi phục', 'Hủy'))) return;
          try {
            await KG.apiJson('sao-luu.php', { restore: b.dataset.restore });
            DATA = await KG.loadPublished();
            toast('Đã khôi phục.', 'ok');
            renderNav(); renderBackup(c);
          } catch (err) { toast(err.message, 'err'); }
        });
      } catch (err) { $('#bkList').textContent = err.message; }
    }
  }

  // ------------------------------------------------------------------ HƯỚNG DẪN
  function renderHelp(c) {
    c.innerHTML = `<div class="page-head"><div><h1>❔ Hướng dẫn sử dụng</h1></div></div>
      <div class="card"><h2>Sửa một nội dung</h2><ol class="steps">
        <li>Chọn chuyên mục ở cột trái.</li><li>Bấm <strong>✏ Sửa</strong> ở mục cần sửa.</li>
        <li>Sửa chữ, chọn ảnh… rồi bấm <strong>💾 Lưu</strong> ở cuối biểu mẫu.</li></ol></div>
      <div class="card"><h2>Ẩn hoặc xóa</h2><p><strong>Ẩn</strong>: tạm thời không hiển thị, có thể <strong>Hiện</strong> lại bất cứ lúc nào. <strong>Xóa</strong>: bỏ hẳn (vẫn có thể khôi phục từ mục Sao lưu khi chạy trên máy chủ trường).</p>
        <p>Nút <strong>▲ ▼</strong> dùng để đổi thứ tự hiển thị.</p></div>
      <div class="card"><h2>Duyệt bài viết của học sinh, nhân dân</h2><p>Vào <em>3. Bài viết cảm nhận</em>. Bài mới nằm ở “Bài chờ duyệt”. Đọc kỹ rồi bấm <strong>✔ Duyệt và đăng</strong> hoặc <strong>✘ Không duyệt</strong>.</p></div>
      <div class="card"><h2>Màn hình cảm ứng</h2><p>Mở trang với địa chỉ có thêm <code>?kiosk=1</code> (ví dụ <code>index.html?kiosk=1</code>) để bật chế độ màn hình cảm ứng: chữ to, có màn hình chờ, tự quay về trang chủ khi không có người dùng.
        Muốn tắt, mở lại với <code>?kiosk=0</code>.</p></div>
      <div class="card"><h2>Khi gặp sự cố</h2><p>Liên hệ Ban Truyền thông nhà trường. Có thể dùng mục <em>Sao lưu &amp; xuất bản</em> để khôi phục nội dung trước đó.</p></div>`;
  }

  // ------------------------------------------------------------------ THÔNG BÁO & XÁC NHẬN
  let toastTimer = null;
  function toast(msg, kind) {
    const t = $('#toast');
    t.textContent = msg;
    t.className = 'toast show ' + (kind || '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.className = 'toast'; }, kind === 'err' ? 6500 : 3000);
  }
  let dialogResolve = null;
  function confirmBox(text, yes, no) {
    $('#dialogText').textContent = text;
    $('#dialogYes').textContent = yes || 'Đồng ý';
    $('#dialogNo').textContent = no || 'Không';
    $('#dialog').hidden = false;
    $('#dialogNo').focus();
    return new Promise(r => { dialogResolve = r; });
  }
  function closeDialog(v) {
    $('#dialog').hidden = true;
    if (dialogResolve) { dialogResolve(v); dialogResolve = null; }
  }
})();
