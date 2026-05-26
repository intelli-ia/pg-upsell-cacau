export default function NoPrerequisites() {
  return (
    <section className="section-dark py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-px bg-accent mx-auto mb-10" />
        <p className="font-serif font-light text-secondary/90 text-lg sm:text-xl leading-relaxed mb-10">
          Você não precisa ter base avançada para começar. O CORC não exige
          conhecimento prévio — você irá construir raciocínio do zero.
        </p>
        <a
          href="#preco"
          className="inline-block bg-accent text-primary font-bold text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-accent/90 transition-colors"
        >
          Clique e Matricule-se
        </a>
        <div className="w-12 h-px bg-accent mx-auto mt-10" />
      </div>
    </section>
  );
}
