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

$jwtInfo = $jwtFunction(json_encode(['jwt'=>explode(" ", $headers["Authorization"])[1]]));

$json = json_decode($jwtInfo, true); // decode the JSON into an associative array


if ($json['user']['user_type'] == "Seller"){

    $query=$mysqli->prepare("SELECT products.name as product_name, products.id as product_id, products.views as product_views FROM sold_product JOIN products ON sold_product.products_id = products.id JOIN categories ON products.categories_id = categories.id WHERE categories.sellers_id = ?");
    $query->bind_param("i", $json['user']['id']);
    $query->execute(); 
    $result = $query->get_result();
    $response =[];
    
    if(($result->num_rows)>0){
        $response["success"] =true;
        while($a = $result->fetch_assoc()){
            $stats[] = $a;
        } 
        $response["stats"] = $stats;
        $response["jwt"] = $json["JWT"];
        echo json_encode($response);
    }
    else{
        $response["success"] = false;
        $response["error"] = "No stats to return";
        echo json_encode($response);
    }

}

?>
