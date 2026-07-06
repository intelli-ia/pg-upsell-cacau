import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

export default function Summary() {
  return (
    <section id="preco" className="section-dark py-14 lg:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="font-serif font-light text-accent text-xs sm:text-sm tracking-[0.25em] uppercase text-center mb-6">
          Oferta exclusiva de aluno CGS
        </p>

        <BorderRotate
          className="overflow-hidden"
          backgroundColor="#1a1a1a"
          borderWidth={1}
          borderRadius={0}
          animationSpeed={6}
        >
          <div className="p-8 sm:p-12 lg:p-16 text-center">
            <p className="font-serif font-light text-secondary/70 text-base lg:text-lg leading-relaxed max-w-lg mx-auto">
              O CORC custa hoje <strong className="font-bold text-secondary">R$ 800,00</strong>.
              Mas, como você já é aluno do CGS, eu decidi fazer algo inédito
              para acelerar sua formação.
            </p>

            <p className="font-serif font-bold text-secondary text-lg lg:text-xl leading-relaxed max-w-lg mx-auto mt-6">
              Vou te dar{" "}
              <span className="text-accent">150% de Cashback</span> sobre o
              valor
              <br />
              que você acabou de investir.
            </p>

            <Separator />

            <p className="font-serif font-light text-secondary/50 text-sm tracking-[0.15em] uppercase mb-2">
              Formação completa por apenas
            </p>

            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="line-through text-secondary/30 font-serif font-light text-lg mr-2">
                R$ 800
              </span>
              <span className="font-serif font-bold text-secondary text-2xl">R$</span>
              <span className="font-serif font-black text-secondary text-7xl sm:text-8xl leading-none tracking-tighter">
                500
              </span>
            </div>

            <p className="font-serif font-light text-secondary/50 text-sm mb-10">
              ou 12x de <strong className="font-bold text-secondary/80">R$ XX,XX</strong>
            </p>

            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <a href="https://pay.hub.la/Bx8I7wO9zk0DmaF1OUEP" target="_blank">
                Quero o upgrade com 150% de cashback
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8 pt-8 border-t border-secondary/10">
              <div className="flex items-center gap-2 text-secondary/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="font-serif font-light text-xs">Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-2 text-secondary/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="font-serif font-light text-xs">15 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2 text-secondary/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <path d="M1 10h22" />
                </svg>
                <span className="font-serif font-light text-xs">Parcelamento sem juros</span>
              </div>
            </div>
          </div>
        </BorderRotate>

        <div id="offer-end-sentinel" />

        <p className="text-center mt-6">
          <a
            href="#"
            className="font-serif font-light text-secondary/35 text-sm underline hover:text-secondary/60 transition-colors"
          >
            Prefiro perder o cashback
          </a>
        </p>
      </div>
    </section>
  );
}

function Separator() {
  return <div className="w-10 h-px bg-accent/50 mx-auto my-8" />;
}
