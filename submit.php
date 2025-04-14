<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["username"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Display the submitted data
    echo "Name: " . $username . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";
}
?>