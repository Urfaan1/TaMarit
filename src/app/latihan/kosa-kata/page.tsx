"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search } from "lucide-react";

export const vocabularyData = [
  {
    category: "Lapangan",
    words: [
      { id: "Pohon", aceh: "Bak" },
      { id: "Rumput", aceh: "Naleung" },
      { id: "Burung", aceh: "Cicem" },
      { id: "Daun", aceh: "Oen" },
      { id: "Batu", aceh: "Batee" },
      { id: "Kayu", aceh: "Kayee" },
    ]
  },
  {
    category: "Pasar",
    words: [
      { id: "Uang", aceh: "Peng" },
      { id: "Ikan", aceh: "Eungkot" },
      { id: "Telur", aceh: "Boh Manok" },
      { id: "Cabai", aceh: "Campli" },
      { id: "Beli", aceh: "Bloe" },
      { id: "Jualan", aceh: "Meukat" },
    ]
  },
  {
    category: "Sekolah",
    words: [
      { id: "Belajar", aceh: "Mereunoe" },
      { id: "Teman", aceh: "Ngoen / Rakan" },
      { id: "Guru", aceh: "Guree" },
      { id: "Masuk", aceh: "Tamong" },
      { id: "Pulang", aceh: "Woe" },
      { id: "Bermain", aceh: "Meu'en" },
    ]
  },
  {
    category: "Dapur",
    words: [
      { id: "Piring", aceh: "Pingan" },
      { id: "Pisau", aceh: "Sikin" },
      { id: "Belanga", aceh: "Beulangong" },
      { id: "Minyak", aceh: "Minyeuk" },
      { id: "Garam", aceh: "Sira" },
      { id: "Penanak Nasi", aceh: "Kaneot" },
    ]
  },
  {
    category: "Perpustakaan",
    words: [
      { id: "Buku", aceh: "Buku" },
      { id: "Rak", aceh: "Rak" },
      { id: "Kursi", aceh: "Kursi" },
      { id: "Kertas", aceh: "Kereutah" },
      { id: "Kipas Angin", aceh: "Sira*" },
      { id: "Duduk", aceh: "Duek" },
    ]
  },
  {
    category: "Salam dan Sapaan",
    words: [
      { id: "Halo", aceh: "Assalamu'alaikum / Hai" },
      { id: "Apa kabar?", aceh: "Peue haba?" },
      { id: "Baik", aceh: "Get" },
      { id: "Terima kasih", aceh: "Teurimong geunaseh" },
      { id: "Sama-sama", aceh: "Sama-sama" },
      { id: "Maaf", aceh: "Hampoen" },
      { id: "Tolong", aceh: "Tulông" },
      { id: "Silakan", aceh: "Neupeugah / Bah" },
      { id: "Ya", aceh: "Na" },
      { id: "Tidak", aceh: "Hana" },
    ]
  },
  {
    category: "Anggota Keluarga",
    words: [
      { id: "Ayah", aceh: "Ayah" },
      { id: "Ibu", aceh: "Mak / Ummi" },
      { id: "Kakak", aceh: "Bang / Kak" },
      { id: "Adik", aceh: "Adek" },
      { id: "Anak", aceh: "Aneuk" },
      { id: "Kakek", aceh: "Nek" },
      { id: "Nenek", aceh: "Nenek" },
    ]
  },
  {
    category: "Orang",
    words: [
      { id: "Orang", aceh: "Ureuëng" },
      { id: "Teman", aceh: "Rakan" },
      { id: "Guru", aceh: "Guree" },
      { id: "Murid", aceh: "Murid" },
      { id: "Raja", aceh: "Rajeu" },
      { id: "Permaisuri", aceh: "Putroe" },
    ]
  },
  {
    category: "Tempat",
    words: [
      { id: "Rumah", aceh: "Rumoh" },
      { id: "Sekolah", aceh: "Sikula" },
      { id: "Pasar", aceh: "Pasai" },
      { id: "Dapur", aceh: "Dapô" },
      { id: "Perpustakaan", aceh: "Perpustakaan" },
      { id: "Lapangan", aceh: "Lapangan" },
      { id: "Masjid", aceh: "Meunasah / Masjid" },
    ]
  },
  {
    category: "Alam",
    words: [
      { id: "Gunung", aceh: "Gunong" },
      { id: "Sungai", aceh: "Krueng" },
      { id: "Laut", aceh: "Laot" },
      { id: "Pohon", aceh: "Bak" },
      { id: "Daun", aceh: "Oen" },
      { id: "Batu", aceh: "Batee" },
      { id: "Kayu", aceh: "Kayee" },
      { id: "Burung", aceh: "Cicem" },
      { id: "Rumput", aceh: "Naleung" },
    ]
  },
  {
    category: "Makanan",
    words: [
      { id: "Ikan", aceh: "Eungkot" },
      { id: "Telur", aceh: "Boh Manok" },
      { id: "Cabai", aceh: "Campli" },
      { id: "Nasi", aceh: "Bu" },
      { id: "Air", aceh: "Ie" },
    ]
  },
  {
    category: "Kata Kerja",
    words: [
      { id: "Belajar", aceh: "Mereunoe" },
      { id: "Bermain", aceh: "Meu'en" },
      { id: "Masuk", aceh: "Tamong" },
      { id: "Pulang", aceh: "Woe" },
      { id: "Duduk", aceh: "Duek" },
      { id: "Membeli", aceh: "Bloe" },
      { id: "Menjual", aceh: "Meukat" },
      { id: "Datang", aceh: "Teuka" },
      { id: "Pergi", aceh: "Jak" },
      { id: "Membantu", aceh: "Bantu" },
      { id: "Melihat", aceh: "Kalon / Eu" },
      { id: "Mendengar", aceh: "Dengô" },
      { id: "Berbicara", aceh: "Peugah" },
    ]
  },
  {
    category: "Sifat",
    words: [
      { id: "Baik", aceh: "Get" },
      { id: "Besar", aceh: "Rayeuk" },
      { id: "Kecil", aceh: "Ubit" },
      { id: "Cantik", aceh: "Cantek" },
      { id: "Tampan", aceh: "Gagah" },
      { id: "Pintar", aceh: "Ceudah" },
      { id: "Jujur", aceh: "Jujur" },
      { id: "Rajin", aceh: "Rajin" },
      { id: "Sabar", aceh: "Saba" },
    ]
  },
  {
    category: "Angka",
    words: [
      { id: "Satu", aceh: "Sa" },
      { id: "Dua", aceh: "Dua" },
      { id: "Tiga", aceh: "Lhee" },
      { id: "Empat", aceh: "Peuët" },
      { id: "Lima", aceh: "Limong" },
      { id: "Enam", aceh: "Nam" },
      { id: "Tujuh", aceh: "Tujôh" },
      { id: "Delapan", aceh: "Lapan" },
      { id: "Sembilan", aceh: "Sikureuëng" },
      { id: "Sepuluh", aceh: "Siploh" },
    ]
  },
  {
    category: "Kata Tanya",
    words: [
      { id: "Apa", aceh: "Peue" },
      { id: "Siapa", aceh: "Soe" },
      { id: "Di mana", aceh: "Pat" },
      { id: "Kapan", aceh: "Pakon watee" },
      { id: "Mengapa", aceh: "Pakon" },
      { id: "Bagaimana", aceh: "Pakiban" },
      { id: "Berapa", aceh: "Padum" },
    ]
  }
];

export default function KosakataPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = vocabularyData.map(category => {
    const filteredWords = category.words.filter(word => 
      word.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      word.aceh.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, words: filteredWords };
  }).filter(category => category.words.length > 0);

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Kamus Kosa Kata"
        subtitle="Pelajari perbendaharaan kata bahasa Aceh berdasarkan berbagai kategori sehari-hari."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Search Bar */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Cari kata dalam Indonesia atau Aceh..."
              className="w-full px-5 py-3 pl-12 rounded-full border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="w-5 h-5 text-dark/40 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Vocabulary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((category, idx) => (
              <Card 
                key={idx} 
                hoverable={false}
                className="bg-white border border-dark/5 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark/5">
                  <Badge variant="primary">{category.category}</Badge>
                  <span className="text-xs text-dark/40 font-semibold">{category.words.length} kata</span>
                </div>
                
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[300px] pr-2">
                  {category.words.map((word, wIdx) => (
                    <div key={wIdx} className="flex justify-between items-center py-2 border-b border-dashed border-dark/5 last:border-0 hover:bg-[#FAF6EE]/50 px-2 rounded transition-colors">
                      <span className="text-sm font-medium text-dark/80">{word.id}</span>
                      <span className="text-sm font-bold text-primary">{word.aceh}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-dark/50 text-lg">Pencarian untuk "{searchTerm}" tidak ditemukan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
