import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const images = Array.from({ length: 15 }, (_, i) => `/manifesto/m-${i + 1}.png`);

export default function Manifesto() {
  return (
    <section className="section-light pt-8 pb-14 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif font-bold text-primary text-2xl sm:text-3xl lg:text-[2.9rem] leading-snug mb-2 lg:mb-4">
          Um ponto de encontro para os que desejam estudar medicina com profundidade.
        </h2>

        <div className="w-12 h-px bg-accent mx-auto mb-2 lg:mb-4" />

        <p className="font-serif font-light text-primary/80 text-base sm:text-xl lg:text-2xl leading-relaxed mb-2 lg:mb-4 max-w-3xl mx-auto">
          Afundados numa formação protocolar, burocrática e credencialista,
          acadêmicos e médicos anseiam por algo mais. O CORC surge para quem
          recusa decorar e exige entender, um espaço onde a complexidade
          clínica deixa de ser ameaça e passa a ser território familiar.
        </p>

        <p className="font-serif font-bold italic text-accent text-xl sm:text-2xl lg:text-2xl leading-snug">
          "Pensar é nosso lema. Dominar a realidade é nossa obstinação."
        </p>
      </div>

      {/* Carousel com progressive blur */}
      <div className="relative mt-10 lg:mt-16 w-full">
        <InfiniteSlider className="w-full" duration={35} gap={16}>
          {images.map((src, i) => (
            <div key={i} className="relative flex-shrink-0 w-64 aspect-video overflow-hidden">
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
