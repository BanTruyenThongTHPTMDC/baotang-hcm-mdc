# Triển khai lên máy chủ trường

*Dành cho bộ phận kỹ thuật, Ban Truyền thông.*

## Yêu cầu

- Máy chủ web chạy **PHP 7.4 trở lên**, ví dụ Apache, Nginx + PHP-FPM, XAMPP hoặc Laragon. Cần có các phần mở rộng `fileinfo`, `json`, `mbstring` (thường đã bật sẵn).
- Không cần cơ sở dữ liệu. Toàn bộ nội dung nằm trong tệp `data/noi-dung.json`.

## Cài đặt

1. Sao chép toàn bộ thư mục dự án vào thư mục web, ví dụ `/var/www/kgvh` hoặc `C:\xampp\htdocs\kgvh`.
2. Cấp quyền ghi cho tài khoản chạy web server (ví dụ `www-data`) trên 3 thư mục:
   - `data/` (ghi `noi-dung.json`);
   - `uploads/` (ảnh, PDF tải lên);
   - `api/private/` (mật khẩu đã băm, bài chờ duyệt, bản sao lưu, bộ đếm chống dò mật khẩu).

   ```bash
   chown -R www-data:www-data data uploads api/private
   chmod -R 750 api/private
   ```
3. Tạo **mã cài đặt dùng một lần**. Mã này được xóa ngay sau khi đặt mật khẩu lần đầu.
   ```bash
   openssl rand -hex 8 > api/private/ma-cai-dat.txt
   cat api/private/ma-cai-dat.txt   # đưa mã này cho người quản trị
   ```
4. Người quản trị mở `/admin.html`, nhập mã cài đặt và đặt mật khẩu (tối thiểu 8 ký tự).
5. Tăng giới hạn tải tệp trong `php.ini` để tải được PDF lớn:
   ```ini
   upload_max_filesize = 64M
   post_max_size = 64M
   ```

## Bảo mật

- **Apache**: các tệp `.htaccess` có sẵn đã làm 3 việc:
  - chặn truy cập vào `api/private/` và `api/_chung.php`;
  - tắt chạy mã trong `uploads/`;
  - tắt liệt kê thư mục.

  Cần `AllowOverride All` cho thư mục dự án.
- **Nginx** không đọc `.htaccess`. Hãy thêm vào cấu hình:
  ```nginx
  location ^~ /api/private/ { deny all; }
  location = /api/_chung.php { deny all; }
  location ^~ /uploads/ { location ~ \.php$ { deny all; } }
  ```
- Kiểm tra: mở `http://<máy-chủ>/api/private/cau-hinh.json`. Kết quả **phải** là lỗi 403 hoặc 404.
- Nên dùng HTTPS nếu trang được truy cập từ ngoài mạng trường.
- Bài viết chờ duyệt có chứa họ tên, lớp của người gửi. Dữ liệu này chỉ nằm trong `api/private/` và chỉ người quản trị xem được.

## Màn hình cảm ứng (kiosk)

- Mở trình duyệt ở chế độ toàn màn hình với địa chỉ `http://<máy-chủ>/index.html?kiosk=1`, ví dụ:
  - Chrome: `chrome --kiosk "http://<máy-chủ>/index.html?kiosk=1"`
  - Edge trên Windows: dùng chế độ *Assigned access / Kiosk mode*.
- Chế độ kiosk được nhớ trên máy đó. Muốn tắt, mở với `?kiosk=0`.
- Phông chữ được tải từ Google Fonts. Nếu màn hình không có Internet, trang tự dùng phông hệ thống, vẫn hiển thị đầy đủ tiếng Việt.
- Đọc thuyết minh (nút 🔊) cần máy có giọng đọc tiếng Việt:
  - Windows: *Settings → Time & Language → Speech*, cài gói tiếng Việt.
  - Chrome trên Android: thường có sẵn.

## Sao lưu

- Mỗi lần lưu, máy chủ tự sao lưu bản cũ vào `api/private/sao-luu/`, giữ 60 bản gần nhất. Người quản trị khôi phục được ở mục *Sao lưu & xuất bản*.
- Nên sao lưu định kỳ thêm cả thư mục `data/` và `uploads/` ra ổ đĩa khác.

## Bản trình diễn trên GitHub Pages

GitHub Pages không chạy PHP, nên hệ thống tự chuyển sang **chế độ trình diễn**:

- trang quản trị lưu bản nháp trên trình duyệt;
- nút *Xem trang* hiển thị bản nháp (`index.html?xemtruoc=1`);
- muốn cập nhật trang chính thức thì tải tệp `noi-dung.json` lên thư mục `data/` của kho mã.

Các tệp `api/*.php` vẫn hiện được trên GitHub nhưng không chứa bí mật. Mật khẩu chỉ nằm trong `api/private/` trên máy chủ trường và không đưa lên GitHub (xem `.gitignore`).
