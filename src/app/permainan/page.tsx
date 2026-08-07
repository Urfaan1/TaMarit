"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Gamepad2, Type, Image as ImageIcon, LayoutGrid } from "lucide-react";

export default function PermainanPage() {
  const games = [
    {
      title: "Ular Tangga",
      description: "Bermain ular tangga interaktif sambil mempelajari dan menguji kosakata bahasa Aceh.",
      href: "/permainan/ular-tangga",
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      badgeVariant: "primary" as const,
    },
    {
      title: "Tebak Kata",
      description: "Uji seberapa luas perbendaharaan kata Anda dengan menebak arti kata bahasa Aceh.",
      href: "/permainan/tebak-kata",
      icon: <Type className="w-8 h-8 text-accent-gold" />,
      badgeVariant: "gold" as const,
    },
    {
      title: "Tebak Gambar",
      description: "Perhatikan gambar budaya atau benda khas Aceh dan tebak namanya dalam bahasa daerah.",
      href: "/permainan/tebak-gambar",
      icon: <ImageIcon className="w-8 h-8 text-accent-green" />,
      badgeVariant: "green" as const,
    },
    {
      title: "Susun Gambar",
      description: "Latih ketangkasan dan memori Anda dengan menyusun puzzle gambar-gambar ikonik Aceh.",
      href: "/permainan/susun-gambar",
      icon: <LayoutGrid className="w-8 h-8 text-primary" />,
      badgeVariant: "primary" as const,
    },
  ];

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Pusat Permainan"
        subtitle="Belajar bahasa dan budaya Aceh menjadi lebih seru dan menantang melalui berbagai permainan interaktif."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {games.map((game) => (
            <Link key={game.title} href={game.href}>
              <Card
                hoverable
                withMotif
                motifVariant="pinto"
                headerAccent={game.badgeVariant}
                className="bg-white border border-dark/5 p-6 h-full flex flex-col cursor-pointer transition-all hover:scale-[1.02]"
              >
                <div className="mb-4 p-3 bg-gray-50 rounded-2xl w-fit border border-gray-100">
                  {game.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-dark mb-2">
                  {game.title}
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  {game.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
