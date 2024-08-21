'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useForm } from 'react-hook-form'
import { Reveal } from "@/components/generics/Reveal";
import { FcGoogle } from "react-icons/fc";

export default function Register() {

    const { register, handleSubmit } = useForm()

    return (
        <div className="flex-1 flex items-center justify-center text-white">
                <div className="flex flex-col gap-8 w-[70%]">
                    <Reveal delay={0.25}>
                        <h1 className="text-5xl font-bold">
                            Inicia sesión
                        </h1>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <span className="text-sm">
                            Aun no tienes una cuenta? <Link href={'/auth/register'} className="text-blue-500 hover:underline" >Registrate</Link>
                        </span>
                    </Reveal>

                    <form action="" className="flex flex-col gap-6">
                        <Reveal delay={0.75} className="flex flex-col gap-2">
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <input type="text" id="email" placeholder="Correo" {...register} className="w-full p-2 bg-black/30 backdrop-blur-sm outline-blue-500 rounded border-0" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <input type="password" id="email" placeholder="Contraseña" {...register} className="w-full p-2 bg-black/30 backdrop-blur-sm outline-blue-500 rounded border-0" />
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={1}>
                            <button className="w-full py-4 rounded bg-blue-600 tranform hover:scale-95 transition-all duration-500">
                                Iniciar sesión
                            </button>
                        </Reveal>
                    </form>
                    <Reveal delay={1.25}>
                        <div className="w-full relative">
                            <div className="w-full border border-gray-500"></div>
                            <span className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-gray-500 px-4 text-center">Ó ingresa con</span>
                        </div>
                    </Reveal>
                    <Reveal delay={1.5}>
                        <button className="flex justify-center items-center gap-2 w-full py-4 rounded border tranform hover:scale-95 transition-all duration-500">
                            <FcGoogle className="text-3xl" />
                            <span className="font-bold">
                                Google
                            </span>
                        </button>
                    </Reveal>
                </div>
            </div>
    )
}
