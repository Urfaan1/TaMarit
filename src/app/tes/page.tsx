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

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const ukbaQuestions: Question[] = [
  {
    id: 1,
    text: "Kata ganti orang pertama tunggal yang paling sopan (halus) dalam bahasa Aceh adalah...",
    options: ["Ulôn", "Keé", "Gata", "Jih"],
    correctAnswer: 0,
  },
  {
    id: 2,
    text: 'Kata tanya yang tepat untuk menanyakan tempat ("Di mana") dalam bahasa Aceh adalah...',
    options: ["Peue", "Pajan", "Pat", "Soe"],
    correctAnswer: 2,
  },
  {
    id: 3,
    text: 'Apa bahasa Aceh dari kata kerja dasar "Makan"?',
    options: ["Pajôh", "Jak", "Eh", "Duk"],
    correctAnswer: 0,
  },
  {
    id: 4,
    text: 'Sinonim dari kata "Sabé" dalam bahasa Aceh adalah...',
    options: ["Kadang-kadang", "Selalu/Terus-menerus", "Tidak pernah", "Jarang"],
    correctAnswer: 1,
  },
  {
    id: 5,
    text: 'Lawan kata (antonim) dari "Rayek" (besar) adalah...',
    options: ["Panyang", "Cut/Ubeut", "Manyang", "Golom"],
    correctAnswer: 1,
  },
  {
    id: 6,
    text: 'Kata yang tepat untuk menyatakan keterangan waktu "Besok" adalah...',
    options: ["Bungoh", "Singoh", "Baroe", "Uroe nyoe"],
    correctAnswer: 1,
  },
  {
    id: 7,
    text: 'Apa terjemahan bahasa Indonesia dari kalimat: "Lôn meuneuk jak u keudè"?',
    options: ["Saya sedang di pasar", "Saya ingin pergi ke pasar", "Saya baru pulang dari pasar", "Saya tidak suka ke pasar"],
    correctAnswer: 1,
  },
  {
    id: 8,
    text: "Sebutan untuk kakak perempuan kandung atau yang dituakan dalam kekerabatan Aceh adalah...",
    options: ["Cut Bang", "Adoe", "Cut Kak / Po Cut", "Nyak"],
    correctAnswer: 2,
  },
  {
    id: 9,
    text: 'Kata "Mata" dalam bahasa Aceh berarti sama, lalu apa sebutan untuk "Telinga"?',
    options: ["Geulinyueng", "Hidung", "Jaroe", "Gaki"],
    correctAnswer: 0,
  },
  {
    id: 10,
    text: 'Kata untuk menyebut bilangan "Delapan" dalam bahasa Aceh disebut...',
    options: ["Nam", "Tujôh", "Lapan", "Sikureueng"],
    correctAnswer: 2,
  },
  {
    id: 11,
    text: 'Untuk menyatakan penolakan "Tidak mau" secara tegas dalam bahasa Aceh, kata yang tepat adalah...',
    options: ["Hana", "H'an / H'an tém", "Bèk", "Trok"],
    correctAnswer: 1,
  },
  {
    id: 12,
    text: 'Penulisan dan penyebutan kata "Air" dalam bahasa Aceh adalah...',
    options: ["Ie", "Aie", "Iye", "Ee"],
    correctAnswer: 0,
  },
  {
    id: 13,
    text: 'Kata "Jangan" dalam membentuk kalimat larangan bahasa Aceh menggunakan kata...',
    options: ["Han", "Bèk", "Hana", "Kon"],
    correctAnswer: 1,
  },
  {
    id: 14,
    text: 'Makna yang tepat untuk sapaan "Peue haba gata uroe nyoe?" adalah...',
    options: ["Apa kamu sakit hari ini?", "Apa kabar kamu hari ini?", "Ke mana kamu pergi hari ini?", "Siapa nama kamu?"],
    correctAnswer: 1,
  },
  {
    id: 15,
    text: 'Warna "Merah" dalam bahasa Aceh disebut...',
    options: ["Mirah", "Itam", "Putéh", "Kuning"],
    correctAnswer: 0,
  },
  {
    id: 16,
    text: 'Kata sifat "Mangat" paling lazim digunakan untuk mendeskripsikan...',
    options: ["Rasa makanan yang lezat", "Pakaian yang indah", "Cuaca yang panas", "Orang yang baik"],
    correctAnswer: 0,
  },
  {
    id: 17,
    text: 'Kata ganti penunjuk "Itu" (agak jauh) dalam bahasa Aceh adalah...',
    options: ["Nyoe", "Nyan", "Jéh", "Sinoe"],
    correctAnswer: 1,
  },
  {
    id: 18,
    text: '"Buku nyan ka lôn baca". Penanda "ka" pada kalimat ini menunjukkan...',
    options: ["Pekerjaan sedang dilakukan (sedang)", "Pekerjaan sudah selesai dilakukan (sudah)", "Pekerjaan belum dilakukan (belum)", "Pekerjaan tidak bisa dilakukan (tidak)"],
    correctAnswer: 1,
  },
  {
    id: 19,
    text: 'Kata "Manok" dalam bahasa Aceh merujuk pada hewan...',
    options: ["Bebek", "Kambing", "Ayam", "Burung"],
    correctAnswer: 2,
  },
  {
    id: 20,
    text: 'Kata hubung "Dan" dalam percakapan bahasa Aceh sering disingkat/disebut...',
    options: ["Ngôn", "Atawa", "Tapi", "Sebab"],
    correctAnswer: 0,
  },
];

export default function TesPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = ukbaQuestions.length;
  const progressVal = quizStarted ? Math.round(((currentIdx + 1) / totalQuestions) * 100) : 0;

  const handleStart = () => {
    setAnswers({});
    setCurrentIdx(0);
    setQuizStarted(true);
  };

  const handleSelectOption = (optIdx: number) => {
    setAnswers({
      ...answers,
      [currentIdx]: optIdx,
    });
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      let correctCount = 0;
      ukbaQuestions.forEach((q, idx) => {
        if (answers[idx] === q.correctAnswer) {
          correctCount++;
        }
      });
      const finalScore = Math.round((correctCount / totalQuestions) * 100);
      setScore(finalScore);
      setShowResultModal(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleReset = () => {
    setQuizStarted(false);
    setShowResultModal(false);
    setAnswers({});
    setCurrentIdx(0);
  };

  const getBadgeName = () => {
    if (score >= 90) return "Sangat Mahir (Teuku/Cut Nyak)";
    if (score >= 70) return "Mahir";
    if (score >= 50) return "Semenjana (Cukup)";
    return "Terbatas (Pemula)";
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
          Uji Kemahiran Berbahasa Aceh (UKBA)
        </h1>
        <p className="text-lg text-dark/60 max-w-2xl mx-auto leading-relaxed">
          Evaluasi kemampuan tata bahasa, kosakata, dan pemahaman kalimat bahasa Aceh secara menyeluruh untuk mengukur tingkat kemahiran Anda.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        {!quizStarted ? (
          /* Selection Screen */
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Card hoverable={false} className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-2 border-primary/10 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent-gold to-primary" />
              
              <div className="flex flex-col items-center text-center">
                <h3 className="font-serif text-3xl font-bold text-dark mb-6">
                  Mulai Ujian Kemahiran
                </h3>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full border border-dark/5 shadow-sm">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-dark/80">Format UKBI</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full border border-dark/5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-dark/80">20 Pertanyaan</span>
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
        ) : (
          /* Quiz Engine Screen */
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            <Card hoverable={false} className="p-6 md:p-10 bg-white border border-dark/5 shadow-lg relative overflow-hidden">
              {/* Quiz Header Info */}
              <div className="flex justify-between items-center mb-8 relative z-10">
                <Badge variant="primary" className="shadow-sm">
                  Soal {currentIdx + 1} / {totalQuestions}
                </Badge>
                <div className="text-sm font-bold text-dark/50 bg-cream px-4 py-1.5 rounded-full border border-dark/5">
                  UKBA
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-10 relative z-10">
                <div className="flex justify-between text-xs font-bold text-dark/40 mb-2">
                  <span>Progres Ujian</span>
                  <span>{progressVal}%</span>
                </div>
                <Progress value={progressVal} variant="primary" />
              </div>

              {/* Animated Question Block */}
              <div key={currentIdx} className="animate-in fade-in slide-in-from-right-4 duration-500 relative z-10">
                <h4 className="text-xl md:text-2xl font-serif font-bold text-dark mb-8 leading-relaxed">
                  {ukbaQuestions[currentIdx].text}
                </h4>

                {/* Options list */}
                <div className="flex flex-col gap-4 mb-10">
                  {ukbaQuestions[currentIdx].options.map((option, optIdx) => {
                    const isSelected = answers[currentIdx] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`group flex items-center w-full text-left p-4 md:p-5 rounded-2xl border-2 font-semibold text-base transition-all duration-300 outline-none
                          ${
                            isSelected
                              ? "bg-primary/[0.03] border-primary text-primary shadow-md transform scale-[1.01]"
                              : "bg-white border-dark/10 hover:border-primary/40 text-dark/70 hover:bg-cream/50 hover:shadow-sm"
                          }
                        `}
                      >
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 mr-4 transition-colors shrink-0
                          ${isSelected ? "border-primary bg-primary text-white" : "border-dark/20 bg-cream text-dark/40 group-hover:border-primary/40"}
                        `}>
                          {isSelected ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <span className="text-xs font-bold uppercase">{String.fromCharCode(65 + optIdx)}</span>
                          )}
                        </div>
                        <span className="flex-1 text-lg">{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-8 border-t border-dark/5 relative z-10">
                <Button
                  variant="ghost"
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="font-bold text-dark/50 w-full md:w-auto"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Kembali
                </Button>

                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={answers[currentIdx] === undefined}
                  className="w-full md:w-auto min-w-[200px]"
                >
                  {currentIdx === totalQuestions - 1 ? "Selesaikan Ujian" : "Selanjutnya"}
                  {currentIdx !== totalQuestions - 1 && <ChevronRight className="w-4 h-4 ml-1" />}
                </Button>
              </div>
            </Card>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-sm font-bold text-dark/40 hover:text-red-500 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Batalkan Ujian
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Result Custom Modal */}
      <Modal
        isOpen={showResultModal}
        onClose={handleReset}
        title="Hasil Evaluasi UKBA"
      >
        <div className="flex flex-col items-center text-center p-4">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-accent-gold/20 animate-ping rounded-full" />
            <div className="bg-white p-4 rounded-full shadow-lg relative z-10 border-4 border-cream">
              <Award className="w-16 h-16 text-accent-gold" />
            </div>
          </div>

          <h4 className="text-3xl font-serif font-bold text-dark mb-2">
            Skor Anda: {score}
          </h4>

          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-xs text-dark/40 font-bold uppercase tracking-wider">Predikat Kemahiran</span>
            <Badge variant={score >= 70 ? "green" : "primary"} size="lg" className="text-sm px-6 py-2 shadow-sm">
              {getBadgeName()}
            </Badge>
          </div>

          <p className="text-base text-dark/70 leading-relaxed max-w-md mb-8 p-4 bg-cream/50 rounded-2xl border border-dark/5">
            {score >= 90
              ? "Luar biasa! Penguasaan bahasa Aceh Anda berada di tingkat sangat mahir dan sempurna. Pertahankan kemampuan luar biasa ini!"
              : score >= 70
              ? "Bagus sekali! Anda memiliki kemampuan bahasa Aceh yang mumpuni. Terus berlatih untuk mencapai tingkat sempurna."
              : score >= 50
              ? "Cukup baik. Pemahaman Anda memadai, tetapi masih banyak kosakata dan struktur kalimat yang perlu dipelajari lebih mendalam."
              : "Tetap semangat! Mari baca kembali khazanah kosakata dan tata bahasa Aceh untuk meningkatkan kemahiran Anda."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button variant="outline" className="flex-1" onClick={handleReset}>
              Tutup
            </Button>
            <Button variant="primary" className="flex-1" onClick={handleStart}>
              Ulangi Ujian <RotateCcw className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
