<?php
// ============================================================
// Conserve Natural Forests - Form Mail Handler (Gmail SMTP)
// PHP 8.3 | Receives form data via JSON POST, sends HTML email
// ============================================================

// --- Configuration ---
$RECIPIENT_EMAIL = 'info@conservenaturalforests.org';
$SITE_NAME       = 'Conserve Natural Forests';

// Gmail SMTP
$SMTP_HOST = 'smtp.gmail.com';
$SMTP_PORT = 465;
$SMTP_USER = 'chalantorn.work@gmail.com';
$SMTP_PASS = 'nolq havm mwij qful';

// --- CORS ---
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// --- Parse body ---
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$formType = $input['form_type'] ?? 'general';

// --- Helpers ---
function clean(string $val): string
{
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

function requireFields(array $input, array $fields): array
{
    $out = [];
    foreach ($fields as $f) {
        $v = trim($input[$f] ?? '');
        if ($v === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => "Field \"$f\" is required."]);
            exit;
        }
        $out[$f] = $f === 'email'
            ? filter_var($v, FILTER_VALIDATE_EMAIL)
            : clean($v);
    }
    if (isset($out['email']) && $out['email'] === false) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
        exit;
    }
    return $out;
}

// --- Gmail SMTP send helper (ใช้ fsockopen ไม่ต้องพึ่ง PHPMailer) ---
function sendSmtp(
    string $toEmail,
    string $subject,
    string $htmlBody,
    string $replyTo = '',
    string $replyToName = ''
): bool {
    global $SMTP_HOST, $SMTP_PORT, $SMTP_USER, $SMTP_PASS, $SITE_NAME;

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$SITE_NAME} <{$SMTP_USER}>\r\n";
    $headers .= "To: {$toEmail}\r\n";
    $headers .= "Subject: {$subject}\r\n";
    if ($replyTo !== '') {
        $replyToLabel = $replyToName !== '' ? $replyToName : $replyTo;
        $headers .= "Reply-To: {$replyToLabel} <{$replyTo}>\r\n";
    }

    $smtp = @fsockopen('tls://' . $SMTP_HOST, $SMTP_PORT, $errno, $errstr, 10);
    if (!$smtp) {
        error_log("SMTP connect failed: {$errstr} ({$errno})");
        return false;
    }

    $resp = fgets($smtp, 512);

    $cmds = [
        "EHLO conservenaturalforests.org",
        "AUTH LOGIN",
        base64_encode($SMTP_USER),
        base64_encode($SMTP_PASS),
        "MAIL FROM:<{$SMTP_USER}>",
        "RCPT TO:<{$toEmail}>",
        "DATA",
    ];

    foreach ($cmds as $cmd) {
        fwrite($smtp, $cmd . "\r\n");
        $resp = '';
        while ($line = fgets($smtp, 512)) {
            $resp .= $line;
            if (isset($line[3]) && $line[3] === ' ') break;
        }
        $code = (int)substr($resp, 0, 3);
        if ($code >= 400) {
            error_log("SMTP error on '{$cmd}': {$resp}");
            fwrite($smtp, "QUIT\r\n");
            fclose($smtp);
            return false;
        }
    }

    $message = $headers . "\r\n" . $htmlBody . "\r\n.\r\n";
    fwrite($smtp, $message);
    $resp = fgets($smtp, 512);

    fwrite($smtp, "QUIT\r\n");
    fclose($smtp);

    $code = (int)substr($resp, 0, 3);
    return $code >= 200 && $code < 400;
}

// --- HTML email template ---
function buildHtml(string $topic, array $rows, string $message = '', string $page = ''): string
{
    $date = date('d M Y, H:i');

    $rowsHtml = '';
    foreach ($rows as $label => $value) {
        $rowsHtml .= '<tr>'
            . '<td style="padding:10px 16px;font-size:13px;color:#888;font-weight:600;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f0f0f0;">' . $label . '</td>'
            . '<td style="padding:10px 16px;font-size:14px;color:#333;border-bottom:1px solid #f0f0f0;">' . $value . '</td>'
            . '</tr>';
    }

    $pageHtml = '';
    if ($page !== '') {
        $pageHtml = '<div style="margin-top:4px;font-size:13px;color:#999;">Page: ' . $page . '</div>';
    }

    $messageBlock = '';
    if ($message !== '') {
        $message = nl2br($message);
        $messageBlock = '<tr><td colspan="2" style="padding:20px 16px 8px;">'
            . '<div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:8px;">Message</div>'
            . '<div style="padding:16px;background:#f9fafb;border-radius:8px;border-left:4px solid #78c922;font-size:14px;line-height:1.7;color:#333;">' . $message . '</div>'
            . '</td></tr>';
    }

    return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>'
        . '<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,sans-serif;">'
        . '<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;"><tr><td align="center">'
        . '<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">'
        . '<tr><td style="background:linear-gradient(135deg,#2b2b2b 0%,#3a3a3a 100%);padding:28px 32px;text-align:center;">'
        . '<div style="font-size:20px;font-weight:700;color:#fff;letter-spacing:1px;">CONSERVE NATURAL FORESTS</div></td></tr>'
        . '<tr><td style="padding:24px 32px 0;">'
        . '<div style="font-size:13px;color:#999;">' . $date . '</div>'
        . '<div style="margin-top:6px;font-size:15px;color:#555;">Re: <strong style="color:#78c922;">' . $topic . '</strong></div>'
        . $pageHtml . '</td></tr>'
        . '<tr><td style="padding:20px 16px 0;"><table width="100%" cellpadding="0" cellspacing="0">'
        . $rowsHtml . $messageBlock
        . '</table></td></tr>'
        . '<tr><td style="padding:28px 32px;text-align:center;border-top:1px solid #eee;margin-top:16px;">'
        . '<div style="font-size:12px;color:#aaa;">This message was sent from <a href="https://conservenaturalforests.org" style="color:#78c922;text-decoration:none;">conservenaturalforests.org</a></div>'
        . '</td></tr>'
        . '</table></td></tr></table></body></html>';
}

// --- Auto-reply email template ---
function buildAutoReply(string $name, string $bodyText, string $linkSentence = ''): string
{
    $linkHtml = '';
    if ($linkSentence !== '') {
        $linkHtml = '<p style="margin:0 0 20px;font-size:15px;color:#555;line-height:1.8;">' . $linkSentence . '</p>';
    }

    return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>'
        . '<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,sans-serif;">'
        . '<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;"><tr><td align="center">'
        . '<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">'
        . '<tr><td style="background:linear-gradient(135deg,#2b2b2b 0%,#3a3a3a 100%);padding:28px 32px;text-align:center;">'
        . '<div style="font-size:20px;font-weight:700;color:#fff;letter-spacing:1px;">CONSERVE NATURAL FORESTS</div></td></tr>'
        . '<tr><td style="padding:32px 32px 8px;">'
        . '<p style="margin:0 0 20px;font-size:16px;color:#333;line-height:1.7;">Hi ' . $name . ',</p>'
        . '<p style="margin:0 0 20px;font-size:15px;color:#555;line-height:1.8;">' . $bodyText . '</p>'
        . $linkHtml
        . '<p style="margin:0 0 20px;font-size:15px;color:#555;line-height:1.8;">If you have any questions, please don&rsquo;t hesitate to get in touch.</p>'
        . '<p style="margin:0 0 0;font-size:15px;color:#555;">Best Wishes</p>'
        . '<p style="margin:4px 0 0;font-size:15px;color:#78c922;font-weight:700;">Conserve Natural Forests</p>'
        . '</td></tr>'
        . '<tr><td style="padding:28px 32px;text-align:center;border-top:1px solid #eee;">'
        . '<div style="font-size:12px;color:#aaa;"><a href="https://conservenaturalforests.org" style="color:#78c922;text-decoration:none;">conservenaturalforests.org</a></div>'
        . '</td></tr>'
        . '</table></td></tr></table></body></html>';
}

// --- Build email per form type ---
$subject = '';
$html    = '';
$replyTo = '';
$autoReplySubject = '';
$autoReplyHtml    = '';

switch ($formType) {

    case 'contact':
        $d = requireFields($input, ['name', 'email', 'message']);
        $subject = "[CNF] General Inquiry - {$d['name']}";
        $replyTo = $d['email'];
        $emailLink = '<a style="color:#78c922;text-decoration:none;" href="mailto:' . $d['email'] . '">' . $d['email'] . '</a>';
        $html = buildHtml("General Inquiry", ['Name' => $d['name'], 'Email' => $emailLink], $d['message'], "Contact");
        $autoReplySubject = "Thank you for contacting Conserve Natural Forests";
        $autoReplyHtml = buildAutoReply($d['name'], "Thank you for your message. We have received your inquiry and will get back to you shortly.", 'For more information, please visit our website at <a style="color:#78c922;" href="https://conservenaturalforests.org/contact">conservenaturalforests.org/contact</a>.');
        break;

    case 'internship':
        $d = requireFields($input, ['name', 'email', 'message']);
        $subject = "[CNF] Internship Inquiry - {$d['name']}";
        $replyTo = $d['email'];
        $emailLink = '<a style="color:#78c922;text-decoration:none;" href="mailto:' . $d['email'] . '">' . $d['email'] . '</a>';
        $html = buildHtml("Internship Inquiry", ['Name' => $d['name'], 'Email' => $emailLink], $d['message'], "Apply for an Internship");
        $autoReplySubject = "Thank you for your interest in our Internship Program";
        $autoReplyHtml = buildAutoReply($d['name'], "Thank you for your interest in our internship program. We will review your inquiry and get back to you soon.", 'For more information about our internship program, please visit our website at <a style="color:#78c922;" href="https://conservenaturalforests.org/apply-for-an-internship">conservenaturalforests.org/apply-for-an-internship</a>.');
        break;

    case 'donate':
        $d = requireFields($input, ['name', 'email', 'message']);
        $subject = "[CNF] General Inquiry - {$d['name']}";
        $replyTo = $d['email'];
        $emailLink = '<a style="color:#78c922;text-decoration:none;" href="mailto:' . $d['email'] . '">' . $d['email'] . '</a>';
        $html = buildHtml("General Inquiry", ['Name' => $d['name'], 'Email' => $emailLink], $d['message'], "Donate");
        $autoReplySubject = "Thank you for contacting Conserve Natural Forests";
        $autoReplyHtml = buildAutoReply($d['name'], "Thank you for your message. We have received your inquiry and will get back to you shortly.", 'For more information about how you can donate, please visit our website at <a style="color:#78c922;" href="https://conservenaturalforests.org/donate">conservenaturalforests.org/donate</a>.');
        break;

    case 'booking':
        $d = requireFields($input, ['firstName', 'lastName', 'email', 'dateOfVisit', 'country']);
        $adults         = (int)($input['adults'] ?? 0);
        $children       = (int)($input['children'] ?? 0);
        $transportation = clean($input['transportation'] ?? '-');
        $hearAbout      = clean($input['hearAbout'] ?? '-');
        $fullName = "{$d['firstName']} {$d['lastName']}";

        $subject = "[CNF] Eco-Tour Booking - {$fullName}";
        $replyTo = $d['email'];
        $emailLink = '<a style="color:#78c922;text-decoration:none;" href="mailto:' . $d['email'] . '">' . $d['email'] . '</a>';
        $html = buildHtml("Eco-Tour Booking", [
            'Name'           => $fullName,
            'Email'          => $emailLink,
            'Date of Visit'  => $d['dateOfVisit'],
            'Country'        => $d['country'],
            'Adults'         => (string)$adults,
            'Children'       => (string)$children,
            'Transportation' => $transportation,
            'Heard about CNF' => $hearAbout,
        ], '', "Visit Us");
        $autoReplySubject = "Thank you for booking an eco-tour with Conserve Natural Forests";
        $autoReplyHtml = buildAutoReply($d['firstName'], "Thank you for booking an eco-tour with us at Conserve Natural Forests on {$d['dateOfVisit']}. We look forward to meeting you!", 'For more information about your visit, please visit our website at <a style="color:#78c922;" href="https://conservenaturalforests.org/visit-us">conservenaturalforests.org/visit-us</a>.');
        break;

    case 'newsletter':
        $d = requireFields($input, ['email']);
        $firstName = clean($input['firstName'] ?? '');
        $lastName  = clean($input['lastName'] ?? '');
        $displayName = $firstName ?: 'there';

        $subject = "[CNF] Newsletter Subscription";
        $replyTo = $d['email'];
        $emailLink = '<a style="color:#78c922;text-decoration:none;" href="mailto:' . $d['email'] . '">' . $d['email'] . '</a>';
        $html = buildHtml("Newsletter Subscription", [
            'First Name' => $firstName ?: '-',
            'Last Name'  => $lastName ?: '-',
            'Email'      => $emailLink,
        ], '', "Contact");
        $autoReplySubject = "Welcome to the Conserve Natural Forests Newsletter";
        $autoReplyHtml = buildAutoReply($displayName, "Thank you for subscribing to our newsletter. You'll receive regular updates from Conserve Natural Forests about our projects and progress.", 'To learn more about our work, please visit our website at <a style="color:#78c922;" href="https://conservenaturalforests.org">conservenaturalforests.org</a>.');
        break;

    default:
        $d = requireFields($input, ['name', 'email', 'message']);
        $page = clean($input['page'] ?? 'Home');

        $subject = "[CNF] General Inquiry - {$d['name']}";
        $replyTo = $d['email'];
        $emailLink = '<a style="color:#78c922;text-decoration:none;" href="mailto:' . $d['email'] . '">' . $d['email'] . '</a>';
        $html = buildHtml("General Inquiry", ['Name' => $d['name'], 'Email' => $emailLink], $d['message'], $page);
        $autoReplySubject = "Thank you for contacting Conserve Natural Forests";
        $autoReplyHtml = buildAutoReply($d['name'], "Thank you for your message. We have received your inquiry and will get back to you shortly.", 'For more information, please visit our website at <a style="color:#78c922;" href="https://conservenaturalforests.org">conservenaturalforests.org</a>.');
        break;
}

// --- Send notification to admin ---
$sent = sendSmtp($RECIPIENT_EMAIL, $subject, $html, $replyTo, $d['name'] ?? '');

// --- Auto-reply to submitter ---
if ($sent && $autoReplyHtml !== '') {
    sendSmtp($replyTo, $autoReplySubject, $autoReplyHtml);
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
