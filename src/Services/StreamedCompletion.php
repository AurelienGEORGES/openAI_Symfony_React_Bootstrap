<?php

namespace App\Services;

use OpenAI\Client;

class StreamedCompletion
{
    private Client $client;
    private string $apiKey;

    public function __construct(Client $client, string $apiKey)
    {
        $this->client = $client;
        $this->apiKey = $apiKey;
    }

    public function streamedResponse(): array
    {
        $prompt = $_GET['prompt'];

        $stream = $this->client->completions()->createStreamed([
            'model' => 'text-davinci-003',
            'prompt' => $prompt,
            'max_tokens' => 2048
        ]);

        foreach ($stream as $response) {
            $responses[] = $response->choices[0]->text;
        }

        return $responses;
    }
}
