<?php
$servername = "srv-dev.dayalinfosystems.com";
$username = "ankitr";
$password = "Ar#6203&";
$dbname = "db_ankitr";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

