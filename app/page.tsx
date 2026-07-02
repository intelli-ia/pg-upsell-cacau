import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import NoPrerequisites from "@/components/NoPrerequisites";
import AulasLoop from "@/components/AulasLoop";
import Testimonials from "@/components/Testimonials";
import Summary from "@/components/Summary";
import Instructor from "@/components/Instructor";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div id="hero-end-sentinel" />
        <Manifesto />
        <NoPrerequisites />
        <AulasLoop />
        <Testimonials />
        <Summary />
        <Instructor />
        <FAQ />
      </main>
      <Footer />
      <StickyBuyBar />
    </>
  );
}
