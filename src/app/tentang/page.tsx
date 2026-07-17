"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { PintoAceh, BungongJeumpa, BaiturrahmanArch } from "@/components/ui/Motifs";
import { Send, Info, Eye, ShieldCheck, Heart } from "lucide-react";

export default function TentangPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Kritik & Saran",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "Kritik & Saran", message: "" });
      alert("Terima kasih atas masukan Anda! Pesan telah terkirim secara lokal.");
    }, 1500);
  };

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      {/* Visual Header */}
      <Section
        background="cream"
        title="Tentang TaMarit"
        subtitle="Misi pelestarian khazanah bahasa, sastra klasik, dan warisan kebudayaan Tanoh Rencong melalui media digital interaktif."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-16">
        {/* Row 1: Filosofi & Nilai */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5 text-left">
            <Badge variant="gold" className="w-fit" showDot>
              Filosofi Nama
            </Badge>
            <h3 className="font-serif text-3xl font-bold text-dark leading-snug">
              &ldquo;TaMarit&rdquo; – Mari Berbicara
            </h3>
            <p className="text-sm md:text-base text-dark/70 leading-relaxed">
              Diambil dari kosakata bahasa Aceh harian, <strong className="font-serif text-primary">TaMarit</strong> memiliki makna literal &ldquo;Mari Kita Berbicara&rdquo; atau &ldquo;Berdialog Bersama&rdquo;. Nama ini dipilih karena mencerminkan impian kami: menghidupkan kembali penuturan bahasa daerah secara aktif dan menyenangkan di kalangan generasi muda.
            </p>
            <p className="text-sm md:text-base text-dark/70 leading-relaxed">
              Aceh merupakan salah satu simpul kebudayaan maritim terkuat di Asia Tenggara (Jalur Rempah) sekaligus pusat keagamaan Nusantara (Serambi Mekkah). TaMarit hadir menjembatani sejarah kebesaran tersebut dengan kemudahan pembelajaran digital era modern.
            </p>
          </div>

          <div className="relative flex justify-center">
            {/* Design system colors display inside a card */}
            <Card hoverable={false} withMotif motifVariant="pinto" className="w-full max-w-sm bg-white p-8">
              <h4 className="font-serif text-xl font-bold text-dark mb-4 text-center">
                Visual Identitas TaMarit
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3.5 p-2 rounded-aceh hover:bg-cream/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-primary" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-dark block">Merah (#C1121F)</span>
                    <span className="text-[10px] text-dark/40 font-medium">Melambangkan keberanian & kepahlawanan patriotik</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-2 rounded-aceh hover:bg-cream/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-accent-gold" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-dark block">Emas (#F2C94C)</span>
                    <span className="text-[10px] text-dark/40 font-medium">Melambangkan keagungan kebudayaan & kemuliaan kesultanan</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-2 rounded-aceh hover:bg-cream/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-accent-green" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-dark block">Hijau (#2E7D32)</span>
                    <span className="text-[10px] text-dark/40 font-medium">Melambangkan ketaatan syariat & kedamaian Serambi Mekkah</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-2 rounded-aceh hover:bg-cream/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-dark" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-dark block">Hitam (#1E1E1E)</span>
                    <span className="text-[10px] text-dark/40 font-medium">Melambangkan ketegasan pilar pondasi arsitektur Rumoh Aceh</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Row 2: Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hoverable={false} className="bg-white p-6 border border-dark/5">
            <div className="w-10 h-10 rounded-aceh bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-dark mb-2">Visi Kami</h4>
            <p className="text-xs md:text-sm text-dark/60 leading-relaxed">
              Menjadi wadah rujukan digital pembelajaran khazanah Aceh yang paling ramah pengguna, bermutu ilmiah tinggi, serta diakui secara global.
            </p>
          </Card>

          <Card hoverable={false} className="bg-white p-6 border border-dark/5">
            <div className="w-10 h-10 rounded-aceh bg-accent-green/10 flex items-center justify-center text-accent-green mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-dark mb-2">Misi Kami</h4>
            <p className="text-xs md:text-sm text-dark/60 leading-relaxed">
              Mengemas tata bahasa, sastera Hikayat tulisan, dan petuah Hadih Maja lisan ke dalam gamifikasi visual premium yang menyenangkan dipelajari.
            </p>
          </Card>

          <Card hoverable={false} className="bg-white p-6 border border-dark/5">
            <div className="w-10 h-10 rounded-aceh bg-accent-gold/10 flex items-center justify-center text-[#B28A00] mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-dark mb-2">Semangat Adat</h4>
            <p className="text-xs md:text-sm text-dark/60 leading-relaxed">
              Membangun rasa kepemilikan dan kepedulian bersama untuk melestarikan dialek-dialek bahasa daerah serta melindungi peninggalan sejarah kemaritiman.
            </p>
          </Card>
        </div>

        {/* Row 3: Saran & Masukan Form */}
        <div className="max-w-2xl mx-auto w-full">
          <Card hoverable={false} headerAccent="primary" className="p-8 bg-white border border-dark/5">
            <div className="flex flex-col items-center text-center gap-2 mb-8">
              <BaiturrahmanArch size={48} className="text-primary/20" />
              <h3 className="font-serif text-2xl font-bold text-dark">Saran, Masukan & Artikel</h3>
              <p className="text-xs md:text-sm text-dark/50 max-w-sm leading-relaxed">
                Punya naskah Hikayat keluarga atau usulan penulisan kosa kata daerah? Bagikan bersama kami di sini.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Nama Lengkap"
                  placeholder="e.g. Teuku Rahmat"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  label="Alamat Email"
                  placeholder="e.g. rahmat@email.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1.5 font-sans">
                <label className="text-sm font-semibold text-dark/80 pl-1">
                  Kategori Masukan
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-dark border-2 border-dark/10 rounded-aceh px-4 py-3 text-base outline-none transition-all duration-300 focus:border-accent-green focus:ring-4 focus:ring-accent-green/10"
                >
                  <option value="Kritik & Saran">Kritik & Saran</option>
                  <option value="Usul Naskah Hikayat">Usul Naskah Hikayat</option>
                  <option value="Koreksi Kamus">Koreksi Kosakata Kamus</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 font-sans">
                <label className="text-sm font-semibold text-dark/80 pl-1">
                  Pesan Anda
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tulis pesan lengkap..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-dark border-2 border-dark/10 rounded-aceh px-4 py-3 text-base outline-none transition-all duration-300 focus:border-accent-green focus:ring-4 focus:ring-accent-green/10"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitted}
                className="w-full mt-2"
                leftIcon={<Send className="w-4.5 h-4.5" />}
              >
                Kirim Masukan
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
