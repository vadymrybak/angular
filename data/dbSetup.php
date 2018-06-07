<?php

$host = 'vadymrybakcom.ipagemysql.com';
$dbname = 'main';
$login = 'larsj';
$password = 'mailNakie3';

$conn = new mysqli($host, $login, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>