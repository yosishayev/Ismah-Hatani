
<?php
//return user for admin page table by username or firstname
$servername = "sql312.byethost7.com";
$username = "b7_34206172";
$password = "********";
$dbname = "b7_34206172_WedDb";

$user = $_GET['search_text'];
//search sel in adminPage table
$sel = $_GET['sel'];

$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL FROM USERS WHERE $sel LIKE '%$user%'";
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