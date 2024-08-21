'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from 'next/image'

export function Test() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    const handleSelect = () => {
      const newIndex = api.selectedScrollSnap()
      setCurrent(newIndex + 1)
      setSelectedIndex(newIndex)
    }

    api.on("select", handleSelect)
    
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  const onThumbClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
      setSelectedIndex(index)
    }
  }

  return (
      <div className='w-full h-full flex flex-wrap justify-center items-center'>
        <div className='w-full lg:w-auto flex justify-center pb-10 lg:pb-0'>
          <Carousel orientation='vertical' opts={{ align: "start"}} setApi={setApi} className="w-auto relative rounded-3xl overflow-hidden mx-auto">
            <CarouselContent className="-mt-1 h-[300px] lg:h-[500px] 2xl:h-[550px] aspect-square rounded-3xl">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="h-full w-full relative overflow-hidden rounded-3xl">
                  <Image
                      src={"/letreros.jpg"}
                      alt="Background Image"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      className="absolute top-0 left-0 w-full h-full rounded-3xl transform"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex flex-wrap lg:flex-col w-full lg:w-auto flex-1 justify-center">
          <div className="overflow-hidden h-full w-full">
            <div className="flex lg:flex-col -ml-[0.8rem] justify-between lg:h-full flex-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`pl-[0.8rem] flex-1 ${index === selectedIndex ? 'text-body' : 'text-detail-high-contrast'}`}
                >
                  <button
                    onClick={() => onThumbClick(index)}
                    type="button"
                    className={`flex items-center justify-center rounded-[1.8rem] shadow-inner text-[1.8rem] font-semibold cursor-pointer w-full h-[6rem] border-0 transition-all duration-500 ${index === selectedIndex ? ' bg-blue-600' : 'bg-transparent'}`}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
