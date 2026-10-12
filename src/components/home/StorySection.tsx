"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GoldStar } from "@/components/ui/Ornament";

export function StorySection() {
  return (
    <section
      id="story"
      className="relative w-full py-28 sm:py-36 md:py-44 bg-[#F4EFE5] text-[#171515] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Editorial Narrative in Warm Cream & Deep Burgundy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-8"
          >
            {/* Subtle Brand Tag */}
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.38em] uppercase text-[#876629] font-sans font-medium">
              <GoldStar size={10} className="text-[#A8833E]" />
              <span>THE PHILOSOPHY OF MEMORY</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#4A1726] leading-[1.12] tracking-tight font-light">
              &ldquo;A fragrance is more than a scent.&rdquo;
            </h2>

            {/* Supporting Text */}
            <div className="space-y-4">
              <p className="font-serif italic text-xl sm:text-2xl text-[#2B0913]/90 leading-relaxed">
                It is a memory. A place. A person. A feeling.
              </p>

              <div className="w-16 h-[1px] bg-[#C5A15A]/60 my-4" />

              <p className="font-sans text-sm sm:text-base text-[#3D2E26]/85 font-light leading-relaxed max-w-lg">
                Welcome to MEHRUH — where every fragrance tells a story.
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#3D2E26]/75 font-light leading-relaxed max-w-lg pt-1">
                Distilled from the sacred botanical alchemy of the subcontinent, our creations capture fleeting moments in time—the first rain touching sun-baked earth, the twilight intimacy of Damascus roses, and late-night poetic gatherings.
              </p>
            </div>

            {/* OUR STORY link */}
            <div className="pt-4">
              <a
                href="#statement"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-sans font-medium text-[#4A1726] border-b border-[#A8833E] pb-1.5 hover:text-[#876629] hover:border-[#4A1726] transition-all duration-300"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-[#876629] transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Framed Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            {/* Premium Framed Composition */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] p-3 sm:p-4 bg-[#FAF7F2] border border-[#E2D8C3] shadow-[0_20px_50px_rgba(74,23,38,0.12)] rounded-[2px] group">
              {/* Inner passe-partout matting */}
              <div className="relative w-full h-full overflow-hidden rounded-[1px] border border-[#E2D8C3]/80">
                <Image
                  src="/images/hero-woman.webp"
                  alt="MEHRUH Editorial Campaign"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Subtle warm vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1726]/30 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Delicate Corner Monogram Stamp */}
                <div className="absolute bottom-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1.5 border border-[#C5A15A]/30 rounded-[1px] shadow-sm">
                  <span className="font-serif text-[10px] tracking-[0.25em] text-[#4A1726] uppercase">
                    MEHRUH • ATELIER
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
