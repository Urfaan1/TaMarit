"use client";

import React, { useState, useRef, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { listeningData, ListeningExercise, Question } from "@/data/mendengarkan";
import { Play, Pause, ArrowLeft, CheckCircle2, XCircle, RotateCcw, Volume2, Headphones } from "lucide-react";

export default function MendengarkanPage() {
  const [activeExercise, setActiveExercise] = useState<ListeningExercise | null>(null);
  
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Quiz state
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Reset states when exercise changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setScore(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [activeExercise]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setProgress(value);
    }
  };

  const handleSelectAnswer = (optionIdx: number) => {
    if (isFinished) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIdx]: optionIdx
    }));
  };

  const handleNextQuestion = () => {
    if (activeExercise && currentQuestionIdx < activeExercise.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (!activeExercise) return;
    
    let correct = 0;
    activeExercise.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correct++;
      }
    });
    
    setScore(Math.round((correct / activeExercise.questions.length) * 100));
    setIsFinished(true);
  };

  const currentQuestion = activeExercise?.questions[currentQuestionIdx];
  const hasAnsweredCurrent = selectedAnswers[currentQuestionIdx] !== undefined;

  // View: List of exercises
  if (!activeExercise) {
    return (
      <div className="w-full min-h-[70vh] bg-cream">
        <Section
          background="cream"
          title="Latihan Mendengarkan"
          subtitle="Pilih topik untuk melatih kemampuan mendengar bahasa Aceh."
          showDivider
          centerTitle
          className="pt-12 pb-6"
        />
        
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="grid gap-6">
            {listeningData.map((exercise) => (
              <Card 
                key={exercise.id} 
                hoverable 
                className="p-6 bg-white border border-dark/5 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Headphones className="w-8 h-8" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">{exercise.title}</h3>
                  <p className="text-dark/70 text-sm">{exercise.description}</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Button 
                    variant="primary" 
                    className="w-full md:w-auto"
                    onClick={() => setActiveExercise(exercise)}
                  >
                    Mulai Latihan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // View: Active exercise
  return (
    <div className="w-full min-h-screen bg-cream">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef}
        src={activeExercise.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        onLoadedMetadata={handleTimeUpdate}
      />

      <div className="pt-8 pb-4 px-6 max-w-4xl mx-auto">
        <button 
          onClick={() => setActiveExercise(null)}
          className="flex items-center gap-2 text-dark/60 hover:text-primary transition-colors font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Daftar
        </button>
      </div>

      <Section
        background="cream"
        title={activeExercise.title}
        subtitle={activeExercise.description}
        centerTitle
        className="pt-0 pb-12"
      />

      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-8">
        {/* Custom Audio Player UI */}
        <Card className="p-8 bg-white border-2 border-primary/20 shadow-lg shadow-primary/5 rounded-3xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            <button
              onClick={togglePlay}
              className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                isPlaying ? 'bg-primary text-white scale-105' : 'bg-cream text-primary hover:bg-primary/10 hover:scale-105'
              }`}
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-2" />}
            </button>
            
            <div className="w-full flex items-center gap-4">
              <span className="text-xs font-medium text-dark/50 w-10 text-right">
                {formatTime(progress)}
              </span>
              <div className="flex-grow flex items-center relative group">
                <input 
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-2 bg-dark/10 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>
              <span className="text-xs font-medium text-dark/50 w-10">
                {formatTime(duration)}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-primary/70 bg-primary/5 px-4 py-1.5 rounded-full text-sm font-medium">
              <Volume2 className="w-4 h-4" />
              <span>Gunakan earphone untuk pengalaman terbaik</span>
            </div>
          </div>
        </Card>

        {/* Quiz UI */}
        {isFinished ? (
          <Card className="p-10 bg-white border border-dark/5 text-center flex flex-col items-center gap-6">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold ${score >= 70 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {score}
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-dark mb-2">
                {score >= 70 ? 'Luar Biasa!' : 'Tetap Semangat!'}
              </h3>
              <p className="text-dark/70">
                Kamu telah menyelesaikan latihan pendengaran ini.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={() => setActiveExercise(null)}>
                Latihan Lainnya
              </Button>
              <Button variant="primary" onClick={() => {
                setIsFinished(false);
                setCurrentQuestionIdx(0);
                setSelectedAnswers({});
              }} leftIcon={<RotateCcw className="w-4 h-4" />}>
                Ulangi Kuis
              </Button>
            </div>
          </Card>
        ) : currentQuestion ? (
          <Card className="p-8 bg-white border border-dark/5">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-primary tracking-widest uppercase">
                Pertanyaan {currentQuestionIdx + 1} dari {activeExercise.questions.length}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-dark mb-8 leading-relaxed">
              {currentQuestion.questionText}
            </h3>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestionIdx] === idx;
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group
                      ${isSelected 
                        ? 'border-primary bg-primary/5 shadow-sm' 
                        : 'border-dark/5 hover:border-primary/30 hover:bg-gray-50'
                      }
                    `}
                  >
                    <span className={`font-medium ${isSelected ? 'text-primary' : 'text-dark/80 group-hover:text-dark'}`}>
                      {option}
                    </span>
                    
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                      ${isSelected ? 'border-primary' : 'border-dark/20 group-hover:border-primary/40'}
                    `}>
                      {isSelected && <div className="w-3 h-3 rounded-full bg-primary" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end">
              <Button 
                variant="primary" 
                onClick={handleNextQuestion}
                disabled={!hasAnsweredCurrent}
                className={!hasAnsweredCurrent ? 'opacity-50 cursor-not-allowed' : ''}
              >
                {currentQuestionIdx === activeExercise.questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
              </Button>
            </div>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
