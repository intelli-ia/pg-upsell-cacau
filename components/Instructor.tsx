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
              Quem conduz o CGS:
            </h2>
          </div>


          <p className="font-serif font-bold text-primary text-base lg:text-xl leading-relaxed">
            Carlos Antonio Moura é médico clínico e reumatologista, escritor,
            palestrante e professor de Clínica Médica.
          </p>

          <p className="font-serif font-light text-primary/75 text-base lg:text-xl leading-relaxed">
            Há mais de quinze anos, ele acompanha a formação de estudantes e
            residentes à beira do leito, onde a medicina se revela como ela é:
            viva, imprevisível e concreta.
          </p>

          <p className="font-serif font-light text-primary/75 text-base lg:text-xl leading-relaxed">
            O Grandes Síndromes: O Raciocínio no Quadro é a materialização
            desse hábito. Foi no giz e na lousa que o professor Carlos
            Antonio encontrou a forma mais sincera de organizar o caos da
            dúvida diagnóstica e transmitir o que anos de prática e leitura
            de livros consolidaram.
          </p>

          <p className="font-serif font-light text-primary/75 text-base lg:text-xl leading-relaxed">
            Aqui, você não assiste a uma aula ensaiada com desfechos prontos.
            Você testemunha o raciocínio clínico <em>in natura</em>: hipótese
            por hipótese, passo a passo. É o esforço de transformar a
            complexidade da beira do leito em estruturas lógicas que você
            pode carregar para a sua própria prática.
          </p>

          <blockquote className="py-2">
            <p className="font-serif font-bold italic text-primary text-lg lg:text-xl leading-snug">
              "A excelência não é um ato, mas um hábito."
            </p>
          </blockquote>

          <p className="font-serif font-light text-primary/75 text-base lg:text-xl leading-relaxed">
            Se o seu caminho também é o de ver pacientes com profundidade e
            buscar a verdade por trás de cada sinal clínico, sinta-se
            convidado a instalar as suas primeiras gavetas cerebrais aqui.
          </p>
        </div>
      </div>
    </section>
  );
}
