import Image from "next/image";

const stats = [
  { value: "+50", label: "Aulas clínicas de casos reais" },
  { value: "Ao Vivo", label: "Aulas periódicas ao vivo (e gravadas)" },
  { value: "Material", label: "de estudo e apoio" },
  { value: "+100h", label: "de conteúdo disponíveis" },
];

export default function Hero() {
  return (
    <section id="inicio" className="section-dark min-h-screen flex flex-col">
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
        <div className="flex flex-col items-center text-center justify-end gap-4 max-w-xl px-6 pt-10 pb-24 w-full lg:items-start lg:text-left lg:justify-center lg:gap-7 lg:px-8 lg:py-16 lg:ml-[18%]">
          <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-5">
            <Image
              src="/logo.svg"
              alt="C.O.R.C. — Curso Online de Raciocínio Clínico"
              width={320}
              height={62}
              className="w-36 lg:w-60"
              priority
            />
            <h1 className="font-serif font-bold text-accent text-[1.2rem] leading-[1.15] tracking-tight lg:text-[2.3rem]">
              Experimente a Medicina{" "}
              <span className="block">de Vida Real. Entre sinais,{" "}
              <span className="block">sintomas e decisões.</span></span>
            </h1>
          </div>

          <p className="font-serif font-light text-secondary/85 text-xs leading-relaxed lg:text-[1.35rem]">
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-3 border-t border-accent/20 lg:gap-x-8 lg:gap-y-4 lg:pt-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-serif font-bold text-accent text-[10px] lg:text-base">{stat.value}</span>
                <span className="font-serif font-light text-secondary/50 text-[9px] leading-snug lg:text-xs">{stat.label}</span>
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
    </section>
  );
}
