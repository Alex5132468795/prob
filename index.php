<?php
error_reporting(E_ALL);
    include 'mainpage1.html';
    $conn = new mysqli("localhost", "root", "", "grymroom");
    $sql = "SELECT
    category.CATEGOR, 
    ID_STATUS, 
    NAME_ANIMAL, 
    DESCRIPTION, 
    FOTO_AFTER, 
    FOTO_BEFORE 
    FROM orders LEFT JOIN category ON category.ID = ID_CATEGORY;"
    if($res = mysqli_query($conn, $sql)){
        while($row = mysqli_fetch_array($res)){
            ?>
            <div style="background-image: 'IMAGE/'<?php $row[FOTO_AFTER]?> ;">
            <div style="background-image: 'IMAGE/'<?php $row[FOTO_BEFORE]?> ;">
            <?php
        }
    }
    include 'mainpage2.html';