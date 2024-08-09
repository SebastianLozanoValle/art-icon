import Link from "next/link"

export const NavLink = ({ route, children }) => {
    return (
        <Link href={route} className="inline-block">
            <p className="text-2xl hover:scale-125 transition-all duration-500 hover:ml-5 inline-block">
                {children}
            </p>
        </Link>
    )
}