"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const VIDEO_LINKS = [
  { id: "pbY6XFx79uo", title: "Video Edukasi 1" },
  { id: "BixXeflwBGo", title: "Video Edukasi 2" },
  { id: "uRHKyH18DnA", title: "Video Edukasi 3" },
  { id: "0nCq_bytHXI", title: "Video Edukasi 4" },
  { id: "pxuCgKBkFBg", title: "Video Edukasi 5" },
  { id: "Buz8Qy6UgNI", title: "Video Edukasi 6" },
];

export default function VideoEdukasiPage() {
  return (
    <div className="w-full min-h-screen bg-cream pb-24">
      {/* Header / Hero Section */}
      <div className="bg-primary pt-12 pb-24 relative overflow-hidden">
        {/* Motif Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/images/pattern.svg)', backgroundSize: '120px' }}></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link href="/#latihan">
            <Button variant="outline" className="mb-8 border-white text-white hover:bg-white hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Menu
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <PlayCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Video Edukasi
            </h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Tonton berbagai video singkat yang menarik seputar pembelajaran bahasa dan budaya Aceh.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {VIDEO_LINKS.map((video, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm border border-dark/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full rounded-xl overflow-hidden bg-dark/5 aspect-[9/16]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
              <h3 className="font-serif font-bold text-dark mt-4 text-center">
                Video Edukasi {index + 1}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
