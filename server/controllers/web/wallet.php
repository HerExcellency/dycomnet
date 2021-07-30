<?php

class wallet extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $data['page_title'] = 'Plan, Save, grow your money online using Reaprite. Reaprite - bringing you closer to your financial goals and dreams with secure savings and investment platform. ';
        $data['menu_active'] = 'wallet'; // the menu active tab
        $this->loadView('wallet', @$data);
    }
}
