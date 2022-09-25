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


if (isset($json['user']['id'])) {
    $query = $mysqli->prepare("SELECT users.id , users.f_name FROM messages JOIN users on users.id=receiver_id WHERE receiver_id=? or sender_id=? GROUP BY users.id");
    $userid = $json['user']['id'];
    $query->bind_param("ii", $userid, $userid);
    $query->execute();
    $result = $query->get_result();
    $response = [];
    $sellers=[];
    if (($query->error) == "") {
        while ($a = $result->fetch_assoc()) {
            $sellers[] = $a;
        }
        $response["success"] = true;
        $response['sellers'] = $sellers;
        $response["jwt"] = $json["JWT"];
        echo json_encode($response);
    } else {
        $response["success"] = false;
        $response["error"] = "Wrong Credentials";
        echo json_encode($response);
    }
}
?>