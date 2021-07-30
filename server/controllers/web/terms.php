<?php

class terms extends ServerController
{
    public function __construct()
    {
    }

    // public function index()
    // {
    //     $this->loadView('terms-conditions');
    // }
    public function index()
    {
        $data['page_title'] = 'Reaprite - bringing you closer to your financial goals and dreams with secure savings and investment platform.';
        $data['menu_active'] = 'terms'; // the menu active tab
        $this->loadView('terms-conditions');
    }
}
