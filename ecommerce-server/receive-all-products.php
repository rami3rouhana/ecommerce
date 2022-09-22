<?php
// Connection
include("connection.php");
//required file
require __DIR__ . '/../vendor/autoload.php';

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$query = $mysqli->prepare("SELECT * FROM products");
$query->execute();
$result = $query->get_result();
$response = [];

if (($query->error) == "") {
    while ($a = $result->fetch_assoc()) {
        $response[] = $a;
    }
    echo json_encode($response);
} else {
    $response["success"] = false;
    $response["error"] = "Wrong Credentials";
    echo json_encode($response);
}

?>