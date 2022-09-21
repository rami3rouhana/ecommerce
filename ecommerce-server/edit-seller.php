<?php
// Connection
include("connection.php");
//required file
require __DIR__ . '/../vendor/autoload.php';

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
// Convert data
$jwtFunction = require('auth.php');
$_POST = json_decode(file_get_contents('php://input'), true);

$headers = getallheaders();

$jwtInfo = $jwtFunction(json_encode(['jwt' => explode(" ", $headers["Authorization"])[1]]));

$json = json_decode($jwtInfo, true); // decode the JSON into an associative array

if ($json['user']['user_type'] == "Admin") {
    if (isset($_POST['password']) && isset($_POST['f_name']) && isset($_POST['email']) && isset($_POST['id'])) {
       
        extract($_POST);
        $password=hash('sha256',$_POST['password']);
        
        $query = $mysqli->prepare("update users SET users.password=?, users.f_name=?, users.email=? where users.user_type='Seller' and id=? ");
        $query->bind_param("sssi",$password, $f_name , $email , $id );
        $query->execute();
        $result = $query->get_result();
        $response = [];

        if (($query->error) == "") {
            $response["success"] = true;
            $response["jwt"] = $json["JWT"];
            echo json_encode($response);
        } else {
            $response["success"] = false;
            $response["error"] = "Wrong Credentials";
            echo json_encode($response);
        }
    }
}
