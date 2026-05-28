"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  BookOpen,
  Check,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Star,
  Infinity,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

const features = [
  "+50 casos clínicos reais no CORC",
  "Material Complementar de Apoio",
  "[Bônus] Curso de Introdução Geral à Medicina",
  "[Bônus] Raciocínio no Quadro",
  "Trilhas de Estudos Organizadas",
  "Grupo no WhatsApp Exclusivo",
  "Participações nos Eventos Presenciais",
];

const testimonials = [
  {
    id: 1,
    name: "Dr. Rafael M.",
    role: "Médico Residente",
    content:
      "O CORC mudou completamente a forma como penso diante de um caso clínico. Antes eu decorava; agora eu raciocino. A diferença é brutal.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Ana Clara T.",
    role: "Acadêmica de Medicina, 8º período",
    content:
      "Cada aula é uma imersão em raciocínio real. Não existe outra plataforma que ensine medicina do jeito que o Cacau ensina.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: 3,
    name: "Dr. Paulo S.",
    role: "Clínico Geral",
    content:
      "Formado há 5 anos, encontrei no CORC o que a faculdade nunca me deu: a capacidade de pensar com clareza diante da incerteza clínica.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=51",
  },
];

const benefits = [
  { icon: Infinity, text: "Acesso vitalício ao conteúdo" },
  { icon: ShieldCheck, text: "15 dias de garantia total" },
  { icon: Stethoscope, text: "Criado por médico, para médicos" },
];

export function CORCPricingCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <BorderRotate
          className="overflow-hidden"
          backgroundColor="#1a1a1a"
          borderWidth={1}
          borderRadius={0}
          animationSpeed={6}
          gradientColors={{
            primary: "#2a1a05",
            secondary: "#e59f14",
            accent: "#f5cc6a",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* ── Left column: pricing ── */}
            <div className="p-8 lg:p-14 lg:w-1/2 flex flex-col border-b border-secondary/10 lg:border-b-0 lg:border-r">
              {/* Logo */}
              <Image
                src="/logo.svg"
                alt="C.O.R.C. — Curso Online de Raciocínio Clínico"
                width={320}
                height={62}
                className="w-52 lg:w-72 mb-6"
              />

              <p className="font-serif font-light text-secondary/70 text-sm lg:text-lg leading-relaxed mb-3 lg:mb-8">
                Uma formação permanente em raciocínio clínico com<br />o Dr. Carlos
                Antônio Cacau, do caso real à decisão.
              </p>

              {/* Price */}
              <div className="mb-10">
                <p className="font-serif font-light text-secondary/40 text-xs mb-0">
                  De{" "}
                  <span className="line-through text-secondary/30">
                    R$1.068
                  </span>{" "}
                  por apenas 12x de
                </p>
                <div className="flex items-baseline gap-1 mb-6 -mt-2 lg:-mt-5">
                  <span className="font-serif font-bold text-secondary text-3xl">
                    R$
                  </span>
                  <span className="font-serif font-black text-secondary text-8xl lg:text-9xl leading-none tracking-tighter translate-y-6 inline-block">
                    80
                  </span>
                  <span className="font-serif font-bold text-secondary text-3xl leading-none">,98</span>
                </div>
                <p className="font-serif font-light text-secondary/50 text-base mt-2">
                  ou{" "}
                  <strong className="font-bold text-secondary/80">R$797,00</strong>{" "}
                  à vista
                </p>
              </div>

              {/* Benefits */}
              <ul className="flex flex-col gap-3 mb-8">
                {benefits.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="font-serif font-light text-secondary/75 text-sm lg:text-base">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-2">
                <Button size="sm" className="w-full group" asChild>
                  <Link href="https://pay.hub.la/Bx8I7wO9zk0DmaF1OUEP" target="_blank">
                    Clique e Matricule-se
                    <ChevronRight className="h-3 w-3 ml-auto transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://wa.me/5571983477264" target="_blank">
                    <MessageCircle className="h-3 w-3" />
                    Tenho dúvidas
                  </Link>
                </Button>
              </div>
            </div>

            {/* ── Right column: features + testimonials ── */}
            <div className="p-8 lg:p-14 lg:w-1/2 flex flex-col">
              <p className="font-serif font-light text-secondary/40 text-[10px] tracking-[0.25em] uppercase mb-4">
                O que está incluído
              </p>

              <ul className="flex flex-col gap-3 mb-auto">
                {features.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 border border-accent/50 flex items-center justify-center">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    <span className="font-serif font-light text-secondary/75 text-sm lg:text-base leading-snug">
                      {feat}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Separator className="my-8" />

              {/* Rotating testimonials */}
              <div className="relative border border-secondary/10 p-5 min-h-[148px]">
                <AnimatePresence mode="wait">
                  {testimonials.map(
                    (t, idx) =>
                      idx === currentIdx && (
                        <motion.div
                          key={t.id}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.45 }}
                          className="absolute inset-0 p-5 flex flex-col gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={t.avatar}
                              alt={t.name}
                              className="w-5 h-5 lg:w-9 lg:h-9 rounded-full object-cover grayscale opacity-70"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-serif font-bold text-secondary/90 text-[10px] lg:text-sm leading-none">
                                {t.name}
                              </p>
                              <p className="font-serif font-light text-secondary/40 text-[9px] lg:text-xs mt-0.5 truncate">
                                {t.role}
                              </p>
                            </div>
                            <div className="flex gap-0.5 flex-shrink-0">
                              {Array.from({ length: t.rating }).map((_, si) => (
                                <Star
                                  key={si}
                                  className="h-2 w-2 lg:h-3 lg:w-3 fill-accent text-accent"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="font-serif font-light italic text-secondary/60 text-xs lg:text-sm leading-relaxed">
                            "{t.content}"
                          </p>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    aria-label={`Depoimento ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIdx
                        ? "w-5 bg-accent"
                        : "w-1.5 bg-secondary/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </BorderRotate>
      </motion.div>
    </div>
  );
}
