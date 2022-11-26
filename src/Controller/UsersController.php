<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UsersController extends AbstractController
{
    /**
     * @Route("/home", name="home",defaults={"reactRouting":null})
     */
    public function home(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'UsersController',
        ]);
    }

     /**
     * @Route("/users", name="users",defaults={"reactRouting":null})
     */
    public function users(): Response
    {
        return $this->render('home/users.html.twig', [
            'controller_name' => 'UsersController',
        ]);
    }
}
