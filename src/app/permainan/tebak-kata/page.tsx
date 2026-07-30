"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Progress } from "@/components/ui/Progress";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, Trophy, HelpCircle } from "lucide-react";

type WordPair = { id: number; indo: string; aceh: string; hint: string };

const WORDS_DATABASE: WordPair[] = [
  { id: 1, indo: "Air", aceh: "Ie", hint: "Benda cair yang biasa diminum" },
  { id: 2, indo: "Rumah", aceh: "Rumoh", hint: "Tempat tinggal" },
  { id: 3, indo: "Tidur", aceh: "Eh", hint: "Istirahat sambil memejamkan mata" },
  { id: 4, indo: "Minum", aceh: "Jieb", hint: "Aktivitas memasukkan cairan ke mulut" },
  { id: 5, indo: "Cantik", aceh: "Tari", hint: "Sifat indah dipandang" },
  { id: 6, indo: "Bagus", aceh: "Get", hint: "Sesuatu yang baik" },
  { id: 7, indo: "Saya", aceh: "Lon", hint: "Kata ganti orang pertama tunggal" },
  { id: 8, indo: "Makan", aceh: "Pajoh", hint: "Aktivitas mengunyah dan menelan" },
  { id: 9, indo: "Besar", aceh: "Raya", hint: "Lawan kata kecil" },
  { id: 10, indo: "Kecil", aceh: "Ubit", hint: "Lawan kata besar" },
  { id: 11, indo: "Kepala", aceh: "Ulee", hint: "Bagian tubuh paling atas" },
  { id: 12, indo: "Mata", aceh: "Mata", hint: "Indera penglihatan (Sama dengan bahasa Indonesia)" },
  { id: 13, indo: "Kaki", aceh: "Gaki", hint: "Anggota tubuh untuk berjalan" },
  { id: 14, indo: "Bapak", aceh: "Yah", hint: "Orang tua laki-laki" },
  { id: 15, indo: "Ibu", aceh: "Mak", hint: "Orang tua perempuan" },
];

type QuestionType = {
  id: number;
  wordToTranslate: string;
  correctAnswer: string;
  direction: "indo-to-aceh" | "aceh-to-indo";
  hint: string;
};

export default function TebakKataPage() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [gameState, setGameState] = useState<"playing" | "feedback" | "finished">("playing");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Select 10 random words from the database
    const shuffledWords = [...WORDS_DATABASE].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    const generatedQuestions: QuestionType[] = shuffledWords.map((word) => {
      // 50% chance for Indo->Aceh or Aceh->Indo
      const isIndoToAceh = Math.random() > 0.5;
      return {
        id: word.id,
        wordToTranslate: isIndoToAceh ? word.indo : word.aceh,
        correctAnswer: isIndoToAceh ? word.aceh : word.indo,
        direction: isIndoToAceh ? "indo-to-aceh" : "aceh-to-indo",
        hint: word.hint,
      };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setUserInput("");
    setGameState("playing");
    setIsCorrect(null);
    setShowHint(false);
  };

  const currentQuestion = questions[currentIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const correct = userInput.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 10);
    }
    setGameState("feedback");
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserInput("");
      setGameState("playing");
      setIsCorrect(null);
      setShowHint(false);
    } else {
      setGameState("finished");
    }
  };

  const progressValue = ((currentIndex) / questions.length) * 100;

  if (questions.length === 0) return null; // Loading state

  return (
    <div className="w-full min-h-[80vh] bg-cream font-sans">
      <Section
        background="cream"
        title="Tebak Kata"
        subtitle="Uji seberapa luas perbendaharaan kata Anda."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-3xl mx-auto px-6 pb-24">
        {/* Header navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/permainan">
            <Button variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Kembali
            </Button>
          </Link>
          <div className="text-sm font-semibold text-dark/70 font-mono">
            Skor: {score}
          </div>
        </div>

        {gameState !== "finished" && (
          <div className="mb-8">
            <Progress 
              value={progressValue} 
              variant="gold" 
              label={`Pertanyaan ${currentIndex + 1} dari ${questions.length}`} 
            />
          </div>
        )}

        {/* Game Area */}
        {gameState === "finished" ? (
          <Card className="p-8 text-center bg-white border border-accent-gold/20 flex flex-col items-center">
            <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
              <Trophy className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-4">Permainan Selesai!</h2>
            <p className="text-lg text-dark/70 mb-8">
              Luar biasa! Skor akhir Anda adalah <strong className="text-accent-gold text-2xl">{score}</strong> dari {questions.length * 10}.
            </p>
            <div className="flex gap-4">
              <Link href="/permainan">
                <Button variant="outline">Menu Permainan</Button>
              </Link>
              <Button variant="gold" onClick={startNewGame} leftIcon={<RefreshCw className="w-4 h-4" />}>
                Main Lagi
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-8 bg-white border border-dark/5">
            <div className="text-center mb-8">
              <h3 className="text-sm uppercase tracking-wider text-accent-gold font-bold mb-2">
                {currentQuestion.direction === "indo-to-aceh" 
                  ? "Terjemahkan ke Bahasa Aceh" 
                  : "Terjemahkan ke Bahasa Indonesia"}
              </h3>
              <p className="text-4xl font-serif font-bold text-dark my-6">
                "{currentQuestion.wordToTranslate}"
              </p>
            </div>

            {gameState === "playing" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="relative">
                  <Input
                    autoFocus
                    placeholder="Ketik jawaban Anda..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="text-center text-xl font-semibold"
                  />
                </div>
                
                {showHint && (
                  <div className="bg-accent-gold/10 p-4 rounded-xl border border-accent-gold/20 flex items-start gap-3 text-dark/80">
                    <HelpCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>Petunjuk:</strong> Huruf awalan jawabannya adalah "<strong>{currentQuestion.correctAnswer.charAt(0).toUpperCase()}</strong>"</p>
                  </div>
                )}

                <div className="flex justify-between items-center mt-2">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm"
                    className="text-dark/50 hover:text-accent-gold"
                    onClick={() => setShowHint(true)}
                    disabled={showHint}
                  >
                    Butuh petunjuk?
                  </Button>
                  <Button 
                    type="submit" 
                    variant="gold" 
                    disabled={!userInput.trim()}
                  >
                    Jawab
                  </Button>
                </div>
              </form>
            )}

            {gameState === "feedback" && (
              <div className="flex flex-col items-center gap-6 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col items-center gap-3">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-16 h-16 text-accent-green" />
                      <h3 className="text-2xl font-bold text-accent-green">Benar Sekali!</h3>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-16 h-16 text-primary" />
                      <h3 className="text-2xl font-bold text-primary">Kurang Tepat</h3>
                    </>
                  )}
                  <div className="text-center mt-2 p-4 bg-gray-50 rounded-xl border border-gray-100 w-full">
                    <p className="text-dark/70 text-sm mb-1">Jawaban yang benar:</p>
                    <p className="text-xl font-bold text-dark">{currentQuestion.correctAnswer}</p>
                  </div>
                </div>
                <Button variant={isCorrect ? "green" : "primary"} className="w-full" onClick={handleNext}>
                  {currentIndex < questions.length - 1 ? "Lanjut ke Pertanyaan Berikutnya" : "Lihat Hasil Akhir"}
                </Button>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
