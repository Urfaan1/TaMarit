"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, 
  BookOpenText, 
  BookOpen, 
  Gamepad2, 
  ChevronRight,
  MessageCircle,
  Quote,
  Users,
  Heart,
  Sparkles
} from "lucide-react";

import { vocabularyData } from "./latihan/kosa-kata/page";
import { hadihMajaList } from "./sastra-budaya/hadih-maja/page";
import { dances } from "./sastra-budaya/tarian-aceh/page";

function getDailyCards() {
  const allVocab = vocabularyData.flatMap(cat => cat.words.map(w => ({
    category: "Kosakata",
    title: w.aceh,
    description: `Artinya: '${w.id}'.`,
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    color: "bg-[#e8f5e9]"
  })));

  const allHadihMaja = hadihMajaList.map(h => ({
    category: "Hadih Maja",
    title: h.pepatah,
    description: `${h.arti}`,
    icon: <Quote className="w-8 h-8 text-accent-gold" />,
    color: "bg-[#fff8e1]"
  }));

  const allDances = dances.map(d => ({
    category: "Tarian Tradisional",
    title: d.name,
    description: d.desc.substring(0, 150) + "...",
    icon: <Users className="w-8 h-8 text-orange-500" />,
    color: "bg-[#fff3e0]"
  }));

  const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  
  const dailyCards = [
    getRandom(allVocab),
    getRandom(allHadihMaja),
    getRandom(allDances),
    getRandom(allVocab),
  ];

  for (let i = dailyCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dailyCards[i], dailyCards[j]] = [dailyCards[j], dailyCards[i]];
  }

  return dailyCards;
}

export default function Dashboard() {
  const [cards, setCards] = useState(() => getDailyCards());

  const nextCard = () => {
    setCards(prev => {
      const newCards = [...prev];
      const first = newCards.shift();
      newCards.push(first!);
      return newCards;
    });
  };

  return (
    <>
      {/* Latar Belakang Video Looping */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-cream">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.15]"
        >
          {/* Tempatkan file video Anda di public/video/bg-aceh.mp4 */}
          <source src="/video/bg-aceh.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient agar teks tetap terbaca dengan jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 to-cream/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto pb-16 animate-fade-in relative z-10 pt-8 md:pt-4">
        
        {/* Top Section: Title & Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Bagian Kiri: Penjelasan Singkat */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark leading-tight drop-shadow-sm">
              TaMarit
            </h1>
            <p className="text-lg md:text-xl text-dark/70 leading-relaxed font-medium">
              Platform digital interaktif untuk mengeksplorasi keindahan bahasa, sastra, dan kekayaan budaya Serambi Mekkah.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="/latihan" className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Mulai Belajar
              </Link>
            </div>
          </div>

          {/* Bagian Kanan: Tumpukan Kartu (Deck) */}
          <div className="relative w-full h-[22rem] cursor-pointer mt-12 md:mt-0 flex flex-col" onClick={nextCard}>
            <div className="mb-4 inline-flex w-fit items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-dark/5 mx-auto md:mx-0 z-20">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-dark/70">Kartu Hari Ini</span>
            </div>
            
            <div className="relative flex-1">
              {cards.map((card, idx) => {
                const isTop = idx === 0;
                const scale = 1 - idx * 0.05;
                const translateY = idx * 15;
                const opacity = idx < 3 ? 1 - idx * 0.2 : 0;
                const zIndex = 10 - idx;
                
                return (
                  <div 
                    key={card.title + idx}
                    className={`absolute top-0 left-0 w-full h-full rounded-[2rem] p-8 shadow-xl transition-all duration-500 ease-in-out border border-dark/5 flex flex-col justify-center ${card.color}`}
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      zIndex,
                      pointerEvents: isTop ? 'auto' : 'none'
                    }}
                  >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm">
                      {card.icon}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-dark/60">{card.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-3">{card.title}</h3>
                  <p className="text-dark/80 text-sm md:text-base leading-relaxed line-clamp-3">{card.description}</p>
                  
                  {isTop && (
                    <div className="absolute bottom-6 right-6 text-sm font-bold text-primary animate-pulse flex items-center gap-1 bg-white/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Ketuk kartu <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
            </div>
          </div>

        </section>

        {/* Fitur Utama */}
        <section className="mt-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-accent-gold rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-dark">Fitur Utama</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Uji Kemahiran", desc: "Ukur level bahasa Aceh-mu.", icon: HelpCircle, href: "/tes" },
              { title: "Latihan", desc: "Materi interaktif & terstruktur.", icon: BookOpenText, href: "/latihan" },
              { title: "Budaya", desc: "Eksplorasi adat & sastra.", icon: BookOpen, href: "/sastra-budaya" },
              { title: "Gamifikasi", desc: "Belajar lewat permainan.", icon: Gamepad2, href: "/permainan" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-gray-50 p-4 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-8 h-8 text-dark/70 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-dark/90 group-hover:text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-dark/50 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
