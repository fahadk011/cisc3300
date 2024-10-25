<?php
require_once 'controllers/UserController.php';

use controllers\UserController;

$controller = new UserController();

if ($_SERVER['REQUEST_URI'] == '/homework-7/users') {
    $controller->getUsers();
} else {
    $controller->index();
}
