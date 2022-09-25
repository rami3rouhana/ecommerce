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

if ($json['user']['user_type'] == "Client") {
    $response["success"] = true;
    $response["jwt"] = $json["JWT"];
    $response["role"] = $json["user"]['user_type'];
    echo json_encode($response);
}else if ($json['user']['user_type'] == "Seller") {
    $response["success"] = true;
    $response["jwt"] = $json["JWT"];
    $response["role"] = $json["user"]['user_type'];
    echo json_encode($response);
}else if ($json['user']['user_type'] == "Admin") {
    $response["success"] = true;
    $response["jwt"] = $json["JWT"];
    $response["role"] = $json["user"]['user_type'];
    echo json_encode($response);
}else {
    $response["success"] = false;
    $response["error"] = "Not valid Credentials";
}
