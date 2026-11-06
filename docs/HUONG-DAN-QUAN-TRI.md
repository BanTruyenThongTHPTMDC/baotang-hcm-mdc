# Hướng dẫn quản trị Không gian văn hóa Hồ Chí Minh

*Dành cho thầy cô Cấp ủy và Ban biên tập. Không cần biết về công nghệ.*

## 1. Vào trang quản trị

Mở trình duyệt, gõ địa chỉ trang và thêm `/admin.html` ở cuối. Ví dụ:
`http://<địa-chỉ-máy-chủ-trường>/admin.html`

Nhập **mật khẩu quản trị**, bấm **Đăng nhập**. Đọc mục 7 về phiên bản trên GitHub.

## 2. Màn hình quản trị gồm gì

- **Cột bên trái** là các chuyên mục, trùng với 4 tab trên trang:
  1. Mô hình bảo tàng 3D (các khu vực trưng bày)
  2. Sách online
  3. Bài viết cảm nhận (gồm cả bài **chờ duyệt**)
  4. Trắc nghiệm

  Ngoài ra còn *Thông tin chung*, *Lời Bác dạy*, *Sao lưu & xuất bản* và *Hướng dẫn sử dụng*.
- **Góc trên bên phải**:
  - Dòng chữ **"Đã lưu …"** cho biết nội dung đã được lưu.
  - Nút **👁 Xem trang** mở trang để kiểm tra.

## 3. Sửa, thêm, ẩn, xóa

| Muốn làm gì | Bấm nút |
|---|---|
| Sửa một mục | **✏ Sửa**, sửa nội dung, rồi bấm **💾 Lưu** ở cuối |
| Thêm mục mới | **＋ Thêm** ở góc trên, điền nội dung, rồi bấm **💾 Lưu** |
| Tạm không cho người xem thấy | **Ẩn** (bấm **Hiện** để hiện lại) |
| Đổi thứ tự | **▲** / **▼** |
| Bỏ hẳn | **Xóa** (hệ thống sẽ hỏi lại cho chắc chắn) |

Bấm **💾 Lưu** là xong, không cần thao tác gì thêm.

## 4. Kiểm soát nội dung chính trị (quan trọng)

- Mỗi mục có ô **"Đã đối chiếu nguồn"**. Chỉ đánh dấu sau khi đã so từng chữ với văn bản gốc, ví dụ: *Hồ Chí Minh Toàn tập* (NXB Chính trị quốc gia Sự thật, 2011), tài liệu của Bảo tàng Hồ Chí Minh, văn bản của Đảng và Nhà nước.
- Ô **"Nguồn"** phải ghi rõ: tên tài liệu, tập, nhà xuất bản, năm, số trang.
- Mục chưa đối chiếu có nhãn vàng **"Chưa đối chiếu"**. Màn hình *Tổng quan* đếm sẵn số mục này.
- Khi chính thức đưa vào sử dụng, vào **Thông tin chung** và bật **"Chỉ hiển thị nội dung đã đối chiếu nguồn"**. Từ đó, mục nào chưa được xác nhận sẽ tự ẩn khỏi trang.

## 5. Duyệt bài viết cảm nhận

1. Vào **3. Bài viết cảm nhận**. Bài mới nằm ở khung **"Bài chờ duyệt"**.
2. Bấm **Xem toàn bài** để đọc kỹ.
3. Bấm **✔ Duyệt và đăng** để bài hiện lên trang. Nếu không đăng, bấm **✘ Không duyệt**.
4. Bài đã đăng vẫn sửa được (ví dụ sửa lỗi chính tả) bằng nút **✏ Sửa**.

## 6. Ảnh và sách số hóa

- **Ảnh**: bấm **📷 Chọn ảnh từ máy**. Ảnh được tự động thu nhỏ, không cần chỉnh sửa trước.
- **Sách** có 3 hình thức:
  - *Sách chữ*: gõ hoặc dán nội dung từng trang.
  - *Sách ảnh*: chọn cùng lúc nhiều ảnh scan. Ảnh được xếp theo tên tệp, nên đặt tên tệp là 001, 002… cho đúng thứ tự.
  - *Tệp PDF*: tải lên tệp do bộ phận số hóa cung cấp.

## 7. Bản trình diễn trên GitHub

Khi chưa đặt trên máy chủ trường, trang quản trị hiện dải vàng **"Chế độ trình diễn"**:

- Không cần đăng nhập. Mọi thay đổi **chỉ lưu trên máy tính đang dùng**.
- Nút **👁 Xem trang** cho thấy kết quả trên chính máy đó.
- Muốn mọi người cùng thấy: vào **Sao lưu & xuất bản**, tải tệp `noi-dung.json`, rồi gửi Ban Truyền thông để cập nhật.

## 8. Màn hình cảm ứng

Mở trang với địa chỉ kết thúc bằng `index.html?kiosk=1`. Chế độ này có:

- chữ và nút to hơn;
- màn hình chờ "Chạm vào màn hình để bắt đầu";
- tự quay về trang chủ khi không có người dùng. Thời gian chờ chỉnh được ở *Thông tin chung*.

Muốn tắt, mở lại trang với `?kiosk=0`.
