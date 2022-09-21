<?php

require __DIR__ . '/../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Dotenv\Dotenv;


return function ($json) {
$json = json_decode($json, true);

$dotenv = Dotenv::createImmutable(__DIR__);

$dotenv->load();

$key = $_ENV['PASSPHRASE'];

if(isset($json['id'])){
    $payload = [
        'id' => $json["id"],
        'name' => $json["name"],
        'role' => $json["role"],
        'exp' => time()+1800,
    ];

    $jwt = JWT::encode($payload, $key, 'HS256');

    $reponse = [];
    $reponse['success'] = true;
    $reponse['JWT'] = $jwt;

    return json_encode($reponse);

}else{
    try{
        $decoded = JWT::decode($json['jwt'], new Key($key, 'HS256'));

        if(($decoded->exp)>time()){

            $payload = [
                'id' => $decoded->id,
                'name' => $decoded->name,
                'role' => $decoded->role,
                'exp' => time()+1800,
            ];
        
            $jwt = JWT::encode($payload, $key, 'HS256');
        
            $reponse = [];
            $reponse['success'] = true;
            $reponse['JWT'] = $jwt;
            $reponse['success'] = true;
            $reponse['user'] = $decoded;
            return json_encode($reponse);
            
        }else{
            return json_encode([
                "success"=>false,
                "error"=>"Expired Token"
            ]);
        }

    }
    catch (Exception $e) {
        return json_encode([
            "success"=>false,
            "error"=>"Invalid Authentication"
        ]);
    }


}

}
?>