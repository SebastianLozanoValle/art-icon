import Image from "next/image";

export const Product = ({ product }) => {
    return (
        <div
            key={product.id}
            className='group bg-blue-500 text-white border border-blue-500 p-8 flex flex-col gap-4 justify-between rounded-3xl hover:bg-white hover:text-blue-500 transition-all duration-500 hover:scale-105 relative hover:rotate-3 hover:z-10 cursor-pointer'
        >
            <h3 className="text-2xl font-bold text-center">
                {product.product}
            </h3>
            <div>
                <p className="text-xl font-semibold">
                    Descripción:
                </p>
                <p>
                    {product.description}
                </p>
            </div>
            <div className="relative">
                <Image
                    src="/server.webp" // Ruta de la imagen
                    alt="Descripción de la imagen" // Texto alternativo para accesibilidad
                    width={500} // Ancho de la imagen
                    height={300} // Alto de la imagen
                />
                <span className="absolute text-blue-500 right-0 top-0 px-4 py-1 rounded-xl bg-white transition-all duration-500 group-hover:bg-blue-500 group-hover:text-white">
                    {product.price.toLocaleString() + ' Cop'}
                </span>
                <span className="absolute text-blue-500 right-0 bottom-[2px] px-4 py-1 rounded-xl bg-white transition-all duration-500 group-hover:bg-blue-500 group-hover:text-white">
                    {product.stock > 0 ? 'Stock: ' + product.stock : 'No Stock'}
                </span>
            </div>
        </div >
    )
}