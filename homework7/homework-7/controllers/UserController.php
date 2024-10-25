<?php
namespace controllers;

require_once 'models/User.php';
use models\User;

class UserController {
    public function index() {
        require 'views/users.php';
    }

    public function getUsers() {
        $user = new User();
        $users = $user->getAllUsers();
        echo json_encode($users);
    }
}
