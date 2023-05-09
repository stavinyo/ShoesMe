<?php
     $host = "localhost";
     $user = "itaype_admin";
     $pass = "Aa123456@";
     $db = "itaype_shoesMe";

    //create connection
    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    echo "Connection successful"."<br>";

    $name = $_POST['name'];
    $id = $_POST['id'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $pnumber = $_POST['pnumber'];
    $shoe = $_POST['shoe'];

    if (empty($name) || empty($id) || empty($age) || empty($email) || empty($pnumber) || empty($shoe)) {
        echo "Error: One or more form fields are empty. Please fill out all the fields and try again.";

    }
    else {
        $sql = "INSERT INTO lotteries (name, id, age, email, pnumber, shoe) VALUES ('$name', '$id', '$age', '$email', '$pnumber', '$shoe')";
    }

    if ($conn->query($sql) === TRUE) {
    echo "User was added to the lottery.";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>
