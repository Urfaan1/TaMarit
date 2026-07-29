export type AcehQuiz = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export const acehQuizData: AcehQuiz[] = [
  {
    id: 1,
    question: 'Apa bahasa Aceh dari "Makan"?',
    options: ['Jep', 'Pajoh', 'Jak', 'Eh'],
    answer: 'Pajoh',
  },
  {
    id: 2,
    question: 'Apa bahasa Aceh dari "Minum"?',
    options: ['Jep', 'Mita', 'Pajoh', 'Jak'],
    answer: 'Jep',
  },
  {
    id: 3,
    question: 'Apa arti kata "Jak" dalam bahasa Indonesia?',
    options: ['Pergi', 'Datang', 'Tidur', 'Duduk'],
    answer: 'Pergi',
  },
  {
    id: 4,
    question: 'Apa bahasa Aceh dari "Tidur"?',
    options: ['Eh', 'Duk', 'Dong', 'Jak'],
    answer: 'Eh',
  },
  {
    id: 5,
    question: 'Apa bahasa Aceh dari "Air"?',
    options: ['Ie', 'Apui', 'Angen', 'Tanoh'],
    answer: 'Ie',
  },
  {
    id: 6,
    question: 'Apa arti kata "Rumoh" dalam bahasa Indonesia?',
    options: ['Sekolah', 'Rumah', 'Jalan', 'Pasar'],
    answer: 'Rumah',
  },
  {
    id: 7,
    question: 'Apa bahasa Aceh dari "Satu"?',
    options: ['Dua', 'Lhee', 'Sa', 'Peuet'],
    answer: 'Sa',
  },
  {
    id: 8,
    question: 'Apa bahasa Aceh dari "Dua"?',
    options: ['Dua', 'Lhee', 'Sa', 'Peuet'],
    answer: 'Dua',
  },
  {
    id: 9,
    question: 'Apa bahasa Aceh dari "Tiga"?',
    options: ['Dua', 'Lhee', 'Sa', 'Peuet'],
    answer: 'Lhee',
  },
  {
    id: 10,
    question: 'Apa bahasa Aceh dari "Matahari"?',
    options: ['Buleuen', 'Bintang', 'Uroe', 'Langet'],
    answer: 'Uroe',
  },
  {
    id: 11,
    question: 'Apa arti kata "Buleuen" dalam bahasa Indonesia?',
    options: ['Bulan', 'Bintang', 'Matahari', 'Awan'],
    answer: 'Bulan',
  },
  {
    id: 12,
    question: 'Apa bahasa Aceh dari "Ayah"?',
    options: ['Ma', 'Yah', 'Adoe', 'Awa'],
    answer: 'Yah',
  },
  {
    id: 13,
    question: 'Apa arti kata "Ma" dalam bahasa Indonesia?',
    options: ['Ayah', 'Ibu', 'Kakak', 'Adik'],
    answer: 'Ibu',
  },
  {
    id: 14,
    question: 'Apa bahasa Aceh dari "Besar"?',
    options: ['Ubeut', 'Raya', 'Panyang', 'Paneuk'],
    answer: 'Raya',
  },
  {
    id: 15,
    question: 'Apa arti kata "Ubeut" dalam bahasa Indonesia?',
    options: ['Besar', 'Kecil', 'Tinggi', 'Rendah'],
    answer: 'Kecil',
  }
];

// Helper untuk mengacak pertanyaan
export const getRandomQuiz = (): AcehQuiz => {
  const randomIndex = Math.floor(Math.random() * acehQuizData.length);
  return acehQuizData[randomIndex];
};
