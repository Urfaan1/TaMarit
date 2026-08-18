"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { PintoAceh, BungongJeumpa } from "@/components/ui/Motifs";
import { FiturUtamaShared } from "@/components/sections/FiturUtamaShared";
import { 
  BookOpen, 
  MessageSquare, 
  GraduationCap, 
  Globe, 
  Gamepad2, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  Users, 
  Heart,
  Rocket, 
  Award, 
  Lightbulb, 
  Layers, 
  Search,
  MessageCircle,
  PlayCircle,
  BrainCircuit,
  Mic,
  HelpCircle,
  Send,
  Camera,
  Mail,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function TentangPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Kritik & Saran",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        "service_ttdj606",
        "template_3zzrg46",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "ogyWK2-2kdTKZpWVg",
        }
      );
      console.log("EmailJS success:", result.status, result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "Kritik & Saran", message: "" });
    } catch (err: unknown) {
      if (err && typeof err === "object" && "status" in err && "text" in err) {
        const ejsErr = err as { status: number; text: string };
        console.error("EmailJS error:", ejsErr.status, ejsErr.text);
      } else {
        console.error("EmailJS unexpected error:", err);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden bg-gradient-to-b from-cream to-white">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/4">
          <PintoAceh size={600} />
        </div>
        <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none transform -translate-x-1/3 translate-y-1/4">
          <BungongJeumpa size={500} />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col gap-6 animate-fade-in">
            <Badge variant="gold" className="w-fit" showDot>
              Krida Duta Bahasa Aceh 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark leading-tight">
              Tentang <span className="text-primary">TaMarit</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Tamarit merupakan Krida Kebahasaan Duta Bahasa Provinsi Aceh Tahun 2026 yang menghadirkan platform pembelajaran bahasa Aceh berbasis digital sebagai upaya mendukung pelestarian dan revitalisasi bahasa daerah melalui pemanfaatan teknologi.
            </p>
            <div className="pt-4">
              <Button variant="primary" className="shadow-lg hover:shadow-xl transition-shadow" onClick={() => document.getElementById('krida')?.scrollIntoView({ behavior: 'smooth' })}>
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in animation-delay-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/fotodubas.JPG" 
              alt="Ilustrasi Duta Bahasa" 
              className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-dark text-sm">Duta Bahasa</p>
                <p className="text-xs text-gray-500">Provinsi Aceh 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tentang Tamarit */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-serif font-bold text-dark mb-6">Apa itu TaMarit?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tamarit adalah platform pembelajaran bahasa Aceh berbasis web yang dirancang untuk memudahkan masyarakat mempelajari bahasa Aceh secara interaktif, mudah diakses, dan gratis. Melalui pemanfaatan teknologi digital, Tamarit hadir sebagai media pembelajaran modern yang mendukung pelestarian, pengembangan, dan revitalisasi bahasa Aceh.
          </p>
        </div>
      </section>

      {/* 3. Krida Kebahasaan */}
      <section id="krida" className="py-16 px-6 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white group hover:shadow-primary/30 transition-all duration-500">
            <div className="absolute -right-20 -top-20 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
              <Award size={400} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 md:pr-6">
                <span className="bg-accent-gold text-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">
                  Krida 2026
                </span>
                <h3 className="text-2xl font-serif font-bold leading-tight">Krida Kebahasaan Duta Bahasa Provinsi Aceh</h3>
                <p className="text-white/80 text-sm mt-auto">
                  <strong>Penggagas:</strong><br/> Duta Bahasa Provinsi Aceh 2026
                </p>
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-6">
                <div>
                  <h4 className="text-accent-gold font-bold mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" /> Fokus
                  </h4>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    Mengembangkan platform pembelajaran bahasa Aceh berbasis digital sebagai bentuk implementasi nyata pelestarian bahasa daerah.
                  </p>
                </div>
                <div>
                  <h4 className="text-accent-gold font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" /> Tujuan
                  </h4>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    Mendukung revitalisasi bahasa Aceh melalui inovasi teknologi yang mudah diakses masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latar Belakang */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="bg-cream rounded-3xl p-6 text-center transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 rotate-180" />
              </div>
              <p className="text-sm font-bold text-dark">Penggunaan Berkurang</p>
              <p className="text-xs text-gray-500 mt-2">Di kalangan generasi muda</p>
            </div>
            <div className="bg-cream rounded-3xl p-6 text-center transform translate-y-6 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-dark">Media Terbatas</p>
              <p className="text-xs text-gray-500 mt-2">Minimnya sarana digital</p>
            </div>
            <div className="bg-cream rounded-3xl p-6 text-center transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-dark">Solusi Teknologi</p>
              <p className="text-xs text-gray-500 mt-2">Sarana pelestarian modern</p>
            </div>
            <div className="bg-cream rounded-3xl p-6 text-center transform translate-y-6 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-green-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-dark">Inovasi TaMarit</p>
              <p className="text-xs text-gray-500 mt-2">Interaktif & Mudah diakses</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-5">
            <h2 className="text-3xl font-serif font-bold text-dark">Latar Belakang</h2>
            <div className="w-16 h-1.5 bg-accent-gold rounded-full mb-2"></div>
            <p className="text-gray-600 leading-relaxed">
              Penggunaan bahasa Aceh saat ini mulai mengalami penurunan, khususnya di kalangan generasi muda. Hal ini diperburuk dengan masih sangat terbatasnya media pembelajaran bahasa Aceh berbasis digital yang interaktif dan relevan dengan zaman.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kami menyadari bahwa teknologi dapat menjadi sarana paling efektif untuk pelestarian bahasa daerah. Oleh karena itu, <strong>TaMarit</strong> hadir sebagai solusi pembelajaran yang modern, interaktif, dan mudah diakses dari mana saja.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Visi & Misi */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          {/* Visi */}
          <div className="text-center max-w-4xl mx-auto mb-20 bg-white p-10 md:p-14 rounded-[3rem] shadow-sm relative border border-gray-100">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent-gold text-dark font-bold px-6 py-2 rounded-full shadow-md flex items-center gap-2">
              <Lightbulb className="w-5 h-5" /> Visi Kami
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary leading-relaxed">
              "Menjadi platform digital yang berperan aktif dalam pelestarian dan revitalisasi bahasa Aceh melalui pembelajaran yang inovatif, inklusif, dan mudah diakses oleh semua kalangan."
            </h3>
          </div>

          {/* Misi */}
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8 flex items-center gap-3">
              <Target className="text-accent-gold" /> Misi TaMarit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                { icon: BookOpen, title: "Kualitas", desc: "Menyediakan materi pembelajaran bahasa Aceh yang berkualitas.", color: "text-blue-600", bg: "bg-blue-100" },
                { icon: Globe, title: "Teknologi", desc: "Memanfaatkan teknologi untuk pembelajaran bahasa daerah.", color: "text-purple-600", bg: "bg-purple-100" },
                { icon: Users, title: "Generasi Muda", desc: "Menumbuhkan minat generasi muda terhadap bahasa Aceh.", color: "text-orange-600", bg: "bg-orange-100" },
                { icon: Heart, title: "Keberlanjutan", desc: "Mendukung pelestarian bahasa Aceh secara berkelanjutan.", color: "text-red-600", bg: "bg-red-100" },
              ].map((misi, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-50 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${misi.bg} ${misi.color}`}>
                    <misi.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-dark mb-3">{misi.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{misi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tujuan & 10. Dampak */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-dark mb-8">Tujuan</h2>
            <div className="flex flex-col gap-6">
              {[
                "Mempermudah masyarakat belajar bahasa Aceh.",
                "Menjadi media pembelajaran yang modern.",
                "Mendukung revitalisasi bahasa daerah.",
                "Meningkatkan literasi bahasa Aceh."
              ].map((tujuan, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg">{tujuan}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-dark mb-8">Dampak yang Diharapkan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: BookOpen, text: "Meningkatkan literasi bahasa Aceh.", c: "border-blue-100 bg-blue-50/50" },
                { icon: Target, text: "Mendukung revitalisasi bahasa daerah.", c: "border-green-100 bg-green-50/50" },
                { icon: Globe, text: "Memperluas akses belajar bahasa Aceh.", c: "border-orange-100 bg-orange-50/50" },
                { icon: Users, text: "Menumbuhkan minat generasi muda.", c: "border-purple-100 bg-purple-50/50" },
              ].map((dampak, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border ${dampak.c} flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow`}>
                  <dampak.icon className="w-8 h-8 text-dark/70" />
                  <p className="font-medium text-dark/80 text-sm">{dampak.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Fitur Utama Tamarit */}
      <FiturUtamaShared />

      {/* 8. Siapa yang Dapat Menggunakan & 11. Nilai Tamarit */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-dark mb-8">Siapa Pengguna TaMarit?</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Pelajar", icon: GraduationCap },
                { label: "Mahasiswa", icon: BookOpen },
                { label: "Guru & Pendidik", icon: Users },
                { label: "Masyarakat Umum", icon: Globe },
                { label: "Perantau Aceh", icon: Target },
                { label: "Wisatawan", icon: Search },
              ].map((user, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-full hover:border-primary hover:text-primary transition-colors shadow-sm cursor-default">
                  <user.icon className="w-4 h-4" />
                  <span className="font-semibold text-sm">{user.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=200" alt="Students" className="w-24 h-24 rounded-2xl object-cover" />
              <p className="text-gray-600 italic text-sm leading-relaxed">
                "Platform ini didesain inklusif agar siapapun, dari tingkat pemula hingga lanjutan, dapat belajar bahasa Aceh dengan mudah."
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-dark mb-8">Nilai Inti TaMarit</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Melestarikan", desc: "Menjaga warisan indatu agar tak lekang waktu.", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
                { title: "Belajar", desc: "Terus mengembangkan diri dengan ilmu baru.", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
                { title: "Berkolaborasi", desc: "Tumbuh bersama komunitas dan pemerhati.", icon: Users, color: "text-orange-500", bg: "bg-orange-50" },
                { title: "Berinovasi", desc: "Menggunakan teknologi untuk kemajuan budaya.", icon: Lightbulb, color: "text-green-500", bg: "bg-green-50" },
              ].map((nilai, idx) => (
                <div key={idx} className="group bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${nilai.bg} ${nilai.color}`}>
                    <nilai.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-dark mb-2">{nilai.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{nilai.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 12. Roadmap */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Peta Jalan (Roadmap)</h2>
            <p className="text-gray-500">Tahapan pengembangan TaMarit ke depan.</p>
          </div>

          <div className="relative space-y-12">
            {/* Garis Vertikal */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2"></div>
            
            {/* Version 1.0 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full">
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 order-2 md:order-1">
                <div className="bg-cream p-6 rounded-3xl shadow-sm border border-gray-100 w-full hover:-translate-y-1 transition-transform text-left">
                  <span className="text-primary font-bold text-sm mb-2 block">Versi 1.0 (Sekarang)</span>
                  <h4 className="text-xl font-bold text-dark mb-4">Pondasi Pembelajaran</h4>
                  <ul className="space-y-2">
                    {["Kamus Dasar", "Kosakata Tematik", "Modul Tata Bahasa"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="hidden md:block md:w-1/2 order-3"></div>
            </div>

            {/* Version 2.0 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full">
              <div className="hidden md:block md:w-1/2 order-1"></div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-gold rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="w-full md:w-1/2 pl-12 md:pl-12 order-2 md:order-3">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 w-full hover:-translate-y-1 transition-transform text-left">
                  <span className="text-accent-gold font-bold text-sm mb-2 block">Versi 2.0</span>
                  <h4 className="text-xl font-bold text-dark mb-4">Interaktivitas & Audio</h4>
                  <ul className="space-y-2">
                    {["Audio Pelafalan Asli", "Kuis & Ujian Terpandu", "Permainan Edukasi"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <PlayCircle className="w-4 h-4 text-accent-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Version 3.0 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full">
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 order-2 md:order-1">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 w-full hover:-translate-y-1 transition-transform text-left">
                  <span className="text-gray-500 font-bold text-sm mb-2 block">Versi 3.0</span>
                  <h4 className="text-xl font-bold text-dark mb-4">Teknologi Masa Depan</h4>
                  <ul className="space-y-2">
                    {["AI Tutor Bahasa Aceh", "Pengenalan Suara (Speech Rec.)", "Forum Komunitas Belajar"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <BrainCircuit className="w-4 h-4 text-gray-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="hidden md:block md:w-1/2 order-3"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-dark mb-4">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "Apakah Tamarit gratis?", a: "Ya, Tamarit 100% gratis digunakan oleh siapa saja untuk mendukung pelestarian bahasa Aceh." },
              { q: "Apakah perlu membuat akun?", a: "Untuk fitur dasar tidak perlu. Namun, pembuatan akun disarankan agar sistem dapat menyimpan progres belajar dan poin permainan Anda." },
              { q: "Siapa yang dapat menggunakan Tamarit?", a: "Siapa saja! Mulai dari pelajar, mahasiswa, masyarakat umum, perantau, hingga wisatawan yang ingin belajar bahasa Aceh." },
              { q: "Apakah materi akan selalu diperbarui?", a: "Tentu. Kami secara berkala berkolaborasi dengan ahli bahasa dan tokoh adat untuk memperbarui dan memvalidasi materi." },
              { q: "Bagaimana cara memberikan saran atau materi tambahan?", a: "Anda dapat menggunakan formulir di bagian bawah halaman ini atau menghubungi kami via email dan media sosial." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  className="w-full text-left p-6 flex justify-between items-center font-bold text-dark hover:text-primary transition-colors"
                  onClick={() => toggleFaq(idx)}
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                <div className={`px-6 pb-6 text-gray-600 leading-relaxed text-sm ${openFaq === idx ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Hubungi Kami */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <h2 className="text-3xl font-serif font-bold text-dark">Hubungi Kami</h2>
            <p className="text-gray-500 mb-4">Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.</p>
            
            <a href="mailto:halo@tamarit.id" className="flex items-center gap-4 bg-cream p-5 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-red-100">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-dark group-hover:text-red-600">Email</p>
                <p className="text-sm text-gray-500">halo@tamarit.id</p>
              </div>
            </a>
            
            <a href="https://www.instagram.com/ikadubas.aceh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-cream p-5 rounded-2xl hover:bg-pink-50 hover:text-pink-600 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-pink-100">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-dark group-hover:text-pink-600">Instagram</p>
                <p className="text-sm text-gray-500">@ikadubas.aceh</p>
              </div>
            </a>
          </div>

          <div className="w-full lg:w-2/3">
            <Card hoverable={false} className="p-8 bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-[2.5rem]">
              <h3 className="font-serif text-2xl font-bold text-dark mb-6">Formulir Masukan</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Nama Lengkap"
                    placeholder="e.g. Cut Mutia"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Alamat Email"
                    placeholder="e.g. mutia@email.com"
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
                    <option value="Tanya Jawab">Tanya Jawab</option>
                    <option value="Kolaborasi">Kolaborasi</option>
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
                    placeholder="Tulis pesan lengkap Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-dark border-2 border-dark/10 rounded-aceh px-4 py-3 text-base outline-none transition-all duration-300 focus:border-accent-green focus:ring-4 focus:ring-accent-green/10 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="w-full mt-2 py-4 text-lg rounded-2xl"
                  leftIcon={<Send className="w-5 h-5" />}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>

                {/* Success/Error Notification */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <CheckCircle className="w-5 h-5 shrink-0 text-green-600" />
                    <p className="text-sm font-semibold">Pesan berhasil terkirim! Terima kasih atas masukan Anda.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <MessageCircle className="w-5 h-5 shrink-0 text-red-500" />
                    <p className="text-sm font-semibold">Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung.</p>
                  </div>
                )}
              </form>
            </Card>
          </div>

        </div>
      </section>

    </div>
  );
}
