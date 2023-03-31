<?php

namespace App\Controller;

use App\Services\ImageGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ImageGeneratorController extends AbstractController
{

    private ImageGenerator $imageGenerator;

    public function __construct(ImageGenerator $imageGenerator)
    {
        $this->imageGenerator = $imageGenerator;
    }

    #[Route('/image/generator', name: 'app_image_generator')]

    public function generateImage(Request $imageUrl, ImageGenerator $ImageGenerator): Response
    {

        return $this->render('image_generator/index.html.twig', [
            'imageUrl' => $ImageGenerator->fetchImage($imageUrl)
        ]);
    }
}
