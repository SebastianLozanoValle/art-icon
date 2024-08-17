import { StoreCardSkeleton } from "@/components/skeletons/StoreCardSkeleton";
import { StoreCard } from "@/components/store/StoreCard";

export default async function Store() {
    return (
        <div className="text-white min-h-[calc(100vh-88px)] h-auto flex flex-wrap relative">
            <div className="sticky top-[88px] left-0 md:h-[calc(100vh-88px)] w-full md:w-auto p-4">
                <div className="h-full bg-black/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none shadow-sm shadow-slate-600 rounded md:w-[300px] p-4">
                    <h2 className="text-3xl">Filtros</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-4 w-full md:flex-1">
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCardSkeleton />
                <StoreCardSkeleton />
                <StoreCardSkeleton />
            </div>
        </div>
    )
}