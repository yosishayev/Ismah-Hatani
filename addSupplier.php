
<?php
$full=$_POST["fullname"];
$url=$_POST["url"];
$tel=$_POST["tel"];
$email=$_POST["email"];
$prof=$_POST["prof"];
$location=$_POST["location"];
$prof_img=basename($_FILES["prof_img"]["name"]);

$servername = "sql312.byethost7.com";
$username = "b7_34206172";
$password = "********";
$dbname = "b7_34206172_WedDb";

$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

//create query
$sql="INSERT INTO Suppliers (full_name, location,phone,url,mail,profession) VALUES
('".$full."','".$location."','".$tel."','".$url."','".$email."','".$prof."');";

$result = $conn->query($sql);
/*if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	echo json_encode($row);// The value you want to pass
  }
}*/
echo json_encode($prof_img);
echo "hello";
echo "world";
/*if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

*/
$conn->close();


?>
