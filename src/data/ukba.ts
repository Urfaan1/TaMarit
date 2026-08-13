export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const soalSesi1: Question[] = [
  { id: 1, text: "Kata ganti orang pertama tunggal yang paling sopan (halus) dalam bahasa Aceh adalah...", options: ["Ulôn", "Keé", "Gata", "Jih"], correctAnswer: 0 },
  { id: 2, text: 'Kata tanya yang tepat untuk menanyakan tempat ("Di mana") dalam bahasa Aceh adalah...', options: ["Peue", "Pajan", "Pat", "Soe"], correctAnswer: 2 },
  { id: 3, text: 'Apa bahasa Aceh dari kata kerja dasar "Makan"?', options: ["Pajôh", "Jak", "Eh", "Duk"], correctAnswer: 0 },
  { id: 4, text: 'Sinonim dari kata "Sabé" dalam bahasa Aceh adalah...', options: ["Kadang-kadang", "Selalu/Terus-menerus", "Tidak pernah", "Jarang"], correctAnswer: 1 },
  { id: 5, text: 'Lawan kata (antonim) dari "Rayek" (besar) adalah...', options: ["Panyang", "Cut/Ubeut", "Manyang", "Golom"], correctAnswer: 1 },
  { id: 6, text: 'Kata yang tepat untuk menyatakan keterangan waktu "Besok" adalah...', options: ["Bungoh", "Singoh", "Baroe", "Uroe nyoe"], correctAnswer: 1 },
  { id: 7, text: 'Apa terjemahan bahasa Indonesia dari kalimat: "Lôn meuneuk jak u keudè"?', options: ["Saya sedang di pasar", "Saya ingin pergi ke pasar", "Saya baru pulang dari pasar", "Saya tidak suka ke pasar"], correctAnswer: 1 },
  { id: 8, text: "Sebutan untuk kakak perempuan kandung atau yang dituakan dalam kekerabatan Aceh adalah...", options: ["Cut Bang", "Adoe", "Cut Kak / Po Cut", "Nyak"], correctAnswer: 2 },
  { id: 9, text: 'Kata "Mata" dalam bahasa Aceh berarti sama, lalu apa sebutan untuk "Telinga"?', options: ["Geulinyueng", "Hidung", "Jaroe", "Gaki"], correctAnswer: 0 },
  { id: 10, text: 'Kata untuk menyebut bilangan "Delapan" dalam bahasa Aceh disebut...', options: ["Nam", "Tujôh", "Lapan", "Sikureueng"], correctAnswer: 2 },
  { id: 11, text: 'Untuk menyatakan penolakan "Tidak mau" secara tegas dalam bahasa Aceh, kata yang tepat adalah...', options: ["Hana", "H'an / H'an tém", "Bèk", "Trok"], correctAnswer: 1 },
  { id: 12, text: 'Penulisan dan penyebutan kata "Air" dalam bahasa Aceh adalah...', options: ["Ie", "Aie", "Iye", "Ee"], correctAnswer: 0 },
  { id: 13, text: 'Kata "Jangan" dalam membentuk kalimat larangan bahasa Aceh menggunakan kata...', options: ["Han", "Bèk", "Hana", "Kon"], correctAnswer: 1 },
  { id: 14, text: 'Makna yang tepat untuk sapaan "Peue haba gata uroe nyoe?" adalah...', options: ["Apa kamu sakit hari ini?", "Apa kabar kamu hari ini?", "Ke mana kamu pergi hari ini?", "Siapa nama kamu?"], correctAnswer: 1 },
  { id: 15, text: 'Warna "Merah" dalam bahasa Aceh disebut...', options: ["Mirah", "Itam", "Putéh", "Kuning"], correctAnswer: 0 },
  { id: 16, text: 'Kata sifat "Mangat" paling lazim digunakan untuk mendeskripsikan...', options: ["Rasa makanan yang lezat", "Pakaian yang indah", "Cuaca yang panas", "Orang yang baik"], correctAnswer: 0 },
  { id: 17, text: 'Kata ganti penunjuk "Itu" (agak jauh) dalam bahasa Aceh adalah...', options: ["Nyoe", "Nyan", "Jéh", "Sinoe"], correctAnswer: 1 },
  { id: 18, text: '"Buku nyan ka lôn baca". Penanda "ka" pada kalimat ini menunjukkan...', options: ["Pekerjaan sedang dilakukan (sedang)", "Pekerjaan sudah selesai dilakukan (sudah)", "Pekerjaan belum dilakukan (belum)", "Pekerjaan tidak bisa dilakukan (tidak)"], correctAnswer: 1 },
  { id: 19, text: 'Kata "Manok" dalam bahasa Aceh merujuk pada hewan...', options: ["Bebek", "Kambing", "Ayam", "Burung"], correctAnswer: 2 },
  { id: 20, text: 'Kata hubung "Dan" dalam percakapan bahasa Aceh sering disingkat/disebut...', options: ["Ngôn", "Atawa", "Tapi", "Sebab"], correctAnswer: 0 },
];

export const soalSesi2Mudah: Question[] = [
  { id: 21, text: 'Bagaimana cara mengucapkan "Terima kasih" dalam bahasa Aceh?', options: ["Teurimöng geunaséh", "Meu'ah", "Hana peue-peue", "Peue haba"], correctAnswer: 0 },
  { id: 22, text: 'Kata "Uroe" dalam bahasa Aceh berarti...', options: ["Malam", "Hari", "Bulan", "Tahun"], correctAnswer: 1 },
  { id: 23, text: 'Angka "Satu" dalam bahasa Aceh adalah...', options: ["Sa", "Dua", "Lhèe", "Peuet"], correctAnswer: 0 },
  { id: 24, text: 'Kata "Mak" atau "Ma" biasanya digunakan untuk memanggil...', options: ["Ayah", "Kakek", "Ibu", "Paman"], correctAnswer: 2 },
  { id: 25, text: 'Jika seseorang bertanya "Soe nan gata?", ia sedang menanyakan...', options: ["Di mana rumahmu?", "Siapa namamu?", "Berapa umurmu?", "Ke mana kamu pergi?"], correctAnswer: 1 },
  { id: 26, text: 'Kata "Malam" dalam bahasa Aceh adalah...', options: ["Uroe", "Seupôt", "Malam", "Bungoh"], correctAnswer: 2 },
  { id: 27, text: 'Kata sifat "Panyang" berarti...', options: ["Pendek", "Tinggi/Panjang", "Besar", "Kecil"], correctAnswer: 1 },
  { id: 28, text: 'Hewan "Kucing" dalam bahasa Aceh disebut...', options: ["Meong", "Mieng", "Mie", "Uleue"], correctAnswer: 2 },
  { id: 29, text: 'Apa arti dari kata "Gampông"?', options: ["Kota", "Desa / Kampung", "Provinsi", "Negara"], correctAnswer: 1 },
  { id: 30, text: 'Warna "Hitam" dalam bahasa Aceh disebut...', options: ["Putéh", "Mirah", "Itam", "Kuning"], correctAnswer: 2 },
  { id: 31, text: 'Kata kerja "Jak" memiliki arti...', options: ["Tidur", "Makan", "Duduk", "Pergi / Berjalan"], correctAnswer: 3 },
  { id: 32, text: 'Kata "Duk" berarti...', options: ["Duduk", "Berdiri", "Lari", "Lompat"], correctAnswer: 0 },
  { id: 33, text: 'Angka "Tiga" dalam bahasa Aceh adalah...', options: ["Sa", "Dua", "Lhèe", "Peuet"], correctAnswer: 2 },
  { id: 34, text: 'Kata untuk "Tidur" adalah...', options: ["Eh", "Jak", "Pajôh", "Duk"], correctAnswer: 0 },
  { id: 35, text: 'Kata "Gaki" merujuk pada anggota tubuh...', options: ["Tangan", "Kaki", "Kepala", "Perut"], correctAnswer: 1 },
  { id: 36, text: 'Jika Anda ingin berkata "Maaf", kata yang digunakan adalah...', options: ["Peue haba", "Teurimöng geunaséh", "Meu'ah", "Hana peue"], correctAnswer: 2 },
  { id: 37, text: 'Kata "Jaroe" berarti...', options: ["Kaki", "Mata", "Telinga", "Tangan"], correctAnswer: 3 },
  { id: 38, text: 'Sebutan untuk "Bapak/Ayah" dalam bahasa Aceh adalah...', options: ["Yah / Ayah / Abu", "Ma / Umi", "Adek", "Abang"], correctAnswer: 0 },
  { id: 39, text: 'Kata "Rumoh" memiliki arti...', options: ["Sekolah", "Rumah", "Pasar", "Jalan"], correctAnswer: 1 },
  { id: 40, text: 'Angka "Sepuluh" dalam bahasa Aceh adalah...', options: ["Lapan", "Sikureueng", "Siplôh", "Siblah"], correctAnswer: 2 }
];

export const soalSesi2Lanjutan: Question[] = [
  { id: 41, text: 'Ungkapan pepatah "Ureueng sabar subur, ureueng meusuwa meurumpok" memiliki makna filosofis...', options: ["Orang yang rajin akan kaya", "Orang yang sabar akan mendapatkan hasil yang baik", "Jangan mudah percaya pada orang lain", "Kemarahan akan merusak diri sendiri"], correctAnswer: 1 },
  { id: 42, text: 'Kata ganti kepemilikan orang kedua tunggal yang sopan (akhiran) adalah...', options: ["-ku", "-neuh", "-mu", "-jih"], correctAnswer: 1 },
  { id: 43, text: 'Apa makna kiasan dari "Meulisan ngon ie" (Gula merah dengan air)?', options: ["Sesuatu yang manis", "Sesuatu yang mustahil bersatu", "Sangat serasi dan tidak terpisahkan", "Mudah hancur"], correctAnswer: 2 },
  { id: 44, text: 'Kalimat "Lôn han ék jak le" mengandung makna...', options: ["Saya akan segera pergi", "Saya tidak sanggup pergi lagi", "Saya belum mau pergi", "Saya sudah sering pergi"], correctAnswer: 1 },
  { id: 45, text: 'Kata "Meutuah" sering digunakan oleh orang tua untuk...', options: ["Mendoakan agar anak mendapat berkah dan untung", "Memarahi anak yang nakal", "Menyuruh anak belajar", "Memanggil nama anak"], correctAnswer: 0 },
  { id: 46, text: 'Perbedaan penggunaan kata "Geutanyoe" dan "Kamoe" adalah...', options: ["Geutanyoe (kami - eksklusif), Kamoe (kita - inklusif)", "Geutanyoe (kita - inklusif), Kamoe (kami - eksklusif)", "Tidak ada perbedaan", "Keduanya untuk menyebutkan diri sendiri saja"], correctAnswer: 1 },
  { id: 47, text: 'Kata "Jeut" dalam konteks tertentu memiliki arti selain "Bisa/Boleh", yaitu...', options: ["Menjadi", "Tidak", "Harus", "Mungkin"], correctAnswer: 0 },
  { id: 48, text: 'Dalam dialek Aceh standar, frasa "Peue na haba?" dapat dijawab dengan sopan menggunakan...', options: ["Haba gèt, alhamdulillah", "Hana peue-peue", "Kakeuh", "Pajan-pajan"], correctAnswer: 0 },
  { id: 49, text: 'Kata "Neu-" yang diletakkan di awal kata kerja (seperti Neujak, Neupajôh) berfungsi sebagai...', options: ["Menunjukkan kalimat perintah kasar", "Bentuk penghormatan untuk orang kedua (Anda)", "Menunjukkan bentuk lampau", "Menunjukkan kata sifat"], correctAnswer: 1 },
  { id: 50, text: 'Kata "Cucô" merujuk pada...', options: ["Paman", "Kakek", "Cucu", "Keponakan"], correctAnswer: 2 },
  { id: 51, text: 'Kata "Tanyoe" adalah singkatan yang umum untuk...', options: ["Kamoe", "Geutanyoe", "Droeneuh", "Awaknyan"], correctAnswer: 1 },
  { id: 52, text: 'Bentuk pasif (di-) dalam bahasa Aceh sering menggunakan imbuhan...', options: ["Teu- / Geu-", "Me-", "Pe-", "Ne-"], correctAnswer: 0 },
  { id: 53, text: 'Kalimat "Bek neupeugah meunan" memiliki arti...', options: ["Tolong katakan begitu", "Jangan Anda katakan begitu", "Katakan sekali lagi", "Apakah Anda berkata begitu?"], correctAnswer: 1 },
  { id: 54, text: 'Kata sambung "Sebab" atau "Karena" dalam bahasa Aceh sering diucapkan sebagai...', options: ["Lantaran / Kareuna", "Walau", "Sedangkan", "Supaya"], correctAnswer: 0 },
  { id: 55, text: 'Kata "Ureueng" bermakna...', options: ["Hewan", "Tumbuhan", "Orang / Manusia", "Benda"], correctAnswer: 2 },
  { id: 56, text: 'Apa arti kalimat: "Droeneuh neujak ho?"', options: ["Dari mana Anda?", "Anda mau pergi ke mana?", "Siapa nama Anda?", "Kapan Anda pergi?"], correctAnswer: 1 },
  { id: 57, text: 'Dalam bahasa Aceh halus, untuk merujuk pada "Dia" (orang yang dihormati) digunakan kata...', options: ["Gopnyan", "Jih", "Awaknyan", "Droeneuh"], correctAnswer: 0 },
  { id: 58, text: 'Istilah "Gampông" dikepalai oleh seorang...', options: ["Geuchik", "Bupati", "Camat", "Gubernur"], correctAnswer: 0 },
  { id: 59, text: 'Kata "Pungoe" memiliki arti...', options: ["Pintar", "Gila", "Malu", "Takut"], correctAnswer: 1 },
  { id: 60, text: 'Pepatah "Pat ujeuen nyang hana pirang, pat prang nyang hana reuda" bermakna...', options: ["Setiap masalah pasti ada akhirnya", "Hujan selalu membawa berkah", "Perang membawa penderitaan", "Hidup selalu penuh cobaan"], correctAnswer: 0 }
];
