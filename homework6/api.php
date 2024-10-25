<?php
$data = [
    'Alice' => 'alice@example.com',
    'Bob' => 'bob@example.com',
    'Charlie' => 'charlie@example.com'
];

header('Content-Type: application/json');
echo json_encode($data);
?>
