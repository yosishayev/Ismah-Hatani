<?php
$user = $_POST['user'];
$pass = $_POST['pass'];

$servername = "sql312.byethost7.com";
$username = "b7_34206172";
$password = "********";
$dbname = "b7_34206172_WedDb";

$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT USERNAME, PASSWORD,FIRSTNAME,LASTNAME,isAdmin FROM USERS WHERE USERNAME='$user' AND PASSWORD = '$pass'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	echo json_encode($row);// The value that pass to the js page
  }
}
$conn->close();
?>