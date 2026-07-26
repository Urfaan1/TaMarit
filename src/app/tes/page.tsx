"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { BungongJeumpa } from "@/components/ui/Motifs";
import { RotateCcw } from "lucide-react";

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
    <div className="w-full min-h-[70vh] bg-cream">
      {/* Visual Header */}
      <Section
        background="cream"
        title="Uji Kemahiran Berbahasa Aceh (UKBA)"
        subtitle="Evaluasi kemampuan tata bahasa, kosakata, dan pemahaman kalimat bahasa Aceh secara menyeluruh."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        {!quizStarted ? (
          /* Selection Screen */
          <Card hoverable={false} withMotif motifVariant="pinto" headerAccent="primary" className="p-8 md:p-10">
            <h3 className="font-serif text-2xl font-bold text-dark mb-4 text-center">
              Mulai Ujian Kemahiran
            </h3>
            <p className="text-sm text-dark/70 text-center mb-8 max-w-md mx-auto leading-relaxed">
              Tes ini dirancang menyerupai format UKBI yang khusus menguji kebahasaan Aceh secara umum. Terdapat 20 pertanyaan pilihan ganda terkait ejaan, kosakata, dan tata bahasa. Hasil evaluasi akan ditampilkan setelah Anda menyelesaikan seluruh pertanyaan.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button variant="primary" size="lg" className="w-64" onClick={handleStart}>
                Mulai Ujian
              </Button>
            </div>
          </Card>
        ) : (
          /* Quiz Engine Screen */
          <div className="flex flex-col gap-6">
            <Card hoverable={false} className="p-6 md:p-8 bg-white border border-dark/5">
              {/* Quiz Header Info */}
              <div className="flex justify-between items-center mb-6">
                <Badge variant="primary">
                  Uji Kemahiran
                </Badge>
                <span className="text-sm font-semibold text-dark/40 font-mono">
                  Pertanyaan {currentIdx + 1} dari {totalQuestions}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <Progress value={progressVal} variant="green" />
              </div>

              {/* Question Text */}
              <h4 className="text-lg md:text-xl font-serif font-bold text-dark mb-6 leading-relaxed">
                {ukbaQuestions[currentIdx].text}
              </h4>

              {/* Options list */}
              <div className="flex flex-col gap-3.5 mb-8">
                {ukbaQuestions[currentIdx].options.map((option, optIdx) => {
                  const isSelected = answers[currentIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-aceh border-2 font-semibold text-base transition-all duration-200 outline-none
                        ${
                          isSelected
                            ? "bg-primary/5 border-primary text-primary shadow-soft"
                            : "bg-[#FAF6EE]/30 border-dark/5 hover:border-dark/20 text-dark/70 hover:bg-[#FAF6EE]/50"
                        }
                      `}
                    >
                      <span className="inline-block w-6 text-xs text-center font-bold text-dark/30 mr-2 uppercase border border-dark/10 rounded-full py-0.5 px-1 bg-white">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex justify-between items-center border-t border-dark/5 pt-6">
                <Button
                  variant="ghost"
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="font-bold text-dark/50"
                >
                  Kembali
                </Button>

                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={answers[currentIdx] === undefined}
                >
                  {currentIdx === totalQuestions - 1 ? "Selesaikan Ujian" : "Selanjutnya"}
                </Button>
              </div>
            </Card>

            <div className="flex justify-center">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Batal dan Reset
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Result Custom Modal */}
      <Modal
        isOpen={showResultModal}
        onClose={handleReset}
        title="Ujian Selesai"
      >
        <div className="flex flex-col items-center text-center gap-5 p-2">
          <div className="text-accent-gold">
            <BungongJeumpa size={72} strokeWidth={1.5} className="animate-spin-slow" />
          </div>

          <h4 className="text-2xl font-serif font-bold text-dark mt-2">
            Skor Ujian: {score} / 100
          </h4>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-xs text-dark/40 font-bold uppercase tracking-wider">Predikat</span>
            <Badge variant={score >= 70 ? "green" : "primary"} size="md">
              {getBadgeName()}
            </Badge>
          </div>

          <p className="text-sm text-dark/70 leading-relaxed max-w-sm my-2">
            {score >= 90
              ? "Luar biasa! Penguasaan bahasa Aceh Anda berada di tingkat sangat mahir dan sempurna. Pertahankan kemampuan Anda!"
              : score >= 70
              ? "Bagus sekali! Anda memiliki kemampuan bahasa Aceh yang mumpuni. Teruskan penggunaan bahasa ini dalam kehidupan sehari-hari."
              : score >= 50
              ? "Cukup baik. Pemahaman kebahasaan Anda memadai, tetapi masih banyak kosakata dan struktur kalimat yang perlu dipelajari lebih lanjut."
              : "Tetap semangat! Mari baca kembali khazanah kosakata dan tata bahasa Aceh untuk meningkatkan kemahiran Anda."}
          </p>

          <div className="flex gap-3 w-full mt-4">
            <Button variant="outline" className="flex-1" onClick={handleReset}>
              Kembali
            </Button>
            <Button variant="primary" className="flex-1" onClick={handleStart}>
              Ulangi Ujian
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
