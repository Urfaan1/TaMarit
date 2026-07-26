"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BookOpen, Compass, Book, Landmark, Activity } from "lucide-react";

export default function SastraBudayaPage() {
  const categories = [
    {
      title: "Hikayat",
      description: "Jelajahi berbagai cerita rakyat dan hikayat peninggalan masa lalu Aceh.",
      href: "/sastra-budaya/hikayat",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      badgeVariant: "primary" as const,
    },
    {
      title: "Sejarah",
      description: "Pelajari sejarah maritim dan peristiwa penting peninggalan endatu Aceh.",
      href: "/sastra-budaya/sejarah",
      icon: <Compass className="w-8 h-8 text-accent-gold" />,
      badgeVariant: "gold" as const,
    },
    {
      title: "Hadih Maja",
      description: "Temukan ragam peribahasa dan falsafah hidup masyarakat Aceh.",
      href: "/sastra-budaya/hadih-maja",
      icon: <Book className="w-8 h-8 text-accent-green" />,
      badgeVariant: "green" as const,
    },
    {
      title: "Adat Aceh",
      description: "Pahami filosofi adat, arsitektur, dan tradisi masyarakat Aceh.",
      href: "/sastra-budaya/adat-aceh",
      icon: <Landmark className="w-8 h-8 text-primary" />,
      badgeVariant: "primary" as const,
    },
    {
      title: "Tarian Aceh",
      description: "Kenali dan pelajari ragam tarian tradisional Aceh yang kaya makna.",
      href: "/sastra-budaya/tarian-aceh",
      icon: <Activity className="w-8 h-8 text-accent-green" />,
      badgeVariant: "green" as const,
    },
  ];

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      {/* Title Header */}
      <Section
        background="cream"
        title="Khazanah Sastra & Budaya"
        subtitle="Pilih kategori yang ingin kamu pelajari untuk menjelajahi karya sastra klasik, falsafah Hadih Maja, sejarah, dan filosofi adat masyarakat Aceh."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {categories.map((category) => (
            <Link key={category.title} href={category.href}>
              <Card
                hoverable
                withMotif
                motifVariant="pinto"
                headerAccent={category.badgeVariant}
                className="bg-white border border-dark/5 p-6 h-full flex flex-col cursor-pointer transition-all hover:scale-[1.02]"
              >
                <div className="mb-4 p-3 bg-gray-50 rounded-2xl w-fit border border-gray-100">
                  {category.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-dark mb-2">
                  {category.title}
                </h3>
                <p className="text-dark/70">
                  {category.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
