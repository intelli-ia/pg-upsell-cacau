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
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Text Content — fixed sizes, pushed right */}
        <div className="flex flex-col justify-center gap-7 max-w-xl px-8 py-16 ml-[18%] w-full">
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.svg"
              alt="C.O.R.C. — Curso Online de Raciocínio Clínico"
              width={320}
              height={62}
              className="w-60"
              priority
            />
            <h1 className="font-serif font-bold text-accent text-[2.3rem] leading-[1.15] tracking-tight">
              Experimente a Medicina{" "}
              <span className="block">de Vida Real. Entre sinais,{" "}
              <span className="block">sintomas e decisões.</span></span>
            </h1>
          </div>

          <p className="font-serif font-light text-secondary/85 text-[1.35rem] leading-relaxed">
            Saia da pressão e do diabetes. Aprenda a raciocinar e conduzir casos
            do complexo ao simples no dia a dia.
          </p>

          <a
            id="matricule-se"
            href="#preco"
            className="self-start bg-accent text-primary font-bold text-sm tracking-[0.2em] uppercase px-9 py-3 hover:bg-accent/90 transition-colors mt-2"
          >
            Clique e Matricule-se
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-accent/20">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-serif font-bold text-accent text-base">{stat.value}</span>
                <span className="font-serif font-light text-secondary/50 text-xs leading-snug">{stat.label}</span>
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
