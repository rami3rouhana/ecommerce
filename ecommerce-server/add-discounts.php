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
    if (isset($_POST['discount_percent']) && isset($_POST['categories_id'])) {
        extract($_POST);
        $code = time();
        $query = $mysqli->prepare("insert into discounts (code , discount_percent , categories_id)  value(?,?,?)");
        $query->bind_param("isi", $code , $discount_percent, $categories_id );
        $query->execute();
        $result = $query->get_result();
        $response = [];

        if (($query->error) == "") {
            $response["code"] = $code;
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