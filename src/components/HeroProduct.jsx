import Image from "next/image"
import Link from "next/link"

export const HeroProduct = () => {
    return (
        <Link href={'/'} className="transform transition-all duration-500 hover:scale-110 aspect-square md:max-w-none flex flex-col gap-0 xl:gap-2 backdrop-blur-sm bg-black/30 p-4 xl:p-8 rounded-lg">
            
            <div className="relative h-1/2 w-full aspect-square rounded">
                <Image
                    src={'/server.webp'}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
            <h2 className="font-bold xl:text-xl">Item name</h2>
            <p className="font-extralight text-xs xl:text-sm">Short description of the product</p>
            <span className="font-bold">$49.99</span>
        </Link>
    )
}