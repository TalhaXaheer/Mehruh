import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface EmblemProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

export function Emblem({ className, size = "md", glow = false }: EmblemProps) {
  const dimensions = {
    sm: { width: 36, height: 38 },
    md: { width: 64, height: 68 },
    lg: { width: 92, height: 98 },
    xl: { width: 120, height: 128 },
  };

  const { width, height } = dimensions[size];

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center select-none",
        glow && "drop-shadow-[0_0_20px_rgba(197,161,90,0.35)]",
        className
      )}
    >
      <Image
        src="/images/mehruh-monogram-gold.png"
        alt="MEHRUH Heritage Crest"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
