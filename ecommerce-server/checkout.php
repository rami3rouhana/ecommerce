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
    if (isset($_POST['discout_used']) && isset($json['user']['id'])) {
        extract($_POST);
        $query = $mysqli->prepare("INSERT INTO sold_product (sold_product.products_id, sold_product.users_id,sold_product.discout_used) SELECT cart.product_id, cart.user_id, ? FROM cart WHERE cart.user_id = ? ");
        $query->bind_param("ii",$discout_used , $json['user']['id']);
        $query->execute();
        $query = $mysqli->prepare("delete from cart where user_id = ? ");
        $query->bind_param("i",$json['user']['id']);
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
