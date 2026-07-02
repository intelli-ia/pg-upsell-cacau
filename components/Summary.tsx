import { CORCPricingCard } from "@/components/ui/single-pricing-card";

export default function Summary() {
  return (
    <section id="preco" className="section-dark py-14 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-7 lg:mb-12">
          <h2 className="font-serif font-bold text-secondary text-2xl sm:text-3xl lg:text-[2.9rem] leading-snug max-w-5xl mx-auto">
            <span className="text-accent">Domine o Raciocínio Clínico</span>
            <br />
            e recupere a segurança na beira do leito.
          </h2>
          <p className="font-serif font-light text-secondary/70 text-base lg:text-xl leading-relaxed max-w-2xl mx-auto mt-4 lg:mt-6">
            Você não precisa de mais um livro de 2.000 páginas. Você precisa
            de um método que organize o que você já sabe e preencha as
            lacunas que a faculdade deixou.
          </p>
          <div className="w-10 h-px bg-accent mx-auto mt-6" />
        </div>

        <CORCPricingCard />
      </div>
    </section>
  );
}
