<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Redirect if not logged in
if (!isset($_SESSION['user_id'])) {
    $current_dir = basename(dirname($_SERVER['PHP_SELF']));
    $login_path = ($current_dir == 'admin' || $current_dir == 'teacher' || $current_dir == 'student') 
                  ? '../login.php' 
                  : 'login.php';
    header("Location: $login_path");
    exit();
}

// Get user info
$name = $_SESSION['name'];
$role = strtolower($_SESSION['role']);

// Determine base path for assets and links
$current_dir = basename(dirname($_SERVER['PHP_SELF']));
$base_path = ($current_dir == 'admin' || $current_dir == 'teacher' || $current_dir == 'student') ? '../' : '';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>University Portal</title>
    <link rel="stylesheet" href="<?php echo $base_path; ?>assets/css/style.css">
</head>
<body>
    <div class="sidebar">
        <div class="sidebar-logo">
            <img src="<?php echo $base_path; ?>assets/images/logo.png" alt="University Logo" class="logo-img">
            <h2>University Portal</h2>
        </div>

        <p>Welcome, <?php echo htmlspecialchars($name); ?></p>

        <ul>
            <?php if($role == 'admin'){ ?>
                <li><a href="<?php echo $base_path; ?>admin/dashboard.php">Dashboard</a></li>
                <li><a href="<?php echo $base_path; ?>admin/admin_analytics.php">Analytics</a></li>
                <li><a href="<?php echo $base_path; ?>admin/manage_users.php">Manage Users</a></li>
                <li><a href="<?php echo $base_path; ?>admin/manage_courses.php">Manage Courses</a></li>
                <li><a href="<?php echo $base_path; ?>admin/manage_enrollments.php">Manage Enrollments</a></li>
                <li><a href="<?php echo $base_path; ?>admin/manage_fees.php">Manage Fees</a></li>
                <li><a href="<?php echo $base_path; ?>admin/manage_attendance.php">Manage Attendance</a></li>
            <?php } elseif($role == 'teacher'){ ?>
                <li><a href="<?php echo $base_path; ?>teacher/dashboard.php">Dashboard</a></li>
                <li><a href="<?php echo $base_path; ?>teacher/enter_marks.php">Enter Marks</a></li>
                <li><a href="<?php echo $base_path; ?>teacher/attendance.php">Mark Attendance</a></li>
                <li><a href="<?php echo $base_path; ?>teacher/view_attendance.php">View Attendance</a></li>
                <li><a href="<?php echo $base_path; ?>teacher/analytics.php">Analytics</a></li>
            <?php } elseif($role == 'student'){ ?>
                <li><a href="<?php echo $base_path; ?>student/dashboard.php">Dashboard</a></li>
                <li><a href="<?php echo $base_path; ?>student/view_marks.php">View Marks</a></li>
                <li><a href="<?php echo $base_path; ?>student/attendance.php">Attendance</a></li>
                <li><a href="<?php echo $base_path; ?>student/evaluate.php">Evaluate Courses</a></li>
            <?php } ?>
            <li><a href="<?php echo $base_path; ?>logout.php">Logout</a></li>
        </ul>
    </div>

    <div class="main-content">
