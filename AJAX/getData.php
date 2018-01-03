<?php
if(!isset($_GET['callback']) || empty($_GET['callback'])){
    header('HTTP/1.0 404 Not Found');
    die();
}

$obj = array(
    'firstName'=> 'Jan',
    'lastName'=> 'Kowalski',
    'age'=> 32
);
    
$_GET['callback'];    //Pobranie wartości z query stringa

header('Content-Type: text\javascript');
?>

<?php echo $_GET['callback']; ?>(<?php echo json_encode($obj); ?>)