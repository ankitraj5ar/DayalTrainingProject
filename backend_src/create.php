<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Methods:POST');
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
        echo json_encode(['status'=>"failed","msg"=>"student not added"]);   
        return;
    }
    include('db.php');
    $query = "INSERT INTO tbl_student_registration(first_name,last_name,email_id,aadhar_no,date_of_birth,mobile,gender,upload_photo,photo_name,image_blb,country,state,city,street,landmark,pincode,username,password,hobbies)";
    $query.= "VALUES ('$data->first_name','$data->last_name','$data->email_id','$data->aadhar_no','$data->date_of_birth','$data->mobile','$data->gender',$data->upload_photo,'$data->photo_name','$data->image_blb','$data->country','$data->state','$data->city','$data->street','$data->landmark','$data->pincode','$data->username','$data->password','$data->hobbies')";

    $run = mysqli_query($conn,$query);

    if($run){
        echo json_encode(['status'=>'success','msg'=>'student added']);
    }
    else{
        echo json_encode(['status'=>"failed","msg"=>"student not added"]);
    }

}


// print_r($data);

mysqli_close($conn);
?>
