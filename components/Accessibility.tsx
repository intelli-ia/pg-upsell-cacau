"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Accessibility() {
  return (
    <section className="section-dark py-14 lg:py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif font-bold text-secondary text-3xl sm:text-4xl lg:text-[2.9rem] leading-snug mb-3 lg:mb-6">
          Acessível de
          <br className="lg:hidden" />{" "}
          <em className="text-accent" style={{ fontStyle: "italic" }}>
            onde estiver.
          </em>
        </h2>

        <p className="font-serif font-light text-secondary/75 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-6 lg:mb-16">
          Você pode assistir e reassistir o CORC de qualquer lugar com internet.
          No celular, computador ou tablet.
        </p>

        {/* Device Mockups */}
        <div className="flex flex-row items-end justify-center gap-3 sm:gap-10">

          {/* Phone */}
          <motion.div
            className="flex flex-col items-center gap-2 lg:gap-3 cursor-pointer"
            whileHover={{ y: -18, rotate: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <div className="w-14 h-[6.5rem] lg:w-28 lg:h-52 border-2 border-secondary/20 rounded-2xl bg-secondary/5 overflow-hidden relative">
              <Image
                src="/Celular.png"
                alt="Plataforma CORC no celular"
                fill
                className="object-cover object-top"
              />
            </div>
            <span className="font-serif font-light text-secondary/40 text-[9px] lg:text-xs tracking-widest uppercase">
              Celular
            </span>
          </motion.div>

          {/* Laptop */}
          <motion.div
            className="flex flex-col items-center gap-2 lg:gap-3 cursor-pointer"
            whileHover={{ y: -14, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="w-40 h-[106px] lg:w-72 lg:h-48 border-2 border-secondary/20 rounded-t-lg bg-secondary/5 overflow-hidden relative">
              <Image
                src="/Computador.png"
                alt="Plataforma CORC no computador"
                fill
                className="object-cover"
                style={{ objectPosition: "35% top" }}
              />
            </div>
            <div className="w-44 lg:w-80 h-3 border-2 border-secondary/20 rounded-b-sm bg-secondary/10" />
            <span className="font-serif font-light text-secondary/40 text-[9px] lg:text-xs tracking-widest uppercase">
              Computador
            </span>
          </motion.div>

          {/* Tablet */}
          <motion.div
            className="flex flex-col items-center gap-2 lg:gap-3 cursor-pointer"
            whileHover={{ y: -18, rotate: 3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <div className="w-[72px] h-[96px] lg:w-36 lg:h-48 border-2 border-secondary/20 rounded-xl bg-secondary/5 overflow-hidden relative">
              <Image
                src="/Tablet.png"
                alt="Plataforma CORC no tablet"
                fill
                className="object-cover object-top"
              />
            </div>
            <span className="font-serif font-light text-secondary/40 text-[9px] lg:text-xs tracking-widest uppercase">
              Tablet
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
