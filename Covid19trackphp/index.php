<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$servername = "localhost";
$username   = "root";
$password   = "pass";
$dbname     = "form";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else
echo"Working";
    // $sql = "INSERT INTO userdata (email, username)
    //     VALUES ('".$_POST['myEmail']."', '".$_POST['myUsername']."')";
    // if (mysqli_query($conn,$sql)) {
    // $data = array("data" => "You Data added successfully");
    //     echo json_encode($data);
    // } else {
    //     echo "Error: " . $sql . "<br>" . $conn->error;
    // }
?>