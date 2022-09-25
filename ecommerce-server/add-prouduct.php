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
    if (isset($_POST['productName']) && isset($_POST['price']) && isset($_POST['categories_id']) && isset($_POST['image64base'])) {
        extract($_POST);
        $name = $_POST['productName'];
        ///
        $urlname = $name . "-" . ($json['user']['name']) . "-" . $categories_id;
        $base64_string = $image64base;
        //echo $base64_string;
        $decoder = base64_decode($base64_string);
        $url = '../client-frontend/images/uploadedimages/' . $name . ".jpg";
        file_put_contents($url,$decoder);

        $response['addedimage'] = true;
        $query = $mysqli->prepare("insert into products (name , picture_url, price , categories_id)  value(?,?,?,?)");
        $query->bind_param("ssss", $name , $url , $price, $categories_id);
        $query->execute();
        $query->get_result();
        $response = [];
        if (($query->error) == "") {
            $response["id"] = $query->insert_id;
            $response["success"] = true;
            $response["jwt"] = $json["JWT"];
            echo json_encode($response);
        } else {
            $response["success"] = false;
            $response["error"] = "Wrong Credentials";
            echo json_encode($response);
        }
    }
    else{
        echo 'img error';
    }
        ///
    }
?>