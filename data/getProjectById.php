<?php 

include_once("dbSetup.php");

$project_id = $_GET["id"];


$sql = "SELECT DISTINCT  * FROM projects WHERE id = $project_id";
$result = $conn->query($sql);

$results = array("payload" => array());

if ($result->num_rows > 0) {

    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$results["payload"] = $row;
    }


} else {
    echo "0 results";
    $conn->close();
    die();
}

echo json_encode($results, JSON_NUMERIC_CHECK);

$conn->close();

?> 