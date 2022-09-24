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
    if (isset($_POST['discount_code'])) {

        extract($_POST);

        $query = $mysqli->prepare("SELECT cart.product_id, products.name FROM cart JOIN products ON cart.product_id = products.id WHERE cart.user_id = ? AND cart.product_id IN (SELECT products.id as product_id FROM products JOIN categories ON products.categories_id = categories.id JOIN discounts ON categories.id = discounts.category_id WHERE discounts.code = ?); ");
        $query->bind_param("is", $json['user']['id'] , $discount_code);
        $query->execute();
        $result = $query->get_result();
        $response = [];
        $itemsAffected = [];
        if (($query->error) == "") {
            while ($a = $result->fetch_assoc()) {
                $itemsAffected[] = $a;
            }
            $response['itemsAffected'] = $itemsAffected;
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