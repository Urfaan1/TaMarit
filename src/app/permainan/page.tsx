"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Tooltip } from "@/components/ui/Tooltip";
import { BungongJeumpa, PintoAceh } from "@/components/ui/Motifs";
import { HelpCircle, Check, X, Award, RotateCcw, HelpCircle as HelpIcon, ArrowRight } from "lucide-react";

interface WordGame {
  id: number;
  clue: string;
  answer: string; // Correct answer
  alternativeAnswers?: string[]; // Without accent characters, etc.
  hint: string;
}

const wordGameData: WordGame[] = [
  {
    id: 1,
    clue: "Kata ganti orang pertama tunggal bentuk sopan/halus (Saya).",
    answer: "Lôn",
    alternativeAnswers: ["lon"],
    hint: "Huruf awal L, berakhir dengan N.",
  },
  {
    id: 2,
    clue: "Kata kerja makan dalam bahasa Aceh sehari-hari.",
    answer: "Pajoh",
    alternativeAnswers: ["pajoh"],
    hint: "Diawali huruf P, terdiri atas 5 huruf.",
  },
  {
    id: 3,
    clue: "Salam sapaan penanya kabar (Apa kabar?).",
    answer: "Peue haba",
    alternativeAnswers: ["peue haba", "peuhaba"],
    hint: "Terdiri dari dua kata dasar.",
  },
  {
    id: 4,
    clue: "Pernyataan sopan untuk berterima kasih.",
    answer: "Teurimong gaseh",
    alternativeAnswers: ["teurimong gaseh", "terimong gaseh"],
    hint: "Dua kata dasar, diawali T dan G.",
  },
  {
    id: 5,
    clue: "Kata penunjuk waktu esok hari (Besok).",
    answer: "Singoh",
    alternativeAnswers: ["singoh"],
    hint: "Huruf awal S, berakhir H.",
  },
];

interface MatchItem {
  id: string;
  name: string;
  description: string;
}

const matchItems: MatchItem[] = [
  {
    id: "m1",
    name: "Rumoh Aceh",
    description: "Rumah adat panggung kayu tahan gempa tanpa paku besi.",
  },
  {
    id: "m2",
    name: "Jengki",
    description: "Alat pemukul kayu bertenaga kaki untuk menumbuk padi.",
  },
  {
    id: "m3",
    name: "Pawang",
    description: "Pemimpin pelayaran laut tradisi nelayan dan pembaca rasi bintang.",
  },
  {
    id: "m4",
    name: "Pinto Aceh",
    description: "Motif hiasan ukir emas terinspirasi pintu gerbang kesultanan.",
  },
];

export default function PermainanPage() {
  const [gameTab, setGameTab] = useState<"tebak" | "matcher">("tebak");

  // Tebak Kata states
  const [wordIdx, setWordIdx] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Matcher states
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [matcherScore, setMatcherScore] = useState(0);
  const [matcherMessage, setMatcherMessage] = useState<{ text: string; success: boolean } | null>(null);

  // Word Guess handlers
  const handleCheckWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userGuess.trim()) return;

    const currentWord = wordGameData[wordIdx];
    const normalizedGuess = userGuess.trim().toLowerCase();
    const correctAnswers = [
      currentWord.answer.toLowerCase(),
      ...(currentWord.alternativeAnswers || []).map((a) => a.toLowerCase()),
    ];

    const correct = correctAnswers.includes(normalizedGuess);
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setScore(score + 20);
    }
  };

  const handleNextWord = () => {
    setUserGuess("");
    setIsAnswered(false);
    setShowHint(false);
    if (wordIdx < wordGameData.length - 1) {
      setWordIdx(wordIdx + 1);
    } else {
      // Completed, loop back or custom reset
      alert(`Permainan selesai! Skor Tebak Kata Anda: ${score + (isCorrect ? 20 : 0)}/100`);
      setWordIdx(0);
      setScore(0);
    }
  };

  const handleResetWordGame = () => {
    setWordIdx(0);
    setUserGuess("");
    setIsAnswered(false);
    setScore(0);
    setShowHint(false);
  };

  // Matcher handlers
  const handleMatcherCheck = () => {
    if (!selectedItem || !selectedDesc) return;

    const correctItem = matchItems.find((i) => i.id === selectedItem);
    const isMatchedCorrectly = correctItem?.description === selectedDesc;

    if (isMatchedCorrectly) {
      setMatchedPairs({
        ...matchedPairs,
        [selectedItem]: selectedDesc,
      });
      setMatcherScore(matcherScore + 25);
      setMatcherMessage({ text: `Benar! ${correctItem.name} terpasang dengan pas.`, success: true });
    } else {
      setMatcherMessage({ text: "Kurang tepat. Coba perhatikan definisinya kembali.", success: false });
    }

    setSelectedItem(null);
    setSelectedDesc(null);
  };

  const handleResetMatcher = () => {
    setMatchedPairs({});
    setMatcherScore(0);
    setSelectedItem(null);
    setSelectedDesc(null);
    setMatcherMessage(null);
  };

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      {/* Title */}
      <Section
        background="cream"
        title="Permainan Edukatif"
        subtitle="Belajar seru bahasa dan warisan adat Aceh sambil mengumpulkan poin kebudayaan."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Game selector tabs */}
        <div className="flex justify-center gap-4 mb-10 pb-6 border-b border-dark/5">
          <Button
            variant={gameTab === "tebak" ? "primary" : "ghost"}
            onClick={handleResetWordGame}
            leftIcon={<BungongJeumpa size={16} className="text-accent-gold" />}
          >
            Tebak Kata Aceh
          </Button>
          <Button
            variant={gameTab === "matcher" ? "primary" : "ghost"}
            onClick={handleResetMatcher}
            leftIcon={<PintoAceh size={16} className="text-primary" />}
          >
            Bungong Matcher
          </Button>
        </div>

        {/* Tab 1: Tebak Kata */}
        {gameTab === "tebak" && (
          <div className="max-w-xl mx-auto flex flex-col gap-6">
            <Card hoverable={false} className="p-6 md:p-8 bg-white border border-dark/5">
              <div className="flex justify-between items-center mb-6">
                <Badge variant="primary" showDot>
                  Tebak Kata {wordIdx + 1}/5
                </Badge>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-dark/75">
                  <Award className="w-4 h-4 text-accent-gold" />
                  <span>Skor: {score}</span>
                </div>
              </div>

              {/* Clue Prompt */}
              <div className="p-5 bg-cream/40 rounded-aceh border border-dark/5 mb-6 text-center">
                <span className="text-[10px] font-bold text-dark/40 uppercase tracking-widest block mb-1">
                  Petunjuk Arti
                </span>
                <p className="text-base md:text-lg font-serif font-bold text-dark">
                  {wordGameData[wordIdx].clue}
                </p>
              </div>

              {/* Input Form */}
              <form onSubmit={handleCheckWord} className="flex flex-col gap-4">
                <Input
                  label="Jawaban Bahasa Aceh"
                  placeholder="Tulis e.g. Lôn, Pajoh, Singoh..."
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  disabled={isAnswered}
                  autoComplete="off"
                />

                {/* Hints panel */}
                {showHint && (
                  <div className="p-3.5 bg-accent-gold/10 border border-accent-gold/20 rounded-aceh text-xs text-[#B28A00] font-semibold flex items-center gap-1.5">
                    <HelpIcon className="w-4 h-4" /> Hint: {wordGameData[wordIdx].hint}
                  </div>
                )}

                {/* Feedback notifications */}
                {isAnswered && (
                  <div
                    className={`p-4 rounded-aceh border-2 flex items-center gap-3 font-semibold text-sm animate-scale-up
                      ${
                        isCorrect
                          ? "bg-accent-green/5 border-accent-green text-accent-green"
                          : "bg-primary/5 border-primary text-primary"
                      }
                    `}
                  >
                    {isCorrect ? (
                      <>
                        <Check className="w-5 h-5 bg-accent-green text-white rounded-full p-0.5" />
                        <span>Jawaban Tepat! Anda mendapatkan +20 Poin. (Jawaban: {wordGameData[wordIdx].answer})</span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 bg-primary text-white rounded-full p-0.5" />
                        <span>Jawaban Kurang Tepat. Jawaban yang benar adalah: {wordGameData[wordIdx].answer}</span>
                      </>
                    )}
                  </div>
                )}

                <div className="flex gap-3 mt-2">
                  {!isAnswered ? (
                    <>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowHint(true)}
                        disabled={showHint}
                        className="flex-1"
                      >
                        Bantuan Hint
                      </Button>
                      <Button type="submit" variant="primary" className="flex-1" disabled={!userGuess.trim()}>
                        Periksa
                      </Button>
                    </>
                  ) : (
                    <Button type="button" variant="primary" onClick={handleNextWord} className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      {wordIdx === wordGameData.length - 1 ? "Lihat Hasil Akhir" : "Lanjut Kata Berikutnya"}
                    </Button>
                  )}
                </div>
              </form>
            </Card>

            <div className="flex justify-center">
              <button
                onClick={handleResetWordGame}
                className="flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Game
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Matcher */}
        {gameTab === "matcher" && (
          <div className="flex flex-col gap-6">
            <Card hoverable={false} className="p-6 md:p-8 bg-white border border-dark/5">
              <div className="flex justify-between items-center mb-6">
                <Badge variant="gold" showDot>
                  Bungong Matcher
                </Badge>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-dark/75">
                  <Award className="w-4 h-4 text-accent-gold" />
                  <span>Skor: {matcherScore}/100</span>
                </div>
              </div>

              {/* Feedback messages */}
              {matcherMessage && (
                <div
                  className={`p-3.5 rounded-aceh border mb-6 text-sm font-semibold flex items-center gap-2 animate-scale-up
                    ${
                      matcherMessage.success
                        ? "bg-accent-green/5 border-accent-green/20 text-accent-green"
                        : "bg-primary/5 border-primary/20 text-primary"
                    }
                  `}
                >
                  {matcherMessage.success ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  {matcherMessage.text}
                </div>
              )}

              {/* Main matcher UI grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Column 1: Items Names */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-dark/40 uppercase tracking-wider pl-1">
                    Nama Warisan Budaya
                  </span>
                  {matchItems.map((item) => {
                    const isMatched = !!matchedPairs[item.id];
                    const isSelected = selectedItem === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => !isMatched && setSelectedItem(item.id)}
                        disabled={isMatched}
                        className={`w-full text-left p-4 rounded-aceh border font-semibold text-sm transition-all duration-200
                          ${
                            isMatched
                              ? "bg-accent-green/5 border-accent-green/20 text-accent-green/60 line-through cursor-not-allowed"
                              : isSelected
                              ? "bg-primary/5 border-primary text-primary"
                              : "bg-[#FAF6EE]/40 border-dark/5 hover:border-dark/20 text-dark/70 hover:bg-[#FAF6EE]/80"
                          }
                        `}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>

                {/* Column 2: Items Descriptions */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-dark/40 uppercase tracking-wider pl-1">
                    Deskripsi Filosofis
                  </span>
                  {/* Render descriptions in static order but users must click and match */}
                  {matchItems.map((item) => {
                    const isMatched = Object.values(matchedPairs).includes(item.description);
                    const isSelected = selectedDesc === item.description;

                    return (
                      <button
                        key={item.id}
                        onClick={() => !isMatched && setSelectedDesc(item.description)}
                        disabled={isMatched}
                        className={`w-full text-left p-4 rounded-aceh border font-medium text-xs leading-relaxed transition-all duration-200
                          ${
                            isMatched
                              ? "bg-accent-green/5 border-accent-green/20 text-accent-green/60 line-through cursor-not-allowed"
                              : isSelected
                              ? "bg-primary/5 border-primary text-primary"
                              : "bg-[#FAF6EE]/40 border-dark/5 hover:border-dark/20 text-dark/70 hover:bg-[#FAF6EE]/80"
                          }
                        `}
                      >
                        {item.description}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Match Action trigger */}
              <div className="flex gap-4 border-t border-dark/5 pt-6 justify-between items-center">
                <div className="text-xs text-dark/50 font-semibold pl-1">
                  {selectedItem && selectedDesc
                    ? "Opsi terpilih. Klik Cocokkan untuk validasi."
                    : "Pilih satu item nama dan satu deskripsi untuk mencocokkan."}
                </div>
                <Button
                  variant="primary"
                  onClick={handleMatcherCheck}
                  disabled={!selectedItem || !selectedDesc}
                >
                  Cocokkan!
                </Button>
              </div>
            </Card>

            <div className="flex justify-center">
              <button
                onClick={handleResetMatcher}
                className="flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Ulangi Matcher
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
