import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from './ui/card'
  
import React from 'react'

const ImageCarousel = ({images}:{images:File[]}) => {
  return (
            <Carousel className="w-full max-w-xs">
            <CarouselContent>
            {images.map((image, index) => (
                <CarouselItem key={index}>
                <div className="p-1">
                    <Card >
                    <CardContent className="flex aspect-square items-center justify-center ">
                      <img src={URL.createObjectURL(image)} className='w-full ' alt={`Preview ${index + 1}`} />
                    </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
  )
}

export default ImageCarousel