<?php

class resource extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $this->loadView('media');
    }

    public function media()
    {
        $this->loadView('media');
    }

    public function faq()
    {
        $this->loadView('faq');
    }
}
