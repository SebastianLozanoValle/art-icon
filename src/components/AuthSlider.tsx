'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Reveal } from '@/components/generics/Reveal'

export const AuthSlider = () => {
    return (
        <Reveal className="relative left-[100vw] lg:left-auto min-h-full h-0 lg:h-auto w-0 lg:w-1/2 hidden lg:block">
            <Carousel
                className="z-10 min-h-full min-w-full absolute top-0 left-0"
                plugins={[
                    Autoplay({
                        delay: 5000,
                        // stopOnMouseEnter: true,
                        // stopOnInteraction: false,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className="h-screen py-4">
                    <CarouselItem className="h-full w-full relative">
                        <Image
                            src='/banner_image.jpg'
                            alt="Background Image"
                            fill
                            objectFit="cover"
                            quality={100}
                            className=" rounded-xl"
                            priority
                        />
                        <div className="absolute bottom-20 flex left-1/2 transform -translate-x-1/2 w-1/2 text-center justify-center items-center">
                            <CarouselPrevious className="bg-black/30 backdrop-blur-sm text-white" />
                            <p className="text-xl text-white p-4 rounded-full bg-black/30 backdrop-blur-sm">Su mensaje de propaganda aqui</p>
                            <CarouselNext className="bg-black/30 backdrop-blur-sm text-white" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="h-full w-full relative">
                        <Image
                            src='/laser_lapiz.jpg'
                            alt="Background Image"
                            fill
                            objectFit="cover"
                            quality={100}
                            className=" rounded-xl"
                            priority
                        />
                        <div className="absolute bottom-20 flex left-1/2 transform -translate-x-1/2 w-1/2 text-center justify-center items-center">
                            <CarouselPrevious className="bg-black/30 backdrop-blur-sm text-white" />
                            <p className="text-xl text-white p-4 rounded-full bg-black/30 backdrop-blur-sm">Su mensaje de propaganda aqui pero este mas largo a ver que tal va quednado</p>
                            <CarouselNext className="bg-black/30 backdrop-blur-sm text-white" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className="z-20 relative text-white p-4 h-0 w-0 hidden lg:block lg:w-auto lg:h-auto">
                <div className="flex items-center justify-between">
                    <div className="p-10 text-xl font-extrabold">
                        <Link href={'/'}>Art<br/>Icon</Link>
                    </div>
                    <Link href={'/'} className="flex items-center gap-4 bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full transition-all duration-500 ease-in-out transform hover:scale-95 font-bold" >
                        <p>Volver al inicio</p>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </Reveal>
    )
}