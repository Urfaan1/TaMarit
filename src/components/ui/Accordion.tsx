"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BungongJeumpa } from "./Motifs";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      if (openIndexes.includes(index)) {
        setOpenIndexes([]);
      } else {
        setOpenIndexes([index]);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            className={`border rounded-aceh bg-white transition-all duration-300 shadow-soft overflow-hidden
              ${isOpen ? "border-primary/20 ring-2 ring-primary/5" : "border-dark/5"}
            `}
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 text-left font-serif font-semibold text-dark hover:text-primary transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-3">
                {/* Visual Accent (Flower changes scale when active) */}
                <BungongJeumpa
                  size={20}
                  className={`transition-all duration-500
                    ${isOpen ? "text-primary rotate-90 scale-110" : "text-dark/20"}
                  `}
                />
                <span className="text-base md:text-lg">{item.title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-dark/40 transition-transform duration-300
                  ${isOpen ? "rotate-180 text-primary" : ""}
                `}
              />
            </button>

            {/* Collapsible Panel */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? "max-h-[500px] border-t border-dark/5" : "max-h-0"}
              `}
            >
              <div className="p-6 text-sm md:text-base leading-relaxed text-dark/70 bg-[#FAF6EE]/20">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
