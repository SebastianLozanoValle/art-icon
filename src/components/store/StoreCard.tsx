import Image from "next/image"
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const StoreCard = () => {
    return (
        <div className="overflow-hidden rounded-xl shadow-sm shadow-slate-600 h-auto">
            <div className="flex flex-col h-full">
                <div className="w-full bg-red-50 aspect-square relative group">
                    <Image
                        src={'/hoodie_example.jpg'}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="absolute top-0 left-0 w-full h-full"
                    />
                    <span className="absolute top-2 right-2 px-2 bg-green-500 text-xs font-bold rounded">
                        50%
                    </span>
                    <div className="absolute bottom-0 left-0 w-full bg-black/30 px-1 flex items-center">
                        <span className="font-light text-sm">
                            Ropa
                        </span>
                        <span className="font-light text-sm">
                            <IoIosArrowForward />
                        </span>
                        <span className="font-light text-sm">
                            Sacos
                        </span>
                    </div>
                    <Link href={"/store/product-details"} className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold cursor-pointer">Ver detalles</span>
                    </Link>
                </div>
                <div className="p-1 py-2 flex flex-col flex-1 justify-between gap-2">
                    <h2 className="font-bold text-lg">Hoodie #1</h2>
                    <p className="font-light text-sm text-slate-500">
                        Saco estampable con vinilo textil
                    </p>
                    <div className="flex justify-between pr-1">
                        <span className="text-xs font-extrabold line-through text-red-900">$50.000 COP</span>
                        <span className="text-xs font-extrabold">25.000 COP</span>
                    </div>
                    <button className="bg-blue-600 rounded-lg transform hover:scale-95 transition-all duration-500">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}