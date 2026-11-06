# Không gian văn hóa Hồ Chí Minh – Trường THPT Mạc Đĩnh Chi & Phường Phú Lâm

Trang số hóa Không gian văn hóa Hồ Chí Minh, gồm 4 chuyên mục:

1. Mô hình bảo tàng 3D (có tham quan tự động kèm thuyết minh)
2. Sách online
3. Bài viết cảm nhận về Bác
4. Trắc nghiệm tìm hiểu về Bác

Dùng được trên màn hình cảm ứng tại trường (`index.html?kiosk=1`) và truy cập từ xa (có mã QR).

- **Trang công chúng**: `index.html`
- **Trang quản trị**: `admin.html`
- **Nội dung**: `data/noi-dung.json`, sửa qua trang quản trị

## Tài liệu

- [Hướng dẫn quản trị](docs/HUONG-DAN-QUAN-TRI.md) – cho thầy cô Cấp ủy, Ban biên tập
- [Bảng đối chiếu nội dung](docs/DOI-CHIEU-NOI-DUNG.md) – các mục cần đối chiếu nguồn trước khi chính thức sử dụng
- [Triển khai máy chủ trường](docs/TRIEN-KHAI-MAY-CHU.md) – cho bộ phận kỹ thuật

## Chạy thử trên máy

```bash
python3 -m http.server 8000
# mở http://localhost:8000/
```

Khi chạy không có PHP (máy cá nhân, GitHub Pages), hệ thống ở **chế độ trình diễn**: trang quản trị lưu bản nháp trên trình duyệt.
