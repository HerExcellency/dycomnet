<?php

class testimonial extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $data['page_title'] = 'Take charge of your financial future with Reaprite - Reaprite. Plan, Save and Invest online';
        $data['menu_active'] = 'testimonies'; // the menu active tab
        $this->loadView('testimonies', @$data);
    }
}
