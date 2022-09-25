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

if ($json['user']['user_type'] == "Client") {
    if(!header("Location: http://127.0.0.1:5500/client-frontend/products.html") && !header("Location: http://127.0.0.1:5500/client-frontend/cart.html") && !header("Location: http://127.0.0.1:5500/client-frontend/favorites.html") && !header("Location: http://127.0.0.1:5500/client-frontend/wishlist.html") )
    header("http://127.0.0.1:5500/client-frontend/products.html");
    $response["success"] = true;
    $response["jwt"] = $json["JWT"];
    echo json_encode($response);
}else if ($json['user']['user_type'] == "Seller") {
    if(!header("Location: http://127.0.0.1:5500/seller-frontend/ads.html") && !header("Location: http://127.0.0.1:5500/seller-frontend/categories.html") && !header("Location: http://127.0.0.1:5500/seller-frontend/products.html") && !header("Location: http://127.0.0.1:5500/seller-frontend/statistics.html") && !header("Location: http://127.0.0.1:5500/seller-frontend/discounts.html") )
        header("Location: http://127.0.0.1:5500/seller-frontend/products.html");
        $response["success"] = true;
        $response["jwt"] = $json["JWT"];
        echo json_encode($response);
}else {
    header("Location: http://127.0.0.1:5500/client-frontend/landing-page.html");
}
