<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TranscribeController extends AbstractController
{
    #[Route('/transcribe', name: 'app_transcribe')]
    public function index(): Response
    {
        return $this->render('transcribe/transcribe.html.twig', [         
        ]);
    }
}
