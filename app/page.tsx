import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import NoPrerequisites from "@/components/NoPrerequisites";
import Testimonials from "@/components/Testimonials";
import Accessibility from "@/components/Accessibility";
import WhatYouGet from "@/components/WhatYouGet";
import Summary from "@/components/Summary";
import Instructor from "@/components/Instructor";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Manifesto />
        <NoPrerequisites />
        <Testimonials />
        <Accessibility />
        <WhatYouGet />
        <Summary />
        <Instructor />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
