"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MEHRUH_COLLECTION } from "@/lib/product";
import { useCart } from "@/context/CartContext";
import { ArrowRight, Sparkles, Check, Droplets, Flower2, Flame } from "lucide-react";
import { GoldStar } from "@/components/ui/Ornament";

export function FeaturedFragrance() {
  const featured = MEHRUH_COLLECTION[0]; // SAANJH
  const [selectedSize, setSelectedSize] = useState<"50ml" | "100ml">("100ml");
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  const selectedOption =
    featured.options.find((o) => o.size === selectedSize) || featured.options[0];

  const handleAddToCart = () => {
    addItem(featured, selectedOption, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section
      id="featured"
      className="relative w-full py-32 sm:py-44 bg-[#0E0B0C] text-[#F4EFE5] overflow-hidden border-t border-[#C5A15A]/15"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Large Fragrance Spotlight Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[3/4] bg-[#161214] border border-[#C5A15A]/30 rounded-[2px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
              <Image
                src={featured.featuredImage}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B0C] via-transparent to-transparent opacity-70" />

              {/* Top Accent Medallion */}
              <div className="absolute top-5 left-5 bg-[#4A1726]/90 backdrop-blur-md border border-[#C5A15A] px-3.5 py-1 rounded-[1px] text-[10px] tracking-[0.26em] uppercase font-sans text-[#DFC285]">
                SIGNATURE EXTRAIT
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Fragrance Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.38em] uppercase text-[#C5A15A] mb-3">
                <GoldStar size={10} />
                <span>FLACON SPOTLIGHT</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl text-[#DFC285] tracking-[0.16em] uppercase font-light leading-none">
                {featured.title}
              </h2>

              <p className="font-sans text-xs sm:text-sm tracking-[0.26em] uppercase text-[#C5A15A]/90 mt-3 font-light">
                {featured.subtitle} • {featured.family}
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#D5C9B5]/85 font-light leading-relaxed">
              {featured.description}
            </p>

            <p className="font-serif italic text-base sm:text-lg text-[#EBE3D3]/80 border-l border-[#C5A15A]/50 pl-4 py-1">
              &ldquo;{featured.storyQuote}&rdquo;
            </p>

            {/* Olfactory Notes Breakdown */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A15A] font-sans font-medium block">
                OLFACTORY ARCHITECTURE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-[#181416] border border-[#C5A15A]/20 rounded-[2px]">
                  <span className="text-[9px] tracking-[0.2em] text-[#C5A15A] uppercase block mb-1">
                    TOP
                  </span>
                  <p className="text-xs text-[#F4EFE5] font-serif">
                    {featured.notes.top.join(", ")}
                  </p>
                </div>

                <div className="p-3 bg-[#181416] border border-[#C5A15A]/20 rounded-[2px]">
                  <span className="text-[9px] tracking-[0.2em] text-[#DFC285] uppercase block mb-1">
                    HEART
                  </span>
                  <p className="text-xs text-[#F4EFE5] font-serif">
                    {featured.notes.heart.join(", ")}
                  </p>
                </div>

                <div className="p-3 bg-[#181416] border border-[#C5A15A]/20 rounded-[2px]">
                  <span className="text-[9px] tracking-[0.2em] text-[#876629] uppercase block mb-1">
                    BASE
                  </span>
                  <p className="text-xs text-[#F4EFE5] font-serif">
                    {featured.notes.base.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Size Selector & Price */}
            <div className="flex items-center justify-between pt-2 border-t border-[#C5A15A]/20">
              <div className="flex gap-2">
                {featured.options.map((opt) => (
                  <button
                    key={opt.size}
                    onClick={() => setSelectedSize(opt.size as any)}
                    className={`px-4 py-1.5 text-xs font-sans tracking-[0.2em] uppercase rounded-[2px] transition-all cursor-pointer ${
                      selectedSize === opt.size
                        ? "bg-[#C5A15A] text-[#120F10] font-medium"
                        : "border border-[#C5A15A]/30 text-[#D5C9B5] hover:border-[#DFC285]"
                    }`}
                  >
                    {opt.size}
                  </button>
                ))}
              </div>

              <div className="font-serif text-3xl text-[#DFC285]">
                ${selectedOption.price}
              </div>
            </div>

            {/* VIEW FRAGRANCE / ACQUIRE CTA BUTTON */}
            <div className="pt-2">
              <button
                onClick={handleAddToCart}
                className={`w-full sm:w-auto px-10 py-4 text-xs tracking-[0.32em] uppercase font-sans font-medium rounded-[2px] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer ${
                  isAdded
                    ? "bg-[#C5A15A] text-[#120F10] border border-[#DFC285]"
                    : "border border-[#C5A15A] text-[#DFC285] bg-transparent hover:bg-[#C5A15A] hover:text-[#120F10] hover:shadow-[0_0_25px_rgba(197,161,90,0.4)]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO BAG</span>
                  </>
                ) : (
                  <>
                    <span>VIEW FRAGRANCE • ACQUIRE</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
