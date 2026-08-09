"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, RefreshCw, Trophy, ImageIcon, Upload } from "lucide-react";

const IMAGE_OPTIONS = [
  { id: 1, url: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=800", name: "Pantai & Tebing" },
  { id: 2, url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800", name: "Makanan Tradisional" },
  { id: 3, url: "https://images.unsplash.com/photo-1528659133446-444747ebaf05?auto=format&fit=crop&q=80&w=800", name: "Pemandangan Alam" },
];
const GRID_SIZE = 3;
const TOTAL_TILES = GRID_SIZE * GRID_SIZE;

export default function SusunGambarPage() {
  const [tiles, setTiles] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [moves, setMoves] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(IMAGE_OPTIONS[0]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize a solved puzzle first
  useEffect(() => {
    resetPuzzle();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const customImage = { id: Date.now(), url: imageUrl, name: "Gambar Anda" };
      setSelectedImage(customImage);
      resetPuzzle();
      // Optional: reset input so the same file can be uploaded again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const resetPuzzle = () => {
    const solved = Array.from({ length: TOTAL_TILES }, (_, i) => i);
    setTiles(solved);
    setIsSolved(false);
    setMoves(0);
    setIsStarted(false);
  };

  const checkSolved = (currentTiles: number[]) => {
    for (let i = 0; i < currentTiles.length; i++) {
      if (currentTiles[i] !== i) return false;
    }
    return true;
  };

  const getValidMoves = (emptyIndex: number) => {
    const validMoves = [];
    const row = Math.floor(emptyIndex / GRID_SIZE);
    const col = emptyIndex % GRID_SIZE;

    if (row > 0) validMoves.push(emptyIndex - GRID_SIZE); // Up
    if (row < GRID_SIZE - 1) validMoves.push(emptyIndex + GRID_SIZE); // Down
    if (col > 0) validMoves.push(emptyIndex - 1); // Left
    if (col < GRID_SIZE - 1) validMoves.push(emptyIndex + 1); // Right

    return validMoves;
  };

  const shufflePuzzle = () => {
    let currentTiles = Array.from({ length: TOTAL_TILES }, (_, i) => i);
    let emptyIndex = TOTAL_TILES - 1;

    // Make 100 random valid moves to shuffle (ensures solvability)
    for (let i = 0; i < 150; i++) {
      const validMoves = getValidMoves(emptyIndex);
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      
      // Swap
      [currentTiles[emptyIndex], currentTiles[randomMove]] = [currentTiles[randomMove], currentTiles[emptyIndex]];
      emptyIndex = randomMove;
    }

    setTiles(currentTiles);
    setIsSolved(false);
    setMoves(0);
    setIsStarted(true);
  };

  const handleTileClick = (index: number) => {
    if (!isStarted || isSolved) return;

    const emptyIndex = tiles.indexOf(TOTAL_TILES - 1);
    const validMoves = getValidMoves(emptyIndex);

    if (validMoves.includes(index)) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
      setMoves((m) => m + 1);

      if (checkSolved(newTiles)) {
        setIsSolved(true);
      }
    }
  };

  return (
    <div className="w-full min-h-[80vh] bg-cream font-sans">
      <Section
        background="cream"
        title="Susun Gambar"
        subtitle="Latih ketangkasan Anda dengan menyusun kembali gambar yang teracak."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Header navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/#permainan">
            <Button variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Kembali
            </Button>
          </Link>
          <div className="text-sm font-semibold text-dark/70 font-mono">
            Langkah: {moves}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Game Board */}
          <Card className="p-6 bg-white border border-dark/5 flex flex-col shadow-lg">
            
            {/* The Puzzle Grid */}
            <div 
              className="relative bg-gray-200 rounded-xl overflow-hidden shadow-inner w-full max-w-full aspect-square p-1"
            >
              <div 
                className="w-full h-full grid gap-1"
                style={{ 
                  gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${GRID_SIZE}, minmax(0, 1fr))`
                }}
              >
                {tiles.map((tileValue, index) => {
                  const isEmpty = tileValue === TOTAL_TILES - 1;
                  
                  // Calculate background position based on the ORIGINAL tile value
                  const originalRow = Math.floor(tileValue / GRID_SIZE);
                  const originalCol = tileValue % GRID_SIZE;
                  
                  const bgPosX = originalCol * (100 / (GRID_SIZE - 1));
                  const bgPosY = originalRow * (100 / (GRID_SIZE - 1));

                  return (
                    <div
                      key={index}
                      onClick={() => handleTileClick(index)}
                      className={`relative rounded-lg overflow-hidden transition-all duration-200 ease-in-out
                        ${isEmpty && !isSolved ? "opacity-0 cursor-default" : "cursor-pointer hover:opacity-90 shadow-sm ring-1 ring-black/10"}
                        ${(!isStarted && !isSolved) ? "opacity-100" : ""}
                        ${isSolved ? "opacity-100 ring-0 shadow-none rounded-none" : ""}
                      `}
                      style={{
                        backgroundImage: isEmpty && !isSolved ? "none" : `url(${selectedImage.url})`,
                        backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
                        backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                        // Remove gap visually when solved
                        margin: isSolved ? "-0.5px" : "0"
                      }}
                    >
                      {/* Optional: Add number hints when playing */}
                      {isStarted && !isSolved && !isEmpty && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                          <span className="text-white font-bold text-xl drop-shadow-md">{tileValue + 1}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex gap-4 w-full">
              {isStarted && !isSolved ? (
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={resetPuzzle}
                >
                  Menyerah
                </Button>
              ) : (
                <Button 
                  variant="primary" 
                  className="w-full" 
                  onClick={shufflePuzzle}
                  leftIcon={<RefreshCw className="w-4 h-4" />}
                >
                  {isSolved ? "Main Lagi" : "Mulai Bermain"}
                </Button>
              )}
            </div>
          </Card>

          {/* Target Image & Instructions */}
          <div className="flex flex-col gap-6">
            <Card className="p-6 bg-white border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <ImageIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg text-dark">Gambar Target</h3>
              </div>
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-sm relative border border-gray-100 mb-4">
                <img src={selectedImage.url} alt="Target" className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="text-xs text-dark/60 font-semibold uppercase tracking-wider text-center mb-1">
                  Pilih Gambar:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {IMAGE_OPTIONS.map((img) => (
                    <Button 
                      key={img.id}
                      variant={selectedImage.id === img.id ? "primary" : "outline"} 
                      size="sm" 
                      onClick={() => {
                        setSelectedImage(img);
                        resetPuzzle();
                      }}
                      className="text-xs py-1.5 px-3"
                    >
                      {img.name}
                    </Button>
                  ))}
                  
                  {/* Upload Custom Image Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs py-1.5 px-3 border-dashed border-2 border-primary/50 text-primary hover:bg-primary/5"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-3 h-3 mr-1" />
                    Upload Sendiri
                  </Button>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageUpload} 
                  />
                </div>
              </div>
            </Card>

            {isSolved && (
              <Card className="p-6 text-center bg-accent-green/10 border-accent-green/20 animate-in zoom-in duration-300">
                <Trophy className="w-12 h-12 text-accent-green mx-auto mb-3" />
                <h3 className="font-bold text-xl text-accent-green mb-2">Selamat!</h3>
                <p className="text-dark/80 text-sm mb-4">
                  Anda berhasil menyusun gambar dalam <strong>{moves}</strong> langkah.
                </p>
                <Button variant="green" size="sm" onClick={shufflePuzzle}>
                  Coba Lagi
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
