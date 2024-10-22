import Link from "next/link"
import { FaShoppingCart, FaSearch  } from "react-icons/fa";
import { Reveal } from '@/components/generics/Reveal'

export const NavBar = async () => {

    return (
        <nav className="sticky top-0 left-0 bg-black/30 backdrop-blur-sm text-white z-[9999]">
            <div className="absolute top-[-88px] lg:relative lg:top-0 hidden lg:flex justify-between items-center">
                <Reveal className="">
                    <div className="p-4 pl-20 text-xl font-extrabold">
                        <Link href={'/'}>Art<br/>Icon</Link>
                    </div>
                </Reveal>
                <Reveal className="" hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                    <div className="flex items-center p-1 pl-2 border-[1px] border-slate-500 rounded-md">
                        <FaSearch  />
                        <input className="outline-none bg-transparent px-2" placeholder="Busca productos o servicios" />
                    </div>
                </Reveal>
                <div className="flex gap-4 p-4 pr-20 font-bold items-center">
                    <Reveal className="" delay={0.25} hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                        <Link href={'/'}>Inicio</Link>
                    </Reveal>
                    <Reveal className="" delay={0.35} hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                        <Link href={'/store'}>Tienda</Link>
                    </Reveal>
                    <Reveal className="" delay={0.45} hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                        <Link href={'/'}>Nosotros</Link>
                    </Reveal>
                    <Reveal className="" delay={0.55} hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                        <Link href={'/'}>Contacto</Link>
                    </Reveal>
                    <Reveal className="" delay={0.65} hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                        <Link href={'/'}><FaShoppingCart className="text-xl" /></Link>
                    </Reveal>
                    <Reveal className="" delay={0.75} hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                        <Link href={'/auth/login'} className="rounded px-4 py-1 border transition-all duration-500 hover:border-transparent hover:text-slate-900 hover:bg-white">Iniciar sesión</Link>
                    </Reveal>
                    <Reveal className="" delay={0.85} hidden = {{ opacity: 0, y: -25}} visible = {{ opacity: 1, y: 0 }}>
                        <Link href={'/auth/register'} className="rounded px-4 py-1 border text-slate-900 border-transparent bg-white transition-all duration-500 hover:border-white hover:text-white hover:bg-transparent">Registrate</Link>
                    </Reveal>
                </div>
            </div>
            <div className="h-[88px] flex justify-center items-center relative top-0 lg:absolute lg:top-[-88px]">
                hola
            </div>
        </nav>
    )
}