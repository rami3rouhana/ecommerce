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
    if (isset($_POST['banuser_id'])){
       
        extract($_POST);
        
        $query = $mysqli->prepare("INSERT INTO `banned_users`(userid) VALUE (?)");
        $query->bind_param("i", $banuser_id);
        $query->execute();
        $result = $query->get_result();
        $response = [];


    }
}
?>