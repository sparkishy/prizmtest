<?php
// test for the prizm media
// didn't intergrate any security feature for now

$jsVal = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "develope_prizmuser";
$password = "prizmmedia1";
$db = "develope_prizmData";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$input = $jsVal['email'];

if ($input != ""){
	$emailValid = "Valid";
	if (!filter_var($input, FILTER_VALIDATE_EMAIL)) {
	  $emailValid = "Invalid";
	} 
	
	$sql = "INSERT INTO prizmTable (email, type) VALUES ('".$input."', '".$emailValid."')";

	if ($conn->query($sql) === TRUE) {
	    echo "Insertion is successful with: ".$emailValid;
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}	
}

$conn->close();

?>