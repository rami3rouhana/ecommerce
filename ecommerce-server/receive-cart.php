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

$jwtInfo = $jwtFunction(json_encode(['jwt'=>explode(" ",$headers["Authorization"])[1]]));

$json = json_decode($jwtInfo, true); // decode the JSON into an associative array

if ($json['user']['user_type']== "Client"){

    $query=$mysqli->prepare("SELECT products.id , products.name, products.picture_url, products.price, products.categories_id  FROM products JOIN cart ON products.id = cart.product_id where cart.user_id = ?");
    $query->bind_param("i", $json['user']['id']);
    $query->execute(); 
    $result = $query->get_result();
    $response = [];
    $cart = [];
    if(($result->num_rows)>0){
        $response["success"] =true;
        $info=[];
        while($a = $result->fetch_assoc()){
            $cart[] = $a;
        } 
        $response['cart'] = $cart;
        $response["jwt"] = $json["JWT"];
        echo json_encode($response);
    }
    else{
        $response["success"] =false;
        $response["error"] ="Wrong Credentials";
        echo json_encode($response);
    }

}

?>