"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Progress } from "@/components/ui/Progress";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, Trophy, HelpCircle } from "lucide-react";

type ImageQuiz = { id: number; imageUrl: string; correctAnswer: string; hint: string };

const IMAGE_DATABASE: ImageQuiz[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800", correctAnswer: "Rumoh", hint: "Tempat tinggal / Rumah" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800", correctAnswer: "Kupi", hint: "Minuman hitam berkafein / Kopi" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1490750967868-88cb44cb2753?auto=format&fit=crop&q=80&w=800", correctAnswer: "Bungong", hint: "Tanaman yang indah dipandang / Bunga" },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800", correctAnswer: "Gajah", hint: "Hewan berbelalai panjang / Gajah" },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1528659133446-444747ebaf05?auto=format&fit=crop&q=80&w=800", correctAnswer: "U", hint: "Buah tropis yang airnya segar / Kelapa" },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&q=80&w=800", correctAnswer: "Eungkot", hint: "Hewan yang hidup di air / Ikan" },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800", correctAnswer: "Gle", hint: "Dataran tinggi / Gunung" },
  { id: 8, imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=800", correctAnswer: "Laot", hint: "Perairan asin yang luas / Laut" },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=800", correctAnswer: "Cicem", hint: "Hewan bersayap yang bisa terbang / Burung" },
  { id: 10, imageUrl: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&q=80&w=800", correctAnswer: "Buleuen", hint: "Satelit alami bumi di malam hari / Bulan" },
];

export default function TebakGambarPage() {
  const [questions, setQuestions] = useState<ImageQuiz[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [gameState, setGameState] = useState<"playing" | "feedback" | "finished">("playing");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Shuffle and pick 10 images (or all in this case since we have exactly 10)
    const shuffled = [...IMAGE_DATABASE].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
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

  const progressValue = questions.length > 0 ? ((currentIndex) / questions.length) * 100 : 0;

  if (questions.length === 0) return null;

  return (
    <div className="w-full min-h-[80vh] bg-cream font-sans">
      <Section
        background="cream"
        title="Tebak Gambar"
        subtitle="Perhatikan gambar berikut dan tebak apa namanya dalam Bahasa Aceh!"
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-3xl mx-auto px-6 pb-24">
        {/* Header navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/#permainan">
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
              variant="green" 
              label={`Gambar ${currentIndex + 1} dari ${questions.length}`} 
            />
          </div>
        )}

        {/* Game Area */}
        {gameState === "finished" ? (
          <Card className="p-8 text-center bg-white border border-accent-green/20 flex flex-col items-center">
            <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mb-6">
              <Trophy className="w-10 h-10 text-accent-green" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-4">Permainan Selesai!</h2>
            <p className="text-lg text-dark/70 mb-8">
              Hebat! Skor akhir Anda adalah <strong className="text-accent-green text-2xl">{score}</strong> dari {questions.length * 10}.
            </p>
            <div className="flex gap-4">
              <Link href="/#permainan">
                <Button variant="outline">Menu Permainan</Button>
              </Link>
              <Button variant="green" onClick={startNewGame} leftIcon={<RefreshCw className="w-4 h-4" />}>
                Main Lagi
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-8 bg-white border border-dark/5">
            <div className="text-center mb-8 flex flex-col items-center">
              <h3 className="text-sm uppercase tracking-wider text-accent-green font-bold mb-4">
                Apa bahasa Aceh dari gambar ini?
              </h3>
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-md mb-6 border border-gray-100">
                <Image
                  src={currentQuestion.imageUrl}
                  alt="Tebak Gambar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>

            {gameState === "playing" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="relative">
                  <Input
                    autoFocus
                    placeholder="Ketik jawaban dalam Bahasa Aceh..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="text-center text-xl font-semibold"
                  />
                </div>
                
                {showHint && (
                  <div className="bg-accent-green/10 p-4 rounded-xl border border-accent-green/20 flex items-start gap-3 text-dark/80">
                    <HelpCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong>Petunjuk:</strong> Huruf awalan jawabannya adalah "<strong>{currentQuestion.correctAnswer.charAt(0).toUpperCase()}</strong>" ({currentQuestion.hint})
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center mt-2">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm"
                    className="text-dark/50 hover:text-accent-green"
                    onClick={() => setShowHint(true)}
                    disabled={showHint}
                  >
                    Butuh petunjuk?
                  </Button>
                  <Button 
                    type="submit" 
                    variant="green" 
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
                  {currentIndex < questions.length - 1 ? "Lanjut ke Gambar Berikutnya" : "Lihat Hasil Akhir"}
                </Button>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
