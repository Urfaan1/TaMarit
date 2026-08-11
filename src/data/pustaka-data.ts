export interface PustakaBook {
  id: string;
  titleAceh: string;
  titleId: string;
  description: string;
  coverImage: string;
  author: string;
  translator: string;
  fileUrl: string; // Tautan ke file PDF / halaman baca
  color: string;
}

export const pustakaData: PustakaBook[] = [
  {
    id: "buku-1",
    titleAceh: "Aneuk Mie Nyang Carong",
    titleId: "Anak Kucing yang Pintar",
    description: "Kisah seekor anak kucing yang cerdik dalam mencari makanan dan membantu teman-temannya di desa.",
    coverImage: "/images/pustaka-placeholder-1.jpg", // Gambar placeholder, nanti bisa diganti
    author: "Fulan bin Fulan",
    translator: "Tim TaMarit",
    fileUrl: "/docs/buku-1.pdf", // File placeholder
    color: "bg-orange-100",
  },
  {
    id: "buku-2",
    titleAceh: "Raseuki Lam Blang",
    titleId: "Rezeki di Sawah",
    description: "Buku cerita yang menceritakan tentang keindahan sawah dan pentingnya bersyukur atas hasil panen.",
    coverImage: "/images/pustaka-placeholder-2.jpg",
    author: "Fulanah binti Fulan",
    translator: "Tim TaMarit",
    fileUrl: "/docs/buku-2.pdf",
    color: "bg-green-100",
  },
  {
    id: "buku-3",
    titleAceh: "Hikayat Si Kancil",
    titleId: "Kisah Si Kancil",
    description: "Cerita klasik kancil yang cerdik, diceritakan kembali dalam dua bahasa untuk anak-anak.",
    coverImage: "/images/pustaka-placeholder-3.jpg",
    author: "Anonim",
    translator: "Tim TaMarit",
    fileUrl: "/docs/buku-3.pdf",
    color: "bg-blue-100",
  }
];
