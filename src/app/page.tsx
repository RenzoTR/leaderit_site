import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { Editorial } from '@/components/sections/Editorial';
import { Partners } from '@/components/sections/Partners';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';

/* Montagem da landing com seções */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Editorial />
        <Partners />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
