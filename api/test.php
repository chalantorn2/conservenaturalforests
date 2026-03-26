<?php
header('Content-Type: text/plain');
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Loading send-mail.php...\n";
include __DIR__ . '/send-mail.php';
echo "\nDone.\n";
