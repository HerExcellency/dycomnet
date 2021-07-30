<?php

class mycalculator extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $data['page_title'] = 'Reaprite - bringing you closer to your financial goals and dreams with secure savings and investment platform.';
        $data['menu_active'] = 'mycalculator'; // the menu active tab
        $this->loadView('mycalculator', @$data);
    }
}