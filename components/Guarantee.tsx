export default function Guarantee() {
  return (
    <section className="section-dark py-20 px-6 border-t border-accent/15">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-serif font-light text-secondary/40 text-xs tracking-[0.3em] uppercase mb-8">
          Compra segura &nbsp;|&nbsp; 15 dias de garantia
        </p>

        <p className="font-serif font-light text-secondary/80 text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto">
          <strong className="font-bold text-secondary">
            Você tem 2 semanas para testar o produto.
          </strong>{" "}
          A medicina exige compromisso, mas aqui, o seu primeiro passo é sem
          risco.
        </p>

        <div className="mt-10 inline-flex items-center gap-3 border border-secondary/10 px-8 py-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E59F14" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div className="text-left">
            <p className="font-serif font-bold text-accent text-sm tracking-wide">
              Garantia de 15 dias
            </p>
            <p className="font-serif font-light text-secondary/50 text-xs mt-0.5">
              Reembolso total, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
