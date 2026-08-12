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
    titleAceh: "Serunya Belajar Tari Ula-Ula Lembing",
    titleId: "Buku Cerita Anak",
    description: "Penerbit: Balai Bahasa Provinsi Aceh (Agustus 2022). Diceritakan oleh: Isra Wahyuni. Disunting oleh: Rizki Rinaldi & Murhaban. Ilustrasi: Tika Ardianti.",
    coverImage: "",
    author: "Cut Ida Agustina & Nurul Nisfu Syahriy",
    translator: "Muntasir Wan Diman",
    fileUrl: "https://drive.google.com/file/d/1PSjL7landDZBHFGVaVBtBEy5yWVr0J3-/view?usp=drive_link",
    color: "bg-red-100",
  },
  {
    id: "buku-2",
    titleAceh: "Serue dan Depik Lut Tawar",
    titleId: "Buku Cerita Anak",
    description: "Penerbit: Balai Bahasa Provinsi Aceh (Juli 2022). Diceritakan oleh: Vera Hastuti. Disunting oleh: Murhaban & Harfiandi. Ilustrasi: Tika Ardianti.",
    coverImage: "",
    author: "Cut Ida Agustina & Nurul Nisfu Syahriy",
    translator: "Rismawati",
    fileUrl: "https://drive.google.com/file/d/1fw_JsvpDBAB1jNf3dJMJ4yzWCLvakwd-/view?usp=drive_link",
    color: "bg-blue-100",
  },
  {
    id: "buku-3",
    titleAceh: "Peuneurah Plik Nenek",
    titleId: "Buku Cerita Anak",
    description: "Penerbit: Balai Bahasa Provinsi Aceh (Juli 2022). Diceritakan oleh: Muammar Khatami. Disunting oleh: Faisal & Murhaban. Ilustrasi: Firmansyah Olexstudio.",
    coverImage: "",
    author: "Cut Ida Agustina & Nurul Nisfu Syahriy",
    translator: "Muhammad Iqbal",
    fileUrl: "https://drive.google.com/file/d/1QD8Krlqam-qjQ6Sta3aVQ8G8ZVmwqj4L/view?usp=drive_link",
    color: "bg-green-100",
  },
  {
    id: "buku-4",
    titleAceh: "Pala di Tanah Anak Jamu",
    titleId: "Terjemahan Cerita dari Aceh Selatan",
    description: "Penerbit: Balai Bahasa Provinsi Aceh (2022). Diceritakan oleh: Ermi Hamzi. Disunting oleh: Murhaban & Dilla Yefaneza. Ilustrasi: Firmansyah Olexstudio.",
    coverImage: "",
    author: "Cut Ida Agustina & Nurul Nisfu Syahriy",
    translator: "Tanzilul Authar",
    fileUrl: "https://drive.google.com/file/d/1eiNXAMA5Bj7glBBtoJekbEfiCVGmolgN/view?usp=drive_link",
    color: "bg-orange-100",
  },
  {
    id: "buku-5",
    titleAceh: "Kerawang Gayo Kak Ipak",
    titleId: "Terjemahan Cerita dari Bener Meriah",
    description: "Penerbit: Balai Bahasa Provinsi Aceh (Juli 2022). Diceritakan oleh: Wulandari Putri Kemas. Disunting oleh: Harfiandi & Murhaban. Ilustrasi: Firmansyah Olexstudio.",
    coverImage: "",
    author: "Cut Ida Agustina & Nurul Nisfu Syahriy",
    translator: "Masna Fitri",
    fileUrl: "https://drive.google.com/file/d/1LIdUpoLQm8_CZZZ-hgNMuco4-t7c0SBD/view?usp=drive_link",
    color: "bg-purple-100",
  }
];
