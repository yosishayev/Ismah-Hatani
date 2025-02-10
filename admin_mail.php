<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//email address to send
$recipient = $_POST['recipient'];
//subject 
$subject = $_POST['subject'];
//message
$message = $_POST['message'];

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'yosef.ishayev@ruppin365.net';
    $mail->Password   = '*********';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender and recipient details
    $mail->setFrom('yosef.ishayev@ruppin365.net', 'ismah hatani');
    $mail->addAddress($recipient, 'Recipient Name');

    // Email content
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $subject;
    $mail->Body    = $message;

    // Send the email
    $mail->send();
    echo 'Email sent successfully.';
} catch (Exception $e) {
    echo 'Unable to send email. Error: ' . $mail->ErrorInfo;
}


?>
