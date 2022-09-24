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
        $response['user'] = [$json['user']['id'], $json['user']['name'], $json['user']['email']];
        echo json_encode($response);
    }
    else{
        $response['authentication'] = 'failed';
        echo json_encode($response);
    }

?>