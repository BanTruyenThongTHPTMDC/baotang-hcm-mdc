<?php
// Danh sách bản sao lưu tự động (GET) và khôi phục một bản (POST restore=tên tệp)
require __DIR__ . '/_chung.php';
require_admin();
ensure_private_dirs();
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET') {
    $files = glob(BACKUP_DIR . '/noi-dung-*.json') ?: [];
    rsort($files);
    $items = [];
    foreach ($files as $f) {
        $b = basename($f);
        $t = DateTime::createFromFormat('Ymd-His', substr($b, 9, 15));
        $items[] = [
            'file' => $b,
            'time' => $t ? $t->format('H:i:s') . ' ngày ' . $t->format('d/m/Y') : $b,
            'size' => filesize($f),
        ];
    }
    out(['ok' => true, 'items' => $items]);
}
require_post();
$in = read_body_json();
$file = (string)($in['restore'] ?? '');
if (!preg_match('/^noi-dung-\d{8}-\d{6}\.json$/', $file) || !is_file(BACKUP_DIR . '/' . $file)) {
    fail('Không tìm thấy bản sao lưu.');
}
$data = read_json_file(BACKUP_DIR . '/' . $file, null);
if (!is_array($data) || !isset($data['settings'])) {
    fail('Bản sao lưu bị hỏng.');
}
backup_current_data();
write_json_file(DATA_FILE, $data);
out(['ok' => true]);
