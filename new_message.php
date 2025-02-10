<?php
$header= $_POST['header'];
$message = $_POST['message'];
$user=$_POST['user'];

$servername = "sql312.byethost7.com";
$username = "b7_34206172";
$password = "********";
$dbname = "b7_34206172_WedDb";

$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}


$sql="INSERT INTO forum (username, header,message) VALUES
('".$user."','".$header."','".$message."');";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	echo json_encode($row);// The value you want to pass
  }
}
$conn->close();
?>