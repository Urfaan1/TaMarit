"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AdatAcehPage() {
  const adatList = [
    {
      title: "1. Peumulia Jamee (Memuliakan Tamu)",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Peumulia Jamee merupakan salah satu adat yang paling dikenal di Aceh. Ungkapan "Peumulia Jamee, Adat Geutanyoe" berarti memuliakan tamu adalah adat kita. Masyarakat Aceh percaya bahwa tamu adalah orang yang harus dihormati dan diperlakukan dengan baik. Ketika tamu datang, tuan rumah biasanya menyambut dengan ramah, mempersilakan duduk, serta menyajikan makanan atau minuman sebagai bentuk penghormatan. Tradisi ini mencerminkan sikap ramah, sopan santun, dan rasa persaudaraan yang tinggi.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Keramahan</li>
              <li>Sopan santun</li>
              <li>Menghargai orang lain</li>
              <li>Persaudaraan</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. Peusijuek (Tepung Tawar)",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Peusijuek adalah upacara adat berupa pemberian doa dan tepung tawar sebagai simbol harapan akan keselamatan, keberkahan, dan kebahagiaan. Peusijuek biasanya dilakukan pada berbagai acara, seperti: Pernikahan, Naik rumah baru, Berangkat haji, Memulai usaha, Kendaraan baru, Anak mulai sekolah, dan Pelantikan jabatan. Prosesi ini dipimpin oleh tokoh agama atau tokoh adat dengan membaca doa-doa.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Bersyukur kepada Allah</li>
              <li>Memohon keberkahan</li>
              <li>Mempererat silaturahmi</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "3. Meugang",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Meugang merupakan tradisi memasak dan menikmati daging bersama keluarga menjelang hari-hari besar Islam, yaitu: Ramadan, Idulfitri, Iduladha. Pada hari Meugang masyarakat membeli daging sapi atau kerbau untuk dimasak bersama keluarga. Tradisi ini juga menjadi momen berbagi kepada kerabat, tetangga, dan masyarakat yang kurang mampu.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Kebersamaan</li>
              <li>Berbagi rezeki</li>
              <li>Silaturahmi</li>
              <li>Kepedulian sosial</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "4. Kenduri",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Kenduri adalah kegiatan makan bersama yang disertai doa sebagai ungkapan rasa syukur kepada Allah. Jenis kenduri antara lain: Kenduri Maulid, Kenduri Blang, Kenduri Laut, Kenduri Rumah Baru, Kenduri Syukuran. Dalam kenduri, masyarakat bergotong royong menyiapkan makanan dan menikmati hidangan bersama.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Gotong royong</li>
              <li>Syukur</li>
              <li>Persatuan</li>
              <li>Kebersamaan</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "5. Adat Perkawinan Aceh",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Perkawinan adat Aceh terdiri atas beberapa tahapan, yaitu: Cah Rhot (mencari informasi calon pasangan), Jak Ba Ranub (melamar), Intat Linto (mengantar mempelai laki-laki), Tueng Dara Baro (penyambutan mempelai perempuan), Walimatul 'Ursy (resepsi). Dalam setiap tahapan terdapat aturan adat yang dipadukan dengan ajaran Islam.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Tanggung jawab</li>
              <li>Musyawarah</li>
              <li>Menghormati keluarga</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "6. Adat Kelahiran",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Masyarakat Aceh memiliki beberapa tradisi setelah bayi lahir, antara lain: Azan di telinga bayi, Tahnik, Pemberian nama, Aqiqah, Doa bersama keluarga. Tradisi ini bertujuan mendoakan agar anak tumbuh menjadi pribadi yang saleh dan bermanfaat.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Syukur</li>
              <li>Doa</li>
              <li>Kasih sayang keluarga</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "7. Adat Bertani (Kenduri Blang)",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Sebelum musim tanam dimulai, masyarakat melaksanakan Kenduri Blang. Kegiatan ini dipimpin oleh Keujruen Blang, yaitu pemimpin adat yang mengatur tata kelola sawah dan irigasi. Tujuan Kenduri Blang adalah memohon hasil panen yang baik serta mempererat kerja sama antarpetani.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Gotong royong</li>
              <li>Kerja sama</li>
              <li>Peduli lingkungan</li>
              <li>Bersyukur</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "8. Adat Kelautan (Panglima Laot)",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Panglima Laot adalah lembaga adat yang mengatur kehidupan nelayan di Aceh. Tugas Panglima Laot antara lain: Menentukan aturan melaut, Menyelesaikan perselisihan antar nelayan, Menjaga kelestarian laut, Menentukan hari pantang melaut pada waktu-waktu tertentu. Lembaga ini telah ada sejak masa Kesultanan Aceh dan masih berfungsi hingga sekarang.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Disiplin</li>
              <li>Tanggung jawab</li>
              <li>Pelestarian lingkungan</li>
              <li>Musyawarah</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "9. Musyawarah Gampong",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Setiap persoalan di tingkat desa (gampong) biasanya diselesaikan melalui musyawarah. Musyawarah dipimpin oleh: Keuchik, Tuha Peut, Imum Meunasah, Tokoh masyarakat. Keputusan diambil berdasarkan kesepakatan bersama.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Demokrasi</li>
              <li>Musyawarah</li>
              <li>Persatuan</li>
              <li>Tanggung jawab</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "10. Hadih Maja",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Hadih Maja merupakan kumpulan pepatah, petuah, dan ungkapan bijak masyarakat Aceh yang diwariskan secara turun-temurun. Contoh Hadih Maja: <em>Adat bak Poteumeureuhom, Hukom bak Syiah Kuala, Qanun bak Putroe Phang, Reusam bak Laksamana.</em> Maknanya adalah setiap urusan memiliki pemimpin dan aturan masing-masing sehingga kehidupan masyarakat berjalan tertib. Hadih Maja mengajarkan pentingnya kejujuran, kerja keras, menghormati orang tua, menjaga adat, dan menjunjung tinggi nilai-nilai Islam.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Kebijaksanaan</li>
              <li>Kejujuran</li>
              <li>Menghormati adat</li>
              <li>Menjaga budaya</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Adat Istiadat Aceh"
        subtitle="Mengenal ragam tradisi, upacara adat, dan kearifan lokal yang membentuk identitas masyarakat Aceh."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <Link href="/#sastra-budaya" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Kategori
        </Link>
        <Accordion items={adatList} />
      </div>
    </div>
  );
}
