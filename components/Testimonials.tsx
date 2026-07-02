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
    <section className="section-dark py-14 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-serif font-light text-secondary/50 text-xs sm:text-sm tracking-[0.25em] uppercase text-center mb-3 lg:mb-4">
          O que dizem
        </p>

        <h2 className="font-serif font-bold text-secondary text-3xl sm:text-4xl lg:text-[2.9rem] leading-snug text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          "Finalmente as{" "}
          <em className="text-accent not-italic">peças do quebra-cabeça</em>{" "}
          se encaixaram."
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="border border-secondary/15 p-8 flex flex-col gap-5 cursor-pointer"
              whileHover={{ y: -14, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="text-accent text-base">★</span>
                ))}
              </div>
              <p className="font-serif font-light text-secondary/85 text-base lg:text-2xl leading-relaxed italic flex-1">
                "{t.text}"
              </p>
              <div className="border-t border-secondary/15 pt-5">
                <p className="font-serif font-bold text-secondary text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
