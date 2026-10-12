"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MEHRUH_COLLECTION } from "@/lib/product";
import { FragranceProduct } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { ArrowRight, ShoppingBag, Check } from "lucide-react";

export function CollectionSection() {
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleQuickAdd = (product: FragranceProduct) => {
    const defaultOption = product.options[0];
    addItem(product, defaultOption, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      id="collection"
      className="relative w-full py-32 sm:py-40 bg-[#120F10] text-[#F4EFE5] overflow-hidden"
    >
      {/* Top subtle transition gradient from cream story */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#F4EFE5]/10 to-transparent pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4A1726]/20 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-[#C5A15A] font-sans font-medium mb-3"
          >
            DISCOVER THE ATELIER
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#DFC285] tracking-[0.16em] uppercase font-light"
          >
            THE COLLECTION
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#C5A15A]/60 mx-auto my-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-serif italic text-lg sm:text-xl text-[#D5C9B5]/85"
          >
            &ldquo;Scents crafted to become memories.&rdquo;
          </motion.p>
        </div>

        {/* Premium Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {MEHRUH_COLLECTION.slice(0, 3).map((product, index) => {
            const isAdded = addedId === product.id;
            const primaryPrice = product.options[0]?.price || 185;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between bg-[#181416] border border-[#C5A15A]/20 hover:border-[#DFC285]/70 rounded-[2px] overflow-hidden transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0708]">
                  <Image
                    src={product.featuredImage}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-108 group-hover:-translate-y-1"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181416] via-transparent to-transparent opacity-75" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[9px] tracking-[0.26em] uppercase font-sans text-[#DFC285] bg-[#120F10]/80 backdrop-blur-sm px-3 py-1 rounded-[1px] border border-[#C5A15A]/30 transition-colors duration-300 group-hover:border-[#C5A15A]">
                      {product.family}
                    </span>
                  </div>

                  {/* Subtle Gold Accent Reveal Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-12 h-1 bg-[#C5A15A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-serif text-2xl tracking-[0.2em] text-[#DFC285] uppercase font-light transition-transform duration-300 group-hover:translate-x-1">
                        {product.title}
                      </h3>
                      <span className="font-serif text-lg text-[#F4EFE5]/90">
                        ${primaryPrice}
                      </span>
                    </div>

                    <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#C5A15A]/80">
                      {product.subtitle}
                    </p>

                    <p className="font-sans text-xs text-[#D5C9B5]/75 font-light leading-relaxed line-clamp-2 pt-1">
                      {product.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3 border-t border-[#C5A15A]/15">
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className={`w-full py-3.5 px-4 text-[11px] tracking-[0.26em] uppercase font-sans font-medium rounded-[1px] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                        isAdded
                          ? "bg-[#C5A15A] text-[#120F10] border border-[#DFC285]"
                          : "border border-[#C5A15A]/50 text-[#DFC285] hover:border-[#DFC285] hover:bg-[#C5A15A] hover:text-[#120F10]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>ADDED TO BAG</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>ADD TO BAG</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Collection Link */}
        <div className="text-center mt-16">
          <a
            href="#featured"
            className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.3em] uppercase text-[#DFC285] border-b border-[#C5A15A]/50 pb-1 hover:border-[#DFC285] transition-all"
          >
            <span>VIEW COMPLETE ATELIER</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
