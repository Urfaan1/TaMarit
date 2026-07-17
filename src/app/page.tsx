"use client";

import React from "react";
import Link from "next/link";
import { 
  Play, 
  HelpCircle, 
  BookOpenText, 
  BookOpen, 
  Gamepad2, 
  Award,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-10 max-w-5xl mx-auto pb-16 animate-fade-in">
      
      {/* Hero Banner */}
      <section className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-primary/10">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-[2.75rem] font-serif font-bold mb-4 leading-tight">
            Selamat Teuka di <br /> TaMarit!
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Hari ini adalah hari yang cerah untuk melanjutkan perjalanan bahasa Aceh Anda. Terus asah kemampuanmu!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/latihan" className="bg-accent-gold text-dark font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 text-sm">
              Mulai Latihan Baru
            </Link>
            <Link href="/pencapaian" className="bg-transparent border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm text-sm">
              Lihat Pencapaian
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
           <Sparkles className="absolute top-[20%] right-[30%] w-32 h-32 text-white/50" />
           <Sparkles className="absolute top-[60%] right-[10%] w-16 h-16 text-white/50" />
           <div className="absolute top-[-50%] right-[-10%] w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Level Saya */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-6 relative overflow-hidden group">
           <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-primary/5 transition-colors">
             <Award className="w-8 h-8 text-gray-700 group-hover:text-primary transition-colors" />
           </div>
           <div className="flex-1 relative z-10">
             <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Level Saya</h3>
             <p className="text-xl font-serif font-bold text-dark">Beginner II</p>
             <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
               <div className="bg-accent-gold h-1.5 rounded-full" style={{ width: '60%' }}></div>
             </div>
           </div>
           {/* watermark background */}
           <Award className="absolute right-[-20px] top-[-20px] w-32 h-32 text-gray-50 opacity-60 z-0 group-hover:rotate-12 transition-transform duration-700" />
        </div>

        {/* Simpan Progres */}
        <div className="bg-[#FEFCE8] rounded-3xl p-6 border border-yellow-100 flex flex-col justify-center">
           <h3 className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider mb-2">Simpan Progres</h3>
           <p className="text-sm text-gray-500 font-medium leading-relaxed">Daftar sekarang untuk mulai mengumpulkan poin!</p>
        </div>

        {/* Mulai Belajar */}
        <div className="bg-gray-50/80 rounded-3xl p-6 border border-gray-200 flex flex-col justify-center relative group cursor-pointer hover:bg-gray-100 transition-colors">
           <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Mulai Belajar</h3>
           <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-dark group-hover:text-primary transition-colors">Buat Akun Gratis</span>
              <ChevronRight className="w-4 h-4 text-dark" />
           </div>
        </div>
      </section>

      {/* Menu Utama */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent-gold rounded-full"></div>
          <h2 className="text-xl font-serif font-bold text-dark">Menu Utama</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Uji Kemahiran", icon: HelpCircle, href: "/tes" },
            { title: "Latihan Interaktif", icon: BookOpenText, href: "/latihan" },
            { title: "Sastra & Budaya", icon: BookOpen, href: "/sastra-budaya" },
            { title: "Gamifikasi", icon: Gamepad2, href: "/permainan" },
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all group">
              <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-primary/5 transition-colors">
                <item.icon className="w-8 h-8 text-dark/70 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-medium text-dark/80 group-hover:text-primary">{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lanjutkan Belajar */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-accent-gold rounded-full"></div>
            <h2 className="text-xl font-serif font-bold text-dark">Lanjutkan Belajar</h2>
          </div>
          <Link href="/latihan" className="text-sm font-medium text-gray-500 hover:text-primary flex items-center gap-1 transition-colors">
            Lihat Semua <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="bg-white rounded-[2rem] p-3 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-shadow">
          {/* Image Thumbnail */}
          <div className="relative w-full md:w-5/12 h-56 md:h-auto rounded-[1.5rem] overflow-hidden group cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&q=80&w=600" 
              alt="Di Keude Kupi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="bg-white/90 p-4 rounded-full shadow-xl text-primary transform scale-90 group-hover:scale-100 transition-all duration-300">
                <Play className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>
          
          {/* Card Content */}
          <div className="flex-1 flex flex-col justify-center p-4 md:p-6 md:pl-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 bg-gray-100 px-3 py-1.5 rounded-full w-max">Unit 4: Sosialisasi</span>
            <h3 className="text-2xl font-serif font-bold text-dark mb-3">Di Keude Kupi</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-xl">
              Belajar ungkapan dasar saat memesan kopi dan menyapa orang baru di kedai kopi tradisional Aceh yang ikonik.
            </p>
            
            <div className="mt-auto flex items-center gap-6">
              <div className="flex-1">
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full relative" style={{ width: '45%' }}></div>
                </div>
              </div>
              <span className="text-xs font-bold text-dark">45%</span>
              <button className="bg-primary text-white font-medium px-8 py-2.5 rounded-full hover:bg-[#082b27] transition-all duration-300 shadow-md shadow-primary/20 text-sm hover:-translate-y-0.5">
                Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
