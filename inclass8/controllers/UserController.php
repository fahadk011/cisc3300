<?php
namespace controllers;

require_once 'models/User.php';
use models\User;

class UserController {
    public function index() {
        $user = new User();

        $users = $user->getAllUsers();

        var_dump($users);
    }
}
?>
