'use client';
import { motion } from "framer-motion";

const testimonials = [
  {
    role: "Médica",
    text: "É no raciocínio no quadro que começam a se formar as 'gavetas cerebrais'. O raciocínio clínico finalmente fica ordenado.",
  },
  {
    role: "Estudante",
    text: "A didática e os esquemas facilitam muito o entendimento da medicina como um todo. É um complemento essencial.",
  },
  {
    role: "Aluno",
    text: "Traz o diferencial para quem quer verdadeiramente entender os processos, não apenas decorar.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-dark py-12 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-serif font-light text-secondary/50 text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase text-center mb-3 lg:mb-4 lg:text-sm">
          O que dizem
        </p>

        <h2 className="font-serif font-bold text-secondary text-xl sm:text-2xl lg:text-[2.9rem] leading-snug text-balance text-center max-w-3xl mx-auto mb-7 lg:mb-16">
          "Finalmente as{" "}
          <em className="text-accent not-italic">peças do quebra-cabeça</em>{" "}
          se encaixaram."
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative border border-secondary/15 bg-secondary/[0.03] p-6 lg:p-8 flex flex-col gap-4 lg:gap-5 shadow-lg shadow-black/20 cursor-pointer"
              whileHover={{ y: -14, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <span className="absolute top-3 right-4 font-serif text-accent/25 text-5xl leading-none select-none">
                &rdquo;
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="text-accent text-xs lg:text-base">★</span>
                ))}
              </div>
              <p className="font-serif font-light text-secondary/85 text-sm lg:text-2xl leading-relaxed text-pretty italic flex-1">
                "{t.text}"
              </p>
              <div className="border-t border-secondary/15 pt-4 lg:pt-5">
                <p className="font-serif font-bold text-secondary text-xs lg:text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
