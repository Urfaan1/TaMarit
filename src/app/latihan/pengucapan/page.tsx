"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Mic, Volume2, Info, Lightbulb, AlertTriangle, ArrowLeft, Headphones, BookOpen } from "lucide-react";
import Link from "next/link";

export default function PengucapanPage() {
  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Panduan Pengucapan"
        subtitle="Pelajari cara melafalkan vokal, konsonan, dan intonasi khas dalam bahasa Aceh agar makna kata tersampaikan dengan tepat."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-6">
          <Link href="/#latihan" className="inline-flex items-center gap-2 text-sm font-bold text-dark/60 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Pusat Latihan
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          
          {/* 1. Vokal */}
          <Card hoverable={false} className="bg-white border border-dark/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark">1. Mengenal Huruf Vokal</h3>
            </div>
            <p className="text-dark/70 mb-6 leading-relaxed">
              Bahasa Aceh memiliki bunyi vokal yang lebih beragam dibandingkan Bahasa Indonesia. Oleh karena itu, pelafalan vokal perlu diperhatikan agar makna kata tidak berubah.
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-dark/10">
                    <th className="py-3 px-4 font-bold text-dark">Huruf</th>
                    <th className="py-3 px-4 font-bold text-dark">Cara Pengucapan</th>
                    <th className="py-3 px-4 font-bold text-dark">Contoh</th>
                  </tr>
                </thead>
                <tbody className="text-dark/80">
                  <tr className="border-b border-dark/5 hover:bg-[#FAF6EE]/50">
                    <td className="py-3 px-4 font-mono font-bold text-primary">a</td>
                    <td className="py-3 px-4">seperti pada kata <em>anak</em></td>
                    <td className="py-3 px-4 font-bold">aneuk</td>
                  </tr>
                  <tr className="border-b border-dark/5 hover:bg-[#FAF6EE]/50">
                    <td className="py-3 px-4 font-mono font-bold text-primary">i</td>
                    <td className="py-3 px-4">seperti pada kata <em>ikan</em></td>
                    <td className="py-3 px-4 font-bold">ie</td>
                  </tr>
                  <tr className="border-b border-dark/5 hover:bg-[#FAF6EE]/50">
                    <td className="py-3 px-4 font-mono font-bold text-primary">u</td>
                    <td className="py-3 px-4">seperti pada kata <em>umur</em></td>
                    <td className="py-3 px-4 font-bold">ureuëng</td>
                  </tr>
                  <tr className="border-b border-dark/5 hover:bg-[#FAF6EE]/50">
                    <td className="py-3 px-4 font-mono font-bold text-primary">e</td>
                    <td className="py-3 px-4">seperti pada kata <em>emas</em></td>
                    <td className="py-3 px-4 font-bold">peue</td>
                  </tr>
                  <tr className="border-b border-dark/5 hover:bg-[#FAF6EE]/50">
                    <td className="py-3 px-4 font-mono font-bold text-primary">o</td>
                    <td className="py-3 px-4">seperti pada kata <em>obat</em></td>
                    <td className="py-3 px-4 font-bold">boh</td>
                  </tr>
                  <tr className="hover:bg-[#FAF6EE]/50">
                    <td className="py-3 px-4 font-mono font-bold text-primary">ë</td>
                    <td className="py-3 px-4">bunyi pepet seperti pada kata <em>besar</em></td>
                    <td className="py-3 px-4 font-bold">ureuëng, geutanyoe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-gold/10 p-4 rounded-xl border border-accent-gold/20">
              <h4 className="text-sm font-bold text-dark flex items-center gap-2 mb-2">
                <Volume2 className="w-4 h-4 text-accent-gold" /> Latihan Vokal
              </h4>
              <p className="text-sm text-dark/70 mb-3">Bacalah kata berikut dengan lantang:</p>
              <div className="flex flex-wrap gap-2">
                {['aneuk', 'geutanyoe', 'peue', 'boh', 'ie'].map((word, i) => (
                  <Badge key={i} variant="outline" className="font-bold text-base px-3 py-1">{word}</Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* 2. Konsonan */}
          <Card hoverable={false} className="bg-white border border-dark/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-green/10 rounded-lg text-accent-green">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark">2. Huruf Konsonan</h3>
            </div>
            <p className="text-dark/70 mb-6 leading-relaxed">
              Sebagian besar konsonan dalam bahasa Aceh dilafalkan sama persis dengan Bahasa Indonesia. Berikut beberapa contoh dasarnya:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { h: 'b', c: 'bak' }, { h: 'd', c: 'duek' }, { h: 'g', c: 'guree' },
                { h: 'k', c: 'kayee' }, { h: 'l', c: 'laot' }, { h: 'm', c: 'mak' },
                { h: 'n', c: 'naleung' }, { h: 'p', c: 'peng' }, { h: 'r', c: 'rumoh' },
                { h: 's', c: 'sikin' }
              ].map((item, i) => (
                <div key={i} className="bg-[#FAF6EE] p-3 rounded-lg text-center border border-dark/5">
                  <span className="block font-mono text-xl font-bold text-accent-green mb-1">{item.h}</span>
                  <span className="text-dark/70 text-sm">{item.c}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* 3. Bunyi Gabungan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hoverable={false} className="bg-white border border-dark/5 p-6">
              <h3 className="font-serif text-xl font-bold text-dark mb-3">3. Bunyi "ng"</h3>
              <p className="text-dark/70 text-sm mb-4">Diucapkan seperti pada kata "bang" dalam Bahasa Indonesia.</p>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-dark/5 pb-2 text-sm">
                  <span className="font-bold">gunong</span><span className="text-dark/50">gu-nong</span>
                </li>
                <li className="flex justify-between border-b border-dark/5 pb-2 text-sm">
                  <span className="font-bold">geunang</span><span className="text-dark/50">geu-nang</span>
                </li>
                <li className="flex justify-between border-b border-dark/5 pb-2 text-sm">
                  <span className="font-bold">eungkot</span><span className="text-dark/50">eung-kot</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="font-bold">bungong</span><span className="text-dark/50">bu-ngong</span>
                </li>
              </ul>
            </Card>

            <Card hoverable={false} className="bg-white border border-dark/5 p-6">
              <h3 className="font-serif text-xl font-bold text-dark mb-3">4. Bunyi "ny"</h3>
              <p className="text-dark/70 text-sm mb-4">Huruf ny diucapkan seperti pada kata "nyanyi".</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" size="md">nyan</Badge>
                <Badge variant="outline" size="md">nyoe</Badge>
                <Badge variant="outline" size="md">nyak</Badge>
                <Badge variant="outline" size="md">nyoek</Badge>
              </div>
            </Card>

            <Card hoverable={false} className="bg-white border border-dark/5 p-6">
              <h3 className="font-serif text-xl font-bold text-dark mb-3">5. Bunyi "sy"</h3>
              <p className="text-dark/70 text-sm mb-4">Bunyi sy sama seperti pada kata syukur.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" size="md">syarat</Badge>
                <Badge variant="outline" size="md">syedara</Badge>
                <Badge variant="outline" size="md">syariat</Badge>
              </div>
            </Card>

            <Card hoverable={false} className="bg-white border border-dark/5 p-6">
              <h3 className="font-serif text-xl font-bold text-dark mb-3">6. Bunyi "kh"</h3>
              <p className="text-dark/70 text-sm mb-4">Berasal dari pengaruh bahasa Arab. Pelafalannya dari tenggorokan.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" size="md">khalifah</Badge>
                <Badge variant="outline" size="md">akhir</Badge>
                <Badge variant="outline" size="md">khatam</Badge>
              </div>
            </Card>
          </div>

          {/* 7 & 8. Bunyi Khas */}
          <Card hoverable={false} className="bg-white border border-dark/5 p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-dark mb-6">Bunyi Khas Bahasa Aceh</h3>
            
            <div className="mb-8 border-b border-dark/5 pb-8">
              <h4 className="text-lg font-bold text-primary mb-2">7. Bunyi "eu"</h4>
              <p className="text-dark/70 mb-4 text-sm leading-relaxed">
                Ini merupakan bunyi yang paling khas dalam Bahasa Aceh. Bunyi "eu" tidak sama dengan "e" ataupun "u". <strong>Posisi bibir sedikit membulat, sementara lidah berada di tengah mulut.</strong>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                {[
                  { w: 'geutanyoe', a: 'kita' }, { w: 'peue', a: 'apa' }, 
                  { w: 'keuneubah', a: 'pusaka' }, { w: 'eungkot', a: 'ikan' }, 
                  { w: 'meureudu', a: 'Meureudu' }
                ].map((item, i) => (
                  <div key={i} className="bg-[#FAF6EE] p-3 rounded-lg text-center border border-dark/5">
                    <span className="block font-bold text-dark mb-1">{item.w}</span>
                    <span className="text-dark/50 text-xs uppercase tracking-wider">{item.a}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/5 p-3 rounded-lg flex gap-3 items-center">
                <Volume2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">Latihan: Ucapkan perlahan kata-kata di atas!</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-accent-gold mb-2">8. Bunyi "oe"</h4>
              <p className="text-dark/70 mb-4 text-sm">
                Huruf oe dibaca seperti gabungan bunyi "o" dan "e" yang ditarik secara bersamaan.
              </p>
              <div className="flex gap-3">
                <Badge variant="gold" size="md">boeh</Badge>
                <Badge variant="gold" size="md">moe</Badge>
                <Badge variant="gold" size="md">soe</Badge>
              </div>
            </div>
          </Card>

          {/* 9. Intonasi */}
          <Card hoverable={false} className="bg-primary text-white p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold mb-4">9. Intonasi Bahasa Aceh</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Bahasa Aceh memiliki intonasi yang tegas namun tetap lembut saat diucapkan secara alami.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-5 rounded-xl">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  Kalimat Tanya <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Nada Naik ↗</span>
                </h4>
                <p className="text-xl font-serif font-bold italic mb-1">"Peue haba?"</p>
                <p className="text-white/60 text-sm">(Apa kabar?)</p>
                <p className="text-xs mt-3 text-white/80 border-t border-white/20 pt-2">Diakhiri dengan nada naik pada kata terakhir.</p>
              </div>
              
              <div className="bg-white/10 p-5 rounded-xl">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  Kalimat Biasa <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Nada Datar ➝</span>
                </h4>
                <p className="text-xl font-serif font-bold italic mb-1">"Lôn jak u sikula."</p>
                <p className="text-white/60 text-sm">(Saya pergi ke sekolah.)</p>
                <p className="text-xs mt-3 text-white/80 border-t border-white/20 pt-2">Menggunakan nada datar layaknya pernyataan biasa.</p>
              </div>
            </div>
          </Card>

          {/* 10. Latihan Membaca & 11. Kesalahan Umum */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card hoverable={false} className="bg-white border border-dark/5 p-6">
              <h3 className="font-serif text-xl font-bold text-dark mb-5 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent-green" /> 10. Latihan Membaca
              </h3>
              <div className="space-y-4">
                {[
                  { a: "Lôn jak u sikula.", i: "Saya pergi ke sekolah." },
                  { a: "Kamoe bloe eungkot di pasai.", i: "Kami membeli ikan di pasar." },
                  { a: "Mak ka peugot bu.", i: "Ibu sudah memasak nasi." },
                  { a: "Geutanyoe meurunoe basa Aceh.", i: "Kita belajar Bahasa Aceh." },
                  { a: "Peue haba?", i: "Apa kabar?" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FAF6EE] p-3 rounded-lg border border-dark/5">
                    <span className="text-xs font-bold text-dark/40 uppercase tracking-wider mb-1 block">Latihan {idx + 1}</span>
                    <p className="font-bold text-dark mb-1">{item.a}</p>
                    <p className="text-sm text-dark/60">{item.i}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card hoverable={false} className="bg-white border border-dark/5 p-6">
              <h3 className="font-serif text-xl font-bold text-dark mb-5 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" /> 11. Sering Salah Diucapkan
              </h3>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-dark/10">
                    <th className="py-2 text-dark font-bold">Penulisan</th>
                    <th className="py-2 text-dark font-bold text-right">Pelafalan Tepat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark/5">
                  {[
                    ['geutanyoe', 'geu-ta-nyoe'],
                    ['peue', 'peu-e'],
                    ['eungkot', 'eung-kot'],
                    ['aneuk', 'a-neuk'],
                    ['rumoh', 'ru-moh'],
                    ['ureuëng', 'u-reu-eng'],
                    ['meureudu', 'meu-reu-du'],
                    ['keuneubah', 'keu-neu-bah'],
                    ['bungong', 'bu-ngong'],
                    ['gunong', 'gu-nong']
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 font-bold text-dark">{row[0]}</td>
                      <td className="py-2.5 text-right font-mono text-dark/60">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

          </div>

          {/* 12. Tips */}
          <Card hoverable={false} className="bg-[#FAF6EE] border border-accent-gold/20 p-6 md:p-8">
            <h3 className="font-serif text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-accent-gold" /> 12. Tips Melatih Pelafalan
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-3">
                <Headphones className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark/80">Dengarkan penutur asli Bahasa Aceh melalui percakapan, lagu, atau video.</span>
              </li>
              <li className="flex gap-3">
                <Volume2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark/80">Ulangi setiap kata sebanyak 5–10 kali hingga terbiasa.</span>
              </li>
              <li className="flex gap-3">
                <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark/80">Bacalah dialog dalam modul dengan suara lantang.</span>
              </li>
              <li className="flex gap-3">
                <Mic className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark/80">Rekam suara sendiri, lalu bandingkan dengan penutur asli.</span>
              </li>
            </ul>
          </Card>

        </div>
      </div>
    </div>
  );
}
