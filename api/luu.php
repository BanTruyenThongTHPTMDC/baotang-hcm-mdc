<?php
// Lưu (xuất bản) toàn bộ nội dung. Tự sao lưu bản cũ trước khi ghi.
require __DIR__ . '/_chung.php';
require_post();
require_admin();
$data = read_body_json(MAX_DATA_BYTES);
if (!isset($data['settings']) || !is_array($data['settings'])) {
    fail('Thiếu phần thông tin chung.');
}
foreach (['quotes', 'zones', 'books', 'articles', 'quiz'] as $k) {
    if (!isset($data[$k])) {
        $data[$k] = [];
    }
    if (!is_array($data[$k]) || ($data[$k] && array_keys($data[$k]) !== range(0, count($data[$k]) - 1))) {
        fail('Dữ liệu mục "' . $k . '" không hợp lệ.');
    }
}
$data['updatedAt'] = date('c');
backup_current_data();
write_json_file(DATA_FILE, $data);
out(['ok' => true, 'updatedAt' => $data['updatedAt']]);
