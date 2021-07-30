<?php

class security extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $data['page_title'] = 'Save With Ease Online in Nigeria. - Reaprite. Plan, Save and Invest online<';
        $data['menu_active'] = 'save'; // the menu active tab
        $this->loadView('security', @$data);
    }
}
