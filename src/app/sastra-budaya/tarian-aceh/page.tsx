"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ChevronDown, Activity, Sparkles, Target, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dances = [
  {
    name: "Tari Saman",
    goal: "Peserta didik mampu memahami sejarah, fungsi, dan nilai budaya Tari Saman.",
    desc: "Tari Saman merupakan salah satu tarian tradisional Aceh yang berasal dari Dataran Tinggi Gayo, Kabupaten Gayo Lues. Tarian ini berkembang sebagai media dakwah Islam dan sarana mempererat persatuan masyarakat. Tari Saman dimainkan secara berkelompok dengan posisi duduk berlutut. Para penari menampilkan gerakan yang cepat, kompak, dan serempak sambil menyanyikan syair berbahasa Gayo. Pada tahun 2011, Tari Saman ditetapkan oleh UNESCO sebagai Warisan Budaya Takbenda yang Memerlukan Perlindungan Mendesak.",
    traits: ["Dilakukan secara berkelompok.", "Tanpa alat musik.", "Mengandalkan tepukan tangan, dada, dan paha.", "Gerakan sangat kompak."],
    values: ["Kerja sama", "Disiplin", "Kekompakan", "Persaudaraan"]
  },
  {
    name: "Tari Seudati",
    goal: "Peserta didik mengenal Tari Seudati sebagai tarian kepahlawanan Aceh.",
    desc: "Tari Seudati berasal dari wilayah pesisir Aceh dan berkembang sebagai media dakwah Islam. Nama Seudati diyakini berasal dari kata syahadat, yang mencerminkan kuatnya pengaruh Islam dalam tarian ini. Tarian ini biasanya dibawakan oleh delapan penari laki-laki tanpa menggunakan alat musik. Irama dihasilkan dari hentakan kaki, tepukan tangan, petikan jari, dan lantunan syair.",
    traits: ["Penari laki-laki.", "Gerakan energik.", "Tanpa alat musik.", "Syair berisi nasihat dan dakwah."],
    values: ["Keberanian", "Kepemimpinan", "Semangat juang", "Religius"]
  },
  {
    name: "Tari Likok Pulo",
    goal: "Peserta didik memahami asal-usul dan fungsi Tari Likok Pulo.",
    desc: "Tari Likok Pulo berasal dari Pulau Aceh. Tarian ini diperkenalkan oleh ulama yang datang dari Timur Tengah sebagai media penyebaran Islam. Likok Pulo dimainkan secara berkelompok dengan gerakan yang dinamis, diiringi syair dan irama rapai.",
    traits: ["Gerakan duduk dan berdiri.", "Menggunakan Rapai.", "Syair Islami."],
    values: ["Kebersamaan", "Dakwah", "Disiplin"]
  },
  {
    name: "Tari Rapai Geleng",
    goal: "Peserta didik memahami keunikan Tari Rapai Geleng.",
    desc: "Tari Rapai Geleng merupakan tarian tradisional Aceh yang memadukan gerakan kepala, badan, dan permainan alat musik rapai. Tarian ini sering ditampilkan pada acara penyambutan tamu dan festival budaya. Gerakan gelengan kepala yang serempak menjadi ciri khas utama tarian ini.",
    traits: ["Menggunakan alat musik rapai.", "Gerakan kepala yang kompak.", "Syair Islami."],
    values: ["Kekompakan", "Harmoni", "Kerja sama"]
  },
  {
    name: "Tari Ranup Lampuan",
    goal: "Peserta didik memahami makna penyambutan tamu dalam budaya Aceh.",
    desc: "Tari Ranup Lampuan merupakan tarian penyambutan tamu kehormatan. Nama 'Ranup Lampuan' berarti sirih dalam puan (tempat sirih). Dalam tarian ini, penari perempuan membawa puan yang berisi sirih sebagai simbol penghormatan kepada tamu.",
    traits: ["Dibawakan penari perempuan.", "Membawa puan berisi sirih.", "Gerakan lembut."],
    values: ["Keramahan", "Kesopanan", "Menghormati tamu"]
  },
  {
    name: "Tari Pho",
    goal: "Peserta didik mengenal Tari Pho sebagai tarian khas Aceh.",
    desc: "Tari Pho berasal dari Aceh Besar dan dahulu dipentaskan setelah panen sebagai ungkapan rasa syukur. Seiring waktu, tari ini berkembang menjadi hiburan pada berbagai acara adat dan budaya.",
    traits: ["Gerakan lembut.", "Dibawakan oleh perempuan.", "Iringan musik tradisional."],
    values: ["Syukur", "Kebersamaan", "Kegembiraan"]
  },
  {
    name: "Tari Laweut",
    goal: "Peserta didik memahami fungsi Tari Laweut dalam kehidupan masyarakat Aceh.",
    desc: "Tari Laweut berasal dari Kabupaten Pidie. Tarian ini dibawakan oleh kelompok perempuan dengan iringan syair yang berisi nasihat, dakwah, dan pujian kepada Allah SWT. Gerakannya sederhana tetapi penuh makna.",
    traits: ["Penari perempuan.", "Syair keagamaan.", "Tanpa alat musik utama."],
    values: ["Religius", "Kebersamaan", "Kesopanan"]
  },
  {
    name: "Tari Tarek Pukat",
    goal: "Peserta didik memahami kehidupan masyarakat pesisir melalui Tari Tarek Pukat.",
    desc: "Tari Tarek Pukat menggambarkan aktivitas nelayan Aceh saat menarik pukat (jaring ikan) bersama-sama. Tarian ini menunjukkan pentingnya kerja sama dalam mencari nafkah.",
    traits: ["Gerakan menarik jaring.", "Bertema kehidupan nelayan.", "Dibawakan secara berkelompok."],
    values: ["Gotong royong", "Kerja keras", "Kebersamaan"]
  },
  {
    name: "Tari Bines",
    goal: "Peserta didik mengenal Tari Bines sebagai warisan budaya masyarakat Gayo.",
    desc: "Tari Bines berasal dari masyarakat Gayo dan umumnya dibawakan oleh perempuan. Tarian ini sering dipentaskan pada acara adat, penyambutan tamu, dan perayaan budaya. Gerakannya lembut, diiringi syair yang berisi pesan moral dan nasihat.",
    traits: ["Penari perempuan.", "Syair berbahasa Gayo.", "Gerakan anggun."],
    values: ["Kesopanan", "Persatuan", "Pelestarian budaya"]
  },
  {
    name: "Tari Guel",
    goal: "Peserta didik memahami sejarah dan makna Tari Guel.",
    desc: "Tari Guel berasal dari masyarakat Gayo dan berakar pada legenda Sengeda dan Bener Merie. Menurut cerita rakyat, Sengeda memperoleh petunjuk melalui mimpi tentang cara menemukan gajah putih yang kemudian dipersembahkan kepada Sultan Aceh. Kisah tersebut menjadi dasar lahirnya Tari Guel. Gerakan Tari Guel menggambarkan proses mencari, menjinakkan, dan mengendalikan gajah. Tarian ini sering dipentaskan dalam acara adat, penyambutan tamu, dan festival budaya.",
    traits: ["Berasal dari tanah Gayo.", "Terinspirasi dari legenda Gajah Putih.", "Gerakan menggambarkan hubungan manusia dengan alam."],
    values: ["Kerja sama", "Keberanian", "Menghargai alam", "Melestarikan budaya"]
  }
];

export default function TarianAcehPage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Tarian Tradisional Aceh"
        subtitle="Pelajari berbagai tarian tradisional Aceh yang penuh dengan nilai budaya, sejarah, dan filosofi kehidupan masyarakat."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-6">
          <Link href="/#sastra-budaya" className="inline-flex items-center gap-2 text-sm font-bold text-dark/60 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Sastra & Budaya
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {dances.map((dance, idx) => {
            const isExpanded = expandedIdx === idx;
            
            return (
              <Card 
                key={idx}
                hoverable={false}
                className="bg-white border border-dark/5 p-0 overflow-hidden transition-all duration-300"
              >
                {/* Header (Clickable) */}
                <button 
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-[#FAF6EE]/30 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="font-serif font-bold text-lg">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-dark">{dance.name}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-dark/40 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {/* Content (Expandable) */}
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[1000px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="pt-4 border-t border-dark/5">
                    
                    {/* Goal */}
                    <div className="mb-6 bg-accent-gold/10 p-4 rounded-xl border border-accent-gold/20 flex gap-3">
                      <Target className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-dark uppercase tracking-wider mb-1">Tujuan Pembelajaran</h4>
                        <p className="text-dark/80 text-sm leading-relaxed">{dance.goal}</p>
                      </div>
                    </div>

                    {/* Materi */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-dark/50 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Materi
                      </h4>
                      <p className="text-dark/80 leading-relaxed text-justify">
                        {dance.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Ciri Khas */}
                      <div className="bg-[#FAF6EE]/50 p-4 rounded-xl border border-dark/5">
                        <h4 className="text-sm font-bold text-dark/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4" /> Ciri Khas
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {dance.traits.map((trait, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-sm text-dark/70">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{trait}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Nilai */}
                      <div className="bg-[#FAF6EE]/50 p-4 rounded-xl border border-dark/5">
                        <h4 className="text-sm font-bold text-dark/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Activity className="w-4 h-4" /> Nilai-nilai
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {dance.values.map((value, vIdx) => (
                            <Badge key={vIdx} variant="green" size="md">
                              {value}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
