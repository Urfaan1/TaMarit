"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { BungongJeumpa, PintoAceh } from "@/components/ui/Motifs";
import { RotateCcw, Clock, Target, Award, Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

import { soalSesi1, soalSesi2Mudah, soalSesi2Lanjutan } from "@/data/ukba";

import { useRouter } from "next/navigation";

export default function TesPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/tes");
  };



  return (
    <div className="w-full min-h-[70vh] bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none text-primary">
        <PintoAceh size={200} />
      </div>
      <div className="absolute top-40 right-10 opacity-5 pointer-events-none text-accent-gold">
        <BungongJeumpa size={150} />
      </div>

      {/* Visual Header */}
      <div className="relative pt-16 pb-8 px-6 text-center max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-primary/10 mb-6 relative">
          <Award className="w-8 h-8 text-primary" />
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-5 h-5 text-accent-gold animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 tracking-tight">
          Prediksi Kemahiran Berbahasa Aceh
        </h1>
        <p className="text-lg text-dark/60 max-w-2xl mx-auto leading-relaxed">
          Evaluasi kemampuan tata bahasa, kosakata, dan pemahaman kalimat bahasa Aceh secara menyeluruh untuk mengukur tingkat kemahiran Anda.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Card hoverable={false} className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-2 border-primary/10 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent-gold to-primary" />
              
              <div className="flex flex-col items-center text-center">
                <h3 className="font-serif text-3xl font-bold text-dark mb-6">
                  Mulai Prediksi Kemahiran
                </h3>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full border border-dark/5 shadow-sm">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-dark/80">Format UKBI</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full border border-dark/5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-dark/80">40 Pertanyaan Adaptif</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full border border-dark/5 shadow-sm">
                    <Clock className="w-4 h-4 text-accent-gold" />
                    <span className="text-sm font-semibold text-dark/80">Tidak Dibatasi Waktu</span>
                  </div>
                </div>

                <p className="text-base text-dark/70 mb-10 max-w-xl mx-auto leading-relaxed">
                  Tes ini dirancang menyerupai format UKBI yang khusus menguji kebahasaan Aceh secara umum. Hasil evaluasi beserta predikat kemahiran Anda akan ditampilkan setelah menyelesaikan seluruh pertanyaan.
                </p>

                <Button variant="primary" size="lg" className="w-full md:w-auto md:min-w-[280px] shadow-lg shadow-primary/20 hover:shadow-primary/30 group text-lg" onClick={handleStart}>
                  Mulai Ujian Sekarang
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
      </div>
    </div>
  );
}
