const items = [
  {
    title: "Dezenas de casos reais discutidos",
    text: "Aprenda a raciocinar e conduzir casos do complexo ao simples no dia a dia.",
  },
  {
    title: "Comunidade Exclusiva",
    text: "Um local com centenas de alunos para discutir os casos do dia a dia.",
  },
  {
    title: "Introdução Geral à Medicina",
    text: "O coração do CORC. Onde você aprende a base lógica e filosófica que sustenta todo o seu raciocínio.",
  },
  {
    title: "Trilha de estudos",
    text: "Percursos de estudo organizados para guiar seu aprendizado com lógica e progressão.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="section-light py-14 lg:py-28 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10 lg:mb-16">
        <h2 className="font-serif font-bold text-primary text-2xl sm:text-3xl lg:text-[2.6rem] leading-snug max-w-5xl mx-auto">
          Veja o que você irá receber ao aproveitar
          <br />
          essa oportunidade do CORC:
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mt-6" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary/10 mb-8 lg:mb-12">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-secondary p-6 lg:p-8 flex flex-col gap-2 lg:gap-3 text-left"
          >
            <div className="border border-dashed border-primary/20 bg-primary/5 aspect-video flex items-center justify-center">
              <p className="font-serif font-light text-primary/40 text-xs tracking-[0.1em] uppercase">
                Imagem (em breve)
              </p>
            </div>
            <h3 className="font-serif font-bold text-primary text-lg lg:text-xl leading-snug mt-2">
              {item.title}
            </h3>
            <p className="font-serif font-light text-primary/65 text-sm lg:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <p className="font-serif font-bold text-accent text-base sm:text-lg text-center max-w-2xl mx-auto">
        Além de material de apoio, participações ao vivo e benefícios no blog.
      </p>
    </section>
  );
}
