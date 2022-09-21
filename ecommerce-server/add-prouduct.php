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
if ($json['user']['user_type'] == "Seller") {
    if (isset($_POST['name']) && isset($_POST['picture_url']) && isset($_POST['price']) && isset($_POST['categories_id'])) {
        extract($_POST);
        $query = $mysqli->prepare("insert into products (name , picture_url, price , categories_id)  value(?,?,?,?)");
        $query->bind_param("ssss", $name , $picture_url , $price, $categories_id);
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
?>