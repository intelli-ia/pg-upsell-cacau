import Image from "next/image";

const stats = [
  { value: "+50", label: "Aulas clínicas de casos reais" },
  { value: "Ao Vivo", label: "Aulas periódicas ao vivo (e gravadas)" },
  { value: "Material", label: "de estudo e apoio" },
  { value: "+100h", label: "de conteúdo disponíveis" },
];

export default function Hero() {
  return (
    <section id="inicio" className="section-dark min-h-screen flex flex-col relative">
      {/* Mobile top image */}
      <div
        className="w-full lg:hidden"
        style={{
          height: "60vw",
          backgroundImage: "url('/hero-mobile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left justify-start gap-4 max-w-xl px-6 pt-6 pb-10 w-full lg:items-start lg:text-left lg:justify-center lg:gap-7 lg:px-8 lg:pt-8 lg:pb-32 lg:ml-[18%] lg:max-w-none lg:pr-12 relative z-10">
          <div className="flex flex-col items-start gap-4 lg:items-start lg:gap-5">
            <Image
              src="/logo.svg"
              alt="C.O.R.C. — Curso Online de Raciocínio Clínico"
              width={320}
              height={62}
              className="w-36 lg:w-60"
              priority
            />
            <h1 className="font-serif font-bold text-accent text-[1.6rem] leading-[1.15] tracking-tight lg:text-[2.9rem]">
              Experimente a Medicina{" "}
              <span className="block">de Vida Real. Entre sinais,{" "}
              <span className="block">sintomas e decisões.</span></span>
            </h1>
          </div>

          <p className="font-serif font-light text-secondary/85 text-base leading-relaxed lg:text-2xl">
            Saia da pressão e do diabetes. Aprenda a raciocinar e conduzir casos
            do complexo ao simples no dia a dia.
          </p>

          <a
            id="matricule-se"
            href="#preco"
            className="bg-accent text-primary font-bold text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:bg-accent/90 transition-colors lg:self-start lg:text-sm lg:px-9 lg:py-3"
          >
            Clique e Matricule-se
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 border-t border-accent/20 pt-7 mt-3 lg:mt-0 lg:gap-x-8 lg:gap-y-4 lg:pt-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0">
                <span className="font-serif font-bold text-accent text-xs lg:text-base">{stat.value}</span>
                <span className="font-serif font-light text-secondary/50 text-[10px] leading-snug lg:text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative hidden lg:block overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero-image.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "translateX(12%)",
            }}
          />
          {/* Gradient fade on left edge */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #161616 0%, transparent 20%)",
            }}
          />
        </div>

      </div>

      {/* Peek da próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fffff2] rounded-t-[10rem] hidden lg:block" />

    </section>
  );
}
