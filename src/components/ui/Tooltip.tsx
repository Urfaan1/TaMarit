"use client";

import React, { useState } from "react";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ content, children, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2.5",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2.5",
    left: "right-full top-1/2 -translate-y-1/2 mr-2.5",
    right: "left-full top-1/2 -translate-y-1/2 ml-2.5",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-cream border-x-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-cream border-x-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-cream border-y-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 border-r-cream border-y-transparent border-l-transparent",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-40 whitespace-nowrap bg-white text-dark text-xs font-semibold px-3 py-2 border border-dark/10 rounded-aceh shadow-hover animate-fade-in pointer-events-none select-none ${positionClasses[position]}`}
          role="tooltip"
        >
          {content}
          {/* Arrow element */}
          <div
            className={`absolute border-[5px] ${arrowClasses[position]}`}
          />
        </div>
      )}
    </div>
  );
}
