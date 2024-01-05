<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:PUT');
header("Access-Control-Allow-Headers: X-Requested-With,Content-Type");
// header('Access-Control-Allow-Origin:Content-Type,Access-Control-Allow-Headers,Authorization,X-Request-With');
error_reporting(0);
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") { 
    // For preflight requests (OPTIONS), respond with a 200 OK status 
    http_response_code(200); 
    die(); 
} else if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    if($data->first_name == '' || $data->email_id == '' || $data->aadhar_no == '' || $data->date_of_birth == '' || $data->mobile == '' || $data->gender == '' || $data->country == '' || $data->state == '' || $data->city == '' || $data->street == '' || $data->landmark == '' || $data->pincode == '' || $data->username =='' || $data->password == '' || $data->hobb != '')
    {
        http_response_code(400);
        echo json_encode(['status'=>"failed","msg"=>"student not updated"]);   
        return;
    }
    include('db.php');

    if($data->id){
        // $sql = "SELECT * FROM tbl_student_registration WHERE id=".$data->id;
        // $run = mysqli_query($conn,$sql);
        // $student = mysqli_fetch_assoc($run);
        
        $query = "UPDATE tbl_student_registration SET ";
        $query.= "first_name='$data->first_name',";
        $query.= "last_name='$data->last_name',";
        $query.= "email_id='$data->email_id',";
        $query.= "aadhar_no='$data->aadhar_no',";
        $query.= "date_of_birth='$data->date_of_birth',";
        $query.= "mobile='$data->mobile',";
        $query.= "gender='$data->gender',";
        $query.= "upload_photo=$data->upload_photo,";
        $query.= "photo_name='$data->photo_name',";
        $query.= "image_blb='$data->image_blb',";
        $query.= "country='$data->country',";
        $query.= "state='$data->state',";
        $query.= "city='$data->city',";
        $query.= "street='$data->street',";
        $query.= "landmark='$data->landmark',";
        $query.= "pincode='$data->pincode',";
        $query.= "username='$data->username',";
        $query.= "password='$data->password',";
        $query.= "hobbies='$data->hobbies' WHERE id=".$data->id; 

        $run = mysqli_query($conn,$query);
        if($run){
            echo json_encode(['status'=>'success','msg'=>'Student Updated']);
        }
        else{
            echo json_encode(['status'=>"failed","msg"=>"Student not Updated"]);
        }
    }
    else{
        echo json_encode(['status'=>'failed','msg'=>'user id is not provided']);
    }

}
// $sql = "SELECT * FROM tbl_student_registration";

// $result = mysqli_query($conn, $sql);


mysqli_close($conn);
?>