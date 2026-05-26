const features = [
  {
    title: "Material de Apoio",
    description:
      "A maioria das aulas possui material de apoio para ser visto após a visualização do caso.",
    tag: "Complementar",
    image: "/material.png",
  },
  {
    title: "Todos os casos abordados",
    description:
      "Já são dezenas de casos na plataforma, disponíveis para serem vistos e estudados agora mesmo.",
    tag: "Conteúdo principal",
    image: "/casos.png",
  },
  {
    title: "[Bônus] Curso de Introdução Geral à Medicina",
    description:
      "Uma introdução completa para você partir do zero com segurança e método.",
    tag: "Bônus",
    image: "/bonus-intro.png",
  },
  {
    title: "[Bônus] Raciocínio no Quadro",
    description:
      "Sessões especiais onde o raciocínio clínico é destrinchado passo a passo, do problema à hipótese.",
    tag: "Bônus",
    image: "/bonus-quadro.png",
  },
  {
    title: "Trilhas de Estudo",
    description:
      "Percursos de estudo organizados para guiar seu aprendizado com lógica e progressão.",
    tag: "Organização",
    image: "/trilhas.png",
    objectPosition: "top 15%",
  },
  {
    title: "Participações Ao Vivo",
    description:
      "Encontros periódicos ao vivo com o Dr. Carlos Antônio, gravados e disponíveis para revisão.",
    tag: "Ao vivo",
    image: "/ao-vivo.png",
    objectPosition: "top 30%",
  },
];

import Image from "next/image";

export default function WhatYouGet() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-serif font-light text-primary/50 text-sm tracking-[0.2em] uppercase mb-3">
            O que você receberá:
          </p>
          <h2 className="font-serif font-bold text-primary text-3xl sm:text-4xl xl:text-5xl">
            Uma formação permanente.
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-secondary p-8 flex flex-col gap-4"
            >
              <div className="w-full aspect-video bg-primary/5 border border-primary/10 flex items-center justify-center mb-2 relative overflow-hidden">
                {feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: feature.objectPosition ?? 'top' }}
                    sizes="400px"
                  />
                ) : (
                  <span className="font-serif font-light text-primary/20 text-xs tracking-widest uppercase">
                    {feature.tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif font-bold text-primary text-base leading-snug">
                {feature.title}
              </h3>
              <p className="font-serif font-light text-primary/65 text-sm leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
