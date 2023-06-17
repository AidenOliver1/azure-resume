<?php

$recepient = "contact@aidenoliver.au";
$sitename = "Azure-Hosted Online Portfolio";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Name: $name \nEmail: $email \nText: $text";

$headers = "MIME-Version: 1.0" . "\r\n";

$headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

$pagetitle = "New message from the \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"");
?>