import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "goldOutline" | "goldSolid" | "burgundySolid" | "ghost" | "editorialLink";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "goldOutline",
      size = "md",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-[11px] tracking-[0.2em]",
      md: "px-7 py-3 text-[12px] tracking-[0.26em]",
      lg: "px-10 py-4 text-[13px] tracking-[0.32em]",
    };

    const variantClasses = {
      // Primary luxury button seen in Reference Image 2: "EXPLORE COLLECTION"
      goldOutline:
        "border border-[#C5A15A]/60 text-[#DFC285] bg-transparent hover:border-[#DFC285] hover:bg-[#C5A15A]/10 hover:text-[#F3E4C3] hover:shadow-[0_0_20px_rgba(197,161,90,0.25)] rounded-[3px]",
      goldSolid:
        "bg-[#C5A15A] text-[#171515] font-medium border border-[#DFC285] hover:bg-[#DFC285] hover:shadow-[0_0_25px_rgba(197,161,90,0.35)] rounded-[3px]",
      burgundySolid:
        "bg-[#4A1726] text-[#DFC285] border border-[#C5A15A]/40 hover:bg-[#5F1C30] hover:border-[#C5A15A]/80 rounded-[3px]",
      ghost:
        "text-[#DFC285] hover:text-[#F3E4C3] hover:bg-[#C5A15A]/5 rounded-[3px]",
      editorialLink:
        "p-0 text-[#171515] hover:text-[#4A1726] tracking-[0.22em] inline-flex items-center gap-2 border-b border-[#C5A15A] pb-1",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center uppercase font-sans font-normal transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A15A] disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.99]",
          variant !== "editorialLink" && sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
