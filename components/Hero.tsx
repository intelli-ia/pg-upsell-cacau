export default function Hero() {
  return (
    <section id="inicio" className="section-dark min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/Frame 89.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex flex-col items-start text-left gap-5 max-w-xl px-6 py-16 w-full lg:items-start lg:gap-6 lg:px-8 lg:py-24 lg:ml-[6%] lg:max-w-2xl relative z-10">
        <h1 className="font-serif font-bold text-accent text-[1.9rem] leading-[1.15] tracking-tight lg:text-[3rem]">
          <span className="text-secondary">Espera!</span> Sua formação ainda não está completa.
        </h1>

        <p className="font-serif font-light text-secondary/90 text-base leading-relaxed lg:text-xl">
          Você acaba de garantir o CGS. Agora, eu vou te dar{" "}
          <strong className="font-bold text-accent">150% de Cashback</strong>{" "}
          para você destravar o <strong className="font-bold text-secondary">CORC completo</strong>{" "}
          e nunca mais ter dúvidas na beira do leito.
        </p>

        <div className="flex flex-col gap-4 font-serif font-light text-secondary/75 text-sm leading-relaxed lg:text-base">
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
          className="bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:bg-accent/60 transition-colors lg:self-start lg:text-sm lg:px-8 lg:py-3.5 mt-2"
        >
          QUERO MEU CASHBACK DE 150%
        </a>
      </div>
    </section>
  );
}
