<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "From: ". $email . "\r\n";
$header .= "X-Mailer: PHP /" . phpversion() . "\r\n";
$header .= "Mime Version 1.0 \r\n";
$header .= "Content Type: text/plain";

$comment = "This message has been sent by the one and only: " . $name . "\r\n";
$comment .= "E-mail is " .$email . "\r\n";
$comment .= "Message is " .$message . "\r\n";

$to = "rldcuevas@gmail.com";
$subject = "Contact from Test Website";

mail($to, $subject, $message, $header);

echo json_encode(array(
		'Message' => sprintf("Your message has been sent %s", $name);
	));