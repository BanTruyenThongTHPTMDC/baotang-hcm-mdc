// ============================================================================
// TRANG CÔNG CHÚNG – KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH
// Trang chủ + 4 tab: (1) Mô hình bảo tàng 3D, (2) Sách online,
// (3) Bài viết cảm nhận về Bác, (4) Trắc nghiệm tìm hiểu về Bác.
// Toàn bộ nội dung đọc từ data/noi-dung.json (sửa qua admin.html).
//
// Tham số địa chỉ:
//   ?kiosk=1    – chế độ màn hình cảm ứng (chữ to, tự quay về trang chủ khi rảnh)
//   ?kiosk=0    – tắt chế độ kiosk đã nhớ trên máy
//   ?xemtruoc=1 – xem bản nháp đang soạn trong trang quản trị trên cùng máy
// ============================================================================
(function () {
  'use strict';
  const { esc, paragraphs, safeUrl, shuffle } = KG;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const params = new URLSearchParams(location.search);
  let DATA = null;
  // Mục được hiển thị: không bị ẩn; nếu bật "Chỉ hiển thị nội dung đã đối chiếu"
  // thì các mục có cờ verified (lời Bác, khu vực, sách, câu hỏi) phải đã được xác nhận.
  const visible = arr => (arr || []).filter(x => x && x.visible !== false &&
    !(DATA && DATA.settings.onlyVerified && 'verified' in x && !x.verified));

  // ------------------------------------------------------------------ KHỞI ĐỘNG
  document.addEventListener('DOMContentLoaded', async () => {
    setupKiosk();
    try {
      if (params.get('xemtruoc') === '1' && KG.loadDraft()) {
        DATA = KG.loadDraft();
        $('#draftBar').hidden = false;
        $('#draftBarExit').href = location.pathname;
      } else {
        DATA = await KG.loadPublished();
      }
    } catch (e) {
      $('#main').innerHTML = '<div class="view"><div class="empty">Không tải được dữ liệu nội dung (data/noi-dung.json).<br>Nếu đang mở tệp trực tiếp trên máy, hãy chạy qua máy chủ web.</div></div>';
      return;
    }
    applySettings();
    renderQuotes();
    renderMuseum();
    renderBooks();
    renderArticles();
    setupSubmitForm();
    renderQuizStart();
    setupModal();
    renderQr();
    window.addEventListener('hashchange', route);
    route();
    showIntro();
    if (KIOSK) goIdle();
  });

  // ------------------------------------------------------------------ CÀI ĐẶT CHUNG
  function applySettings() {
    const s = DATA.settings;
    const title = s.siteTitle || 'Không gian văn hóa Hồ Chí Minh';
    const unit = [s.unitName, s.partnerName].filter(Boolean).join(' • ');
    document.title = title + (s.unitName ? ' – ' + s.unitName : '');
    $('#brandTitle').textContent = title;
    $('#brandUnit').textContent = unit;
    $('#heroKicker').textContent = unit;
    $('#heroTitle').textContent = title;
    $('#heroIntro').textContent = s.intro || '';
    $('#footerText').textContent = s.footerText || '';
    $('#attractTitle').textContent = title;
    $('#attractUnit').textContent = unit;
    if (s.noticeBanner) {
      $('#noticeBanner').textContent = s.noticeBanner;
      $('#noticeBanner').hidden = false;
    }
    const photo = safeUrl(s.heroImage);
    if (photo) {
      const hero = $('#hero');
      hero.classList.add('has-photo');
      hero.style.setProperty('--hero-photo', 'url("' + photo.replace(/"/g, '%22') + '")');
    }
  }

  // Mã QR mở trang trên điện thoại (trang chủ + màn hình chờ)
  function renderQr() {
    if (!window.KGQR || location.protocol === 'file:') return;
    const url = KGQR.siteUrl(DATA.settings.publicUrl);
    ['#heroQr', '#attractQr'].forEach(sel => {
      const box = $(sel);
      try { KGQR.toCanvas(url, $('canvas', box), { scale: 6, dark: '#4a0709' }); box.hidden = false; }
      catch (e) { box.hidden = true; }
    });
  }

  // Màn mở đầu: sao vàng, cánh sen rơi (mỗi phiên trình duyệt hiện một lần)
  function showIntro() {
    const intro = $('#intro');
    const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    try { if (sessionStorage.getItem('kgvh_intro') || reduced) return; sessionStorage.setItem('kgvh_intro', '1'); } catch (e) { return; }
    $('#introTitle').textContent = DATA.settings.siteTitle || 'Không gian văn hóa Hồ Chí Minh';
    $('#introUnit').textContent = [DATA.settings.unitName, DATA.settings.partnerName].filter(Boolean).join(' • ');
    const petals = $('#introPetals');
    for (let k = 0; k < 28; k++) {
      const p = document.createElement('span');
      p.className = 'petal';
      const size = 14 + Math.random() * 16;
      p.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size * 0.8}px;` +
        `animation-duration:${4.5 + Math.random() * 4}s;animation-delay:${Math.random() * 2.5}s;` +
        `--drift:${(Math.random() * 2 - 1) * 160}px;--spin:${(Math.random() * 2 - 1) * 720}deg;opacity:${0.6 + Math.random() * 0.4}`;
      petals.appendChild(p);
    }
    intro.hidden = false;
    let done = false;
    const close = () => {
      if (done) return;
      done = true;
      intro.classList.add('out');
      setTimeout(() => { intro.hidden = true; petals.innerHTML = ''; }, 900);
    };
    intro.addEventListener('click', close);
    setTimeout(close, 4200);
  }

  // Lời Bác dạy luân phiên trên trang chủ
  function renderQuotes() {
    const quotes = visible(DATA.quotes);
    if (!quotes.length) return;
    let i = 0;
    const box = $('#heroQuote');
    const show = () => {
      const q = quotes[i % quotes.length];
      $('#heroQuoteText').textContent = '“' + q.text + '”';
      $('#heroQuoteSource').textContent = '— Chủ tịch Hồ Chí Minh' + (q.source ? ' (' + q.source + ')' : '');
      box.classList.remove('fade'); void box.offsetWidth; box.classList.add('fade');
      i++;
    };
    box.hidden = false;
    show();
    if (quotes.length > 1) setInterval(show, 12000);
  }

  // ------------------------------------------------------------------ ĐIỀU HƯỚNG TAB
  const ROUTES = ['trang-chu', 'mo-hinh-3d', 'sach-online', 'bai-viet', 'trac-nghiem'];
  function route() {
    let r = (location.hash || '').replace(/^#\/?/, '');
    if (!ROUTES.includes(r)) r = 'trang-chu';
    $$('.view').forEach(v => { v.hidden = v.dataset.view !== r; });
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.route === r));
    const activeTab = $('.tab.active');
    if (activeTab && activeTab.scrollIntoView) activeTab.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (r !== 'mo-hinh-3d') stopTour(); else fitMuseum();
    if (!tour) KG.stopSpeak();
    window.scrollTo({ top: 0 });
  }

  // ================================================================== TAB 1: MÔ HÌNH 3D
  const POS_LABEL = {
    back: 'Vách chính diện', left: 'Vách bên trái', right: 'Vách bên phải',
    center: 'Giữa phòng', front: 'Gần cửa ra vào'
  };
  const ROOM = { W: 760, D: 560, H: 330 };
  const view3d = { rx: -14, ry: -18, zoom: 1, base: 1 };
  let zones = [];
  let activeZone = -1;

  function renderMuseum() {
    zones = visible(DATA.zones);
    const stage = $('#museumStage');
    stage.style.setProperty('--W', ROOM.W + 'px');
    stage.style.setProperty('--D', ROOM.D + 'px');
    stage.style.setProperty('--H', ROOM.H + 'px');

    // Khung tranh trên các vách
    ['back', 'left', 'right'].forEach(w => { $('.wall-' + w).innerHTML = ''; });
    const floor = $('#floorItems');
    floor.innerHTML = '';
    const centerZones = [], frontZones = [];

    zones.forEach((z, i) => {
      const pos = POS_LABEL[z.position] ? z.position : 'back';
      const frame = makeFrame(z, i);
      if (pos === 'center') centerZones.push([z, i]);
      else if (pos === 'front') frontZones.push([z, i]);
      else $('.wall-' + pos).appendChild(frame);
    });
    // Tủ/bảng đặt trên sàn
    const placeOnFloor = (list, zPos, xShift) => {
      list.forEach(([z, i], k) => {
        const x = (k - (list.length - 1) / 2) * 260 + xShift;
        const item = document.createElement('div');
        item.className = 'floor-item';
        item.style.transform = `translate3d(${x}px, ${ROOM.H / 2 - 135}px, ${zPos}px)`;
        item.appendChild(makeFrame(z, i));
        const ped = document.createElement('div');
        ped.className = 'pedestal';
        item.appendChild(ped);
        floor.appendChild(item);
      });
    };
    placeOnFloor(centerZones, -70, 0);
    placeOnFloor(frontZones, ROOM.D / 2 - 70, frontZones.length === 1 ? ROOM.W / 4 : 0);

    // Danh sách khu vực bên cạnh
    const list = $('#zoneList');
    list.innerHTML = zones.map((z, i) =>
      `<li><button type="button" data-zone="${i}"><span class="n">${i + 1}</span><span>${esc(z.name)}</span></button></li>`).join('');
    list.addEventListener('click', e => {
      const b = e.target.closest('[data-zone]');
      if (b) { stopTour(); selectZone(+b.dataset.zone, true); }
    });

    if (!zones.length) {
      $('#zoneDetail').innerHTML = '<p class="muted">Chưa có khu vực trưng bày nào được đăng.</p>';
    } else {
      selectZone(0, false);
    }
    setupRoomControls();
  }

  function makeFrame(z, i) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'frame';
    b.dataset.zone = i;
    b.setAttribute('aria-label', 'Khu vực ' + (i + 1) + ': ' + z.name);
    const img = safeUrl(z.image);
    b.innerHTML = (img
      ? `<img src="${esc(img)}" alt="" loading="lazy" draggable="false">`
      : `<span class="frame-placeholder">${esc(z.name)}</span>`) +
      `<span class="hotspot">${i + 1}</span>`;
    // Bàn phím (Enter/Space) – chuột và chạm được xử lý ở setupRoomControls
    b.addEventListener('click', e => { if (e.detail === 0) selectZone(i, false); });
    return b;
  }

  function selectZone(i, rotateTo, noScroll) {
    const z = zones[i];
    if (!z) return;
    activeZone = i;
    $$('#zoneList [data-zone]').forEach(b => b.classList.toggle('active', +b.dataset.zone === i));
    $$('.frame').forEach(f => f.classList.toggle('active', +f.dataset.zone === i));
    const items = String(z.exhibits || '').split('\n').map(s => s.trim()).filter(Boolean);
    const book = z.bookId ? visible(DATA.books).find(b => b.id === z.bookId) : null;
    const img = safeUrl(z.image);
    $('#zoneDetail').innerHTML = `
      <div class="pos">Khu vực ${i + 1} • ${esc(POS_LABEL[z.position] || '')}</div>
      <h3>${esc(z.name)}</h3>
      ${img ? `<img src="${esc(img)}" alt="${esc(z.name)}">` : ''}
      ${paragraphs(z.description)}
      ${items.length ? '<strong>Hiện vật, tư liệu trưng bày:</strong><ul>' + items.map(t => '<li>' + esc(t) + '</li>').join('') + '</ul>' : ''}
      <div class="actions">
        <button type="button" class="btn-secondary" data-speak>🔊 Nghe thuyết minh</button>
        ${book ? `<button type="button" class="btn-primary" data-book="${esc(book.id)}">📖 Đọc: ${esc(book.title)}</button>` : ''}
      </div>
      ${z.source ? `<p class="source-note">Nguồn: ${esc(z.source)}</p>` : ''}`;
    $('#zoneDetail [data-speak]').onclick = () => {
      stopTour();
      if (!KG.speak(z.name + '. ' + (z.description || ''))) alert('Máy này chưa có giọng đọc tiếng Việt. Vui lòng cài gói giọng nói tiếng Việt trong phần cài đặt của máy.');
    };
    const bb = $('#zoneDetail [data-book]');
    if (bb) bb.onclick = () => openBook(bb.dataset.book);
    if (rotateTo) {
      const target = { back: [-14, 0], left: [-12, 42], right: [-12, -42], center: [-24, 0], front: [-30, 0] }[z.position] || [-14, 0];
      view3d.rx = target[0]; view3d.ry = target[1];
      applyRoom();
      if (!noScroll && window.innerWidth < 1100) $('#museumStage').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function applyRoom() {
    const room = $('#room');
    room.style.setProperty('--rx', view3d.rx + 'deg');
    room.style.setProperty('--ry', view3d.ry + 'deg');
    room.style.setProperty('--s', (view3d.base * view3d.zoom).toFixed(3));
  }
  function fitMuseum() {
    const stage = $('#museumStage');
    const w = stage.clientWidth || 800;
    view3d.base = Math.min(0.9, w / (ROOM.W + 420));
    applyRoom();
  }
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function setupRoomControls() {
    const stage = $('#museumStage');
    let drag = null;
    stage.addEventListener('pointerdown', e => {
      stopTour();
      drag = { x: e.clientX, y: e.clientY, rx: view3d.rx, ry: view3d.ry, moved: false };
      stage.setPointerCapture && stage.setPointerCapture(e.pointerId);
    });
    stage.addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) < 6) return;
      drag.moved = true;
      stage.classList.add('dragging');
      view3d.ry = clamp(drag.ry + dx * 0.25, -60, 60);
      view3d.rx = clamp(drag.rx - dy * 0.15, -40, 4);
      applyRoom();
    });
    const end = e => {
      if (!drag) return;
      const wasClick = !drag.moved;
      drag = null;
      stage.classList.remove('dragging');
      if (wasClick) {
        // Do dùng pointer capture nên tự tìm khung được chạm
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const f = el && el.closest('.frame');
        if (f) selectZone(+f.dataset.zone, false);
      }
    };
    stage.addEventListener('pointerup', end);
    stage.addEventListener('pointercancel', () => { drag = null; stage.classList.remove('dragging'); });
    stage.addEventListener('wheel', e => {
      e.preventDefault();
      view3d.zoom = clamp(view3d.zoom * (e.deltaY < 0 ? 1.08 : 0.92), 0.6, 1.8);
      applyRoom();
    }, { passive: false });

    $$('.museum-controls [data-rot]').forEach(b => b.onclick = () => {
      stopTour();
      view3d.ry = clamp(view3d.ry + 20 * (+b.dataset.rot), -60, 60); applyRoom();
    });
    $$('.museum-controls [data-zoom]').forEach(b => b.onclick = () => {
      view3d.zoom = clamp(view3d.zoom * (+b.dataset.zoom > 0 ? 1.15 : 0.87), 0.6, 1.8); applyRoom();
    });
    $('.museum-controls [data-reset]').onclick = () => { stopTour(); resetRoom(); };
    $('#tourBtn').onclick = () => (tour ? stopTour() : startTour({ silent: false, loop: false }));
    window.addEventListener('resize', fitMuseum);
    fitMuseum();
  }
  // ---------- Tham quan tự động: xoay tới từng khu vực và đọc thuyết minh ----------
  let tour = null;
  function startTour(opts) {
    stopTour();
    if (!zones.length) return;
    tour = { i: 0, step: 0, timer: null, silent: !!opts.silent, loop: !!opts.loop };
    $('#room').classList.add('touring');
    const b = $('#tourBtn');
    b.classList.add('on'); b.textContent = '■ Dừng tham quan';
    tourStep();
  }
  function stopTour() {
    if (!tour) return;
    clearTimeout(tour.timer);
    tour = null;
    KG.stopSpeak();
    $('#room').classList.remove('touring');
    const b = $('#tourBtn');
    b.classList.remove('on'); b.textContent = '▶ Tham quan tự động';
    const cap = $('.tour-caption'); if (cap) cap.remove();
  }
  function tourStep() {
    const t = tour;
    if (!t) return;
    if (t.i >= zones.length) {
      if (!t.loop) { stopTour(); resetRoom(); return; }
      t.i = 0;
    }
    const i = t.i++;
    const step = ++t.step;
    const z = zones[i];
    selectZone(i, true, true);
    let cap = $('.tour-caption');
    if (cap) cap.remove();
    cap = document.createElement('div');
    cap.className = 'tour-caption';
    cap.textContent = 'Khu vực ' + (i + 1) + ': ' + z.name;
    $('.museum-stage-wrap').appendChild(cap);
    const text = 'Khu vực ' + (i + 1) + '. ' + z.name + '. ' + (z.description || '');
    const started = Date.now();
    // Chỉ sang khu tiếp theo một lần cho mỗi bước (đọc xong hoặc hết giờ dự phòng),
    // và dừng ở mỗi khu tối thiểu 7 giây để người xem kịp quan sát
    const next = () => {
      if (tour !== t || t.step !== step || t.moved === step) return;
      t.moved = step;
      clearTimeout(t.timer);
      t.timer = setTimeout(tourStep, Math.max(1500, 7000 - (Date.now() - started)));
    };
    if (!t.silent && KG.speak(text, next)) t.timer = setTimeout(next, 6000 + text.length * 110);
    else t.timer = setTimeout(next, Math.max(6500, text.length * 40));
  }

  function resetRoom() {
    view3d.rx = -14; view3d.ry = -18; view3d.zoom = 1;
    applyRoom();
  }

  // ================================================================== TAB 2: SÁCH ONLINE
  let bookFilter = 'Tất cả';
  function renderBooks() {
    const books = visible(DATA.books);
    const cats = ['Tất cả'].concat([...new Set(books.map(b => b.category).filter(Boolean))]);
    $('#bookFilters').innerHTML = cats.length > 2 ? cats.map(c =>
      `<button type="button" class="chip${c === bookFilter ? ' active' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('') : '';
    $$('#bookFilters [data-cat]').forEach(b => b.onclick = () => { bookFilter = b.dataset.cat; renderBooks(); });

    const shown = books.filter(b => bookFilter === 'Tất cả' || b.category === bookFilter);
    $('#bookshelf').innerHTML = shown.length ? shown.map(b => {
      const cover = safeUrl(b.cover);
      return `<button type="button" class="book" data-book="${esc(b.id)}">
        <div class="book-cover">${cover ? `<img src="${esc(cover)}" alt="" loading="lazy">` :
          `<div class="book-cover-text"><span class="star">★</span><strong>${esc(b.title)}</strong><span>${esc(b.author || '')}</span></div>`}</div>
        <div class="book-meta"><strong>${esc(b.title)}</strong>
          <span>${esc([b.author, b.year].filter(Boolean).join(' • '))}</span>
          ${b.category ? `<div><span class="badge">${esc(b.category)}</span></div>` : ''}</div>
      </button>`;
    }).join('') : '<div class="empty">Chưa có sách nào trong mục này.</div>';
    $$('#bookshelf [data-book]').forEach(b => b.onclick = () => openBook(b.dataset.book));
  }

  function openBook(id) {
    const b = visible(DATA.books).find(x => x.id === id);
    if (!b) return;
    const file = safeUrl(b.file);
    if (b.type === 'pdf' && file) {
      openModal(b.title, `<iframe class="pdf-frame" src="${esc(file)}#view=FitH" title="${esc(b.title)}"></iframe>`);
      return;
    }
    // Danh sách trang: bìa + trang chữ hoặc trang ảnh quét
    const pages = [{ cover: true }];
    if (b.type === 'images') (b.pageImages || []).forEach(u => pages.push({ img: safeUrl(u) }));
    else (b.pages || []).forEach(p => pages.push(p));
    pages.push({ end: true });

    openModal(b.title, `<div class="reader">
        <div class="spread" id="spread"></div>
        <div class="reader-nav">
          <button type="button" class="btn-secondary" id="pgPrev">◀ Trang trước</button>
          <span class="count" id="pgCount"></span>
          ${b.type !== 'images' ? '<button type="button" class="btn-secondary" id="pgSpeak">🔊 Đọc trang</button>' : ''}
          ${file ? `<a class="btn-secondary" href="${esc(file)}" target="_blank" rel="noopener">Mở bản PDF</a>` : ''}
          <button type="button" class="btn-primary" id="pgNext">Trang sau ▶</button>
        </div>
      </div>`);

    let idx = 0;
    const isSingle = () => $('#modalBody').clientWidth < 860;
    const step = () => (isSingle() ? 1 : 2);
    const pageHtml = (p, n, side) => {
      if (!p) return `<div class="page ${side} blank"></div>`;
      if (p.cover) return `<div class="page ${side} cover-page"><span style="font-size:2rem">★</span><h4>${esc(b.title)}</h4><p>${esc(b.author || '')}${b.year ? ' • ' + esc(b.year) : ''}</p><p style="font-family:var(--font-sans);font-size:.95rem">${esc(b.summary || '')}</p></div>`;
      if (p.end) return `<div class="page ${side}"><h4>Nguồn tư liệu</h4><p>${esc(b.source || 'Đang cập nhật.')}</p><div class="pno">Hết</div></div>`;
      if (p.img !== undefined) return `<div class="page ${side} img-page">${p.img ? `<img src="${esc(p.img)}" alt="Trang ${n}">` : ''}</div>`;
      return `<div class="page ${side}"><h4>${esc(p.heading || '')}</h4>${paragraphs(p.body)}<div class="pno">${n}</div></div>`;
    };
    const draw = dir => {
      const sp = $('#spread');
      if (!sp) return;
      const single = isSingle();
      if (!single && idx % 2) idx--;
      sp.className = 'spread' + (single ? ' single' : '') + (dir ? ' turn-' + dir : '');
      sp.innerHTML = single ? pageHtml(pages[idx], idx, '') : pageHtml(pages[idx], idx, 'left') + pageHtml(pages[idx + 1], idx + 1, 'right');
      const last = Math.min(pages.length, idx + step());
      $('#pgCount').textContent = single ? `${idx + 1} / ${pages.length}` : `${idx + 1}–${last} / ${pages.length}`;
      $('#pgPrev').disabled = idx === 0;
      $('#pgNext').disabled = idx + step() >= pages.length;
    };
    const go = d => {
      const n = idx + d * step();
      if (n < 0 || n >= pages.length) return;
      KG.stopSpeak();
      idx = n; draw(d > 0 ? 'next' : 'prev');
    };
    $('#pgPrev').onclick = () => go(-1);
    $('#pgNext').onclick = () => go(1);
    const sp = $('#pgSpeak');
    if (sp) sp.onclick = () => {
      const txt = pages.slice(idx, idx + step()).filter(p => p && p.body).map(p => (p.heading || '') + '. ' + p.body).join(' ');
      if (!txt) return;
      if (!KG.speak(txt)) alert('Thiết bị này chưa hỗ trợ đọc tiếng Việt.');
    };
    // Vuốt để lật trang
    let sx = null;
    const spread = $('#spread');
    spread.addEventListener('pointerdown', e => { sx = e.clientX; });
    spread.addEventListener('pointerup', e => {
      if (sx === null) return;
      const dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    });
    modalKeyHandler = e => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
    modalResizeHandler = () => draw();
    draw();
  }

  // ================================================================== TAB 3: BÀI VIẾT
  function renderArticles() {
    const list = visible(DATA.articles);
    $('#articleGrid').innerHTML = list.length ? list.map(a => `
      <button type="button" class="article-card" data-article="${esc(a.id)}">
        <h3>${esc(a.title)}</h3>
        <span class="by">${esc(a.name)}${a.className ? ' – ' + esc(a.className) : ''}${a.date ? ' • ' + esc(a.date) : ''}</span>
        <span class="excerpt">${esc(a.content)}</span>
      </button>`).join('')
      : '<div class="empty">Chưa có bài viết nào được đăng.<br>Hãy là người đầu tiên gửi bài cảm nhận về Bác!</div>';
    $$('#articleGrid [data-article]').forEach(c => c.onclick = () => {
      const a = list.find(x => x.id === c.dataset.article);
      openModal(a.title, `<div class="article-full"><div class="by">${esc(a.name)}${a.className ? ' – ' + esc(a.className) : ''}${a.date ? ' • ' + esc(a.date) : ''}</div>${paragraphs(a.content)}</div>`);
    });
  }

  function setupSubmitForm() {
    if (DATA.settings.allowSubmissions === false) { $('#submitCard').hidden = true; return; }
    const form = $('#submitForm'), msg = $('#submitMsg');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const f = new FormData(form);
      if (f.get('website')) return; // bẫy chống máy tự động gửi
      const art = {
        name: String(f.get('name') || '').trim(),
        className: String(f.get('className') || '').trim(),
        title: String(f.get('title') || '').trim(),
        content: String(f.get('content') || '').trim()
      };
      if (art.content.length < 50) { msg.className = 'form-msg err'; msg.textContent = 'Nội dung bài viết cần tối thiểu 50 ký tự.'; return; }
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      msg.className = 'form-msg'; msg.textContent = 'Đang gửi…';
      try {
        const where = await KG.submitArticle(art);
        form.reset();
        msg.className = 'form-msg ok';
        msg.textContent = where === 'server'
          ? 'Cảm ơn bạn! Bài viết đã được gửi tới Ban biên tập và sẽ được đăng sau khi duyệt.'
          : 'Cảm ơn bạn! (Bản thử nghiệm: bài được lưu trên máy này để minh họa quy trình duyệt bài.)';
      } catch (err) {
        msg.className = 'form-msg err'; msg.textContent = err.message;
      } finally {
        btn.disabled = false;
      }
    });
  }

  // ================================================================== TAB 4: TRẮC NGHIỆM
  let quiz = null;
  function renderQuizStart() {
    const bank = visible(DATA.quiz).filter(q => Array.isArray(q.options) && q.options.filter(Boolean).length >= 2);
    const n = Math.min(bank.length, Math.max(1, +DATA.settings.quizQuestionCount || 10));
    if (!bank.length) { $('#quizCard').innerHTML = '<div class="empty">Ngân hàng câu hỏi đang được cập nhật.</div>'; return; }
    $('#quizCard').innerHTML = `<div class="quiz-start">
        <span class="tile-icon" aria-hidden="true"><svg viewBox="0 0 64 64"><polygon points="32,6 39,25 59,25 43,37 49,57 32,45 15,57 21,37 5,25 25,25"/></svg></span>
        <h3 class="quiz-q" style="margin:0">Bài trắc nghiệm gồm ${n} câu hỏi</h3>
        <p class="muted" style="margin:0">Câu hỏi được chọn ngẫu nhiên từ ngân hàng ${bank.length} câu. Nhập họ tên để ghi trên chứng nhận (không bắt buộc).</p>
        <input id="quizName" maxlength="60" placeholder="Họ và tên của bạn" autocomplete="off">
        <button type="button" class="btn-primary" id="quizStart">Bắt đầu làm bài</button>
      </div>`;
    $('#quizStart').onclick = () => {
      // Xáo trộn câu hỏi và thứ tự đáp án
      const qs = shuffle(bank).slice(0, n).map(q => {
        const opts = q.options.map((t, k) => ({ t, ok: k === +q.answer })).filter(o => o.t);
        return { q: q.question, opts: shuffle(opts), explanation: q.explanation };
      });
      quiz = { name: $('#quizName').value.trim(), qs, i: 0, score: 0, answered: false };
      renderQuizStep();
    };
  }
  function renderQuizStep() {
    const q = quiz.qs[quiz.i];
    const total = quiz.qs.length;
    $('#quizCard').innerHTML = `
      <div class="quiz-meta"><span>Câu ${quiz.i + 1} / ${total}</span><span>Điểm: ${quiz.score}</span></div>
      <div class="quiz-progress"><span style="width:${(quiz.i / total) * 100}%"></span></div>
      <h3 class="quiz-q">${esc(q.q)}</h3>
      <div class="quiz-options">${q.opts.map((o, k) =>
        `<button type="button" class="quiz-opt" data-k="${k}"><span class="k">${'ABCDEF'[k]}</span><span>${esc(o.t)}</span></button>`).join('')}</div>
      <div id="quizAfter"></div>`;
    $$('.quiz-opt').forEach(b => b.onclick = () => {
      if (quiz.answered) return;
      quiz.answered = true;
      const k = +b.dataset.k;
      const right = q.opts[k].ok;
      if (right) quiz.score++;
      $$('.quiz-opt').forEach(x => {
        x.disabled = true;
        if (q.opts[+x.dataset.k].ok) x.classList.add('correct');
      });
      if (!right) b.classList.add('wrong');
      const last = quiz.i === total - 1;
      $('#quizAfter').innerHTML = `
        <div class="quiz-explain"><strong>${right ? '✔ Chính xác!' : '✘ Chưa chính xác.'}</strong> ${esc(q.explanation || '')}</div>
        <div class="quiz-foot"><button type="button" class="btn-primary" id="quizNext">${last ? 'Xem kết quả' : 'Câu tiếp theo ▶'}</button></div>`;
      $('#quizNext').onclick = () => {
        quiz.answered = false;
        if (last) renderQuizResult(); else { quiz.i++; renderQuizStep(); }
      };
    });
  }
  function renderQuizResult() {
    const total = quiz.qs.length;
    const s = DATA.settings;
    const kiosk = document.body.classList.contains('kiosk');
    $('#quizCard').innerHTML = `
      <div class="certificate">
        <div class="cert-unit">${esc([s.unitName, s.partnerName].filter(Boolean).join(' • '))}</div>
        <h3>Chứng nhận hoàn thành</h3>
        <div>Bài trắc nghiệm tìm hiểu về Chủ tịch Hồ Chí Minh</div>
        <div class="cert-name">${esc(quiz.name || 'Bạn tham gia')}</div>
        <div class="cert-score">Kết quả: <strong>${quiz.score}/${total}</strong> câu trả lời đúng</div>
        <div class="muted">Ngày ${esc(KG.todayVN())}</div>
        <p style="font-family:var(--font-serif);font-style:italic;color:var(--red-700);margin-top:1rem">
          ${quiz.score === total ? 'Xuất sắc! Hãy tiếp tục học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.' :
            quiz.score >= total * 0.7 ? 'Rất tốt! Hãy tiếp tục tìm hiểu thêm về cuộc đời và sự nghiệp của Bác.' :
            'Hãy đọc thêm tư liệu ở mục Sách online và thử lại nhé!'}
        </p>
        <div class="cert-actions">
          <button type="button" class="btn-primary" id="quizAgain">Làm lại</button>
          ${kiosk ? '' : '<button type="button" class="btn-secondary" id="quizPrint">In chứng nhận</button>'}
          <a class="btn-secondary" href="#/sach-online">Đọc Sách online</a>
        </div>
      </div>`;
    $('#quizAgain').onclick = renderQuizStart;
    const p = $('#quizPrint');
    if (p) p.onclick = () => window.print();
  }

  // ================================================================== HỘP THOẠI
  let modalKeyHandler = null, modalResizeHandler = null;
  function openModal(title, html) {
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = html;
    $('#modal').hidden = false;
    document.body.style.overflow = 'hidden';
    $('#modalClose').focus();
  }
  function closeModal() {
    if ($('#modal').hidden) return;
    $('#modal').hidden = true;
    $('#modalBody').innerHTML = '';
    document.body.style.overflow = '';
    modalKeyHandler = null; modalResizeHandler = null;
    KG.stopSpeak();
  }
  function setupModal() {
    $('#modalClose').onclick = closeModal;
    $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
    document.addEventListener('keydown', e => {
      if ($('#modal').hidden) return;
      if (e.key === 'Escape') closeModal();
      else if (modalKeyHandler) modalKeyHandler(e);
    });
    window.addEventListener('resize', () => { if (modalResizeHandler) modalResizeHandler(); });
  }

  // ================================================================== CHẾ ĐỘ KIOSK
  let KIOSK = false, idleTimer = null;
  const idleMs = () => Math.max(30, +((DATA && DATA.settings.kioskIdleSeconds) || 120)) * 1000;
  const bump = () => { clearTimeout(idleTimer); if (KIOSK && $('#attract').hidden) idleTimer = setTimeout(goIdle, idleMs()); };

  // Không có người dùng: về mô hình 3D, tự tham quan (không đọc) và hiện màn hình chờ có mã QR
  function goIdle() {
    closeModal();
    const form = $('#submitForm'); if (form) form.reset();
    if (DATA) renderQuizStart();
    $('#intro').hidden = true;
    $('#attract').hidden = false;
    if (location.hash !== '#/mo-hinh-3d') location.hash = '#/mo-hinh-3d';
    setTimeout(() => { route(); resetRoom(); startTour({ silent: true, loop: true }); }, 80);
  }

  function setupKiosk() {
    if (params.get('kiosk') === '1') localStorage.setItem('kgvh_kiosk', '1');
    if (params.get('kiosk') === '0') localStorage.removeItem('kgvh_kiosk');
    if (localStorage.getItem('kgvh_kiosk') !== '1') return;
    KIOSK = true;

    document.body.classList.add('kiosk');
    document.addEventListener('contextmenu', e => e.preventDefault());
    const fs = $('#btnFullscreen');
    if (document.documentElement.requestFullscreen) {
      fs.hidden = false;
      fs.onclick = () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(() => {});
      };
    }
    // Không để liên kết ngoài mở tab mới trên màn hình cảm ứng
    document.addEventListener('click', e => {
      const a = e.target.closest('a[target=_blank]');
      if (a) { e.preventDefault(); }
    }, true);

    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(ev => document.addEventListener(ev, bump, { passive: true }));
    $('#attract').addEventListener('click', () => {
      $('#attract').hidden = true;
      stopTour();
      resetRoom();
      location.hash = '#/trang-chu';
      bump();
    });
  }
})();
