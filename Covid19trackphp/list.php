<?php
require 'index.php';
error_reporting(E_ERROR);
$formdata = [];
$sql = "SELECT * FROM formdata";

if($result = mysqli_query($conn, $sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $formdata[$cr]['id'] = $row['id'];
        $formdata[$cr]['fname'] = $row['fname'];
        $formdata[$cr]['pnumber'] = $row['pnumber'];
        $formdata[$cr]['age'] = $row['age'];
        $formdata[$cr]['gender'] = $row['gender'];
        $formdata[$cr]['travel'] = $row['travel'];
        $formdata[$cr]['crowd'] = $row['crowd'];
        $formdata[$cr]['symptoms'] = $row['symptoms'];
        $cr++;
    }

    echo json_encode($formdata);
}
else
{
    http_response_code(404);
}
?>