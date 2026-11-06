<?php
require __DIR__ . '/_chung.php';
require_post();
rate_limit('dang-nhap', 8, 900); // tối đa 8 lần thử / 15 phút / máy
$in = read_body_json();
$cfg = config();
if (empty($cfg['passwordHash'])) {
    fail('Hệ thống chưa được cài đặt mật khẩu.', 403);
}
if (!password_verify((string)($in['password'] ?? ''), $cfg['passwordHash'])) {
    fail('Mật khẩu không đúng.', 403);
}
session_regenerate_id(true);
$_SESSION['admin'] = true;
$_SESSION['seen'] = time();
out(['ok' => true]);
