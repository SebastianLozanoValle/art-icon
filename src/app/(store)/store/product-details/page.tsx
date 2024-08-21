import { Test } from "@/components/Test";

export default async function ProductDetails() {
    return (
        <div className="text-white min-h-[calc(100vh-88px)] w-full h-auto flex-wrap relative">
            <div className="container mx-auto py-10 lg:py-0 2xl:py-20 min-h-[calc(100vh-88px)] flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-1/2 h-full">
                    <Test />
                </div>
                <div className="w-full lg:w-1/2 h-full">
                    
                </div>
            </div>
        </div>
    )
}