"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  GraduationCap, 
  BookOpen, 
  Book, 
  Gamepad2, 
  Info,
  User,
  Menu,
  X
} from "lucide-react";
import { BookOpenText } from "lucide-react"; // Using this as the logo based on the image (a book icon)

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("/");

  useEffect(() => {
    if (pathname !== "/") return;

    const observerOptions = {
      root: null, // use the viewport
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the upper part of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`/#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["tes", "latihan", "sastra-budaya", "permainan", "tentang"];
    let hasSections = false;
    
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        observer.observe(el);
        hasSections = true;
      }
    });
    
    // If we are at the very top, set active to /
    const handleMainScroll = () => {
      // Find the scrollable container or window
      const container = document.getElementById("main-scroll-container") || window;
      const scrollTop = container === window ? window.scrollY : (container as HTMLElement).scrollTop;
      
      if (scrollTop < 100) {
        setActiveHash("/");
      }
    };
    
    const container = document.getElementById("main-scroll-container") || window;
    container.addEventListener("scroll", handleMainScroll);

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleMainScroll);
    };
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Beranda", icon: <Home className="w-5 h-5" /> },
    { href: "/#tes", label: "Uji Kemahiran", icon: <GraduationCap className="w-5 h-5" /> },
    { href: "/#latihan", label: "Latihan", icon: <Book className="w-5 h-5" /> },
    { href: "/#sastra-budaya", label: "Sastra", icon: <BookOpen className="w-5 h-5" /> },
    { href: "/#permainan", label: "Permainan", icon: <Gamepad2 className="w-5 h-5" /> },
    { href: "/#tentang", label: "Tentang Kami", icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 z-40 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1.5 bg-primary text-white rounded-lg">
            <BookOpenText className="w-5 h-5" />
          </div>
          <span className="text-lg font-serif font-bold text-dark">TaMarit</span>
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-500 hover:text-dark focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed md:sticky top-0 left-0 h-[100dvh] w-64 bg-white border-r border-gray-100 flex flex-col justify-between py-6 px-4 shadow-[2px_0_10px_rgba(0,0,0,0.02)] z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Logo (Desktop Only) */}
          <Link href="/" className="hidden md:flex items-center gap-3 px-2 group">
            <div className="p-2 bg-primary text-white rounded-xl">
              <BookOpenText className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-dark leading-tight">
                TaMarit
              </span>
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                Pembelajaran Bahasa
              </span>
            </div>
          </Link>

          {/* Close button inside sidebar for mobile */}
          <div className="md:hidden flex items-center justify-between px-2 mb-2">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-dark">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              // Highlight based on scroll position if on home page, or pathname matching if on a sub-page
              let isActive = false;
              if (pathname === "/") {
                isActive = activeHash === link.href;
              } else {
                // If on a sub-page, highlight the corresponding main category
                // For example, /latihan/berbicara should highlight /#latihan
                if (link.href !== "/" && pathname.startsWith(link.href.replace("/#", "/"))) {
                  isActive = true;
                }
              }
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? "bg-primary text-white font-medium shadow-md shadow-primary/20" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-dark font-medium"
                  }`}
                >
                  <div className={`${isActive ? "text-white" : "text-gray-400 group-hover:text-primary"}`}>
                    {link.icon}
                  </div>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>


      </aside>
    </>
  );
}
