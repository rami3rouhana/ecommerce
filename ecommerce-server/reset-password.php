<?php

require __DIR__ . '/../vendor/autoload.php';
$jwt = require('auth.php');
$email = require('email.php');

$email(json_encode([
    "email"=>"rami.3.rouhana@gmail.com",
    "name"=>"Ramy",
    "url"=>"localhost/resetpassword/aushdiuashdojasnfasi",
]));

$user_info = $jwt(json_encode([
    "jwt"=>"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQsIm5hbWUiOiJyYW15Iiwicm9sZSI6MiwiZXhwIjoxNjYzNzE0MjE2fQ.sUEJeFAa6XdVRJdURXH_WrJHaGJRLbbc3-ZxYBuuo6Y",]));

?>