<?php

// Dane pobierane z bazy danych
$data = array(
    'firstName' => 'Jan',
    'lastName' => 'Kowalski Nowak',
    'age' => 28
);

echo json_encode($data);