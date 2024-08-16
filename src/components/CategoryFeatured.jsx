import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";

export const CategoryFeatured = ({ title = 'Categoria', icon = <BiSolidCategory /> }) => {
    return (
        <Link href={'/'} className="flex flex-col justify-center items-center p-4 flex-1 backdrop-blur-sm bg-black/30 rounded-lg transform hover:scale-110 transition-all ease-in-out duration-500">
            <div className="text-[60px]">
                {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
        </Link>
    )
}