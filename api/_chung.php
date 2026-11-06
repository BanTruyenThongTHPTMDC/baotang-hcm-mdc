<?php
// ============================================================================
// HÀM DÙNG CHUNG CHO API MÁY CHỦ TRƯỜNG (PHP 7.4 trở lên)
// Không chứa bí mật: mật khẩu (đã băm) nằm trong api/private/cau-hinh.json,
// thư mục này bị chặn truy cập từ web và không đưa lên GitHub.
// ============================================================================

define('ROOT_DIR', dirname(__DIR__));
define('DATA_FILE', ROOT_DIR . '/data/noi-dung.json');
define('UPLOAD_DIR', ROOT_DIR . '/uploads');
define('PRIVATE_DIR', __DIR__ . '/private');
define('BACKUP_DIR', PRIVATE_DIR . '/sao-luu');
define('CONFIG_FILE', PRIVATE_DIR . '/cau-hinh.json');
define('PENDING_FILE', PRIVATE_DIR . '/cho-duyet.json');
define('RATE_FILE', PRIVATE_DIR . '/gioi-han.json');
define('SETUP_CODE_FILE', PRIVATE_DIR . '/ma-cai-dat.txt');
define('MAX_UPLOAD_BYTES', 60 * 1024 * 1024);   // 60 MB cho mỗi tệp
define('MAX_DATA_BYTES', 40 * 1024 * 1024);     // 40 MB cho tệp nội dung
define('KEEP_BACKUPS', 60);
define('SESSION_IDLE_SECONDS', 8 * 3600);

date_default_timezone_set('Asia/Ho_Chi_Minh');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

session_name('KGVHSESS');
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'httponly' => true,
    'samesite' => 'Strict',
    'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
]);
session_start();

// Phiên hết hạn sau thời gian không thao tác
if (!empty($_SESSION['admin']) && (time() - ($_SESSION['seen'] ?? 0)) > SESSION_IDLE_SECONDS) {
    $_SESSION = [];
}
if (!empty($_SESSION['admin'])) {
    $_SESSION['seen'] = time();
}

function out($data, $code = 200)
{
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function fail($message, $code = 400)
{
    out(['ok' => false, 'error' => $message], $code);
}

// Mọi yêu cầu ghi phải là POST và có tiêu đề X-KGVH (trang lạ không gửi kèm được)
function require_post()
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        fail('Phương thức không hợp lệ.', 405);
    }
    if (($_SERVER['HTTP_X_KGVH'] ?? '') !== '1') {
        fail('Yêu cầu không hợp lệ.', 403);
    }
}

function is_admin()
{
    return !empty($_SESSION['admin']);
}

function require_admin()
{
    if (!is_admin()) {
        fail('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.', 401);
    }
}

function ensure_private_dirs()
{
    foreach ([PRIVATE_DIR, BACKUP_DIR] as $d) {
        if (!is_dir($d) && !@mkdir($d, 0750, true)) {
            fail('Máy chủ chưa cấp quyền ghi cho thư mục api/private. Liên hệ bộ phận kỹ thuật.', 500);
        }
    }
}

function read_body_json($maxBytes = 1048576)
{
    $raw = file_get_contents('php://input', false, null, 0, $maxBytes + 1);
    if ($raw === false || strlen($raw) > $maxBytes) {
        fail('Dữ liệu gửi lên quá lớn.', 413);
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        fail('Dữ liệu gửi lên không hợp lệ.');
    }
    return $data;
}

function read_json_file($path, $default)
{
    if (!is_file($path)) {
        return $default;
    }
    $raw = file_get_contents($path);
    $data = json_decode((string)$raw, true);
    return is_array($data) ? $data : $default;
}

// Ghi an toàn: ghi ra tệp tạm rồi đổi tên, tránh hỏng tệp khi mất điện giữa chừng
function write_json_file($path, $data)
{
    $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    if ($json === false) {
        fail('Không mã hóa được dữ liệu.', 500);
    }
    $tmp = $path . '.tmp-' . bin2hex(random_bytes(4));
    if (@file_put_contents($tmp, $json, LOCK_EX) === false) {
        fail('Máy chủ không ghi được tệp ' . basename($path) . '. Kiểm tra quyền ghi thư mục.', 500);
    }
    if (!@rename($tmp, $path)) {
        @unlink($tmp);
        fail('Máy chủ không ghi được tệp ' . basename($path) . '.', 500);
    }
}

function config()
{
    return read_json_file(CONFIG_FILE, []);
}

function client_ip()
{
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

// Giới hạn số lần thử trong một khoảng thời gian (chống dò mật khẩu, chống gửi rác)
function rate_limit($bucket, $max, $windowSeconds)
{
    ensure_private_dirs();
    $fp = fopen(RATE_FILE, 'c+');
    if (!$fp) {
        return;
    }
    flock($fp, LOCK_EX);
    $all = json_decode((string)stream_get_contents($fp), true);
    if (!is_array($all)) {
        $all = [];
    }
    $now = time();
    $key = $bucket . ':' . hash('sha256', client_ip());
    foreach ($all as $k => $times) {
        $all[$k] = array_values(array_filter((array)$times, function ($t) use ($now) {
            return $t > $now - 86400;
        }));
        if (!$all[$k]) {
            unset($all[$k]);
        }
    }
    $recent = array_filter($all[$key] ?? [], function ($t) use ($now, $windowSeconds) {
        return $t > $now - $windowSeconds;
    });
    $blocked = count($recent) >= $max;
    if (!$blocked) {
        $all[$key][] = $now;
    }
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($all));
    flock($fp, LOCK_UN);
    fclose($fp);
    if ($blocked) {
        fail('Bạn thao tác quá nhiều lần. Vui lòng thử lại sau ít phút.', 429);
    }
}

function clean_text($s, $maxLen)
{
    $s = (string)$s;
    $s = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $s);
    $s = trim(str_replace("\r\n", "\n", $s));
    if (function_exists('mb_substr')) {
        return mb_substr($s, 0, $maxLen, 'UTF-8');
    }
    return substr($s, 0, $maxLen);
}

function text_len($s)
{
    return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen($s);
}

function backup_current_data()
{
    ensure_private_dirs();
    if (is_file(DATA_FILE)) {
        $name = 'noi-dung-' . date('Ymd-His') . '.json';
        @copy(DATA_FILE, BACKUP_DIR . '/' . $name);
    }
    $files = glob(BACKUP_DIR . '/noi-dung-*.json') ?: [];
    rsort($files);
    foreach (array_slice($files, KEEP_BACKUPS) as $old) {
        @unlink($old);
    }
}
