<?php 
    
    session_start();

    include("CONNECTION.PHP");
    include("functions.php");

    if($_SERVER ["REQUEST_METHOD"] == "POST")
    {
        //SOMETHING WAS POSTED
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        if(!empty($username) && !empty($email) && !empty($password) && !is_numeric($username))
        {
            //save to data
            $query = "insert into users (username,email,password) values ('$username','$email','$password')";
            
            mysqli_query($con, $query);

            header("Location: HOME-REGISTER.php");
            die;
        }

        else
        {
            echo "Please fill in the information!";
        }
    }


   

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MY FAMILY CLAN TREE</title>
    <link rel="stylesheet" href="HOME-REGISTER.css">
</head>
<body>

    

    <div class="container">
        
        <div class=" form-box register-box">
            <h2>Registration</h2>
            <form  method="post">
                
                <div class="input-box">
                    <input type="text" name="username"  required>
                    <label for="username">Username</label>
                </div>
                <div class="input-box">
                    <input type="email" name="email"  required>
                    <label>Email</label>
                </div>

                <div class="input-box">
                    <input type="password" name="password" required>
                    <label>Password</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox">
                        I agree to the terms & conditions</label>
                </div>
                <button type="Submit" class="btn">Register</button>
                <div class="login-register">
                    <p>Already have an account? <a
                        href="HOME-LOGIN.php"
                        class="HOME-LOGIN.php">Login</a></p>
                </div>
            </form>
        </div>

        
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
        <span style="--i:5;"></span>
        <span style="--i:6;"></span>
        <span style="--i:7;"></span>
        <span style="--i:8;"></span>
        <span style="--i:9;"></span>
        <span style="--i:10;"></span>
        <span style="--i:11;"></span>
        <span style="--i:12;"></span>
        <span style="--i:13;"></span>
        <span style="--i:14;"></span>
        <span style="--i:15;"></span>
        <span style="--i:16;"></span>
        <span style="--i:17;"></span>
        <span style="--i:18;"></span>
        <span style="--i:19;"></span>
        <span style="--i:20;"></span>
        <span style="--i:21;"></span>
        <span style="--i:22;"></span>
        <span style="--i:23;"></span>
        <span style="--i:24;"></span>
        <span style="--i:25;"></span>
        <span style="--i:26;"></span>
        <span style="--i:27;"></span>
        <span style="--i:28;"></span>
        <span style="--i:29;"></span>
        <span style="--i:30;"></span>
        <span style="--i:31;"></span>
        <span style="--i:32;"></span>
        <span style="--i:33;"></span>
        <span style="--i:34;"></span>
        <span style="--i:35;"></span>
        <span style="--i:36;"></span>
        <span style="--i:37;"></span>
        <span style="--i:38;"></span>
        <span style="--i:39;"></span>
        <span style="--i:40;"></span>
        <span style="--i:41;"></span>
        <span style="--i:42;"></span>
        <span style="--i:43;"></span>
        <span style="--i:44;"></span>
        <span style="--i:45;"></span>
        <span style="--i:46;"></span>
        <span style="--i:47;"></span>
        <span style="--i:48;"></span>
        <span style="--i:49;"></span>

    </div>





    
 
   
    <script src="HOME-REGISTER.js"></script>
</body>
</html>