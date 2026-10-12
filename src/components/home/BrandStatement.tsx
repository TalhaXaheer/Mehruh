"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoldStar } from "@/components/ui/Ornament";

export function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.02, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);
  const letterSpacing = useTransform(scrollYProgress, [0, 0.5, 1], ["0.18em", "0.26em", "0.2em"]);

  return (
    <section
      id="statement"
      ref={containerRef}
      className="relative w-full py-36 sm:py-48 md:py-56 bg-gradient-to-b from-[#120F10] via-[#2A0A15] to-[#0E0B0C] text-[#F4EFE5] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Central Dramatic Burgundy Velvet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-[#4A1726]/40 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-radial-[circle_at_center_transparent_0%,rgba(14,11,12,0.85)_100%] pointer-events-none" />

      {/* Subtle Atmospheric Gold Hairline */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15A]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15A]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        {/* Subtle Apex Star */}
        <div className="mb-6">
          <GoldStar size={12} className="text-[#DFC285]/70" />
        </div>

        {/* Small Editorial Kicker */}
        <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.42em] uppercase text-[#C5A15A] mb-6 font-medium">
          THE MEHRUH IMPERATIVE
        </p>

        {/* LARGE EDITORIAL TEXT: WEAR THE MEMORY */}
        <motion.h2
          style={{ scale, opacity, letterSpacing }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-gradient uppercase font-light leading-none tracking-[0.2em] drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
        >
          WEAR THE MEMORY.
        </motion.h2>

        {/* Supporting Editorial Prose */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif italic text-base sm:text-xl md:text-2xl text-[#EBE3D3]/80 max-w-2xl mx-auto mt-8 sm:mt-10 leading-relaxed"
        >
          &ldquo;An invisible garment woven from twilight roses, ancient agarwood, and the sacred soil of first monsoon rain.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
