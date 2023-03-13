<?php   
    $conn = new mysqli("localhost", "root", "", "demo-1-4-3");
if(isset($_POST["fio"]) &&
isset($_POST["login"]) &&
isset($_POST["password"]) &&
isset($_POST["email"])){

    $fio=htmlspecialchars($_POST['fio']);
    $login=htmlspecialchars($_POST['login']);
    $password=htmlspecialchars($_POST['password']);
    $email=htmlspecialchars($_POST['email']);
    $sql='INSERT INTO `users`(`fio`, `login`, `password`, `email`,`status`) VALUES ("'.$fio.'","'.$login.'","'.$password.'","'.$email.'", "registered")';
    mysqli_query($conn,$sql);
}else{
}   
include 'index.php';

?><?php
header("Location: http://www.example.com/"); /* Redirect browser */

/* Make sure that code below does not get executed when we redirect. */
exit;
?>