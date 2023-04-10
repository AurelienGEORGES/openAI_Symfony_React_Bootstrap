<?php

namespace App\Services;

use OpenAI\Client;

class ChatGPT
{
    private Client $client;
    private string $apiKey;

    public function __construct(Client $client, string $apiKey)
    {
        $this->client = $client;
        $this->apiKey = $apiKey;
    }

    public function obtainResponse(): string
    {

        $prompt  = $_GET['prompt'];

        $response = $this->client->chat()->create(
            [
                'model' => 'gpt-3.5-turbo',
                'messages' => [
                    ['role' => 'user', 'content' => $prompt],
                ]
            ]
        );
        
        $answer = $response->choices[0]->message->content;      

        return $answer;
    }
}
