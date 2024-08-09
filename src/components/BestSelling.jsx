import Image from "next/image"
import Link from "next/link"

export const BestSelling = ({ src = "/letreros.jpg", href1 = "/", href2 = "/", itemName = "Letreros", description = 'Letreros para tu negocio', price = '$49.99', cta = 'Contacto'  }) => {
    return (
        <div className="h-full transform transition-all ease-in-out duration-500 md:hover:scale-90 text-white flex flex-col items-center justify-center rounded-lg relative">
            <Link href={href1} className="relative w-full aspect-square bg-slate-100 rounded-t-lg overflow-hidden group">
                <Image
                    src={src}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold cursor-pointer">Ver detalles</span>
                </div>
            </Link>
            <div className="flex flex-col gap-4 items-start w-full bg-white rounded-b-lg text-black px-1 pt-2 pb-4 group">
                <h2 className="font-bold xl:text-xl">{itemName}</h2>
                <p className="cursor-default font-extralight text-xs xl:text-sm max-h-5 text-ellipsis overflow-hidden group-hover:max-h-20 transition-all duration-500">{description}</p>
                <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-xs xl:text-base">{price}</span>
                    <Link href={href2} className="text-xs xl:text-base px-2 bg-black border border-white rounded-md text-white transition-all ease-in-out duration-500 hover:border-black hover:text-black hover:bg-white">{cta}</Link>
                </div>
            </div>
        </div>
    )
}