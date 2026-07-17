"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bell, 
  ChevronRight, 
  HelpCircle, 
  Volume2, 
  Play, 
  RotateCcw,
  User
} from "lucide-react";

export default function LatihanRoleplay() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] animate-fade-in max-w-7xl mx-auto w-full">
      
      {/* Top Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-serif font-bold text-primary">
          Ta<span className="text-dark">Marit</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-primary transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#082b27] transition-colors shadow-sm">
            Masuk / Daftar
          </button>
        </div>
      </header>

      {/* Breadcrumb & Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-3">
          <Link href="/latihan" className="hover:text-primary transition-colors">Latihan</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-primary font-bold">Simulasi Roleplay</span>
        </div>
        
        <div className="flex items-end justify-between">
          <h1 className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#0A3632]">
            Latihan Interaktif: Keude Kupi
          </h1>
          <div className="flex items-center gap-3 pb-2">
            <div className="w-48 bg-gray-200 rounded-full h-1.5 hidden md:block">
              <div className="bg-accent-gold h-1.5 rounded-full" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
            </div>
            <span className="text-sm font-bold text-gray-500">Langkah {step}/{totalSteps}</span>
          </div>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1 pb-10">
        
        {/* Left Panel: Image & Scenario */}
        <div className="w-full lg:w-[45%] relative rounded-[2rem] overflow-hidden shadow-lg h-[550px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&q=80&w=800" 
            alt="Kedai Kopi"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 bg-[#F3F4F1] p-6 rounded-3xl shadow-xl border border-white/50">
            <span className="inline-block bg-[#0A3632] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
              Skenario Aktif
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0A3632] mb-3 leading-tight">
              Memesan Kopi Sanger di Keude Kupi
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Anda baru saja duduk di sebuah kedai kopi legendaris di Banda Aceh. Pelayan datang menghampiri meja Anda untuk menanyakan pesanan.
            </p>
          </div>
        </div>

        {/* Right Panel: Chat & Interactions */}
        <div className="w-full lg:w-[55%] flex flex-col justify-between h-[550px]">
          
          <div className="bg-[#F8F9FA] rounded-[2rem] border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden">
            
            {/* Header Chat */}
            <div className="bg-white p-5 border-b border-gray-100 flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0A3632] flex items-center justify-center text-white shadow-sm">
                   <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base">Agam (Pelayan)</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
                    Berbicara...
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-dark transition-colors p-1">
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Bubble Area */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-end bg-white/40">
               
               <div className="bg-white border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-5 md:p-6 rounded-2xl rounded-tl-sm max-w-[90%] self-start mb-2">
                 <h4 className="text-xl md:text-2xl font-serif font-bold text-[#0A3632] mb-1">
                   &quot;Peue neu jieb?&quot;
                 </h4>
                 <p className="text-sm text-gray-500 italic mb-5 leading-relaxed">
                   (Apa yang ingin Anda minum? / What would you like to drink?)
                 </p>
                 <button className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-primary transition-colors">
                   <Volume2 className="w-4 h-4" /> Dengarkan Pengucapan
                 </button>
               </div>
               <span className="text-[10px] text-gray-400 font-medium ml-2">10:04 AM</span>

               <div className="mt-6 md:mt-8 relative flex items-center justify-center w-full">
                 <div className="absolute w-full h-[1px] bg-gray-200"></div>
                 <span className="bg-white/40 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider relative z-10">
                   Pilih respon terbaik anda di bawah ini
                 </span>
               </div>
            </div>

            {/* Options Area */}
            <div className="bg-[#F3F4F1] p-5 md:p-6 border-t border-gray-200 flex flex-col gap-3">
               {[
                 { text: "Lon neuk jieb Kopi Sanger saboh.", spell: "[Lon nuk jib Ko-pi Sa-nger sa-boh]" },
                 { text: "Kupi sanger saboh, Bang!", spell: "[Ku-pi sa-nger sa-boh, Bang!]" },
                 { text: "Peue na sanger?", spell: "[Pu-u na sa-nger?]" }
               ].map((opt, idx) => (
                 <button key={idx} className="bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all p-4 md:p-5 rounded-2xl flex items-center justify-between text-left group">
                   <div>
                     <p className="font-semibold text-dark mb-1 group-hover:text-primary transition-colors text-[15px]">{opt.text}</p>
                     <p className="text-xs text-gray-500 italic">{opt.spell}</p>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                     <Play className="w-4 h-4 fill-current ml-0.5" />
                   </div>
                 </button>
               ))}
            </div>
            
          </div>
          
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-semibold text-gray-600 hover:bg-gray-50 hover:text-dark transition-colors shadow-sm text-sm">
          <RotateCcw className="w-4 h-4" /> Ulangi Skenario
        </button>
        <button className="bg-[#79641D] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#5C4C16] transition-all hover:-translate-y-0.5 text-sm">
          Lanjut ke Skenario Berikutnya
        </button>
      </div>

    </div>
  );
}
