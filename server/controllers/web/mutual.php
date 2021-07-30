<?php

class mutual extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $this->loadView('mutual-fund');
    }
}
