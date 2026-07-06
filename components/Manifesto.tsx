export default function Manifesto() {
  return (
    <section className="section-light py-14 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif font-light text-primary/50 text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 lg:mb-4">
          Do mapa à bússola
        </p>
      </div>

      <h2 className="max-w-4xl lg:max-w-5xl mx-auto font-serif font-bold text-primary text-center text-[1.7rem] sm:text-3xl lg:text-[2.9rem] leading-[1.25] mb-4 lg:mb-6">
        O CGS é o seu <em className="text-accent not-italic">mapa de emergência</em>.
        <br />
        O CORC é a sua <em className="text-accent not-italic">bússola definitiva</em>.
      </h2>

      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-px bg-accent mx-auto mb-4 lg:mb-6" />

        <p className="font-serif font-light text-primary/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6 lg:mb-10">
          O CORC (Curso Online de Raciocínio Clínico) não é apenas um curso; é um
          hábito. Enquanto o CGS resolve a síndrome, o CORC forma o médico. É a
          diferença entre consumir um prato rápido e participar de um grande
          banquete de conhecimento, onde você aprende não apenas o &ldquo;o
          que&rdquo;, mas a essência de cada decisão clínica.
        </p>
      </div>

      {/* Placeholder: carrossel de aulas do CORC (imagens a adicionar depois) */}
      <div className="max-w-5xl mx-auto mb-8 lg:mb-14">
        <div className="border border-dashed border-primary/20 bg-primary/5 aspect-video sm:aspect-[21/9] flex items-center justify-center">
          <p className="font-serif font-light text-primary/40 text-sm tracking-[0.15em] uppercase">
            Carrossel de aulas do CORC (em breve)
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif font-light text-primary/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
          Lá dentro, nós não apenas organizamos o quadro; nós vivemos a medicina
          como ela é. São centenas de casos reais discutidos in natura,
          comunidade de alunos, e a base completa que transforma um estudante
          inseguro em um médico de autoridade.
        </p>
      </div>
    </section>
  );
}
