import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";

export const CategoryFeatured = () => {
    return (
        <Link href={'/'} className="flex flex-col justify-center items-center p-4 flex-1 backdrop-blur-sm bg-black/30 rounded-lg transform hover:scale-110 transition-all ease-in-out duration-500">
            <BiSolidCategory className="text-[60px]" />
            <h3 className="text-2xl font-bold">Category</h3>
        </Link>
    )
}