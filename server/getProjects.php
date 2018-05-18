<?php 
$link = mysql_connect('vadymrybakcom.ipagemysql.com', 'larsj', 'mailNakie3'); 

if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 

mysql_select_db(main); 

echo 'Connected successfully.'; 
// $sql = "SELECT * FROM projects";
// $result = $link->query($sql);


// print_r($result);

?> 