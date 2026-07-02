const problems = [
  {
    number: "01",
    title: "O PBL te deixou lacunas",
    text: "Você aprendeu casos isolados, mas falta a base lógica para conectar os pontos.",
  },
  {
    number: "02",
    title: "A armadilha dos Flashcards",
    text: "Você comprou o raciocínio pronto de outra pessoa, mas não sabe construir o seu.",
  },
  {
    number: "03",
    title: "O Caos da Enfermaria",
    text: "Na vida real, o paciente não vem com o capítulo do livro escrito na testa. Ele vem com sinais brutos que exigem um diagnóstico agudo.",
  },
];

export default function Manifesto() {
  return (
    <section className="section-light py-14 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif font-light text-primary/50 text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 lg:mb-4">
          O verdadeiro problema
        </p>
      </div>

      <h2 className="max-w-4xl lg:max-w-5xl mx-auto font-serif font-bold text-primary text-center text-[1.7rem] sm:text-3xl lg:text-[2.9rem] leading-[1.25] mb-4 lg:mb-6">
        Você estuda, revisa e decora... mas na hora do{" "}
        <em className="text-accent not-italic">"caso bruto"</em> na
        enfermaria, o seu raciocínio parece um labirinto?
      </h2>

      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-px bg-accent mx-auto mb-4 lg:mb-6" />

        <p className="font-serif font-light text-primary/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-3 lg:mb-4">
          A medicina moderna nos entope de informações, mas esquece de nos
          ensinar o mais importante: como organizar tudo isso.
        </p>

        <p className="font-serif font-light text-primary/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6 lg:mb-10">
          Você já sentiu aquela insegurança de estar diante de um paciente
          cirrótico ou com insuficiência cardíaca e, mesmo tendo lido o
          livro, não saber por onde começar a "puxar o fio" do diagnóstico?
        </p>

        <p className="font-serif font-bold text-primary text-lg sm:text-xl lg:text-2xl leading-snug mb-6 lg:mb-8">
          O problema não é a sua inteligência.{" "}
          <span className="block sm:inline">O problema é que:</span>
        </p>
      </div>

      {/* Cards dos problemas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary/10 mb-8 lg:mb-14">
        {problems.map((item, i) => (
          <div
            key={i}
            className="bg-secondary p-6 lg:p-8 flex flex-col gap-2 lg:gap-3 text-left"
          >
            <span className="font-serif font-bold text-accent/40 text-3xl lg:text-4xl leading-none">
              {item.number}
            </span>
            <h3 className="font-serif font-bold text-primary text-lg lg:text-xl leading-snug">
              {item.title}
            </h3>
            <p className="font-serif font-light text-primary/65 text-sm lg:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Citação de fechamento */}
      <div className="max-w-2xl mx-auto text-center">
        <span className="block font-serif font-bold text-accent/25 text-6xl lg:text-7xl leading-none mb-2 lg:mb-3">
          "
        </span>
        <p className="font-serif font-bold italic text-accent text-xl sm:text-2xl lg:text-[1.75rem] leading-snug -mt-6 lg:-mt-10">
          Não adianta ter a biblioteca inteira na cabeça se você não tem as
          gavetas certas para guardar cada informação.
        </p>
      </div>
    </section>
  );
}
