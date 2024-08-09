import Image from "next/image";
import Link from "next/link";

export const PrincipalNewProduct = () => {

    return (
            <div className="flex-1 flex flex-col">
                <div className="bg-black/30 backdrop-blur-sm p-16 lg:p-8 text-white flex-1 flex flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-green-500">New</span>
                            <h2 className="text-3xl font-bold">Product</h2>
                            <div className="flex flex-col items-center text-center text-slate-400">
                                <span>
                                    The better choice.
                                </span>
                                <p>Available from $1.999.99</p>
                            </div>
                        </div>
                        <Link href={'/'} className="w-fit bg-blue-500 py-4 px-6 rounded-full transition-all duration-500 ease-in-out transform hover:scale-90 hover:shadow-2xl shadow-blue-600">Add to Cart</Link>
                    </div>
                    <div className="w-[200px] lg:w-[400px] aspect-square relative">
                        <Image
                            src={'/headphones.jpg'}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="absolute top-0 left-0 w-full h-full rounded-3xl"
                        />
                    </div>
                </div>
            </div>
    );
};
