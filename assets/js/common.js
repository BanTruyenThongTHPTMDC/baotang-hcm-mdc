// ============================================================================
// THƯ VIỆN DÙNG CHUNG – KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH
// Dùng cho cả trang công chúng (index.html) và trang quản trị (admin.html).
//
// Hai chế độ lưu trữ:
//  - "server": chạy trên máy chủ trường có PHP (thư mục api/). Lưu là xuất bản ngay.
//  - "static": chạy trên GitHub Pages / mở tệp trực tiếp. Chỉ lưu bản nháp trên
//              trình duyệt (localStorage) và cho tải tệp data/noi-dung.json.
// ============================================================================
(function () {
  'use strict';

  const DRAFT_KEY = 'kgvh_hcm_ban_nhap_v1';
  const LOCAL_PENDING_KEY = 'kgvh_hcm_bai_cho_duyet_v1';
  const DATA_URL = 'data/noi-dung.json';

  // Cấu trúc rỗng chuẩn – bảo đảm các trang không lỗi khi thiếu mục dữ liệu
  const EMPTY = {
    version: 1,
    updatedAt: '',
    settings: {},
    quotes: [],
    zones: [],
    books: [],
    articles: [],
    quiz: []
  };

  function normalize(data) {
    const d = Object.assign({}, EMPTY, data || {});
    d.settings = Object.assign({}, d.settings || {});
    ['quotes', 'zones', 'books', 'articles', 'quiz'].forEach(k => {
      if (!Array.isArray(d[k])) d[k] = [];
    });
    return d;
  }

  // ---------------- Tiện ích hiển thị ----------------
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  // Văn bản nhiều dòng -> các đoạn <p>, có thoát ký tự an toàn
  function paragraphs(s) {
    return String(s || '').split(/\n{2,}/).map(p =>
      '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>').join('');
  }
  // Chỉ cho phép đường dẫn tương đối, http(s) hoặc ảnh data: để tránh chèn mã
  function safeUrl(u) {
    u = String(u || '').trim();
    if (!u) return '';
    if (/^data:image\//i.test(u)) return u;
    if (/^(https?:)?\/\//i.test(u)) return u;
    if (/^[a-z][a-z0-9+.-]*:/i.test(u)) return ''; // chặn javascript:, v.v.
    return u;
  }
  function uid(prefix) {
    return (prefix || 'id') + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }
  function todayVN() {
    const d = new Date();
    return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear();
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------------- Phát hiện chế độ máy chủ ----------------
  let modePromise = null;
  function detectMode() {
    if (modePromise) return modePromise;
    modePromise = (async () => {
      if (location.protocol === 'file:') return 'static';
      try {
        const r = await fetch('api/trang-thai.php', { cache: 'no-store', credentials: 'same-origin' });
        if (!r.ok) return 'static';
        const j = await r.json(); // GitHub Pages trả mã nguồn PHP -> lỗi JSON -> static
        return j && j.ok ? 'server' : 'static';
      } catch (e) {
        return 'static';
      }
    })();
    return modePromise;
  }

  // ---------------- Tải dữ liệu ----------------
  async function loadPublished() {
    try {
      const r = await fetch(DATA_URL + '?v=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return normalize(await r.json());
    } catch (e) {
      // Mở trực tiếp bằng file:// thì trình duyệt chặn fetch -> dùng bản nhúng nếu có
      if (window.KGVH_FALLBACK_DATA) return normalize(window.KGVH_FALLBACK_DATA);
      throw e;
    }
  }
  function loadDraft() {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      return raw ? normalize(JSON.parse(raw)) : null;
    } catch (e) { return null; }
  }
  function saveDraft(data) {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data)); // có thể ném QuotaExceededError
  }
  function clearDraft() { localStorage.removeItem(DRAFT_KEY); }

  // ---------------- Bài viết chờ duyệt ----------------
  function localPending() {
    try { return JSON.parse(localStorage.getItem(LOCAL_PENDING_KEY) || '[]'); } catch (e) { return []; }
  }
  function setLocalPending(list) { localStorage.setItem(LOCAL_PENDING_KEY, JSON.stringify(list)); }

  async function submitArticle(article) {
    const mode = await detectMode();
    if (mode === 'server') {
      const r = await fetch('api/gui-bai.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-KGVH': '1' },
        body: JSON.stringify(article)
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || 'Không gửi được bài, vui lòng thử lại.');
      return 'server';
    }
    const list = localPending();
    list.unshift(Object.assign({ id: uid('bv'), date: todayVN() }, article));
    setLocalPending(list);
    return 'static';
  }

  // ---------------- Nén ảnh trước khi lưu ----------------
  function compressImage(file, maxSize, quality) {
    maxSize = maxSize || 1600;
    quality = quality || 0.82;
    return new Promise((resolve, reject) => {
      if (!/^image\//.test(file.type)) return reject(new Error('Tệp được chọn không phải là ảnh.'));
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Không đọc được tệp ảnh.'));
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error('Ảnh bị lỗi hoặc định dạng không hỗ trợ.'));
        img.onload = () => {
          let w = img.naturalWidth, h = img.naturalHeight;
          const scale = Math.min(1, maxSize / Math.max(w, h));
          w = Math.round(w * scale); h = Math.round(h * scale);
          const c = document.createElement('canvas');
          c.width = w; c.height = h;
          const ctx = c.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          c.toBlob(b => b ? resolve(b) : reject(new Error('Không nén được ảnh.')), 'image/jpeg', quality);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }
  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(r.error);
      r.readAsDataURL(blob);
    });
  }

  // ---------------- Lời gọi API quản trị (chế độ máy chủ) ----------------
  async function api(path, opts) {
    opts = Object.assign({ credentials: 'same-origin', cache: 'no-store' }, opts || {});
    // Tiêu đề riêng: trình duyệt không cho trang web lạ gửi kèm -> chống giả mạo yêu cầu (CSRF)
    opts.headers = Object.assign({ 'X-KGVH': '1' }, opts.headers || {});
    const r = await fetch('api/' + path, opts);
    let j = {};
    try { j = await r.json(); } catch (e) { /* bỏ qua */ }
    if (r.status === 401) {
      const err = new Error(j.error || 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
      err.unauthorized = true;
      throw err;
    }
    if (!r.ok || j.ok === false) throw new Error(j.error || ('Lỗi máy chủ (' + r.status + ')'));
    return j;
  }
  function apiJson(path, body) {
    return api(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body || {}) });
  }

  // Tải tệp lên máy chủ (ảnh đã nén hoặc PDF) – trả về đường dẫn
  async function uploadFile(blob, filename) {
    const fd = new FormData();
    fd.append('tep', blob, filename);
    const j = await api('tai-len.php', { method: 'POST', body: fd });
    return j.url;
  }

  // ---------------- Đọc to (Web Speech API) ----------------
  // onend: gọi khi đọc xong (hoặc bị dừng/lỗi)
  function speak(text, onend) {
    if (!('speechSynthesis' in window)) return false;
    // Máy không có giọng tiếng Việt thì không đọc (tránh đọc tiếng Việt bằng giọng nước ngoài)
    const voices = window.speechSynthesis.getVoices();
    if (voices.length && !voices.some(v => /^vi/i.test(v.lang))) return false;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text || ''));
    if (onend) { u.onend = onend; u.onerror = onend; }
    u.lang = 'vi-VN';
    u.rate = 0.95;
    const vi = window.speechSynthesis.getVoices().find(v => /^vi/i.test(v.lang));
    if (vi) u.voice = vi;
    window.speechSynthesis.speak(u);
    return true;
  }
  function stopSpeak() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  window.KG = {
    DRAFT_KEY, normalize, esc, paragraphs, safeUrl, uid, todayVN, shuffle,
    detectMode, loadPublished, loadDraft, saveDraft, clearDraft,
    localPending, setLocalPending, submitArticle,
    compressImage, blobToDataUrl, api, apiJson, uploadFile,
    speak, stopSpeak
  };
})();
