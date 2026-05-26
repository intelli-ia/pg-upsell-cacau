export default function Instructor() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Video */}
        <div className="relative">
          <div className="aspect-[4/4.5] overflow-hidden">
            <video
              src="/instructor.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top scale-110 -translate-y-6"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1.5">
          <div>
            <p className="font-serif font-light text-primary/40 text-xs tracking-[0.25em] uppercase mb-3">
              O professor
            </p>
            <h2 className="font-serif font-bold text-accent text-3xl sm:text-4xl xl:text-5xl leading-snug">
              Quem conduz{" "}<br />o CORC?
            </h2>
          </div>

          <div className="w-10 h-px bg-accent" />

          <p className="font-serif font-bold text-primary text-base leading-relaxed">
            Carlos Antonio Moura, médico clínico e reumatologista, escritor,
            palestrante e professor de Clínica Médica.
          </p>

          <p className="font-serif font-light text-primary/75 text-base leading-relaxed">
            Há mais de quinze anos acompanha a formação de estudantes e
            residentes à beira do leito, onde a medicina se revela como ela é:
            viva, imprevisível, concreta.
          </p>

          <p className="font-serif font-light text-primary/75 text-base leading-relaxed">
            O CORC nasceu da necessidade de um espaço onde fosse possível
            pensar a medicina em tempo real — tal qual vivida nas Sessões de
            Raciocínio do professor Carlos Geraldo. Em cada aula se discute
            situações reais, sem conhecer antecipadamente seus desfechos. Isso
            permite ao aluno testemunhar <em>in natura</em> o raciocínio clínico
            diante da dúvida: hipótese por hipótese, passo a passo, com
            humildade e sinceridade.
          </p>

          <blockquote className="py-2">
            <p className="font-serif font-bold italic text-primary text-lg leading-snug">
              "A excelência não é um ato, mas um hábito."
            </p>
          </blockquote>

          <p className="font-serif font-light text-primary/75 text-base leading-relaxed">
            O CORC é um esforço de transmitir o que por anos Carlos Antonio se
            habituou a fazer: ver pacientes, ler livros e ensinar medicina. Se
            esse também for o seu caminho, sinta-se convidado.
          </p>
        </div>
      </div>
    </section>
  );
}
