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

    $query = $mysqli->prepare("SELECT products.id as product_id, picture_url, price, products.name, views, categories.sellers_id as seller_id, users.f_name as seller_name FROM products 
    JOIN categories ON products.categories_id = categories.id 
    JOIN users ON categories.sellers_id = users.id WHERE products.id = ?");
    $query->bind_param("i", $product_id);
    $query->execute();
    $result = $query->get_result();
    $response = [];
    $product_info = [];
    if (($query->error) == "") {
        while ($a = $result->fetch_assoc()) {
            $product_info[] = $a;
        }
        $response['product_info'] = $product_info;
        $response["success"] = true;
        $response["jwt"] = $json["JWT"];
        echo json_encode($response);
    } else {
        $response["success"] = false;
        $response["error"] = "Wrong Credentials";
        echo json_encode($response);
    }
}
?>