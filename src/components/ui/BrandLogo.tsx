import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Emblem } from "./Emblem";

interface BrandLogoProps {
  variant?: "horizontal" | "stacked" | "wordmark";
  theme?: "dark" | "cream";
  size?: "sm" | "md" | "lg";
  className?: string;
  as?: "h1" | "p";
}

export function BrandLogo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  className,
  as = "h1",
}: BrandLogoProps) {
  const isDark = theme === "dark";

  if (variant === "horizontal") {
    return (
      <Link
        href="/"
        className={cn(
          "group inline-flex items-center gap-3 select-none transition-opacity hover:opacity-95",
          className
        )}
      >
        <Emblem size="sm" glow={isDark} />
        <div className="flex flex-col text-left">
          <span
            className={cn(
              "font-serif tracking-[0.3em] font-light leading-none",
              size === "sm" && "text-sm",
              size === "md" && "text-lg",
              size === "lg" && "text-2xl",
              isDark ? "text-[#DFC285]" : "text-[#4A1726]"
            )}
          >
            MEHRUH
          </span>
          <span
            className={cn(
              "text-[8px] tracking-[0.25em] font-sans uppercase mt-0.5",
              isDark ? "text-[#C5A15A]/70" : "text-[#876629]"
            )}
          >
            SCENT. SOUL. MEMORY.
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "stacked") {
    const HeadingTag = as;
    return (
      <div
        className={cn(
          "flex flex-col items-center text-center select-none",
          className
        )}
      >
        <Emblem size={size === "lg" ? "xl" : "lg"} glow={isDark} />
        <HeadingTag
          className={cn(
            "font-serif tracking-[0.38em] uppercase font-light mt-4 text-[#DFC285]",
            size === "sm" && "text-2xl",
            size === "md" && "text-4xl md:text-5xl",
            size === "lg" && "text-5xl md:text-6xl lg:text-7xl",
            isDark ? "text-gold-gradient" : "text-[#4A1726]"
          )}
        >
          MEHRUH
        </HeadingTag>
        <p
          className={cn(
            "font-sans uppercase text-[10px] md:text-xs tracking-[0.34em] mt-2",
            isDark ? "text-[#C5A15A]/90" : "text-[#876629]"
          )}
        >
          SCENT. SOUL. MEMORY.
        </p>
      </div>
    );
  }

  // Wordmark only
  return (
    <Link
      href="/"
      className={cn(
        "font-serif tracking-[0.35em] uppercase font-light inline-block transition-opacity hover:opacity-90",
        isDark ? "text-[#DFC285]" : "text-[#4A1726]",
        size === "sm" && "text-base",
        size === "md" && "text-xl",
        size === "lg" && "text-3xl",
        className
      )}
    >
      MEHRUH
    </Link>
  );
}
