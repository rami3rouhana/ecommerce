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
extract($_POST);
$email = $_POST['email'];
//$password = hash('sha256', $_POST['password']);;
//echo $email , $password;
$query=$mysqli->prepare("SELECT * FROM users WHERE users.email = ? AND users.password = ? AND users.id NOT IN (SELECT user_id FROM banned_users)");
$query->bind_param("ss",$email,$password );
$query->execute();
$result = $query->get_result();
//echo $result->fetch_assoc();
$response =[];

if(($result->num_rows)==1){
    $response["success"] =true;
    $info=[];
    
    while($a = $result->fetch_assoc()){
        $info = $a;
    }
    $info['banned'] = false;

    $jwt = $jwtFunction(json_encode([
        "id"=> $info['id'],
        "name"=> $info['f_name'],
        "email"=> $info['email'],
        "user_type"=> $info['user_type'],
        "banned"=> $info['banned']
    ]));
    $jwt = json_decode($jwt) ;  
    $response["jwt"] = $jwt->JWT;
    $response["role"] = $info['user_type'];
    echo json_encode($response);
}
else{
    $response["success"] =false;
    $response["error"] ="Wrong Credentials";
    echo json_encode($response);
}
}

?>