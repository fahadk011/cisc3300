<?php
$users = [
    'Alice' => 'alice@example.com',
    'Bob' => 'bob@example.com',
    'Charlie' => 'charlie@example.com'
];

foreach ($users as $name => $email) {
    echo "Name: $name, Email: $email<br>";
}
?>

<?php
function greetUser(string $name, string $greeting = 'Hello'): string {
    return "$greeting, $name!";
}

echo greetUser('Alice'); // Default greeting
echo "<br>";
echo greetUser('Bob', 'Hi'); // Custom greeting
?>

