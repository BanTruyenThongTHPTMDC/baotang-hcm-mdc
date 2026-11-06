<?php
// Danh sách bài chờ duyệt (GET) và xóa bài khỏi hàng chờ (POST action=xoa)
require __DIR__ . '/_chung.php';
require_admin();
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET') {
    out(['ok' => true, 'items' => read_json_file(PENDING_FILE, [])]);
}
require_post();
$in = read_body_json();
if (($in['action'] ?? '') !== 'xoa') {
    fail('Thao tác không hợp lệ.');
}
$id = (string)($in['id'] ?? '');
$fp = fopen(PENDING_FILE, 'c+');
if (!$fp) {
    fail('Không mở được hàng chờ duyệt.', 500);
}
flock($fp, LOCK_EX);
$list = json_decode((string)stream_get_contents($fp), true);
$list = array_values(array_filter(is_array($list) ? $list : [], function ($a) use ($id) {
    return ($a['id'] ?? '') !== $id;
}));
ftruncate($fp, 0);
rewind($fp);
fwrite($fp, json_encode($list, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
flock($fp, LOCK_UN);
fclose($fp);
out(['ok' => true]);
