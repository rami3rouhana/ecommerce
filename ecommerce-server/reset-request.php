<?php
// Connection
include("connection.php");
//required file
require __DIR__ . '/../vendor/autoload.php';
$sendEmail = require('email.php');
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
// Convert data
$jwtFunction = require('auth.php');
$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST['email']))
{
extract($_POST);
//$password = hash('sha256', $_POST['password']);;
$email = $_POST['email'];

$query=$mysqli->prepare("select id, f_name, l_name, user_type, email from users where email=?");
$query->bind_param("s",$email);
$query->execute();
$result = $query->get_result();
//echo $result->fetch_assoc();
$response =[];

if(($result->num_rows)==1){
    while($a = $result->fetch_assoc()){
        $info =$a;
    }

    $jwt = $jwtFunction(json_encode([
        "id"=> $info['id'],
        "name"=> $info['f_name'],
        "email"=> $info['email'],
        "user_type"=> $info['user_type'],
        "banned"=> true
    ]));
    $user_id = $info['id'];
    $url = "http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=".json_decode($jwt)->JWT;
    $query = $mysqli->prepare("INSERT INTO `reset` (`reset_url`, `user_id`) VALUES (?, ?);");
    $query->bind_param("ss",$url  , $user_id);
    $query->execute(); 
    $sendEmail(json_encode([
        "email"=>$info['email'],
        "name"=>$info['f_name'],
        "url"=>$url,
    ]));
    echo json_encode($response);
}
else{
    $response["success"] =false;
    $response["error"] ="Wrong Credentials";
    echo json_encode($response);
}
}

?>