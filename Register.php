
<?php
//add user to database and send mail

//get details from form
$first=$_POST["firstname"];
$last=$_POST["lastname"];
$user=$_POST["username"];
$email=$_POST["email"];
$pass=$_POST["password"];

$servername = "sql312.byethost7.com";
$username = "b7_34206172";
$password = "********";
$dbname = "b7_34206172_WedDb";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer(true);

$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

//check if the username or the email is already exist
$checkQuery = "SELECT * FROM USERS WHERE USERNAME = '$user' OR EMAIL = '$email'";
$result2 = $conn->query($checkQuery);

if ($result2->num_rows > 0) {
    // Username or email already exists
    $foundUsername = false;
    $foundEmail = false;

    while ($row = $result2->fetch_assoc()) {
        if ($row['USERNAME'] == $user) {
            $foundUsername = true;
        }

        if ($row['EMAIL'] == $email) {
            $foundEmail = true;
        }
    }
//return right message for the state
    if ($foundUsername && $foundEmail) {
        echo "fusernamefmail";
    } elseif ($foundUsername) {
        echo "fusername";
    } elseif ($foundEmail) {
        echo "fmail";
    }
}
else{
    //if username or email didnt found create new user in the database
$sql="INSERT INTO USERS (USERNAME, PASSWORD, FIRSTNAME,LASTNAME,EMAIL) VALUES
('".$user."','".$pass."','".$first."','".$last."','".$email."');";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	echo json_encode($row);// The value you want to pass
  }
}
echo $email;
$conn->close();
//send email to the user mail
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
	try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'yosef.ishayev@ruppin365.net';
    $mail->Password   = 'Yosi331133';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender and recipient details
    $mail->setFrom('yosef.ishayev@ruppin365.net', 'ismah hatani');
    $mail->addAddress($email, 'Recipient Name');

    // Email content
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'נרשמת בהצלחה';
    $mail->Body    = '😀 .ההרשמה בוצעה בהצלחה, כעת ניתן לפרסם בפורום ';

    // Send the email
    $mail->send();
    echo 'Email sent successfully.';
} catch (Exception $e) {
    echo 'Unable to send email. Error: ' . $mail->ErrorInfo;
}
}
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
$conn->close();
?>
