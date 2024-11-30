import { Hero } from "@/components/sections/hero";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { Statistics } from "@/components/sections/statistics";
import { FAQ } from "@/components/sections/faq";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Statistics />
      <FAQ />
      <Footer />
    </main>
  );
}
