"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GoldStar } from "@/components/ui/Ornament";

export function HeroSection() {
  const scrollToNext = () => {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCollection = () => {
    const colSection = document.getElementById("collection");
    if (colSection) {
      colSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0A0708] select-none"
    >
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.12] scale-[1.02] transition-transform duration-1000"
        >
          <source src="/videos/mehruh-hero.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Dark Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120F10] via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center_rgba(74,23,38,0.25)_0%,rgba(10,7,8,0.75)_100%] pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Central Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Heritage Monogram Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-16 h-18 sm:w-20 sm:h-22 mb-6 drop-shadow-[0_0_25px_rgba(197,161,90,0.4)]"
        >
          <Image
            src="/images/mehruh-monogram-gold.png"
            alt="MEHRUH Monogram"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.32em] sm:tracking-[0.36em] uppercase font-light text-gold-gradient drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)] leading-none"
        >
          MEHRUH
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[11px] sm:text-xs md:text-sm tracking-[0.45em] uppercase text-[#DFC285]/90 mt-5 font-light"
        >
          SCENT. SOUL. MEMORY.
        </motion.p>

        {/* Luxury Outlined Treatment Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <button
            onClick={scrollToCollection}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 border border-[#C5A15A]/70 text-[#DFC285] bg-black/25 backdrop-blur-sm rounded-[2px] transition-all duration-500 overflow-hidden hover:border-[#DFC285] hover:text-[#120F10] hover:shadow-[0_0_30px_rgba(197,161,90,0.45)] cursor-pointer"
          >
            {/* Background gold reveal effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#C5A15A] via-[#DFC285] to-[#C5A15A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

            {/* Button text & moving arrow */}
            <span className="relative z-10 font-sans text-xs sm:text-[13px] tracking-[0.32em] uppercase font-medium transition-transform duration-300 group-hover:translate-x-0.5">
              EXPLORE COLLECTION
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 text-[#DFC285] group-hover:text-[#120F10] transition-all duration-300 transform group-hover:translate-x-1.5" />
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#DFC285]/75 hover:text-[#DFC285] transition-colors cursor-pointer group"
        aria-label="Scroll to our story"
      >
        <span className="text-[9px] tracking-[0.34em] uppercase font-sans font-light">
          DISCOVER
        </span>
        <div className="w-5 h-8 rounded-full border border-[#C5A15A]/40 flex items-start justify-center p-1 group-hover:border-[#C5A15A] transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#DFC285]"
          />
        </div>
      </motion.button>
    </section>
  );
}
