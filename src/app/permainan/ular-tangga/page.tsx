"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Dices, Users, RefreshCw, Trophy, User } from "lucide-react";
import { useSnakeAndLadder } from "@/hooks/useSnakeAndLadder";

const PLAYER_COLORS = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
const PLAYER_NAMES = ["Pemain 1", "Pemain 2", "Pemain 3", "Pemain 4"];

export default function UlarTanggaPage() {
  const {
    gameStatus,
    numPlayers,
    positions,
    currentPlayer,
    diceValue,
    isRolling,
    isMoving,
    notification,
    startGame,
    rollDice,
    playAgain
  } = useSnakeAndLadder();

  // Render Papan Grid 10x10 (Pola Boustrophedon / zig-zag)
  const renderBoard = () => {
    const board = [];
    for (let row = 9; row >= 0; row--) {
      const isEvenRow = row % 2 === 0;
      for (let col = 0; col < 10; col++) {
        const currentSquare = isEvenRow ? (row * 10) + col + 1 : (row * 10) + (9 - col) + 1;
        
        const playersHere = positions.map((pos, index) => pos === currentSquare ? index : -1).filter(i => i !== -1);
        
        board.push(
          <div 
            key={currentSquare} 
            className="relative flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
          >
            {/* Bidak Pemain */}
            <div className="flex flex-wrap gap-1 justify-center z-10 w-full h-full items-center">
              {playersHere.map(pIndex => (
                <div 
                  key={pIndex} 
                  className={`flex items-center justify-center p-0.5 sm:p-1 rounded-full shadow-lg border-2 border-white transform transition-transform duration-300 scale-110 drop-shadow-md ${PLAYER_COLORS[pIndex]}`}
                  title={PLAYER_NAMES[pIndex]}
                >
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
    return board;
  };

  return (
    <div className="w-full min-h-[90vh] bg-cream pb-24">
      <Section
        background="cream"
        title="Ular Tangga"
        subtitle="Siapa cepat dia dapat! Naiki tangga dan hindari gigitan ular untuk mencapai kotak 100."
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {gameStatus === "setup" && (
          <Card className="p-8 text-center max-w-md w-full bg-white shadow-xl">
            <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold font-serif mb-6 text-dark">Pilih Pemain</h2>
            <div className="flex flex-col gap-4">
              {[2, 3, 4].map(num => (
                <Button key={num} variant="outline" size="lg" onClick={() => startGame(num)}>
                  {num} Pemain
                </Button>
              ))}
            </div>
          </Card>
        )}

        {gameStatus === "playing" && (
          <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
            {/* Area Papan */}
            <div className="flex-1 overflow-x-auto w-full flex justify-center">
              <div className="grid grid-cols-10 grid-rows-10 border-4 border-primary/40 shadow-2xl rounded-xl overflow-hidden min-w-[320px] bg-[url('/board.jpg')] bg-cover bg-center bg-no-repeat relative">
                
                {/* Notifikasi Overlay */}
                {notification && (
                  <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl text-center transform scale-110 transition-transform duration-300">
                      <div className="text-4xl mb-2">
                        {notification.type === 'ladder' ? '🪜' : notification.type === 'snake' ? '🐍' : 'ℹ️'}
                      </div>
                      <h3 className={`text-2xl font-bold ${notification.type === 'snake' ? 'text-red-600' : notification.type === 'ladder' ? 'text-green-600' : 'text-blue-600'}`}>
                        {notification.message}
                      </h3>
                    </div>
                  </div>
                )}
                
                {renderBoard()}
              </div>
            </div>

            {/* Panel Kontrol */}
            <div className="w-full lg:w-80 flex flex-col gap-6">
              <Card className="p-6 bg-white shadow-xl border-t-4 border-primary">
                <h3 className="font-bold text-xl mb-4 text-center">Giliran</h3>
                
                <div className="flex items-center justify-center gap-3 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className={`w-6 h-6 rounded-full border-2 border-white shadow-md ${PLAYER_COLORS[currentPlayer]}`} />
                  <span className="font-bold text-lg">{PLAYER_NAMES[currentPlayer]}</span>
                </div>

                <div className={`flex flex-col items-center justify-center p-6 rounded-2xl mb-6 transition-colors duration-300 ${isRolling ? 'bg-primary/10' : 'bg-cream'}`}>
                  <Dices className={`w-12 h-12 text-primary mb-2 ${isRolling ? 'animate-spin' : ''}`} />
                  <span className="text-5xl font-bold text-dark">{diceValue || "-"}</span>
                </div>

                <Button 
                  onClick={rollDice} 
                  disabled={isRolling || isMoving || !!notification} 
                  className="w-full text-lg h-14 shadow-md hover:shadow-lg transition-all"
                >
                  {isRolling ? "Mengocok..." : isMoving ? "Berjalan..." : "Lempar Dadu"}
                </Button>
              </Card>

              <Card className="p-4 bg-white shadow-md text-sm">
                <h4 className="font-bold mb-3 text-gray-700">Posisi Pemain:</h4>
                <div className="space-y-2">
                  {positions.map((pos, idx) => (
                    <div key={idx} className={`flex justify-between items-center p-2 rounded-lg ${idx === currentPlayer ? 'bg-primary/5' : 'bg-transparent'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border border-white shadow-sm ${PLAYER_COLORS[idx]}`} />
                        <span className={idx === currentPlayer ? 'font-bold' : ''}>{PLAYER_NAMES[idx]}</span>
                      </div>
                      <span className={`font-bold ${idx === currentPlayer ? 'text-primary' : 'text-gray-500'}`}>
                        Kotak {pos}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {gameStatus === "finished" && (
          <Card className="p-8 text-center max-w-md w-full bg-white shadow-2xl mt-12 border-t-8 border-accent-gold">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gold/20 animate-ping rounded-full" />
              <Trophy className="relative w-24 h-24 mx-auto mb-6 text-accent-gold drop-shadow-lg" />
            </div>
            <h2 className="text-4xl font-bold font-serif mb-2 text-dark">Menang!</h2>
            <p className="text-xl mb-8 text-gray-600">Selamat kepada <br/><strong className="text-2xl text-primary">{PLAYER_NAMES[currentPlayer]}</strong></p>
            <Button size="lg" onClick={playAgain} className="w-full h-14 text-lg">
              <RefreshCw className="mr-2 w-5 h-5" /> Main Lagi
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
