<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:GET');
header("Access-Control-Allow-Headers: X-Requested-With,Content-Type");
// header('Access-Control-Allow-Origin:Content-Type,Access-Control-Allow-Headers,Authorization,X-Request-With');
error_reporting(0);
$data = json_decode(file_get_contents("php://input"));
include('db.php');
$sql = "SELECT * FROM tbl_student_registration";

if(isset($_GET['id'])){
  $sql = "SELECT * FROM tbl_student_registration WHERE id=".$_GET['id'];
}

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
 $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
 echo json_encode($output);
//  echo json_last_error_msg(); // Print out the error if any
// die(); // halt the script
}
else {
  echo json_encode(['status'=>"success","msg"=>"No Reord Available"]);
}

mysqli_close($conn);
?>