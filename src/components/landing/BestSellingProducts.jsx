'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { BestSelling } from '@/components/BestSelling'
import Autoplay from "embla-carousel-autoplay"

export const BestSellingProducts = () => {
    return (
        <div className="py-12 px-6 bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto">
                <div className="flex justify-between text-white">
                    <h2 className="text-3xl font-extrabold">Best Selling Products</h2>
                </div>
                <Carousel
                    className="py-10"
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnMouseEnter: true,
                            stopOnInteraction: false,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling description="aqui con un texto de prueva bien mamaguevazooooo oeoeoeoe quiero comerrr" />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <BestSelling />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}