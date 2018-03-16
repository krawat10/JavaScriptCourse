<?php
// Wysłanie ciasteczek
    setcookie('session', md5(rand()), time() + 60*60*24*60, '/')
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <h1>Cookies</h1>
    <script src="./Cookies.js"></script>
    </body>
</html>