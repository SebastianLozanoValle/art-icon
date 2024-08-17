import { Skeleton } from "@/components/ui/skeleton"


export const StoreCardSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-xl shadow-sm shadow-slate-600 h-auto">
            <div className="flex flex-col h-full">
                <Skeleton className="w-full aspect-square relative group">
                    
                </Skeleton>
                <div className="p-1 py-2 flex flex-col flex-1 justify-between gap-2">
                    <Skeleton className="font-bold text-lg w-2/3 h-5"/>
                    <div className="flex flex-col gap-2">
                        <Skeleton className="font-light text-sm w-full h-3"/>
                        <Skeleton className="font-light text-sm w-1/3 h-3"/>
                    </div>
                    <div className="flex justify-between pr-1">
                        <Skeleton className="font-light text-sm w-full h-3"/>
                    </div>
                    <Skeleton className="font-light text-sm w-full h-6"/>
                </div>
            </div>
        </div>
    )
}