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
    extract($_POST);
    if (isset($json['user']['id'])) {

        $query = $mysqli->prepare("INSERT INTO cart (cart.user_id, cart.product_id) SELECT whishlist.users_id, whishlist.products_id FROM whishlist where whishlist.users_id= ? ");
        $query->bind_param("i", $json['user']['id']);
        $query->execute();

        if($discount!=""){
            $query = $mysqli->prepare("UPDATE discounts SET is_used = 1 WHERE code= ?");
            $query->bind_param("i", $discount);
            $query->execute();
        }

        if($voucher!=""){
            $query = $mysqli->prepare("UPDATE vouchers SET is_used = 1 WHERE code= ?");
            $query->bind_param("i", $voucher);
            $query->execute();  
        }

        $query = $mysqli->prepare("delete from whishlist where whishlist.users_id= ? ");
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
?>