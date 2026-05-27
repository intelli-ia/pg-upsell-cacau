"use client";
import { useRef } from "react";

export default function Instructor() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section className="section-light py-0 lg:py-0 px-0 lg:px-0 overflow-hidden relative">
      {/* Peek da seção anterior */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#161616] rounded-b-[10rem] hidden lg:block z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-0 items-stretch">
        {/* Video */}
        <div className="relative overflow-hidden h-[82vw] lg:h-auto lg:aspect-auto">
          <video
            ref={videoRef}
            src="/instructor.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedMetadata={() => {
              if (videoRef.current) videoRef.current.playbackRate = 0.75;
            }}
            className="absolute inset-0 w-full h-full object-cover [object-position:50%_35%] lg:object-top lg:scale-125 lg:translate-x-[8%]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1.5 px-6 pt-3 pb-10 lg:py-0 lg:pt-36 lg:pb-24 lg:px-16 lg:max-w-3xl">
          <div>
            <p className="font-serif font-light text-primary/40 text-xs tracking-[0.25em] uppercase mb-3">
              O professor
            </p>
            <h2 className="font-serif font-bold text-accent text-3xl sm:text-4xl lg:text-[2.9rem] leading-snug">
              Quem conduz o CORC?
            </h2>
          </div>


          <p className="font-serif font-bold text-primary text-base lg:text-xl leading-relaxed">
            Carlos Antonio Moura, médico clínico e reumatologista, escritor,
            palestrante e professor de Clínica Médica.
          </p>

          <p className="font-serif font-light text-primary/75 text-base lg:text-xl leading-relaxed">
            Há mais de quinze anos acompanha a formação de estudantes e
            residentes à beira do leito, onde a medicina se revela como ela é:
            viva, imprevisível, concreta.
          </p>

          <p className="font-serif font-light text-primary/75 text-base lg:text-xl leading-relaxed">
            O CORC nasceu da necessidade de um espaço onde fosse possível
            pensar a medicina em tempo real, tal qual vivida nas Sessões de
            Raciocínio do professor Carlos Geraldo. Em cada aula se discute
            situações reais, sem conhecer antecipadamente seus desfechos. Isso
            permite ao aluno testemunhar <em>in natura</em> o raciocínio clínico
            diante da dúvida: hipótese por hipótese, passo a passo, com
            humildade e sinceridade.
          </p>

          <blockquote className="py-2">
            <p className="font-serif font-bold italic text-primary text-lg lg:text-xl leading-snug">
              "A excelência não é um ato, mas um hábito."
            </p>
          </blockquote>

          <p className="font-serif font-light text-primary/75 text-base lg:text-xl leading-relaxed">
            O CORC é um esforço de transmitir o que por anos Carlos Antonio se
            habituou a fazer: ver pacientes, ler livros e ensinar medicina. Se
            esse também for o seu caminho, sinta-se convidado.
          </p>
        </div>
      </div>
    </section>
  );
}
