import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

export default function Summary() {
  return (
    <section id="preco" className="section-dark py-12 lg:py-24 px-5 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <p className="font-serif font-light text-accent text-[0.7rem] sm:text-xs lg:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-center text-balance mb-5 lg:mb-6">
          Oferta exclusiva de aluno CGS
        </p>

        <BorderRotate
          className="overflow-hidden"
          backgroundColor="#1a1a1a"
          borderWidth={1}
          borderRadius={0}
          animationSpeed={6}
        >
          <div className="p-6 sm:p-12 lg:p-16 text-center">
            <p className="font-serif font-light text-secondary/70 text-sm lg:text-lg leading-relaxed text-pretty max-w-lg mx-auto">
              O CORC custa hoje <strong className="font-bold text-secondary">R$ 800,00</strong>.
              Mas, como você já é aluno do CGS, eu decidi fazer algo inédito
              para acelerar sua formação.
            </p>

            <p className="font-serif font-bold text-secondary text-sm lg:text-xl leading-relaxed text-pretty max-w-lg mx-auto mt-5 lg:mt-6">
              Vou te dar{" "}
              <span className="text-accent">150% de Cashback</span> sobre o valor
              que você acabou de investir.
            </p>

            <Separator />

            <p className="font-serif font-light text-secondary/50 text-[0.7rem] sm:text-xs lg:text-sm tracking-[0.15em] uppercase mb-2">
              Formação completa por apenas
            </p>

            <div className="flex items-baseline justify-center gap-1.5 sm:gap-2 mb-1">
              <span className="line-through text-secondary/30 font-serif font-light text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">
                R$ 800
              </span>
              <span className="font-serif font-bold text-secondary text-lg sm:text-xl lg:text-2xl">R$</span>
              <span className="font-serif font-black text-secondary text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tighter">
                500
              </span>
            </div>

            <p className="font-serif font-light text-secondary/50 text-xs lg:text-sm mb-8 lg:mb-10">
              ou 12x de <strong className="font-bold text-secondary/80">R$ XX,XX</strong>
            </p>

            <Button size="lg" className="w-full sm:w-auto group px-6 py-3 text-[10px] lg:px-12 lg:py-5 lg:text-xs" asChild>
              <a href="https://pay.hub.la/Bx8I7wO9zk0DmaF1OUEP" target="_blank">
                Quero o upgrade com 150% de cashback
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-7 pt-7 lg:mt-8 lg:pt-8 border-t border-secondary/10">
              <div className="flex items-center justify-center gap-2 text-secondary/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 lg:w-4 lg:h-4">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="font-serif font-light text-[0.7rem] lg:text-xs">Compra 100% segura</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-secondary/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 lg:w-4 lg:h-4">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="font-serif font-light text-[0.7rem] lg:text-xs">15 dias de garantia</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-secondary/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 lg:w-4 lg:h-4">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <path d="M1 10h22" />
                </svg>
                <span className="font-serif font-light text-[0.7rem] lg:text-xs">Parcelamento sem juros</span>
              </div>
            </div>
          </div>
        </BorderRotate>

        <div id="offer-end-sentinel" />

        <p className="text-center mt-6">
          <a
            href="#"
            className="font-serif font-light text-secondary/35 text-xs lg:text-sm underline hover:text-secondary/60 transition-colors"
          >
            Prefiro perder o cashback
          </a>
        </p>
      </div>
    </section>
  );
}

function Separator() {
  return <div className="w-10 h-px bg-accent/50 mx-auto my-6 lg:my-8" />;
}
