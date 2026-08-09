"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowLeft } from "lucide-react";

export const hadihMajaList = [
    {
      pepatah: "Adat bak Poteumeureuhom, Hukom bak Syiah Kuala, Qanun bak Putroe Phang, Reusam bak Laksamana.",
      arti: "Adat berada pada Sultan (Poteumeureuhom), hukum agama pada Syiah Kuala, peraturan pada Putroe Phang, dan pelaksanaan adat di laut pada Laksamana.",
      makna: "Mengajarkan pentingnya pembagian wewenang dan kepemimpinan yang adil dalam kehidupan bermasyarakat."
    },
    {
      pepatah: "Lagee bu leukat ngon sira.",
      arti: "Seperti nasi ketan dengan garam.",
      makna: "Menggambarkan hubungan yang sangat erat dan tidak dapat dipisahkan."
    },
    {
      pepatah: "Meunyo hana tajak, hanjeut ta teuka.",
      arti: "Kalau tidak berjalan, tidak akan sampai.",
      makna: "Keberhasilan hanya dapat dicapai dengan usaha dan kerja keras."
    },
    {
      pepatah: "Meunyo hana ta peugöt, hanjeut ta peumeugah.",
      arti: "Kalau tidak dikerjakan, tidak akan berhasil.",
      makna: "Setiap keberhasilan memerlukan tindakan nyata, bukan hanya rencana."
    },
    {
      pepatah: "Tabee bak ureueng tuha, sayang bak aneuk miet.",
      arti: "Hormat kepada orang tua, sayang kepada anak-anak.",
      makna: "Mengajarkan pentingnya menghormati yang lebih tua dan menyayangi yang lebih muda."
    },
    {
      pepatah: "Peumulia jamee, adat geutanyoe.",
      arti: "Memuliakan tamu adalah adat kita.",
      makna: "Masyarakat Aceh menjunjung tinggi sikap ramah dan menghormati tamu."
    },
    {
      pepatah: "Bek lagee ie lam batee.",
      arti: "Jangan seperti air di atas batu.",
      makna: "Jangan mudah menyerah atau berhenti berusaha ketika menghadapi kesulitan."
    },
    {
      pepatah: "Bek tatem peue nyang hana tapeugot.",
      arti: "Jangan mengambil sesuatu yang bukan milik sendiri.",
      makna: "Mengajarkan kejujuran dan menjauhi perbuatan yang merugikan orang lain."
    },
    {
      pepatah: "Ureuëng beut hanjeut rugoe.",
      arti: "Orang yang berilmu tidak akan merugi.",
      makna: "Ilmu pengetahuan akan selalu memberikan manfaat bagi kehidupan."
    },
    {
      pepatah: "Ilmu bek putôh, adat bek binasa.",
      arti: "Ilmu jangan terputus, adat jangan hilang.",
      makna: "Masyarakat harus terus belajar sekaligus menjaga adat dan budaya yang diwariskan."
    }
  ];

export default function HadihMajaPage() {
  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Hadih Maja"
        subtitle="Kumpulan pepatah, petuah, dan ungkapan bijak masyarakat Aceh yang diwariskan secara turun-temurun."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <Link href="/#sastra-budaya" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Kategori
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hadihMajaList.map((item, index) => (
            <Card key={index} hoverable withMotif motifVariant="pinto" className="bg-white border border-dark/5 p-6 flex flex-col h-full">
              <h3 className="font-serif text-xl font-bold text-primary mb-4 italic leading-relaxed">
                "{item.pepatah}"
              </h3>
              <div className="space-y-4 flex-1 mt-auto border-t border-dark/5 pt-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-dark/40">Arti</span>
                  <p className="text-dark/80 text-sm mt-1 leading-relaxed">{item.arti}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-dark/40">Makna</span>
                  <p className="text-dark/80 text-sm mt-1 leading-relaxed">{item.makna}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
