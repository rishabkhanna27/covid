<?php 
$servername = "localhost";
$username   = "root";
$password   = "pass";
$dbname     = "form";
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else
{
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
            print_r($request);
            $fname = $request->fname;
            $pnumber = $request->pnumber;
            $age = $request->age;
            $gender = $request->gender;
            $travel = $request->travel;
            $crowd = $request->crowd;
            $symptoms = $request->symptoms;

            	 $sql = "INSERT INTO `formdata` (`fname`,`pnumber`,`age`,`gender`,`travel`,`crowd`,`symptoms`)
                 VALUES ('{$fname}','{$pnumber}','{$age}','{$gender}','{$travel}','{$crowd}','{$symptoms}')";


        if(mysqli_query($conn , $sql))
        {
            http_response_code(201);
        }
        else
        {
            http_response_code(422);
        }
    }
}
?>