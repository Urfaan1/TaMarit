"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Bell, 
  ChevronRight, 
  Volume2, 
  Play, 
  RotateCcw,
  User,
  MessageSquare
} from "lucide-react";
import { berbicaraScenarios } from "@/data/berbicara";

export default function LatihanBerbicara() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(berbicaraScenarios[0].id);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const selectedScenario = berbicaraScenarios.find(s => s.id === selectedScenarioId) || berbicaraScenarios[0];

  useEffect(() => {
    // Optional: scroll to bottom when changing scenario if we animate messages
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedScenarioId]);

  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] animate-fade-in max-w-7xl mx-auto w-full">
      
      {/* Top Header */}
      <header className="flex justify-between items-center mb-8 pt-4">
        <div className="text-2xl font-serif font-bold text-primary">
          Ta<span className="text-dark">Marit</span>
        </div>
      </header>

      {/* Breadcrumb & Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-3">
          <Link href="/latihan" className="hover:text-primary transition-colors">Latihan</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-primary font-bold">Berbicara</span>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#0A3632]">
              Latihan Percakapan
            </h1>
            <p className="text-gray-500 mt-2">Pilih skenario dan pelajari percakapan dalam Bahasa Aceh</p>
          </div>
        </div>
      </div>

      {/* Main Layout: Scenarios List (Left) & Chat View (Right) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1 pb-10">
        
        {/* Left Panel: Scenarios List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h2 className="text-lg font-bold text-[#0A3632] flex items-center gap-2">
            <MessageSquare className="w-5 h-5" /> Daftar Skenario
          </h2>
          <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[600px] custom-scrollbar">
            {berbicaraScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenarioId(scenario.id)}
                className={`flex flex-col text-left p-4 rounded-2xl transition-all duration-300 border ${
                  selectedScenarioId === scenario.id 
                    ? "bg-white border-primary shadow-md ring-1 ring-primary/20" 
                    : "bg-white/60 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm"
                }`}
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={scenario.image} 
                      alt={scenario.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${selectedScenarioId === scenario.id ? "text-primary" : "text-dark"}`}>
                      {scenario.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {scenario.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel: Chat Interface */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="bg-[#F8F9FA] rounded-[2rem] border border-gray-200 shadow-sm flex flex-col h-[650px] overflow-hidden relative">
            
            {/* Header Chat */}
            <div className="bg-white p-5 border-b border-gray-100 flex items-center justify-between z-10 shadow-sm relative">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedScenario.image} alt="Skenario" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A3632] text-lg">{selectedScenario.title}</h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {selectedScenario.description}
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E5E9E8] text-[#0A3632] hover:bg-primary hover:text-white transition-colors" title="Putar Semua Audio">
                <Play className="w-4 h-4 ml-0.5 fill-current" />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-gradient-to-b from-[#F8F9FA] to-white/40 flex flex-col gap-6 scroll-smooth custom-scrollbar">
               {selectedScenario.dialogue.map((line, idx) => (
                 <div 
                  key={idx} 
                  className={`flex flex-col max-w-[85%] ${line.isMainCharacter ? "self-end items-end" : "self-start items-start"}`}
                 >
                   <div className="flex items-center gap-2 mb-1.5 px-2">
                     {!line.isMainCharacter && (
                       <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                         {line.speaker}
                       </span>
                     )}
                     {line.isMainCharacter && (
                       <span className="text-xs font-bold text-primary uppercase tracking-wide">
                         {line.speaker}
                       </span>
                     )}
                   </div>
                   
                   <div className={`relative group p-4 md:p-5 rounded-2xl shadow-sm border ${
                     line.isMainCharacter 
                      ? "bg-primary text-white border-transparent rounded-tr-sm" 
                      : "bg-white text-dark border-gray-100 rounded-tl-sm"
                   }`}>
                     <p className={`text-[15px] md:text-base leading-relaxed ${line.isMainCharacter ? "text-white/90" : "text-gray-700"}`}>
                       {line.text}
                     </p>
                     
                     {/* Action button (Play audio) visible on hover */}
                     <button 
                      className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ${
                        line.isMainCharacter 
                          ? "-left-12 bg-[#E5E9E8] text-primary hover:bg-white" 
                          : "-right-12 bg-[#E5E9E8] text-primary hover:bg-white"
                      }`}
                     >
                       <Volume2 className="w-4 h-4" />
                     </button>
                   </div>
                 </div>
               ))}
               <div ref={chatEndRef} />
            </div>

            {/* Footer Actions */}
            <div className="bg-white p-5 border-t border-gray-100 flex items-center justify-between">
              <button 
                onClick={() => {
                  // Logic to restart conversation
                  const currentId = selectedScenarioId;
                  setSelectedScenarioId("");
                  setTimeout(() => setSelectedScenarioId(currentId), 10);
                }}
                className="flex items-center gap-2 px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-full font-semibold text-gray-600 hover:bg-gray-100 hover:text-dark transition-colors text-sm"
              >
                <RotateCcw className="w-4 h-4" /> Ulangi Percakapan
              </button>
              <button className="bg-accent-gold text-white px-8 py-2.5 rounded-full font-bold shadow-md hover:bg-[#D4AF37] transition-all hover:-translate-y-0.5 text-sm">
                Selesai Belajar
              </button>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Add some global styles for custom scrollbar if not in global.css */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E2E8F0;
          border-radius: 20px;
        }
      `}} />

    </div>
  );
}
