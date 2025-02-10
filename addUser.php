
<?php
$first=$_POST["firstname"];
$last=$_POST["lastname"];
$user=$_POST["username"];
$email=$_POST["email"];
$pass=$_POST["password"];

$servername = "sql312.byethost7.com";
$username = "b7_34206172";
$password = "**********";
$dbname = "b7_34206172_WedDb";

$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}


$sql="INSERT INTO USERS (USERNAME, PASSWORD, FIRSTNAME,LASTNAME,EMAIL) VALUES
('".$user."','".$pass."','".$first."','".$last."','".$email."');";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	echo json_encode($row);// pass to js
  }
}
echo $email;
$conn->close();


?>
