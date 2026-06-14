import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import QuickCTA from "@/components/sections/QuickCTA";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";
import Expertise from "@/components/sections/Expertise";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <QuickCTA />
      <WhyUs />
      <Process />
      <Team />
      <Expertise />
      <ArticlesPreview />
      <Faq />
      <Contact />
    </main>
  );
}
