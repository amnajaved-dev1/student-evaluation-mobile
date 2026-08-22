<?php
header('Content-Type: application/json');
include '../includes/db.php';

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (!$email || !$password) {
    echo json_encode(['success'=>false,'message'=>'Email or password missing']);
    exit;
}

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn,$sql);

if($result && mysqli_num_rows($result) > 0){
    $user = mysqli_fetch_assoc($result);
    echo json_encode([
        'success'=>true,
        'message'=>'Login successful',
        'role'=>strtolower($user['role']), // admin/teacher/student
        'name'=>$user['name'],
        'user_id'=>$user['user_id']
    ]);
}else{
    echo json_encode(['success'=>false,'message'=>'Invalid credentials']);
}

mysqli_close($conn);
?>
