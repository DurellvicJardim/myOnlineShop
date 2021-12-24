<?php
    $conn = mysqli_connect('localhost', 'root', '', 'mywholeheart');

    $sql = mysqli_query($conn, "SELECT * FROM products");

    $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

    exit(json_encode($result));
?>