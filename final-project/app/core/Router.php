<?php

namespace app\core;

use app\controllers\MainController;
use app\controllers\ContactController;

class Router {

    public $urlArray;

    public function __construct()
    {
        $this->urlArray = $this->routeSplit();
    }

    public function handleRoutes() {
        $urlArray = $this->urlArray;
        $size = count($urlArray);
        $first_path = $urlArray[0];
        $path_fragment = array_slice($urlArray, 1);
        switch ($first_path) {
            case "contact": {
                $this->handleContactRoutes($path_fragment);
            }
            break;
            default: {
                $this->handleMainRoutes($path_fragment);
            }
        }
    }

    private function routeSplit() {
        $url = strtok($_SERVER["REQUEST_URI"], '?');
        $pathpos = strpos($url, BASE_URL_PATH);
        $tail = substr($url, $pathpos + strlen(BASE_URL_PATH) );
        return explode("/", $tail);
    }

    protected function handleMainRoutes($path_fragment) {
        $conotroller = new MainController();
        $conotroller->handle($path_fragment);
    }

    protected function handleContactRoutes($path_fragment) {
        $controller = new ContactController();
        $controller->handle($path_fragment);
    }
}