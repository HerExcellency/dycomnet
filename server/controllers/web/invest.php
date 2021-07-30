<?php

class invest extends ServerController
{
    public function __construct()
    {
    }

    public function index()
    {
        $data['page_title'] = 'Get Secured Investment and sponsorship Portfolios. Reaprite - bringing you closer to your financial goals and dreams with secure savings and investment platform. Invest money online, invest online and earn money';
        $data['menu_active'] = 'invest'; // the menu active tab
        $this->loadView('invest', @$data);
    }
}
