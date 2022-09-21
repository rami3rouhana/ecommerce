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

if (isset($json['user']['id']) && isset($_POST['search_field'])){

    $query = $mysqli->prepare("SELECT * FROM products join categories on products.categories_id = categories.id WHERE categories.name REGEXP ?");
    //$userid = $json['user']['id'];
    $search_field = $_POST['search_field'];
    $query->bind_param("s" , $search_field);
    $query->execute();
    $result = $query->get_result();
    $response = [];
    
    if (($query->error) == "") {
        while($a = $result->fetch_assoc()){
            $response[] = $a;
        } 
    }
}
?>