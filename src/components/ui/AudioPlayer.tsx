"use client";

import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume1, Music, SkipForward, SlidersHorizontal } from 'lucide-react';

const playlist = [
  "/audio/lagu-aceh-1.mp3",
  "/audio/lagu-aceh-2.mp3"
];

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [volume, setVolume] = useState(0.25); // Default volume 25%
  const [isHovered, setIsHovered] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inisialisasi awal & Autoplay
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(e => {
            console.log("Autoplay prevented by browser:", e);
          });
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    
    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, [hasInteracted]);

  // Mainkan trek baru ketika indeks berganti
  useEffect(() => {
    if (audioRef.current && hasInteracted && isPlaying) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(e => console.log("Gagal memutar trek:", e));
    }
  }, [currentTrackIdx, hasInteracted]);

  // Update volume audio element secara real-time
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      setHasInteracted(true);
    }
  };

  const handleEnded = () => {
    setCurrentTrackIdx((prevIdx) => (prevIdx + 1) % playlist.length);
  };

  const handleSkip = () => {
    setCurrentTrackIdx((prevIdx) => (prevIdx + 1) % playlist.length);
    setHasInteracted(true);
    setIsPlaying(true);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={playlist[currentTrackIdx]} 
        onEnded={handleEnded}
        preload="auto"
      />
      
      <div 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slider Volume & Skip (Membuka ke samping saat di-hover dan saat musik menyala) */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-dark/10 flex items-center
            ${isHovered && isPlaying ? "w-48 px-3 opacity-100 h-14" : "w-0 opacity-0 h-14 border-transparent shadow-none px-0"}`}
        >
          <div className="flex items-center gap-2 w-full min-w-[140px]">
            {volume === 0 ? <VolumeX className="w-4 h-4 text-dark/50 flex-shrink-0" /> : <Volume1 className="w-4 h-4 text-dark/50 flex-shrink-0" />}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-dark/10 rounded-lg appearance-none cursor-pointer accent-primary"
              title={`Volume: ${Math.round(volume * 100)}%`}
            />
            <button 
              onClick={handleSkip}
              className="p-1.5 rounded-full hover:bg-dark/5 text-dark/60 hover:text-primary transition-colors flex-shrink-0 ml-1"
              title="Ganti Lagu Berikutnya"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tombol Expand untuk Mobile (hanya muncul saat play) */}
        {isPlaying && (
          <button
            onClick={() => setIsHovered(!isHovered)}
            className={`p-2.5 rounded-full shadow-md bg-white border border-dark/5 text-dark/60 md:hidden transition-all duration-300 hover:bg-gray-50 flex-shrink-0`}
            title="Atur Volume"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        )}

        {/* Tombol Play/Pause Utama */}
        <button
          onClick={togglePlay}
          className={`p-3.5 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? "bg-primary text-white hover:bg-primary/90 shadow-primary/30" 
              : "bg-white text-dark/70 border border-dark/10 hover:bg-gray-50"
          }`}
          title={isPlaying ? "Matikan Musik" : "Putar Musik Aceh"}
        >
          {isPlaying ? (
            <Music className="w-5 h-5 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
}
