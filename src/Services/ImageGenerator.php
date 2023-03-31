<?php

namespace App\Services;

use OpenAI\Client;

class ImageGenerator
{
    private Client $client;
    private string $apiKey;

    public function __construct(Client $client, string $apiKey)
    {
        $this->client = $client;
        $this->apiKey = $apiKey;
    }

    public function fetchImage(): string
    {
        $response = $this->client->images()->create(
            [
                'prompt' => 'a cat with green eyes',
                'n' => 1,
                'size' => '256x256',
                'response_format' => 'url'
            ]
        );

        $imageUrl = $response->data[0]->url;

        return $imageUrl;
    }
}
