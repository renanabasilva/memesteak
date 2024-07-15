<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $to = 'renanaba.dev@gmail.com';
    $subject = 'MemeSteak - New project contact';

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $name = $request->name;
    $telegram = $request->telegram;
    $email = $request->email;
    $description = $request->description;

    $email_message = "Name: $name\n";
    $email_message .= "Telegram Handle: $telegram\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Project Description: $description\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $success = mail($to, $subject, $email_message, $headers);

    if ($success) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
