"use client";

import React, { useState, useRef, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { listeningData, ListeningExercise } from "@/data/mendengarkan";
import { Play, Pause, SkipForward, SkipBack, Music, Headphones, Activity, Volume2, VolumeX, ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";

interface Track {
  id: number;
  title: string;
  src: string;
}

const tracks: Track[] = [
  { id: 1, title: "7 Kebiasaan Aneuk Indonesia", src: "/audio/Swara Kata/7 Kebiasaan Aneuk Indonesia(1)(1).mp4" },
  { id: 2, title: "Beda Tapi Saboh Indonesia", src: "/audio/Swara Kata/Beda Tapi Saboh Indonesia.mp4" },
  { id: 3, title: "Beribadah", src: "/audio/Swara Kata/Beribadah.mp4" },
  { id: 4, title: "Beudoh Bengoh", src: "/audio/Swara Kata/Beudoh Bengoh.mp4" },
  { id: 5, title: "Istirahat", src: "/audio/Swara Kata/Istirahat.mp4" },
  { id: 6, title: "Jak Olahraga", src: "/audio/Swara Kata/Jak Olahraga(1).mp4" },
  { id: 7, title: "Jak Ta Meurunoe", src: "/audio/Swara Kata/Jak Ta Meurunoe.mp4" },
  { id: 8, title: "Pajoh Sihat Tanyoe Hibat!", src: "/audio/Swara Kata/Pajoh sihat tanyoe hibat!.mp4" },
];

export default function MendengarkanPage() {
  const [view, setView] = useState<'menu' | 'quiz' | 'playlist'>('menu');
  const [activeExercise, setActiveExercise] = useState<ListeningExercise | null>(null);

  if (view === 'menu') {
    return (
      <div className="w-full min-h-[70vh] bg-cream">
        <Section
          background="cream"
          title="Latihan Mendengarkan"
          subtitle="Pilih topik kuis atau dengarkan musik untuk melatih pendengaran bahasa Aceh."
          showDivider
          centerTitle
          className="pt-12 pb-6"
        />
        
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="mb-6">
            <Link href="/latihan" className="inline-flex items-center gap-2 text-dark/50 hover:text-primary transition-colors font-semibold text-sm">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Latihan
            </Link>
          </div>

          <div className="grid gap-6">
            {/* Playlist Option */}
            <Card 
              hoverable 
              className="p-6 bg-white border-2 border-primary/20 shadow-md shadow-primary/5 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <Music className="w-8 h-8" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-accent-gold/20 text-accent-gold text-xs font-bold rounded-full mb-2">Musik & Siniar</div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Daftar Putar Swara Kata</h3>
                <p className="text-dark/70 text-sm">Dengarkan 8 koleksi audio Swara Kata secara berurutan layaknya pemutar musik.</p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <Button 
                  variant="primary" 
                  className="w-full md:w-auto"
                  onClick={() => setView('playlist')}
                >
                  <Play className="w-4 h-4 mr-2" /> Putar Musik
                </Button>
              </div>
            </Card>

            {/* Quiz Options */}
            <h4 className="font-serif font-bold text-xl text-dark mt-6 mb-2">Kuis Mendengarkan</h4>
            {listeningData.map((exercise) => (
              <Card 
                key={exercise.id} 
                hoverable 
                className="p-6 bg-white border border-dark/5 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-dark/50">
                  <Headphones className="w-8 h-8" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">{exercise.title}</h3>
                  <p className="text-dark/70 text-sm">{exercise.description}</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Button 
                    variant="outline" 
                    className="w-full md:w-auto"
                    onClick={() => {
                      setActiveExercise(exercise);
                      setView('quiz');
                    }}
                  >
                    Mulai Kuis
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (view === 'quiz' && activeExercise) {
    return <QuizView exercise={activeExercise} onBack={() => setView('menu')} />;
  }

  if (view === 'playlist') {
    return <PlaylistView onBack={() => setView('menu')} />;
  }

  return null;
}

function QuizView({ exercise, onBack }: { exercise: ListeningExercise, onBack: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log(e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
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
    setSelectedAnswers(prev => ({ ...prev, [currentQuestionIdx]: optionIdx }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < exercise.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      let correct = 0;
      exercise.questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctAnswerIndex) correct++;
      });
      setScore(Math.round((correct / exercise.questions.length) * 100));
      setIsFinished(true);
    }
  };

  const currentQuestion = exercise.questions[currentQuestionIdx];
  const hasAnsweredCurrent = selectedAnswers[currentQuestionIdx] !== undefined;

  return (
    <div className="w-full min-h-screen bg-cream">
      <audio 
        ref={audioRef}
        src={exercise.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={handleTimeUpdate}
      />

      <div className="pt-8 pb-4 px-6 max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-dark/60 hover:text-primary transition-colors font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar
        </button>
      </div>

      <Section
        background="cream"
        title={exercise.title}
        subtitle={exercise.description}
        centerTitle
        className="pt-0 pb-12"
      />

      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-8">
        <Card className="p-8 bg-white border-2 border-primary/20 shadow-lg shadow-primary/5 rounded-3xl relative overflow-hidden">
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
              <span className="text-xs font-medium text-dark/50 w-10 text-right">{formatTime(progress)}</span>
              <div className="flex-grow flex items-center relative group">
                <input 
                  type="range" min="0" max={duration || 100} value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-2 bg-dark/10 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>
              <span className="text-xs font-medium text-dark/50 w-10">{formatTime(duration)}</span>
            </div>
          </div>
        </Card>

        {isFinished ? (
          <Card className="p-10 bg-white border border-dark/5 text-center flex flex-col items-center gap-6">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold ${score >= 70 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {score}
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-dark mb-2">{score >= 70 ? 'Luar Biasa!' : 'Tetap Semangat!'}</h3>
              <p className="text-dark/70">Kamu telah menyelesaikan latihan pendengaran ini.</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={onBack}>Kembali</Button>
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
                Pertanyaan {currentQuestionIdx + 1} dari {exercise.questions.length}
              </span>
            </div>
            <h3 className="text-xl font-bold text-dark mb-8 leading-relaxed">{currentQuestion.questionText}</h3>
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestionIdx] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group
                      ${isSelected ? 'border-primary bg-primary/5 shadow-sm' : 'border-dark/5 hover:border-primary/30 hover:bg-gray-50'}
                    `}
                  >
                    <span className={`font-medium ${isSelected ? 'text-primary' : 'text-dark/80 group-hover:text-dark'}`}>{option}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-primary' : 'border-dark/20 group-hover:border-primary/40'}`}>
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
                {currentQuestionIdx === exercise.questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
              </Button>
            </div>
          </Card>
        ) : null}
      </div>
    </div>
  );
}

function PlaylistView({ onBack }: { onBack: () => void }) {
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIdx];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setProgress(0);
      if (isPlaying) audioRef.current.play().catch(() => {});
    }
  }, [currentTrackIdx]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play().catch(() => {});
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleNext = () => {
    if (currentTrackIdx < tracks.length - 1) {
      setCurrentTrackIdx(currentTrackIdx + 1);
      setIsPlaying(true);
    } else {
      setCurrentTrackIdx(0);
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (progress > 3) {
      if (audioRef.current) audioRef.current.currentTime = 0;
    } else if (currentTrackIdx > 0) {
      setCurrentTrackIdx(currentTrackIdx - 1);
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setProgress(value);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const selectTrack = (idx: number) => {
    if (currentTrackIdx === idx) togglePlay();
    else {
      setCurrentTrackIdx(idx);
      setIsPlaying(true);
    }
  };

  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div className="w-full min-h-[85vh] bg-cream pb-24 relative overflow-hidden">
      <audio ref={audioRef} src={currentTrack.src} onTimeUpdate={handleTimeUpdate} onEnded={handleNext} onLoadedMetadata={handleTimeUpdate} />

      <div className="pt-8 pb-4 px-6 max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-dark/60 hover:text-primary transition-colors font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar
        </button>
      </div>

      <Section background="cream" title="Daftar Putar Swara Kata" subtitle="Dengarkan koleksi audio Swara Kata." showDivider centerTitle className="pt-0 pb-6" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <Card hoverable={false} className="p-8 md:p-12 bg-white shadow-xl border-2 border-primary/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent-gold to-primary" />
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-inner border-8 border-cream bg-white z-10 relative transition-transform duration-1000 ${isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
                  <Music className={`w-12 h-12 ${isPlaying ? 'text-primary' : 'text-dark/20'}`} />
                </div>
                {isPlaying && (
                  <>
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-[-20px] rounded-full border-2 border-accent-gold/20 animate-ping" style={{ animationDuration: '3s' }} />
                  </>
                )}
              </div>
              <div className="text-center mb-8 w-full max-w-md">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark mb-2 truncate">{currentTrack.title}</h3>
                <p className="text-primary font-semibold flex items-center justify-center gap-2"><Headphones className="w-4 h-4" /> Swara Kata</p>
              </div>
              <div className="w-full max-w-lg mb-8">
                <div className="relative h-2 w-full bg-cream rounded-full overflow-hidden mb-3">
                  <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-linear" style={{ width: `${progressPercent}%` }} />
                  <input type="range" min="0" max={duration || 100} value={progress} onChange={handleProgressChange} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                </div>
                <div className="flex justify-between text-xs font-bold text-dark/40 font-mono">
                  <span>{formatTime(progress)}</span><span>{formatTime(duration)}</span>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-8">
                <button onClick={handlePrev} className="w-12 h-12 rounded-full flex items-center justify-center bg-cream text-dark/60 hover:bg-primary/10 hover:text-primary transition-colors active:scale-95"><SkipBack className="w-5 h-5 ml-[-2px]" /></button>
                <button onClick={togglePlay} className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 hover:bg-primary-hover transition-all active:scale-95">
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
                <button onClick={handleNext} className="w-12 h-12 rounded-full flex items-center justify-center bg-cream text-dark/60 hover:bg-primary/10 hover:text-primary transition-colors active:scale-95"><SkipForward className="w-5 h-5 ml-[2px]" /></button>
              </div>
              <div className="flex items-center gap-3 mt-8 w-full max-w-[200px] text-dark/50">
                <button onClick={() => setVolume(volume === 0 ? 1 : 0)} className="hover:text-primary transition-colors">
                  {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input type="range" min="0" max="1" step="0.05" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full h-1 bg-dark/10 rounded-full appearance-none cursor-pointer accent-primary" />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4 px-2">
            <h4 className="font-serif font-bold text-xl text-dark">Daftar Putar ({tracks.length})</h4>
          </div>
          <div className="bg-white rounded-3xl p-3 shadow-sm border border-dark/5">
            <div className="flex flex-col gap-1">
              {tracks.map((track, idx) => {
                const isActive = currentTrackIdx === idx;
                return (
                  <button
                    key={track.id}
                    onClick={() => selectTrack(idx)}
                    className={`w-full flex items-center p-3 md:p-4 rounded-2xl transition-all duration-200 outline-none ${isActive ? "bg-primary/5 shadow-inner border border-primary/20" : "hover:bg-cream border border-transparent"}`}
                  >
                    <div className="w-8 text-center text-sm font-bold text-dark/30 mr-2">
                      {isActive && isPlaying ? <Activity className="w-5 h-5 text-primary mx-auto animate-pulse" /> : idx + 1}
                    </div>
                    <div className="flex-1 text-left truncate pr-4">
                      <p className={`font-semibold truncate ${isActive ? 'text-primary' : 'text-dark/80'}`}>{track.title}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-primary text-white' : 'bg-dark/5 text-dark/40 hover:bg-primary/10 hover:text-primary'}`}>
                      {isActive && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
