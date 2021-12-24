<?php
    $conn = mysqli_connect('localhost', 'root', '', 'mywholeheart');

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = mysqli_query($conn, "INSERT INTO `users` (`email`, `password`) VALUES ('$email', '$password')");
?>