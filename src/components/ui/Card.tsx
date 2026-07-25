import React from "react";
import { PintoAceh, BaiturrahmanArch, PucokReubong } from "./Motifs";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  withMotif?: boolean;
  motifVariant?: "pinto" | "arch" | "pucok-reubong";
  headerAccent?: "primary" | "gold" | "green" | "none";
}

export function Card({
  children,
  hoverable = true,
  withMotif = false,
  motifVariant = "pinto",
  headerAccent = "none",
  className = "",
  ...props
}: CardProps) {
  const accentClasses = {
    none: "",
    primary: "border-t-4 border-primary",
    gold: "border-t-4 border-accent-gold",
    green: "border-t-4 border-accent-green",
  };

  return (
    <div
      className={`relative glass-card-faded rounded-aceh p-6 transition-all duration-500 overflow-hidden group
        ${hoverable ? "hover:-translate-y-1.5 hover:shadow-hover hover:border-primary/10" : ""}
        ${accentClasses[headerAccent]}
        ${className}
      `}
      {...props}
    >
      {/* Subtle Acehnese Motif Background Watermark */}
      {withMotif && (
        <div className="absolute -right-8 -bottom-8 text-dark/[0.03] group-hover:text-primary/[0.04] transition-colors duration-500 pointer-events-none select-none">
          {motifVariant === "pinto" ? (
            <PintoAceh size={140} strokeWidth={1} />
          ) : motifVariant === "arch" ? (
            <BaiturrahmanArch size={140} strokeWidth={1} />
          ) : (
            <PucokReubong size={140} strokeWidth={1} />
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
