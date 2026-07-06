"use client";

import { useEffect, useState } from "react";

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroSentinel = document.getElementById("hero-end-sentinel");
    const offerSentinel = document.getElementById("offer-end-sentinel");

    const handleScroll = () => {
      const pastHero = heroSentinel
        ? heroSentinel.getBoundingClientRect().top < 0
        : false;
      const nearOffer = offerSentinel
        ? offerSentinel.getBoundingClientRect().top < window.innerHeight
        : false;
      const nearPageEnd =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 400;
      setVisible(pastHero && !nearOffer && !nearPageEnd);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 lg:bottom-6 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-4 bg-primary border border-accent/20 rounded-full shadow-xl shadow-black/30 px-4 py-2.5 lg:px-6 lg:py-3">
        <span className="hidden sm:block font-serif font-light text-secondary/70 text-sm lg:text-base whitespace-nowrap">
          Não perca seu cashback de 150%.
        </span>
        <a
          href="#preco"
          className="text-center bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 rounded-full hover:bg-accent/90 transition-colors lg:text-xs lg:tracking-[0.18em] lg:px-7 lg:py-3 whitespace-nowrap"
        >
          Quero meu cashback de 150%
        </a>
      </div>
    </div>
  );
}
