import { PrincipalNewProduct } from '@/components/PrincipalNewProduct'
import { SecundaryNewProduct } from '@/components/SecundaryNewProduct'
import { Reveal } from '@/components/generics/Reveal'

export const NewProducts = () => {
    return (
        <div className="py-12 px-6 bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto">
                <div className="flex justify-between text-white">
                    <h2 className="text-3xl font-extrabold">
                        Check out our latest products
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 py-10">
                    <Reveal>
                        <PrincipalNewProduct />
                    </Reveal>
                    <div className="flex-1 flex flex-col gap-4">
                        <Reveal delay={0.50} hidden={{ opacity: 0, x: 75}}>
                            <SecundaryNewProduct />
                        </Reveal>
                        <Reveal delay={0.25} hidden={{ opacity: 0, y: 75}} visible={{ opacity: 1, y: 0}}>
                            <SecundaryNewProduct />
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    )
}