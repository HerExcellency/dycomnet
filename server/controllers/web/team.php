<?php

class team extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $data['page_title'] = 'Take charge of your financial future with Reaprite - Reaprite. Plan, Save and Invest online';
        $data['menu_active'] = 'team'; // the menu active tab
        $this->loadView('team', @$data);
    }
}
