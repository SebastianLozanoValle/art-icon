import { BestSellingProducts } from "@/components/landing/BestSellingProducts";
import { Featured } from "@/components/landing/Featured";
import { Hero } from '@/components/landing/Hero'
import { Banner } from '@/components/Banner'
import { NewProducts } from '@/components/landing/NewProducts'
import { Testimonials } from '@/components/landing/Testimonials'
import { Reveal } from '@/components/generics/Reveal'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Featured />
      <Reveal delay={0.25} hidden={{ opacity: 0, x: 75}} visible={{ opacity: 1, x: 0}}> 
        <Banner />
      </Reveal>
      <BestSellingProducts />
      <Reveal delay={0.25} hidden={{ opacity: 0, x: -75}} visible={{ opacity: 1, x: 0}}> 
        <Banner reverse={false} />
      </Reveal>
      <NewProducts />
      <Testimonials />
    </main>
  );
}
