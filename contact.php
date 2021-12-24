<?php
    $conn = mysqli_connect('localhost', 'root', '', 'mywholeheart');

    $email = $_POST['email'];
    $fullname = $_POST['fullname'];
    $subject= $_POST['subject'];
    $query = $_POST['query'];

    $sql = mysqli_query($conn, "INSERT INTO `contact` (`email`, `fullname`, `subject`, `query`) VALUES ('$email', '$fullname', '$subject', '$query')");

    if($sql){
        echo "
        <div class='alert alert-danger fw-bold'>
            <p class='text-center'>We have recieved your query, we will contact you via email as soon as possible :)!</p>   
            <p class='text-center'>Return to shop:</p>
            <a href='shop.html' class='text-decoration-none text-dark text-decoration-underline'>
                <i class='bi bi-shop mt-4 mb-4 d-flex justify-content-center'></i>
            </a>
        </div>
        ";
    }
?>