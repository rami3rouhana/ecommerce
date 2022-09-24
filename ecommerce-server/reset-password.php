<?php

require __DIR__ . '/../vendor/autoload.php';
require('connection.php');
$jwtFunction = require('auth.php');
$_POST = json_decode(file_get_contents('php://input'), true);

try{
    extract($_POST);
    $jwtInfo = $jwtFunction(json_encode(['jwt' =>  $resetJwt]));
    $json = json_decode($jwtInfo, true);

    $rest_url = 'http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt='.$resetJwt;

    $query = $mysqli->prepare("SELECT * FROM `reset` WHERE reset_url=?");
    $query->bind_param("s", $rest_url);
    $query->execute();
    $result = $query->get_result();

    if(($result->num_rows) ==1 && $result->fetch_assoc()['is_reset'] == 0){

        $query = $mysqli->prepare("UPDATE reset SET is_reset=1 WHERE reset_url=?");
        $query->bind_param("s", $rest_url);
        $query->execute();

        $user_id = $json['user']['id'];
        $pasw = $json['user']['id'];
        $query = $mysqli->prepare("update users SET password=? where id=? ");
        $query->bind_param("ss", $password, $user_id);
        $query->execute();
        $result = $query->get_result();
        $response = [];
        if (($query->error) == "") {
            $response["success"] = true;
            $response["jwt"] = $json["JWT"];
            echo json_encode($response);
        } else {
            $response["success"] = false;
            $response["error"] = "Wrong Credentials";
            echo json_encode($response);
    }}
    else{
        $response["success"] = false;
        $response["error"] = "Url already used";
        echo json_encode($response);
    }
} catch (Exception $e) {
    $response["success"] = false;
    $response["error"] = "Wong Url Link";
    echo json_encode($response);
}

// $user_info = $jwt(json_encode([
//     "jwt"=>"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQsIm5hbWUiOiJyYW15Iiwicm9sZSI6MiwiZXhwIjoxNjYzNzE0MjE2fQ.sUEJeFAa6XdVRJdURXH_WrJHaGJRLbbc3-ZxYBuuo6Y",]));

?>