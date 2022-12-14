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
    if (isset($json['user']['id'])) {

        $query = $mysqli->prepare("SELECT products.id , products.name , products.picture_url, products.price from products JOIN categories on categories.id=products.categories_id JOIN users on users.id=categories.sellers_id WHERE users.id= ?;");
        $userid = $json['user']['id'];
        $query->bind_param("i", $userid);
        $query->execute();
        $result = $query->get_result();
        $response = [];
        $products = [];
        if (($query->error) == "") {
            while ($a = $result->fetch_assoc()) {
                $products[] = $a;
            }
            $response["products"] = $products;
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