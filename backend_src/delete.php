<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:DELETE');
header("Access-Control-Allow-Headers: X-Requested-With,Content-Type");
// header('Access-Control-Allow-Origin:Content-Type,Access-Control-Allow-Headers,Authorization,X-Request-With');
error_reporting(0);
$data = json_decode(file_get_contents("php://input"));
include('db.php');
if($data->id){
    $sql = "DELETE FROM tbl_student_registration WHERE id=".$data->id;
    $result = mysqli_query($conn, $sql);
    if($result){ 
        echo json_encode(['status'=>'success','msg'=>'Student deleted']);
    }
    else{
        echo json_encode(['status'=>'failed','msg'=>'Student not deleted']);
    }
}
else{
    echo json_encode(['status'=>'failed','msg'=>'product id is not provided']);
}




mysqli_close($conn);
?>