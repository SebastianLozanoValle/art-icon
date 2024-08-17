import { BestSellingProducts } from "@/components/landing/BestSellingProducts";
import { Featured } from "@/components/landing/Featured";
import { Hero } from '@/components/landing/Hero'
import { Banner } from '@/components/Banner'
import { NewProducts } from '@/components/landing/NewProducts'
import { Testimonials } from '@/components/landing/Testimonials'
import { Reveal } from '@/components/generics/Reveal'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from "next/headers";

export default async function Home() {

  // const supabase = createServerComponentClient({ cookies })
  // const { data: categories } = await supabase.from('categories').select('*')

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Featured />
      <Reveal delay={0.25} hidden={{ opacity: 0, x: 75}} visible={{ opacity: 1, x: 0}}> 
        <Banner />
      </Reveal>
      <Reveal delay={0.25}>
        <BestSellingProducts />
      </Reveal>
      <Reveal delay={0.25} hidden={{ opacity: 0, x: -75}} visible={{ opacity: 1, x: 0}}> 
        <Banner reverse={false} />
      </Reveal>
      <NewProducts />
      <Reveal delay={0.25}>
      <Testimonials />
      </Reveal>
      {/* <pre>
        {
          JSON.stringify(categories, null, 2)
        }
      </pre> */}
    </main>
  );
}
