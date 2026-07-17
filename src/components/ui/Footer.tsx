"use client";

import React from "react";
import { BungongJeumpa, PintoAceh } from "./Motifs";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative glass text-dark overflow-hidden pt-20 pb-10 border-t border-white/60">
      {/* Background Watermarks */}
      <div className="absolute right-0 bottom-0 text-primary/[0.03] pointer-events-none select-none">
        <BungongJeumpa size={360} strokeWidth={0.5} />
      </div>
      <div className="absolute -left-20 top-10 text-primary/[0.03] pointer-events-none select-none">
        <PintoAceh size={300} strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <BungongJeumpa size={28} className="text-accent-gold" />
              <span className="text-xl font-serif font-bold text-dark tracking-wide">
                Ta<span className="text-primary">Marit</span>
              </span>
            </Link>
            <p className="text-sm text-dark/60 leading-relaxed">
              TaMarit (Bahasa Aceh: Mari Berbicara) adalah platform digital modern yang didedikasikan untuk pelestarian dan pembelajaran bahasa, sastra, dan budaya Aceh.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-bold text-accent-gold">Navigasi</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="#belajar" className="text-dark/70 hover:text-primary transition-colors">
                Pembelajaran Bahasa
              </Link>
              <Link href="#sastra" className="text-dark/70 hover:text-primary transition-colors">
                Karya Sastra
              </Link>
              <Link href="#budaya" className="text-dark/70 hover:text-primary transition-colors">
                Artikel Budaya
              </Link>
              <Link href="#kamus" className="text-dark/70 hover:text-primary transition-colors">
                Kamus Digital
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-bold text-accent-gold">Kategori Budaya</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <span className="text-dark/70">Hikayat Aceh</span>
              <span className="text-dark/70">Rumoh Aceh & Arsitektur</span>
              <span className="text-dark/70">Seni Tari (Saman, Seudati)</span>
              <span className="text-dark/70">Sejarah Jalur Rempah</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-bold text-accent-gold">Buletin Sajan</h4>
            <p className="text-sm text-dark/60">
              Dapatkan pembaruan berkala tentang kosakata baru dan sejarah budaya Aceh.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center mt-2">
              <input
                type="email"
                placeholder="Surel Anda"
                className="w-full glass border-dark/10 rounded-aceh px-4 py-3 text-sm text-dark placeholder-dark/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 p-2 bg-primary text-white rounded-aceh hover:bg-[#A30F1A] transition-all"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <hr className="border-dark/5 mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark/50">
          <p>© {new Date().getFullYear()} TaMarit. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
            <span>untuk pelestarian warisan budaya Aceh.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
