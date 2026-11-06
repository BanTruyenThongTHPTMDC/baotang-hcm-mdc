<?php
// Người xem gửi bài cảm nhận -> vào hàng chờ duyệt (không hiển thị cho tới khi được duyệt)
require __DIR__ . '/_chung.php';
require_post();
$site = read_json_file(DATA_FILE, []);
if (isset($site['settings']['allowSubmissions']) && $site['settings']['allowSubmissions'] === false) {
    fail('Chức năng gửi bài đang tạm dừng.', 403);
}
rate_limit('gui-bai', 5, 3600); // tối đa 5 bài / giờ / máy
$in = read_body_json(65536);
$item = [
    'id' => 'bv-' . date('YmdHis') . '-' . bin2hex(random_bytes(3)),
    'name' => clean_text($in['name'] ?? '', 80),
    'className' => clean_text($in['className'] ?? '', 80),
    'title' => clean_text($in['title'] ?? '', 160),
    'content' => clean_text($in['content'] ?? '', 8000),
    'date' => date('d/m/Y'),
];
if (text_len($item['name']) < 2 || text_len($item['title']) < 3) {
    fail('Vui lòng nhập họ tên và tiêu đề bài viết.');
}
if (text_len($item['content']) < 50) {
    fail('Nội dung bài viết cần tối thiểu 50 ký tự.');
}
ensure_private_dirs();
$fp = fopen(PENDING_FILE, 'c+');
if (!$fp) {
    fail('Máy chủ chưa cấp quyền ghi cho thư mục api/private.', 500);
}
flock($fp, LOCK_EX);
$list = json_decode((string)stream_get_contents($fp), true);
if (!is_array($list)) {
    $list = [];
}
if (count($list) >= 500) {
    flock($fp, LOCK_UN);
    fclose($fp);
    fail('Hàng chờ duyệt đang đầy, vui lòng gửi lại sau.', 503);
}
array_unshift($list, $item);
ftruncate($fp, 0);
rewind($fp);
fwrite($fp, json_encode($list, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
flock($fp, LOCK_UN);
fclose($fp);
out(['ok' => true]);
