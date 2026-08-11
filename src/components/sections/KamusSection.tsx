"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";

const KAMUS_DATA = [
  {
    id: "gayo",
    title: "Kamus Bergambar Gayo-Indonesia-Inggris",
    author: "Zulfahmirda Matondang, Cut Ida Agustina",
    pages: "vii + 78 hlm",
    isbn: "978-623-388-697-0",
    synopsis: "Kamus Bergambar Gayo-Indonesia-Inggris disusun tahun 2024 oleh Balai Bahasa Provinsi Aceh. Kamus ini disusun secara tematis dan menampilkan gambar-gambar. Produk leksikografi ini berupa kamus aneka bahasa, yaitu bahasa Gayo, Indonesia, dan Inggris. Kosakata terkait tema flora dan fauna juga ditambahkan bahasa Latin tiap jenisnya. Tema lainnya yang dimuat dalam kamus ini, di antaranya anggota tubuh, anggota keluarga, aktivitas, angka, lingkungan, peralatan, dan ukuran.",
    link: "https://drive.google.com/file/d/1l9Icp7-k-3g7D3VYnkr-BxXV4ogvLKbw/view?usp=sharing",
    color: "bg-[#f47f29]" // Orange
  },
  {
    id: "aceh-bergambar",
    title: "Kamus Bergambar Aceh-Indonesia-Inggris",
    author: "Zulfahmirda Matondang, Istika Suri",
    pages: "vii + 61 hlm",
    isbn: "978-602-259-990-6",
    synopsis: "Ini adalah Kamus Bergambar Aceh-Indonesia-Inggris yang disusun oleh Tim Perkamusan Balai Bahasa Provinsi Aceh tahun 2023. Buku ini disiapkan oleh Pemerintah dalam rangka pemenuhan kebutuhan buku pendidikan yang bermutu, murah, dan merata sesuai dengan amanat UU No. 3 Tahun 2017. Karya ini disusun dan ditelaah oleh berbagai pihak di bawah koordinasi Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Kamus ini merupakan dokumen hidup yang senantiasa diperbaiki, diperbarui, dan dimutakhirkan sesuai dengan dinamika kebutuhan dan perubahan zaman.",
    link: "https://drive.google.com/file/d/1oFl4bXYsGl_iCgNJWGObr5mk_Wu1fVcO/view?usp=drive_link",
    color: "bg-[#e2f1cd]" // Light green
  },
  {
    id: "budaya",
    title: "Kamus Budaya Aceh—Indonesia",
    author: "Zulfahmirda Matondang, Istika Suri, Cut Ida Agustina",
    pages: "151 hlm",
    isbn: "978-623-194-244-9",
    synopsis: "Kamus Budaya Aceh—Indonesia disusun tahun 2022 oleh Balai Bahasa Provinsi Aceh. Kamus ini memuat kosakata bahasa Aceh bidang budaya.",
    link: "https://drive.google.com/file/d/1bBglJyJVeNQwt8ybfUzZkJ6oD-PlCIA2/view?usp=drive_link",
    color: "bg-[#c8323c]" // Red
  },
  {
    id: "kemaritiman",
    title: "Kamus Kemaritiman Aceh—Indonesia",
    author: "Zulfahmirda Matondang, Istika Suri, Syarifah Zurriyati",
    pages: "73 hlm",
    isbn: "978-623-94052-1-2",
    synopsis: "Kamus ini adalah kamus Aceh–Indonesia yang memuat istilah kemaritiman.",
    link: "https://drive.google.com/file/d/1DRBwJQh7-zWVvC18bEPI0PNOcRPTibiX/view?usp=drive_link",
    color: "bg-[#33a39f]" // Teal
  }
];

export function KamusSection({ id }: { id?: string }) {
  return (
    <div id={id} className="w-full bg-cream pb-24 scroll-mt-16">
      <Section
        background="cream"
        title="Kamus Bahasa Aceh"
        subtitle="Koleksi lengkap kamus daerah yang diterbitkan oleh Balai Bahasa Provinsi Aceh untuk membantu Anda mempelajari kosakata, budaya, dan kemaritiman Aceh."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KAMUS_DATA.map((book) => (
            <div key={book.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
              <div className={`w-full aspect-[2/3] ${book.color} flex flex-col items-center justify-center p-6 text-center relative`}>
                <h3 className={`font-serif font-black text-2xl uppercase tracking-wider drop-shadow-sm ${book.id === 'aceh-bergambar' ? 'text-teal-600' : 'text-white'}`}>
                  {book.title}
                </h3>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-serif font-bold text-lg text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h4>
                <div className="text-xs text-gray-500 mb-4 space-y-1.5 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p><span className="font-semibold text-gray-700">Penulis:</span> {book.author}</p>
                  <p><span className="font-semibold text-gray-700">Halaman:</span> {book.pages}</p>
                  <p><span className="font-semibold text-gray-700">ISBN:</span> {book.isbn}</p>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-4 mb-6 leading-relaxed">
                  {book.synopsis}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={book.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary text-sm font-semibold hover:text-secondary transition-colors inline-flex items-center"
                  >
                    Baca selengkapnya <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
