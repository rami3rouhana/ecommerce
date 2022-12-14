<?php
//INSERT INTO `vouchers` (`code`, `amount`, `used`, `client_id`) VALUES ('AED123', '20', '0', '1');
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
if ($json['user']['user_type'] == "Admin") {
    if (isset($_POST['email']) && isset($_POST['name']) && isset($_POST['password'])) {
        extract($_POST);
        $query = $mysqli->prepare("INSERT INTO `users` (`email`, `f_name`, `password`, `user_type`) VALUES (?, ?, ?, ?)");
        $password = hash('sha256', $_POST['password']);
        $usertype = "Seller";
        $query->bind_param("ssss", $email , $name , $password, $usertype);
        $query->execute();
        $result = $query->get_result();

        if (($query->error) == "") {
            $response['insertedID'] = $query->insert_id;
            $response["success"] = true;
            $response["jwt"] = $json["JWT"];
            echo json_encode($response);
        } else {
            $response["success"] = false;
            $response["error"] = "Wrong Credentials";
            echo json_encode($response);
        }
    }
}
else{
    echo 'jwt error';
}
?>