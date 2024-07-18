<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);

    if (!isset($request['form_type'])) {
        echo json_encode(['success' => false, 'message' => 'Form type not specified.']);
        exit;
    }

    $form_type = $request['form_type'];
    $to = 'team@memesteak.io';

    if ($form_type === 'projectContact') {

        $name = $request['name'];
        $telegram = $request['telegram'];
        $email = $request['email'];
        $description = $request['description'];

        $subject = 'MemeSteak - New project contact';
        $email_message = "Name: $name\n";
        $email_message .= "Telegram Handle: $telegram\n";
        $email_message .= "Email: $email\n";
        $email_message .= "Project Description: $description\n";
    } elseif ($form_type === 'partnershipContact') {

        $name = $request['name'];
        $agency = $request['agency'];
        $social = $request['social'];
        $proposal = $request['proposal'];
        $email = $agency;

        $subject = 'MemeSteak - New partnership contact';
        $email_message = "Name: $name\n";
        $email_message .= "Agency: $agency\n";
        $email_message .= "Social: $social\n";
        $email_message .= "Proposal: $proposal\n";
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid form type.']);
        exit;
    }

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
