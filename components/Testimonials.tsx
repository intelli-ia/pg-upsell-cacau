'use client';
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Rafael M.",
    role: "Médico Residente",
    text: "O CORC mudou completamente a forma como penso diante de um caso clínico. Antes eu decorava; agora eu raciocino. A diferença é brutal.",
  },
  {
    name: "Ana Clara T.",
    role: "Acadêmica de Medicina, 8º período",
    text: "Cada aula é uma imersão em raciocínio real. Não existe outra plataforma que ensine medicina do jeito que o Cacau ensina. Aprendi mais aqui do que em semestres inteiros.",
  },
  {
    name: "Dr. Paulo S.",
    role: "Clínico Geral",
    text: "Formado há 5 anos, encontrei no CORC o que a faculdade nunca me deu: a capacidade de pensar com clareza diante da incerteza clínica.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-light py-14 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-primary text-3xl sm:text-4xl lg:text-[2.9rem] font-light text-center mb-8 lg:mb-16">
          <em className="font-bold italic text-accent not-italic" style={{ fontStyle: "italic" }}>
            A marca deixada
          </em>
          <br className="lg:hidden" />
          {" "}<span className="font-bold">nos alunos do CORC</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="border border-primary/15 p-8 flex flex-col gap-5 cursor-pointer"
              whileHover={{ y: -14, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="text-accent text-base">★</span>
                ))}
              </div>
              <p className="font-serif font-light text-primary/85 text-base lg:text-2xl leading-relaxed italic flex-1">
                "{t.text}"
              </p>
              <div className="border-t border-primary/15 pt-5">
                <p className="font-serif font-bold text-primary text-sm">{t.name}</p>
                <p className="font-serif font-light text-primary/50 text-xs mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
