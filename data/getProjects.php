<?php 

include_once("dbSetup.php");

$page_number = $_GET["page"];
$projects_per_page = $_GET["itemsPerPage"];
$search_string = $_GET["searchString"];
 
$start_index = null;
if ($page_number === 1){
    $start_index = 0;
}
else {
    $start_index = $page_number * $projects_per_page - $projects_per_page;
}

$sql = "SELECT * FROM projects LIMIT $start_index, $projects_per_page";
$result = $conn->query($sql);

$results = array("payload" => array());

if ($result->num_rows > 0) {

    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$results["payload"][] = $row;
    }


} else {
    echo "0 results";
    $conn->close();
    die();
}

echo json_encode($results);

$conn->close();



?> 