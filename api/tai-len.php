<?php
// Tải ảnh (JPG, PNG, WEBP) hoặc tệp PDF lên thư mục uploads/năm/tháng/
require __DIR__ . '/_chung.php';
require_post();
require_admin();
$f = $_FILES['tep'] ?? null;
if (!$f || !is_array($f) || ($f['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
    $err = $f['error'] ?? UPLOAD_ERR_NO_FILE;
    if ($err === UPLOAD_ERR_INI_SIZE || $err === UPLOAD_ERR_FORM_SIZE) {
        fail('Tệp quá lớn so với giới hạn của máy chủ (upload_max_filesize).', 413);
    }
    fail('Không nhận được tệp tải lên.');
}
if ($f['size'] > MAX_UPLOAD_BYTES) {
    fail('Tệp quá lớn (tối đa ' . round(MAX_UPLOAD_BYTES / 1048576) . ' MB).', 413);
}
$allowed = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/webp' => 'webp',
    'application/pdf' => 'pdf',
];
$mime = '';
if (class_exists('finfo')) {
    $mime = (new finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name']);
}
if (!isset($allowed[$mime])) {
    fail('Chỉ nhận ảnh JPG, PNG, WEBP hoặc tệp PDF.', 415);
}
$sub = date('Y') . '/' . date('m');
$dir = UPLOAD_DIR . '/' . $sub;
if (!is_dir($dir) && !@mkdir($dir, 0755, true)) {
    fail('Máy chủ chưa cấp quyền ghi cho thư mục uploads.', 500);
}
$name = date('Ymd-His') . '-' . bin2hex(random_bytes(6)) . '.' . $allowed[$mime];
if (!move_uploaded_file($f['tmp_name'], $dir . '/' . $name)) {
    fail('Không lưu được tệp.', 500);
}
@chmod($dir . '/' . $name, 0644);
out(['ok' => true, 'url' => 'uploads/' . $sub . '/' . $name]);
