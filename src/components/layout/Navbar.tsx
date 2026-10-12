"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalQuantity, openCart } = useCart();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "COLLECTION", href: "#collection" },
    { label: "OUR STORY", href: "#story" },
    { label: "JOURNAL", href: "#statement" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-sans",
          isScrolled
            ? "bg-[#120F10]/85 backdrop-blur-md border-b border-[#C5A15A]/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Left: MEHRUH Logo / Monogram */}
          <div className="flex items-center">
            <BrandLogo variant="horizontal" theme="dark" size="md" />
          </div>

          {/* Center & Right Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] font-sans tracking-[0.26em] uppercase text-[#F4EFE5]/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#DFC285] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A15A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* CART Trigger */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 text-[#DFC285] hover:text-[#F3E4C3] transition-all duration-200 group py-1 pl-2"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 text-[#C5A15A]" />
              <span className="tracking-[0.24em] uppercase text-[11px]">
                CART {mounted && totalQuantity > 0 ? `(${totalQuantity})` : ""}
              </span>
              {mounted && totalQuantity > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A] animate-ping" />
              )}
            </button>
          </nav>

          {/* Mobile Menu & Cart Icon */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={openCart}
              className="relative text-[#DFC285] p-2"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {mounted && totalQuantity > 0 && (
                <span className="absolute top-1 right-1 bg-[#4A1726] text-[#DFC285] border border-[#C5A15A] text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#DFC285] p-2 hover:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#120F10]/98 backdrop-blur-xl pt-28 px-8 pb-12 flex flex-col justify-between md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-8 text-center items-center">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A15A] uppercase border-b border-[#C5A15A]/20 pb-2">
              MEHRUH HAUTE PERFUMERY
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif tracking-[0.22em] text-[#F4EFE5] hover:text-[#DFC285] transition-colors py-1 uppercase"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openCart();
              }}
              className="text-lg font-sans tracking-[0.25em] text-[#DFC285] uppercase pt-4 flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>CART ({totalQuantity})</span>
            </button>
          </div>

          <div className="text-center pt-8 border-t border-[#C5A15A]/20 flex flex-col items-center gap-2">
            <p className="text-[10px] tracking-[0.3em] text-[#C5A15A]/80 uppercase">
              SCENT. SOUL. MEMORY.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
