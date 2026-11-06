# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A digitized "Không gian văn hóa Hồ Chí Minh" (Ho Chi Minh cultural space) built by THPT Mạc Đĩnh Chi high school for Phú Lâm ward, HCMC. It runs on touch-screen kiosks at the school and is also accessed remotely. The administrators are Party committee teachers who are not technical, so the admin UI must stay simple: big buttons, plain Vietnamese, and saving immediately on every action.

All UI text, code comments, docs and commit messages are in Vietnamese. Keep that convention.

**The content is political.** Never invent quotes, anecdotes, dates or people. Every quote, book, zone and quiz item carries a `source` and a `verified` flag. New seeded content must stay `verified: false` until the Cấp ủy checks it against the original (e.g. Hồ Chí Minh Toàn tập). [docs/DOI-CHIEU-NOI-DUNG.md](docs/DOI-CHIEU-NOI-DUNG.md) lists what was removed from the earlier version and why.

## Running

There is no build step, no dependencies and no test suite. It is plain HTML, CSS and vanilla JS (Google Fonts is optional and falls back to system fonts).

```
python3 -m http.server 8000   # http://localhost:8000/ and /admin.html
```

- `fetch` of the data file fails over `file://`, so always use an HTTP server.
- The repo lives in a Google Drive path with spaces and Vietnamese characters. Quote it in shell commands.
- Verify JS with `node --check assets/js/*.js`.
- PHP is not installed locally, so the `api/` endpoints have never been executed.

## Architecture

### Single content file

`data/noi-dung.json` holds everything: `settings`, `quotes`, `zones`, `books`, `articles` and `quiz`. Both pages render from it. Visibility rules:
- items with `visible: false` are hidden;
- when `settings.onlyVerified` is set, items with `verified: false` are also hidden. Articles have no `verified` flag.

### Two storage modes

`KG.detectMode()` in `assets/js/common.js` picks the mode by fetching `api/trang-thai.php`:

- **server** (school server with PHP): admin saves POST the whole JSON to `api/luu.php`, which backs up the old file into `api/private/sao-luu/` and writes atomically. Images and PDFs upload to `uploads/YYYY/MM/`. Visitor submissions go to `api/private/cho-duyet.json` and wait for moderation.
- **static** (GitHub Pages or no PHP): GitHub serves the PHP source, so the JSON parse fails and the mode falls back to static. Admin edits go to `localStorage` (key `kgvh_hcm_ban_nhap_v1`), and images are stored as compressed data URLs. `index.html?xemtruoc=1` previews that draft. Publishing means downloading `noi-dung.json` and committing it to `data/`. Visitor submissions also go to `localStorage` so the moderation flow can be demoed on one machine.

### Pages

- **`index.html` + `assets/js/site.js`**: a hash-routed SPA with a home page and 4 tabs (`#/mo-hinh-3d`, `#/sach-online`, `#/bai-viet`, `#/trac-nghiem`).
  - The 3D museum is pure CSS 3D: a box room with walls and a floor. Zone `position` (`back`/`left`/`right`/`center`/`front`) decides where each zone's frame goes. The `ROOM` constants in JS must match the CSS `--W/--D/--H`.
  - The auto tour (`startTour`) rotates to each zone and narrates with the Web Speech API. It only speaks if a `vi` voice exists.
  - Kiosk mode is enabled with `?kiosk=1` and remembered in `localStorage`. When idle, it shows the attract overlay and runs a silent looping tour.
- **`admin.html` + `assets/js/admin.js`**: a schema-driven editor. Each collection in `COLLECTIONS` declares its `fields` (types: `text`, `textarea`, `select`, `image`, `images`, `pdf`, `pages`, `options`, `bookRef`, `category`, `toggle`, `verify`). `drawForm` renders them generically, and every Save calls `persist()` immediately. To add a content field, add it to the schema and render it in `site.js`.
- **`assets/js/qr.js`**: a self-contained QR encoder (byte mode, ECC M). It was verified by decoding its output with OpenCV.

### PHP API (`api/`, PHP ≥ 7.4)

- `_chung.php` holds the shared helpers: session, `require_post` (requires the `X-KGVH: 1` header as CSRF protection), `require_admin`, atomic JSON writes, and file-based rate limiting.
- The password hash lives in `api/private/cau-hinh.json`. First-time setup needs a one-time code in `api/private/ma-cai-dat.txt`.
- `api/private/` is git-ignored and protected by `.htaccess`. For Nginx, see [docs/TRIEN-KHAI-MAY-CHU.md](docs/TRIEN-KHAI-MAY-CHU.md).

## Deployment

GitHub Pages serves the `main` branch root of `BanTruyenThongTHPTMDC/baotang-hcm-mdc` at https://bantruyenthongthptmdc.github.io/baotang-hcm-mdc/ in static/demo mode.
