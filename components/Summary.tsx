import { CORCPricingCard } from "@/components/ui/single-pricing-card";

export default function Summary() {
  return (
    <section id="preco" className="section-dark py-14 lg:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-7 lg:mb-12">
          <p className="font-serif font-light text-secondary/40 text-xs tracking-[0.25em] uppercase mb-3">
            Investimento
          </p>
          <h2 className="font-serif font-bold text-secondary text-2xl sm:text-3xl xl:text-4xl">
            É isso tudo o que<br className="lg:hidden" /> você vai receber:
          </h2>
          <div className="w-10 h-px bg-accent mx-auto mt-6" />
        </div>

        <CORCPricingCard />
      </div>
    </section>
  );
}
