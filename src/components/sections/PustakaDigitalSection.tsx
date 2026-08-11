"use client";

import React, { useState } from "react";
import { BookType, Download, Eye, Library } from "lucide-react";
import { pustakaData } from "@/data/pustaka-data";

export default function PustakaDigitalSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-semibold shadow-sm border border-primary/20">
          <Library className="w-5 h-5" />
          <span>Buku Cerita & Dongeng</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6 leading-tight">
          Pustaka Digital
        </h2>
        <p className="text-lg text-dark/70 max-w-2xl leading-relaxed">
          Koleksi buku cerita anak interaktif dalam Bahasa Aceh dan terjemahan Bahasa Indonesia. Belajar bahasa dan budaya lewat cerita yang menyenangkan.
        </p>
      </div>

      {/* Grid Buku */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pustakaData.map((book) => (
          <div 
            key={book.id}
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-dark/5 flex flex-col h-full`}
            onMouseEnter={() => setHoveredId(book.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Bagian Cover Buku (Atas) */}
            <div className={`relative w-full aspect-[4/3] ${book.color} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')] mix-blend-overlay"></div>
              
              {/* Jika nanti ada gambar asli, tag img ini bisa digunakan: */}
              {/* <img src={book.coverImage} alt={book.titleAceh} className="w-full h-full object-cover" /> */}
              
              {/* Placeholder Ikon Buku */}
              <BookType className={`w-24 h-24 text-dark/20 transform transition-transform duration-500 ${hoveredId === book.id ? 'scale-110' : 'scale-100'}`} />
              
              {/* Overlay Action Buttons */}
              <div className={`absolute inset-0 bg-dark/40 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredId === book.id ? 'opacity-100' : 'opacity-0'}`}>
                <a 
                  href={book.fileUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                  title="Baca Buku"
                >
                  <Eye className="w-5 h-5" />
                </a>
                <a 
                  href={book.fileUrl}
                  download
                  className="w-12 h-12 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                  title="Unduh PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Detail Buku (Bawah) */}
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight mb-1">
                  {book.titleAceh}
                </h3>
                <p className="text-sm font-medium text-dark/50 italic">
                  "{book.titleId}"
                </p>
              </div>
              
              <p className="text-sm text-dark/70 mb-6 flex-1 line-clamp-3">
                {book.description}
              </p>

              <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-dark/5">
                <span className="text-xs text-dark/50 font-medium">Ditulis oleh: <span className="text-dark/80">{book.author}</span></span>
                <span className="text-xs text-dark/50 font-medium">Terjemahan: <span className="text-dark/80">{book.translator}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
