import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const capas = Array.from({ length: 15 }, (_, i) => `/aulas-capas/capa-${(i % 5) + 1}.webp`);

export default function AulasLoop() {
  return (
    <section className="section-light py-14 lg:py-24 overflow-hidden">
      <div className="relative w-full">
        <InfiniteSlider className="pb-6 lg:pb-8" gap={24} duration={35}>
          {capas.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-40 sm:w-52 lg:w-64 aspect-[1000/1360] rounded-lg shadow-lg shadow-primary/10"
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Capa de aula CORC ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
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

      <p className="font-serif font-light text-primary/70 text-base sm:text-lg lg:text-xl leading-relaxed text-center max-w-2xl mx-auto mt-8 lg:mt-12 px-6">
        <span className="font-bold text-primary">Um curso vivo:</span> aulas
        novas são adicionadas periodicamente para acompanhar a sua evolução
        na prática médica.
      </p>
    </section>
  );
}
