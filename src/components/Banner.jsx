import Image from "next/image"
import Link from "next/link"

export const Banner = ({ reverse = true }) => {
    return (
        <div className="py-12 px-6">
            <div className="container mx-auto">
                <div className="bg-white rounded-lg flex flex-col md:flex-row flex-wrap items-center min-h-[30vh]">
                    <div className={`flex-1 order-2 md:${reverse ? 'order-2' : 'order-1'} flex flex-col gap-6 items-center h-full py-10`}>
                        <h4 className="text-3xl font-bold">Close to you</h4>
                        <p className="text-center">We have points of sale throughout the country.</p>
                        <Link className="w-fit px-4 py-1 bg-blue-500 transition-all duration-500 ease-in-out transform hover:scale-90 hover:shadow-2xl rounded-full text-white" href={'/'}>Find Points</Link>
                    </div>
                    <div className={`flex-1 order-1 md: ${reverse ? 'order-1' : 'order-2'} w-full flex justify-center items-center h-[30vh]`}>
                        <div className="w-full h-[30vh] relative">
                            <Image
                                src={'/stock-image1.jpg'}
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"   
                                quality={100}
                                className={`absolute top-0 left-0 w-full h-full rounded-t-lg md:rounded-none ${reverse ? 'md:rounded-l-lg' : 'md:rounded-r-lg'}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}