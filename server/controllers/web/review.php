<?php

class review extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {

        $this->loadView('review');
    }
}
