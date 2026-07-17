"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Dropdown, DropdownItem } from "@/components/ui/Dropdown";
import { Progress } from "@/components/ui/Progress";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { PintoAceh, BungongJeumpa } from "@/components/ui/Motifs";
import { GraduationCap, BookOpen, Anchor, RotateCcw, CheckCircle, AlertTriangle } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const quizData: Record<string, { title: string; desc: string; questions: Question[] }> = {
  aneuk: {
    title: "Aneuk (Dasar)",
    desc: "Tes kosakata dasar, salam harian, dan tata bahasa sederhana bahasa Aceh.",
    questions: [
      {
        id: 1,
        text: 'Apa arti kata "Lôn" dalam bahasa Aceh sehari-hari?',
        options: ["Kamu", "Saya (Sopan)", "Dia", "Mereka"],
        correctAnswer: 1,
      },
      {
        id: 2,
        text: 'Bagaimana cara menanyakan kabar ("Apa kabar?") dalam bahasa Aceh?',
        options: ["Pajan gata jak?", "Peue haba?", "Peue na bu?", "Konda kundi?"],
        correctAnswer: 1,
      },
      {
        id: 3,
        text: 'Apa bahasa Aceh untuk kata dasar kerja "Makan"?',
        options: ["Jak", "Eh", "Pajoh", "Jih"],
        correctAnswer: 2,
      },
      {
        id: 4,
        text: "Apa sebutan untuk rumah panggung tradisional adat Aceh?",
        options: ["Rumoh Aceh", "Rumah Gadang", "Krong Pade", "Jengki"],
        correctAnswer: 0,
      },
      {
        id: 5,
        text: 'Apa makna kata ganti orang kedua "Gata"?',
        options: ["Saya", "Kamu (Sopan/Setara)", "Mereka", "Kakek"],
        correctAnswer: 1,
      },
    ],
  },
  remaja: {
    title: "Remaja (Menengah)",
    desc: "Tes kearifan sastra lisan, ungkapan Maja, dan sejarah perhiasan tradisional.",
    questions: [
      {
        id: 1,
        text: '"Hadih Maja" merupakan warisan kebudayaan Aceh berbentuk sastra...',
        options: ["Novel sejarah", "Tarian upacara", "Pepatah/peribahasa", "Lagu perjuangan"],
        correctAnswer: 2,
      },
      {
        id: 2,
        text: 'Motif hiasan gerbang pintu keraton "Pinto Aceh" diciptakan pertama kali pada tahun...',
        options: ["1935", "1910", "1955", "1980"],
        correctAnswer: 0,
      },
      {
        id: 3,
        text: 'Apa peranan "Pawang" dalam tatanan maritim tradisional masyarakat nelayan Aceh?',
        options: ["Pemimpin ritual adat gunung", "Pemimpin kapal pelayaran & pembaca bintang", "Penjaga lumbung padi", "Pembuat kain tenun"],
        correctAnswer: 1,
      },
      {
        id: 4,
        text: "Tari heroik delapan pria yang menepuk dada dan pinggul secara berirama cepat adalah tari...",
        options: ["Tari Saman", "Tari Seudati", "Tari Piring", "Tari Ranup Lampuan"],
        correctAnswer: 1,
      },
      {
        id: 5,
        text: 'Kata sandang kehormatan "Po" di depan nama tokoh sejarah melambangkan...',
        options: ["Rakyat jelata", "Musuh kesultanan", "Penghormatan tinggi", "Nama marga"],
        correctAnswer: 2,
      },
    ],
  },
  tokoh: {
    title: "Tokoh (Mahir)",
    desc: "Uji pemahaman tentang sastra tingkat tinggi, teks Hikayat klasik, dan hukum adat kebudayaan.",
    questions: [
      {
        id: 1,
        text: "Karya sastra heroik kepahlawanan yang dibacakan berirama untuk memicu semangat juang rakyat Aceh melawan penjajah adalah...",
        options: ["Hikayat Malem Diwa", "Hikayat Prang Sabi", "Hadih Maja", "Kanun Putroe Phang"],
        correctAnswer: 1,
      },
      {
        id: 2,
        text: "Lembaga peradilan adat kelautan yang mengatur pembagian hasil laut dan penyelesaian konflik nelayan dipimpin oleh...",
        options: ["Panglima Laôt", "Bentara Reusam", "Keuchik", "Imum Mukim"],
        correctAnswer: 0,
      },
      {
        id: 3,
        text: "Benda cagar budaya berupa tempat penyimpanan padi berukuran besar di samping Rumoh Aceh dinamakan...",
        options: ["Jengki", "Krong Padé", "Reudeup", "Pinto Khop"],
        correctAnswer: 1,
      },
      {
        id: 4,
        text: "Arsitektur Rumoh Aceh dibangun menghadap ke arah utara-selatan dengan tujuan utama...",
        options: ["Menghadap ke arah hembusan angin laut", "Mempermudah penentuan arah kiblat & mengurangi tekanan angin barat-timur", "Mengikuti pola jalan kerajaan", "Menghindari pohon besar"],
        correctAnswer: 1,
      },
      {
        id: 5,
        text: 'Kata "Peudeung" yang disematkan dalam ungkapan adat Aceh melambangkan simbol...',
        options: ["Kelembutan bersikap", "Kedaulatan hukum dan keberanian menjaga tanah air", "Kemakmuran hasil panen", "Pernikahan agung"],
        correctAnswer: 1,
      },
    ],
  },
};

export default function TesPage() {
  const [level, setLevel] = useState("aneuk");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [score, setScore] = useState(0);

  const levelItems: DropdownItem[] = [
    { value: "aneuk", label: "Aneuk (Dasar)", icon: <GraduationCap className="w-4 h-4" /> },
    { value: "remaja", label: "Remaja (Menengah)", icon: <BookOpen className="w-4 h-4" /> },
    { value: "tokoh", label: "Tokoh (Mahir)", icon: <Anchor className="w-4 h-4" /> },
  ];

  const currentQuiz = quizData[level];
  const totalQuestions = currentQuiz.questions.length;
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
      // Calculate score
      let correctCount = 0;
      currentQuiz.questions.forEach((q, idx) => {
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
    if (score === 100) return "Teuku / Cut Nyak (Sempurna)";
    if (score >= 80) return "Pembelajar Bijak";
    if (score >= 60) return "Rakan Pemula";
    return "Tetap Semangat";
  };

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      {/* Visual Header */}
      <Section
        background="cream"
        title="Tes Kemahiran Bahasa & Budaya"
        subtitle="Uji pemahaman Anda tentang warisan tradisi, sastra lisan, dan kosa kata bahasa Aceh secara bertahap."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        {!quizStarted ? (
          /* Selection Screen */
          <Card hoverable={false} withMotif motifVariant="pinto" headerAccent="primary" className="p-8 md:p-10">
            <h3 className="font-serif text-2xl font-bold text-dark mb-4 text-center">
              Pilih Tingkat Kemahiran Anda
            </h3>
            <p className="text-sm text-dark/60 text-center mb-8 max-w-md mx-auto">
              Tiap tingkatan memiliki 5 pertanyaan pilihan ganda terstruktur untuk mengevaluasi kompetensi Anda.
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col gap-2 w-64">
                <span className="text-xs font-bold text-dark/50 pl-1 uppercase tracking-wider">Tingkatan</span>
                <Dropdown items={levelItems} selectedValue={level} onChange={(val) => setLevel(val)} />
              </div>

              {/* Selected Level Summary Card */}
              <div className="w-full bg-[#FAF6EE] p-5 rounded-aceh border border-dark/5 text-center max-w-md mt-2">
                <Badge variant="gold" className="mb-2">
                  {currentQuiz.title}
                </Badge>
                <p className="text-sm text-dark/75 leading-relaxed">
                  {currentQuiz.desc}
                </p>
              </div>

              <Button variant="primary" size="lg" className="w-64 mt-4" onClick={handleStart}>
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
                  {currentQuiz.title}
                </Badge>
                <span className="text-sm font-semibold text-dark/40 font-mono">
                  Pertanyaan {currentIdx + 1} dari {totalQuestions}
                </span>
              </div>

              {/* Maritime Progress Bar */}
              <div className="mb-8">
                <Progress value={progressVal} variant="green" />
              </div>

              {/* Question Text */}
              <h4 className="text-lg md:text-xl font-serif font-bold text-dark mb-6 leading-relaxed">
                {currentQuiz.questions[currentIdx].text}
              </h4>

              {/* Options list */}
              <div className="flex flex-col gap-3.5 mb-8">
                {currentQuiz.questions[currentIdx].options.map((option, optIdx) => {
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
                  {currentIdx === totalQuestions - 1 ? "Selesaikan Tes" : "Selanjutnya"}
                </Button>
              </div>
            </Card>

            <div className="flex justify-center">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Ganti Level / Reset
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
            Skor Ujian: {score}/100
          </h4>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-xs text-dark/40 font-bold uppercase tracking-wider">Predikat</span>
            <Badge variant={score >= 60 ? "green" : "primary"} size="md">
              {getBadgeName()}
            </Badge>
          </div>

          <p className="text-sm text-dark/70 leading-relaxed max-w-sm my-2">
            {score === 100
              ? "Luar biasa! Pemahaman Anda tentang bahasa dan tata budaya Aceh sangat mengagumkan. Anda layak menyandang predikat tokoh!"
              : score >= 60
              ? "Kerja bagus! Anda memiliki pemahaman dasar yang kuat. Teruskan latihan untuk menguasai sastra lisan tingkat lanjut."
              : "Jangan berkecil hati. Mari buka kembali modul Latihan dan baca khazanah budaya di halaman Sastra untuk belajar lebih lanjut!"}
          </p>

          <div className="flex gap-3 w-full mt-4">
            <Button variant="outline" className="flex-1" onClick={handleReset}>
              Kembali
            </Button>
            <Button variant="primary" className="flex-1" onClick={handleStart}>
              Ulangi Tes
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
