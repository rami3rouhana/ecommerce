<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);

$dotenv->load();

return function ($json) {

    $json = json_decode($json, true);

    try {
        $developmentMode = true;
        $mailer = new PHPMailer($developmentMode);
        $mailer->SMTPDebug = 2;
        $mailer->isSMTP();


        $mailer->Host = 'smtp.gmail.com';
        $mailer->SMTPAuth = true;
        $mailer->Username = 'rami.3.rouhana@gmail.com';
        $mailer->Password = $_ENV['EMAIL_PASSWORD'];
        $mailer->SMTPSecure = 'ssl';
        $mailer->Port = 465;

        $mailer->setFrom('rami.3.rouhana@gmail.com', 'Ramy');
        $mailer->addAddress($json['email'], $json['name']);

        $mailer->isHTML(true);
        $mailer->Subject = 'PHPMailer Test';
        $mailer->Body = 'This is your reset link:'.$json["url"];

        $mailer->send();
        $mailer->ClearAllRecipients();
        echo json_encode(["success"=>true]);

    } catch (Exception $e) {
        echo json_encode([
            "success"=>false,
            "error"=>$e
        ]);
    }
}

?>