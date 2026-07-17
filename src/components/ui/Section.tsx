import React from "react";
import { OceanWave, PintoAceh } from "./Motifs";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "cream" | "white" | "dark";
  title?: string;
  subtitle?: string;
  showDivider?: boolean;
  withTopWave?: boolean;
  withBottomWave?: boolean;
  centerTitle?: boolean;
}

export function Section({
  children,
  background = "cream",
  title,
  subtitle,
  showDivider = false,
  withTopWave = false,
  withBottomWave = false,
  centerTitle = true,
  className = "",
  ...props
}: SectionProps) {
  const backgrounds = {
    cream: "bg-transparent text-dark",
    white: "bg-transparent text-dark",
    dark: "glass-faded border-y border-white/20 text-dark",
  };

  return (
    <section className={`relative py-16 md:py-24 ${backgrounds[background]} ${className}`} {...props}>
      {/* Top Wave Decor */}
      {withTopWave && (
        <div className="absolute top-0 left-0 w-full transform -translate-y-1/2 text-primary opacity-60">
          <OceanWave />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className={`mb-12 md:mb-16 flex flex-col ${centerTitle ? "items-center text-center" : "items-start text-left"}`}>
            {/* Minimalist divider motif */}
            {showDivider && centerTitle && (
              <div className="mb-4 text-primary opacity-80">
                <PintoAceh size={32} strokeWidth={1.5} />
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${background === "dark" ? "text-[#F5EFEB]/60" : "text-dark/60"}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>

      {/* Bottom Wave Decor */}
      {withBottomWave && (
        <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 text-primary opacity-60">
          <OceanWave />
        </div>
      )}
    </section>
  );
}
