<?php

namespace App\Services;

use OpenAI\Client;
use OpenAI\Responses\Audio\TranscriptionResponse;

class Audio
{
    private Client $client;
    private string $apiKey;

    public function __construct(Client $client, string $apiKey)
    {
        $this->client = $client;
        $this->apiKey = $apiKey;
    }

    public function audio(): TranscriptionResponse
    {

        $response = $this->client->audio()->transcribe([
            'model' => 'whisper-1',
            'file' => fopen('audio.mp3', 'r'),
            'response_format' => 'verbose_json',
        ]);

        foreach ($response->segments as $segment) {
            $segment->text;
        }
        
        $response->toArray();

        return $response;
    }
}
