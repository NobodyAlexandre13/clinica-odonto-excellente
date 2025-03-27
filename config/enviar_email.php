<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = htmlspecialchars($_POST["nome"]);
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $data = htmlspecialchars($_POST["data"]);
        $servico = htmlspecialchars($_POST["servico"]);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(["status" => "error"]);
            exit;
        }

        $to = "alexandresampaio726@gmail.com";
        $subject = "Nova Marcação: $nome";
        $message = "Nome: $nome\nEmail: $email\nData: $data\nServiço: $servico";
        $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error"]);
        }
    }
?>