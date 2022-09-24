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

if(isset($json['user']['id'])) {
if(isset($_POST['search_field'])){

    $query = $mysqli->prepare("SELECT products.name as name, products.price, products.id, products.picture_url, products.categories_id, categories.id AS categoriesID, categories.name as categoryName 
    FROM products join categories on products.categories_id = categories.id 
    WHERE categories.name REGEXP ? OR products.name REGEXP ?");
    $search_field = $_POST['search_field'];
    $query->bind_param("ss" , $search_field, $search_field);
    $query->execute();
    $result = $query->get_result();
    $response = [];
    $results = [];
    if (($query->error) == "") {
        while($a = $result->fetch_assoc()){
            $results[] = $a;
        }
        $response['results'] = $results; 
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
    echo 'search error';
}
}
else{
    echo 'jwt erro';
}

?>