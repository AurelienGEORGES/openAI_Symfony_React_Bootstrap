<?php

namespace App\Controller;

use App\Services\ChatGPT;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ChatController extends AbstractController
{

    private ChatGPT $chatGPT;

    public function __construct(ChatGPT $chatGPT)
    {
        $this->chatGPT = $chatGPT;
    }

    #[Route('/chat', name: 'app_chat')]
    public function index(): Response
    {
        return $this->render('chat/chat.html.twig', []);
    }

    #[Route('/chat/answer', name: 'app_chat_answer', methods: ['GET'])]

    public function obtainResponse(Request $answer, ChatGPT $chatGPT): Response
    {
        return $this->render('chat/chatResponse.html.twig', [
            'answer' => $chatGPT->obtainResponse($answer)
        ]);
    }
}
