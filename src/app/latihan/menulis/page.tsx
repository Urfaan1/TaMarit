"use client";

import React, { useState, useRef, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, CheckCircle2, XCircle, Keyboard, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";
const SENTENCES_DATABASE = [
  { target: "Loen pajoh bu", translation: "Saya makan nasi" },
  { target: "Peue haba uroe nyoe?", translation: "Apa kabar hari ini?" },
  { target: "Gata jak u keude", translation: "Kamu pergi ke pasar" },
  { target: "Loen galak that keu gata", translation: "Saya sangat menyukaimu" },
  { target: "Jinoe loen teungoh meurunoe basa Aceh", translation: "Sekarang saya sedang belajar bahasa Aceh" },
  { target: "Uroe nyoe cuaca that jroh", translation: "Hari ini cuaca sangat bagus" },
  { target: "Singoh loen jak u banda", translation: "Besok saya pergi ke kota" },
  { target: "Peue nyang teungoh gata peubuet?", translation: "Apa yang sedang kamu lakukan?" },
  { target: "Neu piyoh siat", translation: "Silakan istirahat sebentar" },
  { target: "Bek tuwo pajoh bu", translation: "Jangan lupa makan nasi" },
  { target: "Tanyoe mandum syedara", translation: "Kita semua bersaudara" },
  { target: "Loen neuk woe u gampong", translation: "Saya ingin pulang ke kampung" }
];

function getRandomChallenges(count = 10) {
  const allSentences = [...SENTENCES_DATABASE];
  
  for (let i = allSentences.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allSentences[i], allSentences[j]] = [allSentences[j], allSentences[i]];
  }
  
  return allSentences.slice(0, count);
}

export default function MenulisPage() {
  const [challenges, setChallenges] = useState(() => getRandomChallenges());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [score, setScore] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const currentChallenge = challenges[currentIndex];
  const isCompleted = currentIndex >= challenges.length;

  useEffect(() => {
    // Fokuskan input saat ganti soal
    if (status === "idle" && !isCompleted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, status, isCompleted]);

  const handleCheck = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || status === "correct") return;

    // Normalisasi: hilangkan spasi berlebih dan abaikan huruf besar/kecil untuk kemudahan
    const normalizedInput = inputValue.trim().toLowerCase();
    const normalizedTarget = currentChallenge.target.trim().toLowerCase();

    if (normalizedInput === normalizedTarget) {
      setStatus("correct");
      setScore(prev => prev + 10);
    } else {
      setStatus("incorrect");
    }
  };

  const handleNext = () => {
    setInputValue("");
    setStatus("idle");
    setCurrentIndex(prev => prev + 1);
  };

  const handleReset = () => {
    setChallenges(getRandomChallenges());
    setCurrentIndex(0);
    setInputValue("");
    setStatus("idle");
    setScore(0);
  };

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Latihan Menulis"
        subtitle="Latih memori dan ketepatan ejaan Anda dengan mengetik ulang kata-kata dalam bahasa Aceh."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-2xl mx-auto px-6 pb-24">
        <div className="mb-6">
          <Link href="/#latihan" className="inline-flex items-center gap-2 text-sm font-bold text-dark/60 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Pusat Latihan
          </Link>
        </div>

        {!isCompleted ? (
          <Card hoverable={false} className="bg-white border border-dark/5 p-6 md:p-8">
            <div className="flex justify-end items-center mb-8 border-b border-dark/5 pb-4">
              <div className="text-sm font-bold text-dark/60">Skor: <span className="text-accent-gold">{score}</span></div>
            </div>

            <div className="text-center mb-8">
              <span className="text-xs font-bold text-dark/40 uppercase tracking-widest block mb-2">Ketik Kalimat Berikut:</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-3 select-none">
                {currentChallenge.target}
              </h2>
              <p className="text-sm text-dark/50 italic">Arti: "{currentChallenge.translation}"</p>
            </div>

            <form onSubmit={handleCheck} className="flex flex-col gap-5">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (status === "incorrect") setStatus("idle");
                  }}
                  disabled={status === "correct"}
                  placeholder="Ketik di sini..."
                  autoComplete="off"
                  spellCheck="false"
                  className={`w-full p-4 rounded-xl border-2 text-lg font-medium transition-all outline-none pr-12
                    ${status === "idle" ? "border-dark/10 focus:border-primary bg-white text-dark" : ""}
                    ${status === "correct" ? "border-accent-green bg-accent-green/5 text-accent-green" : ""}
                    ${status === "incorrect" ? "border-red-400 bg-red-50 text-red-600" : ""}
                  `}
                />
                
                {/* Ikon status di dalam input */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {status === "idle" && <Keyboard className="w-5 h-5 text-dark/20" />}
                  {status === "correct" && <CheckCircle2 className="w-6 h-6 text-accent-green animate-scale-up" />}
                  {status === "incorrect" && <XCircle className="w-6 h-6 text-red-500 animate-scale-up" />}
                </div>
              </div>

              {/* Pesan Feedback */}
              {status === "correct" && (
                <div className="text-center text-sm font-bold text-accent-green animate-fade-in">
                  Tepat sekali! Ejaan Anda sempurna.
                </div>
              )}
              {status === "incorrect" && (
                <div className="text-center text-sm font-bold text-red-500 animate-fade-in">
                  Oops, ejaannya kurang tepat. Coba perhatikan huruf besar/kecil atau spasinya.
                </div>
              )}

              <div className="flex gap-3 mt-2">
                {status === "idle" ? (
                  <>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full py-4 text-base"
                      disabled={!inputValue.trim()}
                    >
                      Periksa Jawaban
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full py-4 text-base"
                      onClick={handleNext}
                    >
                      Lewati
                    </Button>
                  </>
                ) : status === "incorrect" ? (
                  <>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full py-4 text-base border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => {
                        setStatus("idle");
                        if (inputRef.current) setTimeout(() => inputRef.current?.focus(), 10);
                      }}
                    >
                      Coba Lagi
                    </Button>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      className="w-full py-4 text-base text-dark/50"
                      onClick={handleNext}
                    >
                      Lewati Saja
                    </Button>
                  </>
                ) : (
                  <Button 
                    type="button" 
                    variant="primary" 
                    className="w-full py-4 text-base bg-accent-green hover:bg-green-600"
                    onClick={handleNext}
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Lanjut Soal Berikutnya
                  </Button>
                )}
              </div>
            </form>
          </Card>
        ) : (
          <Card hoverable={false} className="bg-white border border-dark/5 p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-4">Latihan Selesai!</h2>
            <p className="text-dark/70 mb-6">
              Luar biasa! Anda telah menyelesaikan latihan menulis. 
              Skor akhir Anda: <strong className="text-accent-gold text-xl">{score}</strong> dari {challenges.length * 10}.
            </p>
            <Button onClick={handleReset} variant="primary" leftIcon={<RotateCcw className="w-5 h-5" />}>
              Mainkan Ulang
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
