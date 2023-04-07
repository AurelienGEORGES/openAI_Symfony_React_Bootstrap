<?php

namespace App\Controller;

use App\Services\StreamedCompletion;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CompletionController extends AbstractController
{
    private StreamedCompletion $streamedCompletion;

    public function __construct(StreamedCompletion $streamedCompletion)
    {
        $this->streamedCompletion = $streamedCompletion;
    }

    #[Route('/completion', name: 'app_completion')]
    public function index(): Response
    {
        return $this->render('completion/completion.html.twig', []);
    }

    #[Route('/completion/answer', name: 'app_completion_answer', methods: ['GET'])]
    public function streamedResponse(): Response
    {
        $responses = $this->streamedCompletion->streamedResponse();

        return $this->render('completion/completionResponse.html.twig', [
            'completion' => $responses
        ]);
    }
}
