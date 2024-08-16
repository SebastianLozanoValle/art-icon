'use client'
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { CategoryFeatured } from "../CategoryFeatured";
import { Reveal } from '@/components/generics/Reveal'
import { GiLaserburn } from "react-icons/gi";

export const Featured = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // const categories = Array.from({ length: 12 }, (_, index) => index);

    const categories = [
        {
            name: 'Marcado laser',
            icon: <GiLaserburn />,
        },
        {
            name: 'Camisetas',
            icon: <IoIosArrowForward />,
        },
        {
            name: 'Sacos',
            icon: <IoIosArrowForward />,
        },
        {
            name: 'Grabado',
            icon: <IoIosArrowForward />,
        },
        {
            name: 'Souvenirs',
            icon: <IoIosArrowForward />,
        },
        {
            name: 'Souvenirs',
            icon: <IoIosArrowForward />,
        },
    ]

    return (
        <section className="py-12 px-6 text-white">
            <div className="container mx-auto relative">
                <div className="flex justify-between sticky top-[88px] z-10">
                    <h2 className="text-3xl font-extrabold bg-slate-900/30 backdrop-blur-sm">Nuestros servicios</h2>
                    <button
                        className="hover:underline transition-all duration-500 flex items-center"
                        onClick={toggleExpand}
                    >
                        <span className='bg-slate-900/30 backdrop-blur-sm h-full flex items-center'>{isExpanded ? 'View less' : 'View all'}</span>
                        <IoIosArrowForward className={`text-lg transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                </div>
                <div className={`grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 transition-all duration-200 ${isExpanded ? 'max-h-[2160px]' : 'max-h-[180px]'}`}>
                    {categories.map((category, index) => (
                        <div id={index}>
                            <Reveal delay={index <= 3? index*0.25 : (index-3)*0.25} hidden={{ opacity: 0, y: 75}} visible={{ opacity: 1, y: 0}}>
                                <CategoryFeatured title={category.name} icon={category.icon} />
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
