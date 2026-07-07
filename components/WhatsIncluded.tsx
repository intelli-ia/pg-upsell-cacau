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
    <section className="section-light py-12 lg:py-28 px-6">
      <div className="max-w-5xl mx-auto text-center mb-8 lg:mb-16">
        <h2 className="font-serif font-bold text-primary text-xl sm:text-2xl lg:text-[2.6rem] leading-snug text-balance max-w-5xl mx-auto">
          Veja o que você irá receber ao aproveitar
          <br className="hidden sm:block" /> essa oportunidade do CORC:
        </h2>
        <div className="w-10 h-px bg-accent mx-auto mt-5 lg:mt-6 lg:w-12" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary/10 mb-7 lg:mb-12">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-secondary p-6 lg:p-8 flex flex-col gap-3 text-left"
          >
            <div className="hidden lg:flex border border-dashed border-primary/20 bg-primary/5 aspect-video items-center justify-center mb-1">
              <p className="font-serif font-light text-primary/40 text-xs tracking-[0.1em] uppercase">
                Imagem (em breve)
              </p>
            </div>
            <span className="font-serif font-bold text-accent/70 text-[0.7rem] tracking-[0.2em] lg:hidden">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif font-bold text-primary text-base lg:text-xl leading-snug">
              {item.title}
            </h3>
            <p className="font-serif font-light text-primary/65 text-sm lg:text-base leading-relaxed text-pretty">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <p className="font-serif font-bold text-accent text-sm sm:text-base lg:text-lg text-center text-pretty max-w-2xl mx-auto">
        Além de material de apoio, participações ao vivo e benefícios no blog.
      </p>
    </section>
  );
}
