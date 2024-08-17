'use client'
import Image from "next/image"
import { HeroProduct } from "../HeroProduct"
import Link from "next/link"
import { Reveal } from '@/components/generics/Reveal'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { BestSelling } from '@/components/BestSelling'
import Autoplay from "embla-carousel-autoplay"

export const Hero = () => {
    return (  
        <div className="h-auto min-h-[calc(100vh-88px)] w-full relative flex items-center">
            <Image
                src={'/banner_image.jpg'}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute top-0 left-0 w-full h-full"
            />
            <div className="flex mx-auto h-full items-center lg:w-4/5 flex-wrap text-white py-20">
                <div className="flex-1 flex flex-col">
                    <div className="mb-20 lg:m-0 h-full w-full lg:w-1/2 flex items-center justify-center">
                        <div className="z-1 flex flex-col justify-center items-center gap-4 z-[1]">
                            <Reveal>
                                <h1 className="text-center text-[60px] font-extrabold">
                                    Art Icon
                                </h1>
                            </Reveal>
                            <Reveal delay={0.5}>
                                <p className="text-center font-light text-3xl text-white">
                                    Personaliza tu idea.
                                </p>
                            </Reveal>
                            <Reveal delay={0.75}>
                                <Link className="px-4 py-2 bg-blue-500 rounded max-w-fit text-center transform transition-all duration-500 hover:scale-90" href={'/store'}>
                                    Explorar
                                </Link>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="lg:h-full w-full lg:w-1/2 flex items-center justify-center">
                    {/* <div className="relative">
                        <Reveal className="" delay={1.25} hidden={{ opacity: 0, y: -75}} visible={{ opacity: 1, y: 0}}>
                            <h2 className="z-[1] block md:hidden p-4 text-center text-3xl font-extrabold">Best Sellers</h2>
                        </Reveal>
                        <div className="grid grid-cols-2 gap-8 lg:gap-x-16 lg:gap-8 justify-between">
                            <Reveal delay={1} hidden={{ opacity: 0, y: -75}} visible={{ opacity: 1, y: 0}}>
                                <HeroProduct />
                            </Reveal>
                            <Reveal delay={0.75} hidden={{ opacity: 0, y: -75}} visible={{ opacity: 1, y: 0}}>
                                <HeroProduct />
                            </Reveal>
                            <Reveal delay={0.50} hidden={{ opacity: 0, y: -75}} visible={{ opacity: 1, y: 0}}>
                                <HeroProduct />
                            </Reveal>
                            <Reveal delay={0.25} hidden={{ opacity: 0, y: -75}} visible={{ opacity: 1, y: 0}}>
                                <HeroProduct />
                            </Reveal>
                        </div>
                    </div> */}
                    <Reveal hidden={{ opacity: 0, x: 75}} visible={{ opacity: 1, x: 0}}>
                        <Carousel
                            className="py-10 w-[75%] md:px-20 md:w-auto lg:px-0"
                            plugins={[
                                Autoplay({
                                    delay: 2000,
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
                                <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                                    <BestSelling />
                                </CarouselItem>
                                <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full">
                                    <BestSelling description="hola esto es una prueba de ver como lidia con tamaños grandes" />
                                </CarouselItem>
                                <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                                    <BestSelling />
                                </CarouselItem>
                                <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                                    <BestSelling />
                                </CarouselItem>
                                <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                                    <BestSelling />
                                </CarouselItem>
                                <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                                    <BestSelling />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}