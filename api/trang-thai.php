<?php
// Cho trang web biết đang chạy trên máy chủ trường và trạng thái đăng nhập
require __DIR__ . '/_chung.php';
$cfg = config();
out([
    'ok' => true,
    'loggedIn' => is_admin(),
    'needSetup' => empty($cfg['passwordHash']),
]);
