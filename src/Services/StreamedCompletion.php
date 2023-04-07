<?php

namespace App\Services;
use OpenAI\Responses\CompletionResponse;

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
        $promptDavinci = $_GET['promptDavinci'];

        $responses = [];

        $stream = $this->client->completions()->createStreamed([
            'model' => 'text-davinci-003',
            'prompt' => $promptDavinci
        ]);

        $responses = [];

        foreach ($stream as $response) {
            $responses[] = $response->choices[0]->text;
        }

        return $responses;
    }
}
