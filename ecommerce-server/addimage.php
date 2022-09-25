
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

if (isset($json['user']['id']) && isset($_POST['image64base'])){
    extract($_POST);
    $name = $json['user']['id'] . "-" . ($json['user']['name']);
    $base64_string = $image64base;
    //echo $base64_string;
    $decoder = base64_decode($base64_string);
    $img = imagecreatefromstring($decoder);
    //echo $decoder;
    if($img){
            //echo 'worked';
            $url = '../client-frontend/images/uploadedimages/' . $name . ".jpg";
            imagejpeg($img, $url);
            //query to insert
            $response['addedimage'] = true;
            $query = $mysqli->prepare("UPDATE `users` SET `profile_pic` = ? WHERE `users`.`id` = ?");
            $query->bind_param("si", $url, $json['user']['id']);
        }
        $query->execute();
        $response['editeduser'] = true;
    
        if (($query->error) == "") {
            $response["success"] = true;
            $response["jwt"] = $json["JWT"];
            echo json_encode($response);
        } else {
            $response["success"] = false;
            $response["error"] = "Wrong Credentials";
            echo json_encode($response);
        }
}
?>