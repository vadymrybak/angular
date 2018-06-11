<?php 

include_once("dbSetup.php");
 
$sql = "SELECT name FROM companies";
$result = $conn->query($sql);
  
$results = array("payload" => array());

if ($result->num_rows > 0) {

    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$results["payload"][] = $row["name"];
    }


} else {
    echo "0 results";
}

echo json_encode($results);

$conn->close();



?> 