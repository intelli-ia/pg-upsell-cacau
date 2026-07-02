import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const images = Array.from({ length: 14 }, (_, i) => `/hero-capas/capa-${(i % 7) + 1}.webp`);


export default function Hero() {
  return (
    <section id="inicio" className="section-dark min-h-screen flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/Frame 86.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex-1 grid grid-cols-1">

        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left justify-start gap-3 max-w-xl px-6 pt-6 pb-10 w-full lg:items-start lg:text-left lg:justify-center lg:gap-5 lg:px-8 lg:pt-24 lg:pb-20 lg:ml-[14%] lg:max-w-none lg:pr-12 relative z-10">
          <div className="flex flex-col items-start gap-4 lg:items-start lg:gap-5">
            <h1 className="font-serif font-bold text-accent text-[1.7rem] leading-[1.15] tracking-tight max-w-sm lg:text-[3.2rem] lg:max-w-lg">
              <span className="text-secondary">Construa</span>{" "}
              <span className="block">um raciocínio</span>
              <span className="block">clínico sólido.</span>
            </h1>
          </div>

          <p className="font-serif font-light text-secondary/85 text-base leading-relaxed max-w-xs lg:text-xl lg:max-w-md">
            Aprenda a dissecar síndromes, organizar o pensamento e chegar ao diagnóstico certo,{" "}
            <span className="block">do jeito que a medicina de verdade exige.</span>
          </p>

          <a
            id="matricule-se"
            href="#preco"
            className="bg-accent text-primary font-bold text-[8px] tracking-[0.15em] uppercase px-2.5 py-1 hover:bg-accent/60 transition-colors lg:self-start lg:text-[11px] lg:px-5 lg:py-2"
          >
            QUERO DOMINAR O RACIOCÍNIO NO QUADRO
          </a>

        </div>


      </div>

      {/* Slider de capas */}
      <div className="relative w-full pb-10 lg:pb-16 z-10">
        <InfiniteSlider className="w-full" duration={35} gap={16}>
          {images.map((src, i) => (
            <div key={i} className="relative flex-shrink-0 w-52 aspect-video overflow-hidden">
              <Image
                src={src}
                alt={`Aula CORC ${i + 1}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-10 sm:w-48"
          direction="left"
          blurIntensity={0.8}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-10 sm:w-48"
          direction="right"
          blurIntensity={0.8}
        />
      </div>

    </section>
  );
}
