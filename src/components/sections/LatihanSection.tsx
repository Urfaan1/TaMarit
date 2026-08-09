"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Mic, Headphones, BookA, Volume2, Activity, Keyboard } from "lucide-react";

export default function LatihanPage() {
  const categories = [
    {
      title: "Berbicara",
      description: "Latih kemampuan berbicara melalui simulasi percakapan dan roleplay.",
      icon: <Mic className="w-6 h-6 text-primary" />,
      href: "/latihan/berbicara"
    },
    {
      title: "Mendengarkan",
      description: "Asah pemahaman mendengar dengan audio percakapan dan lagu daerah.",
      icon: <Headphones className="w-6 h-6 text-primary" />,
      href: "/latihan/mendengarkan"
    },
    {
      title: "Kosa Kata",
      description: "Perkaya perbendaharaan kata bahasa Aceh dengan berbagai topik sehari-hari.",
      icon: <BookA className="w-6 h-6 text-primary" />,
      href: "/latihan/kosa-kata"
    },
    {
      title: "Pengucapan",
      description: "Pelajari cara melafalkan kata-kata bahasa Aceh dengan intonasi yang tepat.",
      icon: <Volume2 className="w-6 h-6 text-primary" />,
      href: "/latihan/pengucapan"
    },
    {
      title: "Menulis",
      description: "Latih ketangkasan dan akurasi mengeja serta mengetik kata dalam bahasa Aceh.",
      icon: <Keyboard className="w-6 h-6 text-primary" />,
      href: "/latihan/menulis"
    }
  ];

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Pusat Latihan"
        subtitle="Pilih kategori latihan untuk meningkatkan kemampuan bahasa dan budaya Aceh Anda."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />
      
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="block group">
              <Card 
                hoverable 
                withMotif 
                motifVariant="pinto" 
                className="bg-white border border-dark/5 p-6 h-full flex flex-col items-center text-center transition-all group-hover:border-primary/30"
              >
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
