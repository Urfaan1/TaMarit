"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  items: DropdownItem[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Dropdown({
  items,
  selectedValue,
  onChange,
  placeholder = "Pilih opsi...",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find((item) => item.value === selectedValue);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value: string) => {
    if (onChange) {
      onChange(value);
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full md:w-60 font-sans ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white text-dark border-2 border-dark/10 rounded-aceh px-4 py-3 text-base font-semibold transition-all duration-300 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 active:scale-98 text-left shadow-soft"
      >
        <span className="flex items-center gap-2 truncate">
          {selectedItem?.icon && <span className="text-primary">{selectedItem.icon}</span>}
          {selectedItem ? selectedItem.label : placeholder}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-dark/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      {/* Floating Menu List */}
      {isOpen && (
        <div className="absolute left-0 mt-2.5 w-full bg-[#FAF6EE] border border-dark/10 rounded-aceh shadow-hover z-50 overflow-hidden animate-fade-in">
          <ul className="py-1 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <li key={item.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(item.value)}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 text-left text-sm font-semibold transition-all
                    ${
                      item.value === selectedValue
                        ? "bg-primary text-white"
                        : "text-dark/75 hover:bg-primary/5 hover:text-primary"
                    }
                  `}
                >
                  {item.icon && (
                    <span className={item.value === selectedValue ? "text-white" : "text-primary"}>
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
