export default function Hero() {
  return (
    <section id="inicio" className="section-dark relative overflow-hidden lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      {/* Desktop: full-bleed background photo */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/Frame 89.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile: contained photo banner with fade, so copy never sits on top of the busy image */}
      <div className="lg:hidden relative w-full aspect-[4/5] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full scale-125"
          style={{
            backgroundImage: "url('/Frame 89.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "100% center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col items-start text-left gap-4 max-w-xl px-6 pt-2 pb-14 -mt-28 w-full lg:gap-6 lg:px-8 lg:py-24 lg:ml-[6%] lg:max-w-2xl lg:mt-0 relative z-10">
        <h1 className="font-serif font-bold text-accent text-2xl leading-[1.25] tracking-tight text-balance lg:text-[3rem] lg:leading-[1.15]">
          <span className="text-secondary">Espera!</span> Sua formação ainda não está completa.
        </h1>

        <p className="font-serif font-light text-secondary/90 text-sm leading-relaxed text-pretty lg:text-xl">
          Você acaba de garantir o CGS. Agora, eu vou te dar{" "}
          <strong className="font-bold text-accent">150% de Cashback</strong>{" "}
          para você destravar o <strong className="font-bold text-secondary">CORC completo</strong>{" "}
          e nunca mais ter dúvidas na beira do leito.
        </p>

        <div className="flex flex-col gap-3 font-serif font-light text-secondary/75 text-xs leading-relaxed lg:gap-4 lg:text-base">
          <p>
            Parabéns pela sua decisão. O Grandes Síndromes vai te dar as gavetas que você
            precisa. Mas, deixa eu te fazer uma pergunta sincera:
          </p>

          <p>
            O que você vai fazer quando o paciente sair da &ldquo;Grande Síndrome&rdquo; e o
            caso começar a exigir um raciocínio clínico profundo, passo a passo, em tempo real?
          </p>

          <p>
            Eis aí o <strong className="font-bold text-secondary">Curso Online de Raciocínio Clínico, o CORC.</strong>
          </p>
        </div>

        <a
          id="matricule-se"
          href="#preco"
          className="w-full text-center bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 active:bg-accent/70 transition-colors mt-2 lg:w-auto lg:self-start lg:text-sm lg:px-8 lg:py-3.5 lg:mt-2 lg:hover:bg-accent/60"
        >
          QUERO MEU CASHBACK DE 150%
        </a>
      </div>
    </section>
  );
}
