"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { BaiturrahmanArch } from "./Motifs";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-dark/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full bg-[#FAF6EE] rounded-aceh border border-dark/10 shadow-hover overflow-hidden flex flex-col z-10 transition-all duration-300 animate-scale-up ${sizes[size]}`}
      >
        {/* Arch decoration header (Aesthetics: Baiturrahman Archway) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/10 pointer-events-none z-0">
          <BaiturrahmanArch size={120} strokeWidth={1} />
        </div>

        {/* Modal Header */}
        <div className="relative z-10 flex items-center justify-between p-6 pb-4 border-b border-dark/5 bg-white/40">
          {title ? (
            <h3 className="text-xl font-serif font-bold text-dark">{title}</h3>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-aceh text-dark/40 hover:text-primary hover:bg-dark/5 transition-all focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="relative z-10 p-6 overflow-y-auto max-h-[70vh] text-dark/80 text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
