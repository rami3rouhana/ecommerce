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

$jwtInfo = $jwtFunction(json_encode(['jwt'=>explode(" ",$headers["Authorization"])[1]]));

$json = json_decode($jwtInfo, true); // decode the JSON into an associative array

//print_r($json);
if ($json['user']['user_type']=="Admin" || $json['user']['user_type']=="Client"){

    $query=$mysqli->prepare("select id, f_name, profile_pic , email from users where user_type='Seller'");
    $query->execute(); 
    $result = $query->get_result();
    $response =[];
    
    if(($result->num_rows)>0){
        //$response["success"] =true;
       /* $info=[];
        while($a = $result->fetch_assoc()){
            $response[] = $a;
        } */
        while($a = $result->fetch_assoc()){
            $sellers[] = $a;
        } 
        $response["sellers"] = $sellers;
        $response["jwt"] = $json["JWT"];
        echo json_encode($response);
    }
    else{
        $response["success"] =false;
        $response["error"] ="Wrong Credentials";
        echo json_encode($response);
    }

}

?>