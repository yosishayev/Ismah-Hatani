<?php
//responsible to send details of supplier to an email automaticly
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$name = $_POST['name'];
$tel = $_POST['tel'];
$note = $_POST['note'];

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'yosef.ishayev@ruppin365.net';
    $mail->Password   = '********';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender and recipient details
    $mail->setFrom('yosef.ishayev@ruppin365.net', 'ismah hatani');
    $mail->addAddress('yosef.ishayev@ruppin365.net', 'Recipient Name');

    // Email content
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = "השארת פרטים: $name";
    $mail->Body = "<div dir='rtl'>שם: $name<br>טלפון: $tel<br>הערות: $note</div>";



    // Send the email
    $mail->send();
    echo 'Email sent successfully.';
} catch (Exception $e) {
    echo 'Unable to send email. Error: ' . $mail->ErrorInfo;
}
?>
