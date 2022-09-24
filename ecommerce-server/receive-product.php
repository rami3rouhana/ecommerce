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

if (isset($_POST['product_id'])) {

    extract($_POST);

    $query = $mysqli->prepare("SELECT name , picture_url, price ,views from products where id=?");
    $query->bind_param("i", $product_id);
    $query->execute();
    $result = $query->get_result();
    $response = [];

    if (($query->error) == "") {
        while ($a = $result->fetch_assoc()) {
            $response[] = $a;
        }
        $response["success"] = true;
        $response["jwt"] = $json["JWT"];
        echo json_encode($response);
    } else {
        $response["success"] = false;
        $response["error"] = "Wrong Credentials";
        echo json_encode($response);
    }
}
