<?php
$host = "localhost";       // Localhost for XAMPP
$user = "root";            // Default XAMPP user
$pass = "";                // Default XAMPP password is empty
$db   = "university_portal"; // Your local database name

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Optional: confirm connection
// echo "Connected successfully";
?>
