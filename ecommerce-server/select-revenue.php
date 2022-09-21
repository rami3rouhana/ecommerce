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

if (isset($json['user']['id'])){
    //echo $json['user']['id'];
    if(isset($_POST['seller_id']) && isset($_POST['date_from'])){
        //echo 'gg';
        extract($_POST);
        $query = $mysqli->prepare("SELECT SUM(products.price) FROM sold_product JOIN products ON sold_product.products_id = products.id JOIN categories ON products.id = categories.id JOIN users ON categories.sellers_id = users.id 
        WHERE users.id = ? AND sold_product.date BETWEEN ? AND ?");
        $query->bind_param("iss" , $seller_id, $date_from, $date_to);
        $query->execute();
        $result = $query->get_result();
        $response = [];

        if (($query->error) == "") {
            while($a = $result->fetch_assoc()){
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
}
?>