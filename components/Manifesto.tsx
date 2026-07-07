export default function Manifesto() {
  return (
    <section className="section-light py-12 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif font-light text-primary/50 text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase mb-3 lg:mb-4 lg:text-sm">
          Do mapa à bússola
        </p>
      </div>

      <h2 className="max-w-4xl lg:max-w-5xl mx-auto font-serif font-bold text-primary text-center text-xl sm:text-2xl lg:text-[2.9rem] leading-[1.3] text-balance mb-5 lg:mb-6">
        O CGS é o seu <em className="text-accent not-italic">mapa de emergência</em>.
        <br className="hidden lg:block" />{" "}
        O CORC é a sua <em className="text-accent not-italic">bússola definitiva</em>.
      </h2>

      <div className="max-w-3xl mx-auto text-center">
        <div className="w-10 h-px bg-accent mx-auto mb-5 lg:mb-6 lg:w-12" />

        <p className="font-serif font-light text-primary/70 text-sm sm:text-base lg:text-xl leading-relaxed text-pretty max-w-2xl mx-auto mb-6 lg:mb-10">
          O CORC (Curso Online de Raciocínio Clínico) não é apenas um curso; é um
          hábito. Enquanto o CGS resolve a síndrome, o CORC forma o médico. É a
          diferença entre consumir um prato rápido e participar de um grande
          banquete de conhecimento, onde você aprende não apenas o &ldquo;o
          que&rdquo;, mas a essência de cada decisão clínica.
        </p>
      </div>

      {/* Placeholder: carrossel de aulas do CORC (imagens a adicionar depois) */}
      <div className="max-w-5xl mx-auto mb-7 lg:mb-14">
        <div className="border border-dashed border-primary/20 bg-primary/5 aspect-[4/3] sm:aspect-video lg:aspect-[21/9] flex items-center justify-center px-6">
          <p className="font-serif font-light text-primary/40 text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase text-center lg:text-sm">
            Carrossel de aulas do CORC (em breve)
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif font-light text-primary/70 text-sm sm:text-base lg:text-xl leading-relaxed text-pretty max-w-2xl mx-auto">
          Lá dentro, nós não apenas organizamos o quadro; nós vivemos a medicina
          como ela é. São centenas de casos reais discutidos in natura,
          comunidade de alunos, e a base completa que transforma um estudante
          inseguro em um médico de autoridade.
        </p>
      </div>
    </section>
  );
}
