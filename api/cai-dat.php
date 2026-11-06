<?php
// Đặt mật khẩu quản trị lần đầu. Cần "mã cài đặt" do bộ phận kỹ thuật tạo
// trong tệp api/private/ma-cai-dat.txt (xem docs/TRIEN-KHAI-MAY-CHU.md).
require __DIR__ . '/_chung.php';
require_post();
rate_limit('cai-dat', 10, 900);
$cfg = config();
if (!empty($cfg['passwordHash'])) {
    fail('Hệ thống đã được cài đặt mật khẩu.', 403);
}
$code = is_file(SETUP_CODE_FILE) ? trim((string)file_get_contents(SETUP_CODE_FILE)) : '';
if (strlen($code) < 8) {
    fail('Chưa có mã cài đặt trên máy chủ. Liên hệ bộ phận kỹ thuật.', 403);
}
$in = read_body_json();
if (!hash_equals($code, (string)($in['code'] ?? ''))) {
    fail('Mã cài đặt không đúng.', 403);
}
$pass = (string)($in['password'] ?? '');
if (strlen($pass) < 8) {
    fail('Mật khẩu cần tối thiểu 8 ký tự.');
}
$cfg['passwordHash'] = password_hash($pass, PASSWORD_DEFAULT);
ensure_private_dirs();
write_json_file(CONFIG_FILE, $cfg);
@unlink(SETUP_CODE_FILE); // mã chỉ dùng một lần
session_regenerate_id(true);
$_SESSION['admin'] = true;
$_SESSION['seen'] = time();
out(['ok' => true]);
