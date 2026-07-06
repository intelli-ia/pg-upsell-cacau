import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
import Summary from "@/components/Summary";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div id="hero-end-sentinel" />
        <Manifesto />
        <Testimonials />
        <WhatsIncluded />
        <Summary />
      </main>
      <Footer />
      <StickyBuyBar />
    </>
  );
}
