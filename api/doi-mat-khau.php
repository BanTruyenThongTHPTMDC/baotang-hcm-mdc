<?php
require __DIR__ . '/_chung.php';
require_post();
require_admin();
rate_limit('doi-mat-khau', 8, 900);
$in = read_body_json();
$cfg = config();
if (empty($cfg['passwordHash']) || !password_verify((string)($in['old'] ?? ''), $cfg['passwordHash'])) {
    fail('Mật khẩu hiện tại không đúng.', 403);
}
$pass = (string)($in['password'] ?? '');
if (strlen($pass) < 8) {
    fail('Mật khẩu mới cần tối thiểu 8 ký tự.');
}
$cfg['passwordHash'] = password_hash($pass, PASSWORD_DEFAULT);
write_json_file(CONFIG_FILE, $cfg);
out(['ok' => true]);
