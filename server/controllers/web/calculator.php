<?php

class calculator extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $data['page_title'] = 'Reaprite - bringing you closer to your financial goals and dreams with secure savings and investment platform.';
        $data['menu_active'] = 'calculator'; // the menu active tab
        $this->loadView('calculator', @$data);
    }
}
?>