<?php
    $connect = new mysqli("localhost", "root", "", "demo-1-4-3");
    $flagLog = 0;
    if($res = mysqli_query($connect,  "SELECT `login` FROM users")){
        while($row = mysqli_fetch_assoc($res)){
            if($_GET['log'] == $row['login']){
                $flagLog = 1;
            }
        }
        echo $flagLog;
    }
?>