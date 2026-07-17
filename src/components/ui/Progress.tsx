import React from "react";
import { Anchor } from "lucide-react";

export interface ProgressProps {
  value: number; // 0 to 100
  label?: string;
  variant?: "primary" | "green" | "gold";
  className?: string;
}

export function Progress({
  value = 0,
  label,
  variant = "primary",
  className = "",
}: ProgressProps) {
  // Clamp value between 0 and 100
  const percentage = Math.min(Math.max(value, 0), 100);

  const colors = {
    primary: "bg-primary",
    green: "bg-accent-green",
    gold: "bg-accent-gold",
  };

  const ringColors = {
    primary: "focus:ring-primary/20",
    green: "focus:ring-accent-green/20",
    gold: "focus:ring-accent-gold/20",
  };

  return (
    <div className={`w-full flex flex-col gap-2 font-sans ${className}`}>
      {/* Header Info */}
      {(label || label === "") && (
        <div className="flex items-center justify-between text-sm font-semibold text-dark/75">
          <span>{label}</span>
          <span className="font-mono text-xs">{percentage}% Selesai</span>
        </div>
      )}

      {/* Progress Track */}
      <div className="relative w-full h-3 bg-[#F5EFEB] rounded-full shadow-inner overflow-visible">
        {/* Fill Line */}
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colors[variant]}`}
          style={{ width: `${percentage}%` }}
        />

        {/* Sailing Ship/Anchor Accent (Sails on top of progress) */}
        <div
          className="absolute -top-2.5 transition-all duration-1000 ease-out -translate-x-1/2 flex flex-col items-center"
          style={{ left: `${percentage}%` }}
        >
          {/* A small traditional sailing ship SVG */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-colors duration-500 drop-shadow-sm
              ${variant === "primary" ? "text-primary" : ""}
              ${variant === "green" ? "text-accent-green" : ""}
              ${variant === "gold" ? "text-accent-gold" : ""}
            `}
          >
            {/* Minimalist Sailboat */}
            <path d="M2 17h20a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M12 17V3" />
            <path d="M12 3c4 0 7 4 7 7s-3 7-7 7" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 5C9 5 6 8 6 11s3 6 6 6" fill="currentColor" fillOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}
