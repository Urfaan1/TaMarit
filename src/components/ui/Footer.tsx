"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#071412] text-white/80 py-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 justify-between">
        
        {/* Kolom Kiri: Alamat */}
        <div className="flex-1 max-w-sm">
          <h3 className="text-xl font-serif font-bold text-white mb-4">
            Balai Bahasa Provinsi Aceh
          </h3>
          <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
            <MapPin className="w-5 h-5 text-[#4CAF96] shrink-0 mt-0.5" />
            <p>
              Jalan T. Panglima Nyak Makam No. 21, Kota Baru, Kecamatan Kuta Alam, Kota Banda Aceh, Aceh 23125
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Kontak & Jam Kerja */}
        <div className="flex-1 flex flex-col sm:flex-row gap-10">
          {/* Kontak */}
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#4CAF96]" />
                <a href="tel:+626517551096">(0651) 7551096</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4 text-[#4CAF96]" />
                <a href="https://wa.me/6282274487449" target="_blank" rel="noreferrer">+62 822-7448-7449</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#4CAF96]" />
                <a href="mailto:balaibahasaaceh@kemendikdasmen.go.id">balaibahasaaceh@kemendikdasmen.go.id</a>
              </li>
            </ul>
          </div>

          {/* Jam Kerja */}
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Jam Operasional
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#4CAF96] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white/80 mb-1">Senin – Kamis</p>
                  <p>08.00 – 16.00 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Clock className="w-4 h-4 text-transparent shrink-0" />
                <div>
                  <p className="font-medium text-white/80 mb-1">Jumat</p>
                  <p>08.00 – 16.30 WIB</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>© {currentYear} Balai Bahasa Provinsi Aceh. Semua hak cipta dilindungi.</p>
        <p>
          Dikembangkan untuk <span className="text-white/60 font-medium">TaMarit</span>
        </p>
      </div>
    </footer>
  );
}
