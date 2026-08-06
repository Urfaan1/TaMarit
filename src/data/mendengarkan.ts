export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface ListeningExercise {
  id: string;
  title: string;
  description: string;
  audioSrc: string;
  questions: Question[];
}

export const listeningData: ListeningExercise[] = [
  {
    id: "latihan-1",
    title: "Mengenal Sapaan Sehari-hari",
    description: "Dengarkan rekaman berikut dan jawablah pertanyaan terkait sapaan dalam bahasa Aceh.",
    audioSrc: "/audio/lagu-aceh-1.mp3", // Dummy audio for now
    questions: [
      {
        id: "q1",
        questionText: "Apa yang diucapkan pembicara di awal rekaman?",
        options: ["Peuhaba?", "Peue na haba?", "Kiban haba?", "Assalamu'alaikum"],
        correctAnswerIndex: 0
      },
      {
        id: "q2",
        questionText: "Bagaimana cara membalas sapaan 'Peuhaba'?",
        options: ["Göt", "Haba göt", "Hana peue-peue", "Lagee biasa"],
        correctAnswerIndex: 1
      },
      {
        id: "q3",
        questionText: "Kapan sapaan tersebut biasanya digunakan?",
        options: ["Saat pagi hari", "Saat bertemu teman", "Saat makan malam", "Saat berpisah"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "latihan-2",
    title: "Anggota Keluarga",
    description: "Simak dialog singkat berikut dan tentukan hubungan keluarga yang disebutkan.",
    audioSrc: "/audio/lagu-aceh-2.mp3", // Dummy audio for now
    questions: [
      {
        id: "q1",
        questionText: "Siapa yang sedang dibicarakan dalam dialog?",
        options: ["Ayah dan Anak", "Kakek dan Nenek", "Paman dan Bibi", "Adik dan Kakak"],
        correctAnswerIndex: 3
      },
      {
        id: "q2",
        questionText: "Apa panggilan untuk kakak laki-laki dalam bahasa Aceh?",
        options: ["Adoe", "Abang/Bang", "Cut", "Nyak"],
        correctAnswerIndex: 1
      }
    ]
  }
];
