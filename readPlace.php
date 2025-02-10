<?php
//return places information
$servername = "sql312.byethost7.com";
$username = "b7_34206172";
$password = "********";
$dbname = "b7_34206172_WedDb";

$loc =$_GET['loc'];
$ulam =$_GET['ulam'];

$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT full_name, location,phone,url,mail,profession FROM Suppliers WHERE profession = '$ulam' AND location ='$loc'";
$result = $conn->query($sql);
$rows = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}

$jsonString = json_encode($rows);

echo $jsonString;
$conn->close();
?>