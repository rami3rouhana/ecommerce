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
if(isset($_POST['email']) && isset($_POST['password']) && isset($_POST['f_name']) && isset($_POST['l_name']))
{
    extract($_POST);
    $password=hash('sha256',$_POST['password']);

    $query = $mysqli->prepare("INSERT INTO `users` (`f_name`, `l_name`, `email`, `password`) VALUES (?, ?, ?, ?);");
    $query->bind_param("ssss", $f_name ,$l_name , $email, $password);
    $query->execute(); 

    if(isset($query->insert_id)){
        $response["success"] =true;
        $info=[];
    
        $jwt = $jwtFunction(json_encode([
            "id"=> $query->insert_id,
            "name"=> $f_name." ".$l_name,
            "email"=> $email,
            "user_type"=> 'Client'
        ]));
        $jwt = json_decode($jwt) ;  
        $response["jwt"] = $jwt->JWT;
        echo json_encode($response);
    }
    else{
        $response["success"] =false;
        $response["error"] ="Wrong Credentials";
        echo json_encode($response);
    }
}
?>