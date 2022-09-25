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
    if (isset($_POST['matchingnumbers'])) {
        extract($_POST);
        echo 'gg';
        print_r($matchingnumbers);
        for($i = 0; $i < $matchingnumbers; $i++){
            //echo $matchingnumbers[$i];
            if($matchingnumbers[$i] == 0){
                $today = date("y-m-d");
                $query = $mysqli->prepare("UPDATE `lotteries` SET `id_match_one` = ? WHERE `lotteries`.`date` = ?");
                $userid = $json['user']['id'];
                $query->bind_param("ss", $userid, $today);
                $query->execute();
                $result = $query->get_result();
                $response = [];
        
                if (($query->error) == "") {
                    $products=[];

                    $response["success"] = true;
                    $response["products"] = $products;
                    $response["jwt"] = $json["JWT"];
                    echo json_encode($response);
                } else {
                    $response["success"] = false;
                    $response["error"] = "Wrong Credentials";
                    echo json_encode($response);
                }
            }
            else if($matchingnumbers[$i] == 1){
                $today = date("y-m-d");
                $query = $mysqli->prepare("UPDATE `lotteries` SET `id_match_two` = ? WHERE `lotteries`.`date` = ?");
                $userid = $json['user']['id'];
                $query->bind_param("ss", $userid, $today);
                $query->execute();
                $result = $query->get_result();
                $response = [];
        
                if (($query->error) == "") {

                    $response["success"] = true;
                    $response["products"] = $products;
                    $response["jwt"] = $json["JWT"];
                    echo json_encode($response);
                } else {
                    $response["success"] = false;
                    $response["error"] = "Wrong Credentials";
                    echo json_encode($response);
                }
            }
            else if($matchingnumbers[$i] == 2){
                $today = date("y-m-d");
                $query = $mysqli->prepare("UPDATE `lotteries` SET `id_match_three` = ? WHERE `lotteries`.`date` = ?");
                $userid = $json['user']['id'];
                $query->bind_param("ss", $userid, $today);
                $query->execute();
                $result = $query->get_result();
                $response = [];
        
                if (($query->error) == "") {
                    $products=[];
                    while ($a = $result->fetch_assoc()) {
                        $products[] = $a;
                    }
                    $response["success"] = true;
                    $response["products"] = $products;
                    $response["jwt"] = $json["JWT"];
                    echo json_encode($response);
                } else {
                    $response["success"] = false;
                    $response["error"] = "Wrong Credentials";
                    echo json_encode($response);
                }
            }
        }
    }
    else{
        echo 'notset';
    }
}
else{
    echo 'jwt error';
}
?>