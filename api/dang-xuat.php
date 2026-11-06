<?php
require __DIR__ . '/_chung.php';
require_post();
$_SESSION = [];
session_destroy();
out(['ok' => true]);
