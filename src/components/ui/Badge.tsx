import React from "react";
import { BungongJeumpa } from "./Motifs";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "gold" | "green" | "dark" | "outline";
  size?: "sm" | "md";
  showDot?: boolean;
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
  showDot = false,
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-sans font-bold tracking-wide uppercase rounded-full select-none backdrop-blur-md shadow-sm";

  const variants = {
    primary: "bg-primary/10 text-primary border border-primary/30",
    gold: "bg-accent-gold/15 text-[#997700] border border-accent-gold/30",
    green: "bg-accent-green/10 text-accent-green border border-accent-green/30",
    dark: "bg-dark/10 text-dark border border-dark/30",
    outline: "bg-transparent border border-dark/20 text-dark/70 shadow-none",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3.5 py-1 text-xs",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {showDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      )}
      {children}
    </span>
  );
}
