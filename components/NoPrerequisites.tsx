export default function NoPrerequisites() {
  return (
    <section className="section-dark py-14 lg:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-px bg-accent mx-auto mb-5 lg:mb-10" />
        <p className="font-serif font-light text-secondary/90 text-lg sm:text-xl leading-relaxed mb-5 lg:mb-10">
          Você não precisa ter base avançada para começar. O CORC não exige
          conhecimento prévio — você irá construir raciocínio do zero.
        </p>
        <a
          href="#preco"
          className="inline-block bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:bg-accent/60 transition-colors lg:text-sm lg:tracking-[0.2em] lg:px-10 lg:py-4"
        >
          Clique e Matricule-se
        </a>
        <div className="w-12 h-px bg-accent mx-auto mt-5 lg:mt-10" />
      </div>
    </section>
  );
}
