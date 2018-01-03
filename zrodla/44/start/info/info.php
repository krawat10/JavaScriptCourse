<?php

if(isset($_GET['resolution']) && !empty($_GET['resolution'])) {

    file_put_contents('resolutions.txt', $_GET['resolution'] . PHP_EOL, FILE_APPEND);

}

header('Content-Type: image/gif');
readfile('1x1.gif');