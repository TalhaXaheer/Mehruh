"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    subtotal,
    totalQuantity,
  } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const drawerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeCart();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      previouslyFocused?.focus?.();
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            name: i.product.title,
            amount: i.selectedOption.price,
            quantity: i.quantity,
            size: i.selectedOption.size,
          })),
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Fallback demo checkout confirmation
        alert(
          `Bespoke order prepared for ${totalQuantity} flacon(s). Total: $${subtotal}. Thank you for choosing MEHRUH.`
        );
        setIsCheckingOut(false);
      }
    } catch {
      alert(
        `Bespoke order prepared for ${totalQuantity} flacon(s). Total: $${subtotal}. Direct payment simulation active.`
      );
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Shopping bag"
          aria-labelledby="cart-drawer-title"
          className="w-screen max-w-md bg-[#171515] border-l border-[#C5A15A]/30 flex flex-col shadow-2xl text-[#F4EFE5]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#C5A15A]/20 flex items-center justify-between bg-[#1D1A1A]">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A15A]">
                THE FLACON CHEST
              </span>
              <h2 id="cart-drawer-title" className="text-xl font-serif tracking-[0.1em] text-[#DFC285]">
                YOUR SELECTION ({totalQuantity})
              </h2>
            </div>
            <button
              ref={closeButtonRef}
              onClick={closeCart}
              className="text-[#D5C9B5] hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full border border-[#C5A15A]/30 flex items-center justify-center bg-[#4A1726]/30">
                  <Sparkles className="w-6 h-6 text-[#DFC285]" />
                </div>
                <h3 className="font-serif text-xl tracking-[0.15em] text-[#DFC285]">
                  YOUR CHEST IS EMPTY
                </h3>
                <p className="text-xs text-[#D5C9B5]/70 max-w-xs leading-relaxed font-sans">
                  The archives of MEHRUH await your exploration. Choose from our master flacons of rare South Asian botanicals.
                </p>
                <Button
                  variant="goldOutline"
                  size="sm"
                  onClick={closeCart}
                  className="mt-4"
                >
                  DISCOVER COLLECTION
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded bg-[#1D1A1A]/80 border border-[#C5A15A]/15 relative group"
                  >
                    {/* Bottle thumbnail */}
                    <div className="relative w-20 h-24 bg-[#0F0E0E] rounded overflow-hidden flex-shrink-0 border border-[#C5A15A]/20">
                      <Image
                        src={item.product.featuredImage}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-lg tracking-[0.12em] text-[#DFC285]">
                            {item.product.title}
                          </h4>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-stone-500 hover:text-red-400 transition-colors p-1"
                            title="Remove flacon"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#D5C9B5]/80 font-sans tracking-[0.1em]">
                          {item.product.subtitle} • {item.selectedOption.size}
                        </p>
                        <p className="text-[10px] text-[#C5A15A]/80 font-serif italic mt-0.5">
                          {item.product.family}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#C5A15A]/30 rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 hover:text-[#DFC285] text-stone-400 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-mono text-[#F4EFE5]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:text-[#DFC285] text-stone-400 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-serif text-base text-[#DFC285]">
                          ${item.selectedOption.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Complimentary Perk Banner */}
                <div className="p-3 bg-[#4A1726]/30 border border-[#C5A15A]/25 rounded text-[11px] text-[#DFC285] flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C5A15A] flex-shrink-0" />
                  <span>
                    Complimentary archival wax seal packaging & 2 sample vials included.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#C5A15A]/20 bg-[#1D1A1A] space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#D5C9B5]/70 tracking-[0.1em] font-sans">
                  <span>SHIPPING</span>
                  <span className="text-[#DFC285]">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-[#C5A15A]/10">
                  <span className="font-serif text-sm tracking-[0.2em] uppercase text-[#F4EFE5]">
                    SUBTOTAL
                  </span>
                  <span className="font-serif text-2xl text-[#DFC285]">
                    ${subtotal}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-gradient-to-r from-[#C5A15A] via-[#DFC285] to-[#A8833E] text-[#171515] font-sans font-medium text-xs tracking-[0.28em] uppercase rounded-[3px] hover:shadow-[0_0_25px_rgba(197,161,90,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
              >
                <span>{isCheckingOut ? "PREPARING ATELIER..." : "PROCEED TO CHECKOUT"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#D5C9B5]/60 tracking-[0.15em] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A15A]" />
                <span>AUTHENTIC BATCH DISTILLATION • SECURE CHECKOUT</span>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
