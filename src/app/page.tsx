"use client";

import React, { useState, useEffect } from "react";
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
  Sparkles,
  Coffee,
  Landmark,
  X,
  Music,
  Utensils,
  Gem
} from "lucide-react";

import { vocabularyData } from "./latihan/kosa-kata/page";
import { hadihMajaList } from "./sastra-budaya/hadih-maja/page";
import { dances } from "./sastra-budaya/tarian-aceh/page";

import TesSection from "@/components/sections/TesSection";
import LatihanSection from "@/components/sections/LatihanSection";
import SastraBudayaSection from "@/components/sections/SastraBudayaSection";
import PermainanSection from "@/components/sections/PermainanSection";
import TentangSection from "@/components/sections/TentangSection";

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

const triviaList = [
  {
    title: "Kopi Gayo Mendunia",
    short: "Kopi Arabika dari dataran tinggi Gayo, Aceh Tengah, merupakan salah satu komoditas kopi premium yang paling dicari di pasar internasional karena aroma khas dan tingkat keasamannya yang rendah.",
    full: "Dataran tinggi Gayo di Aceh Tengah adalah rumah bagi perkebunan kopi Arabika terluas di Asia Tenggara. Kopi Gayo memiliki ciri khas aroma yang sangat kuat, tingkat keasaman (acidity) yang rendah, dan rasa (aftertaste) rempah yang bersih. Karena kualitasnya yang luar biasa, kopi ini telah menerima sertifikasi Indikasi Geografis (IG) dan banyak digunakan sebagai campuran utama di berbagai kedai kopi ternama di Eropa dan Amerika.",
    icon: Coffee,
    gradient: "from-green-50 to-emerald-100/50",
    border: "border-green-100",
    textDark: "text-green-950",
    textLight: "text-green-900",
    iconBg: "text-green-600",
    bgIcon: "text-green-900"
  },
  {
    title: "Simbol Ketangguhan",
    short: "Masjid Raya Baiturrahman tidak hanya menjadi ikon religius, tetapi juga simbol ketangguhan rakyat Aceh. Masjid ini tetap kokoh berdiri saat gempa dan tsunami dahsyat melanda pada tahun 2004.",
    full: "Dibangun pada era Kesultanan Aceh (sekitar 1612 oleh Sultan Iskandar Muda), Masjid Raya Baiturrahman memiliki sejarah yang panjang. Ia pernah dibakar oleh Belanda pada 1873, lalu dibangun kembali pada 1879. Saat gempa dan tsunami dahsyat melanda Aceh pada 26 Desember 2004, bangunan megah ini menjadi salah satu struktur yang bertahan kokoh di pusat kota Banda Aceh, menyelamatkan ribuan nyawa yang berlindung di dalamnya. Kini, dengan payung-payung elektrik yang menyerupai Masjid Nabawi di Madinah, ia berdiri tegak sebagai lambang kebangkitan rakyat Aceh.",
    icon: Landmark,
    gradient: "from-orange-50 to-amber-100/50",
    border: "border-orange-100",
    textDark: "text-orange-950",
    textLight: "text-orange-900",
    iconBg: "text-orange-600",
    bgIcon: "text-orange-900"
  },
  {
    title: "Tari Saman Mendunia",
    short: "Tari Saman dari Gayo Lues telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda Manusia sejak tahun 2011.",
    full: "Tari Saman adalah salah satu kesenian tradisional yang paling terkenal dari Aceh, khususnya dari dataran tinggi Gayo. Berbeda dengan tarian pada umumnya, Tari Saman tidak menggunakan iringan alat musik, melainkan menggunakan suara dari para penarinya dan tepukan tangan, dada, serta paha. Kecepatan dan kekompakan gerakan yang luar biasa membuat tarian ini diakui UNESCO sebagai Karya Agung Warisan Budaya Lisan dan Nonbendawi Manusia pada tahun 2011.",
    icon: Music,
    gradient: "from-blue-50 to-cyan-100/50",
    border: "border-blue-100",
    textDark: "text-blue-950",
    textLight: "text-blue-900",
    iconBg: "text-blue-600",
    bgIcon: "text-blue-900"
  },
  {
    title: "Kelezatan Mi Aceh",
    short: "Mi Aceh terkenal dengan racikan bumbu rempah yang sangat kaya, menjadikannya salah satu kuliner Nusantara yang paling ikonik.",
    full: "Mi Aceh adalah hidangan mi kuning tebal dengan irisan daging sapi, daging kambing, atau makanan laut yang disajikan dalam sup sejenis kari yang gurih dan pedas. Kekayaan bumbu rempahnya mencerminkan pengaruh budaya kuliner India dan Arab yang berpadu dengan bahan lokal, menciptakan rasa pedas, gurih, dan asam yang sangat khas. Mi Aceh biasanya disajikan dengan emping, irisan bawang merah, mentimun, dan perasan jeruk nipis.",
    icon: Utensils,
    gradient: "from-red-50 to-rose-100/50",
    border: "border-red-100",
    textDark: "text-red-950",
    textLight: "text-red-900",
    iconBg: "text-red-600",
    bgIcon: "text-red-900"
  },
  {
    title: "Motif Pinto Aceh",
    short: "Motif Pinto Aceh adalah desain perhiasan tradisional yang bentuknya terinspirasi dari monumen Pintu Khop, taman peninggalan Sultan Iskandar Muda.",
    full: "Pinto Aceh (Pintu Aceh) merupakan motif ukiran dan perhiasan khas Aceh yang sangat populer. Motif ini diciptakan pada tahun 1926 oleh Mahmud Ibrahim (Utoh Mud), terinspirasi dari desain Pintu Khop, yaitu gerbang taman Putroe Phang yang dibangun oleh Sultan Iskandar Muda untuk permaisurinya dari Pahang. Saat ini, motif Pinto Aceh banyak digunakan pada perhiasan emas, bros, batik, hingga dekorasi bangunan, sebagai simbol keanggunan budaya Aceh.",
    icon: Gem,
    gradient: "from-purple-50 to-fuchsia-100/50",
    border: "border-purple-100",
    textDark: "text-purple-950",
    textLight: "text-purple-900",
    iconBg: "text-purple-600",
    bgIcon: "text-purple-900"
  }
];

export default function Dashboard() {
  const [cards, setCards] = useState<any[]>([]);
  const [selectedTrivia, setSelectedTrivia] = useState<typeof triviaList[0] | null>(null);
  const [displayTrivia, setDisplayTrivia] = useState<typeof triviaList>([]);

  useEffect(() => {
    setCards(getDailyCards());
    const shuffled = [...triviaList].sort(() => 0.5 - Math.random());
    setDisplayTrivia(shuffled.slice(0, 2));
  }, []);

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
              <Link href="/#latihan" className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Mulai Belajar
              </Link>
            </div>
          </div>

          {/* Bagian Kanan: Tumpukan Kartu (Deck) */}
          <div className="relative w-full h-[18rem] sm:h-[20rem] md:h-[22rem] cursor-pointer mt-8 md:mt-0 flex flex-col" onClick={nextCard}>
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
                    className={`absolute top-0 left-0 w-full h-full rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-xl transition-all duration-500 ease-in-out border border-dark/5 flex flex-col justify-center ${card.color}`}
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
              { title: "Uji Kemahiran", desc: "Ukur level bahasa Aceh-mu.", icon: HelpCircle, href: "/#tes" },
              { title: "Latihan", desc: "Materi interaktif & terstruktur.", icon: BookOpenText, href: "/#latihan" },
              { title: "Budaya", desc: "Eksplorasi adat & sastra.", icon: BookOpen, href: "/#sastra-budaya" },
              { title: "Permainan Edukasi", desc: "Belajar lewat permainan.", icon: Gamepad2, href: "/#permainan" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="bg-white/80 backdrop-blur-md rounded-[1.5rem] md:rounded-3xl p-4 sm:p-5 md:p-8 flex flex-col gap-3 md:gap-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-gray-50 p-3 md:p-4 rounded-xl md:rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-dark/70 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-dark/90 group-hover:text-primary mb-0.5 md:mb-1">{item.title}</h3>
                  <p className="text-[10px] md:text-xs text-dark/50 leading-relaxed line-clamp-2 md:line-clamp-none">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trivia / Tahukah Anda */}
        <section className="mt-12 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-500 rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-dark">Tahukah Anda?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayTrivia.map((trivia, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedTrivia(trivia)}
                className={`bg-gradient-to-br ${trivia.gradient} p-5 md:p-6 rounded-2xl md:rounded-3xl border ${trivia.border} shadow-sm relative overflow-hidden group hover:shadow-md transition-all cursor-pointer`}
              >
                <div className={`absolute -right-6 -top-6 opacity-10 transform group-hover:scale-110 transition-transform duration-500`}>
                  <trivia.icon className={`w-32 h-32 ${trivia.bgIcon}`} />
                </div>
                <div className="flex items-start gap-3 md:gap-4 relative z-10">
                  <div className={`bg-white p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-sm ${trivia.iconBg}`}>
                    <trivia.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base md:text-lg ${trivia.textDark} mb-1 md:mb-2`}>{trivia.title}</h3>
                    <p className={`${trivia.textLight} opacity-80 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 md:line-clamp-none`}>
                      {trivia.short}
                    </p>
                    <span className={`text-xs font-bold ${trivia.iconBg} bg-white/50 px-3 py-1 rounded-full group-hover:bg-white transition-colors`}>
                      Baca selengkapnya &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div id="tes">
        <TesSection />
      </div>
      <div id="latihan">
        <LatihanSection />
      </div>
      <div id="sastra-budaya">
        <SastraBudayaSection />
      </div>
      <div id="permainan">
        <PermainanSection />
      </div>
      <div id="tentang">
        <TentangSection />
      </div>

      {/* Modal Penjelasan Rinci */}
      {selectedTrivia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedTrivia(null)}>
          <div 
            className={`bg-gradient-to-br ${selectedTrivia.gradient} p-8 md:p-10 rounded-3xl max-w-2xl w-full border ${selectedTrivia.border} shadow-2xl relative overflow-hidden scale-in animation-duration-200`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedTrivia(null)}
              className="absolute top-4 right-4 bg-white/50 p-2 rounded-full hover:bg-white transition-colors z-20"
            >
              <X className={`w-6 h-6 ${selectedTrivia.textDark}`} />
            </button>
            <div className={`absolute -right-10 -bottom-10 opacity-5`}>
              <selectedTrivia.icon className={`w-64 h-64 ${selectedTrivia.bgIcon}`} />
            </div>
            
            <div className="relative z-10">
              <div className={`bg-white p-4 rounded-2xl shadow-sm inline-block mb-6 ${selectedTrivia.iconBg}`}>
                <selectedTrivia.icon className="w-10 h-10" />
              </div>
              <h2 className={`text-3xl font-serif font-bold ${selectedTrivia.textDark} mb-4`}>
                {selectedTrivia.title}
              </h2>
              <p className={`${selectedTrivia.textLight} text-lg leading-relaxed font-medium`}>
                {selectedTrivia.full}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
