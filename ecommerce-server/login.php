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
if(isset($_POST['email']) && isset($_POST['password']))
{

$email = $_POST['email'];
$password = hash('sha256', $_POST['password']);;

$query=$mysqli->prepare("select id, f_name, l_name, user_type, email from users where email=? and password=?");
$query->bind_param("ss",$email,$password );
$query->execute();
$result = $query->get_result();
$response =[];

if(($result->num_rows)==1){
    $response["success"] =true;
    $info=[];
    while($a = $result->fetch_assoc()){
        $info =$a;
    }

    $jwt = $jwtFunction(json_encode([
        "id"=> $info['id'],
        "name"=> $info['f_name'],
        "email"=> $info['email'],
        "user_type"=> $info['user_type']
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