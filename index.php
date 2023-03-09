<?php
error_reporting(E_ALL);
    include 'mainpage1.html';
    $conn = new mysqli("localhost", "root", "", "demo-1-4-3");
    if(isset($_GET['pageno'])){
        $pageno = $_GET['pageno'];
    }else{
        $pageno = 1;
    }
    $size_page = 4;
    $offset = ($pageno-1) * $size_page;
    $result = mysqli_query($conn, "SELECT COUNT(*) FROM `orders`");
    $tot_rows = mysqli_fetch_array($result)[0];
    $total_page = ceil($tot_rows / $size_page);
    
    $sql = "SELECT 
    category.name,  
    `status-id`, 
    orders.name, 
    `foto-before`, 
    `foto-after` 
    FROM 
        `orders`
    LEFT JOIN `category` ON category.id = `category-id`
    ORDER BY orders.timestamp DESC LIMIT $offset, $size_page";

    if($res = mysqli_query($conn, $sql)){
        while($row = mysqli_fetch_assoc($res)){
            echo("<div class='card'>
               <div class='first' 
               style='
               background-image: url(\"IMAGE/" . $row['foto-before'] ."\");
               background-repeat: no-repeat;
               background-size: cover;'>
               </div>
               <div class='second'
               style='
               background-image: url(\"IMAGE/" . $row['foto-after'] ."\");
               background-repeat: no-repeat;
               background-size: cover;'>
               </div>
            </div>");
        }
    }
    ?>
    <ul>
        <li>
            <a href="?pageno=1">Первый</a>
        </li>
        <li>
        <a href="<?php if($pageno>1){echo "?pageno=".($pageno-1);}?>">Назад</a>
        </li>
        <li>
        <a href="<?php if($pageno<$total_page){echo "?pageno=".($pageno+1);}?>">Вперёд</a>
        </li>
        <li>
        <a href="?pageno=<?php echo $total_page; ?>">Последний</a>
        </li>
    </ul>
    <?php
    include 'mainpage2.html';
