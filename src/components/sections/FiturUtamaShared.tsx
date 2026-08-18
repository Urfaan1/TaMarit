import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { PintoAceh, BungongJeumpa } from "@/components/ui/Motifs";
import { HelpCircle, BookOpenText, BookOpen, Gamepad2 } from "lucide-react";

export function FiturUtamaShared({ className = "" }: { className?: string }) {
  const features = [
    { title: "Uji Kemahiran", desc: "Ukur level bahasa Aceh-mu.", icon: HelpCircle, href: "/tes" },
    { title: "Latihan", desc: "Materi interaktif & terstruktur.", icon: BookOpenText, href: "/latihan" },
    { title: "Budaya", desc: "Eksplorasi adat & sastra.", icon: BookOpen, href: "/sastra-budaya" },
    { title: "Pustaka Digital", desc: "Koleksi buku cerita anak.", icon: BookOpen, href: "/pustaka-digital" },
    { title: "Kamus", desc: "Koleksi kamus bahasa Aceh.", icon: BookOpenText, href: "/kamus" },
    { title: "Permainan Edukasi", desc: "Belajar lewat permainan.", icon: Gamepad2, href: "/permainan" },
  ];

  return (
    <section className={`bg-[#082b27] relative overflow-hidden ${className}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <BungongJeumpa size={500} />
      </div>
      <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
        <PintoAceh size={400} />
      </div>
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 px-6 py-24">
        <div className="text-center mb-20">
          <Badge variant="gold" className="w-fit mb-4 mx-auto border-white/10 bg-white/5 text-accent-gold backdrop-blur-md">
            Eksplorasi Fitur
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">Fitur Utama <span className="text-accent-gold">TaMarit</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">Kami merancang berbagai modul dan alat interaktif dengan balutan teknologi modern untuk memastikan proses belajar bahasa Aceh menjadi menyenangkan dan efektif.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((fitur, idx) => (
            <Link 
              href={fitur.href}
              key={idx} 
              className="group relative rounded-[2rem] overflow-hidden block"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-accent-gold/40 group-hover:to-primary/40 transition-colors duration-500 rounded-[2rem] p-[1px]">
                <div className="absolute inset-[1px] bg-gradient-to-br from-[#0c3e38] to-[#082b27] backdrop-blur-xl rounded-[2rem] -z-10"></div>
              </div>

              <div className="relative h-full p-8 flex flex-col items-start z-10 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Decorative background glow */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl group-hover:bg-accent-gold/20 transition-colors duration-500 pointer-events-none"></div>

                <div className="w-14 h-14 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-2xl flex items-center justify-center text-dark mb-6 shadow-lg shadow-accent-gold/20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <fitur.icon className="w-7 h-7 relative z-10" />
                </div>
                
                <h4 className="font-serif font-bold text-white text-xl mb-3 group-hover:text-accent-gold transition-colors">{fitur.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{fitur.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
