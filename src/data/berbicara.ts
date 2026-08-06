export interface DialogueLine {
  speaker: string;
  text: string;
  isMainCharacter?: boolean; // Used for styling (e.g., right side vs left side)
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  image: string;
  dialogue: DialogueLine[];
}

export const berbicaraScenarios: Scenario[] = [
  {
    id: "sekolah",
    title: "Di Sekolah",
    description: "Percakapan antara Ali dan Beni mengenai aktivitas di sekolah.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    dialogue: [
      { speaker: "Ali", text: "Beni , na ka tamong sikula bunoe?", isMainCharacter: true },
      { speaker: "Beni", text: "Na. Kamoe mereunoe ngon guree lam Glah.", isMainCharacter: false },
      { speaker: "Ali", text: "euu , Poh padum woe sikula?", isMainCharacter: true },
      { speaker: "Beni", text: "Poh sa lewat bacut.", isMainCharacter: false },
      { speaker: "Ali", text: "ngoen soe kawoe man?", isMainCharacter: true },
      { speaker: "Beni", text: "ngoen ayah loen.", isMainCharacter: false },
    ]
  },
  {
    id: "pasar",
    title: "Di Pasar",
    description: "Ayu dan Mak sedang berbelanja kebutuhan di pasar.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    dialogue: [
      { speaker: "Ayu", text: "Mak, na peng limong ploh ribe? loen neuk bloe eungkot.", isMainCharacter: true },
      { speaker: "Mak", text: "Na. Bloe eungkot ngon boh manok lom, campli bek tuwoe.", isMainCharacter: false },
      { speaker: "Ayu", text: "Get mak, sira mantong na?", isMainCharacter: true },
      { speaker: "Mak", text: "Na bacut teuk, hana peu are.", isMainCharacter: false },
      { speaker: "Ayu", text: "get mak, bah loen bloe", isMainCharacter: true },
    ]
  },
  {
    id: "lapangan",
    title: "Di Lapangan",
    description: "Habib dan Riyadh berbincang santai di bawah pohon.",
    image: "https://images.unsplash.com/photo-1501633519183-f66f91d5ceeb?auto=format&fit=crop&q=80&w=800",
    dialogue: [
      { speaker: "Habib", text: "Yadh ,yak tajak duek iyup bak kayee nyan.", isMainCharacter: true },
      { speaker: "Riyadh", text: "han ek loen, na cicem i ateuh bak kaye nyan", isMainCharacter: false },
      { speaker: "Habib", text: "man? yoee keu cicem?", isMainCharacter: true },
      { speaker: "Riyadh", text: "koen yoee, jitoh ek enteuk.", isMainCharacter: false },
      { speaker: "Habib", text: "hana peu, bah ku cruek ngoen batee.", isMainCharacter: true },
      { speaker: "Riyadh", text: "bereh bib.", isMainCharacter: false },
    ]
  },
  {
    id: "dapur",
    title: "Di Dapur",
    description: "Ayu membantu Mak mempersiapkan masakan di dapur.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=800",
    dialogue: [
      { speaker: "Ayu", text: "Mak, kana pingan lam mari?", isMainCharacter: true },
      { speaker: "Mak", text: "Na, coek ju, na sikin cit inan.", isMainCharacter: false },
      { speaker: "Ayu", text: "Beulangöng nyan keu peu, Mak?", isMainCharacter: true },
      { speaker: "Mak", text: "Keu magun kuah. Minyeuk ngon sira kana inan.", isMainCharacter: false },
      { speaker: "Ayu", text: "Kaneöt na mak?", isMainCharacter: true },
      { speaker: "Mak", text: "Na. Kaneöt keu tagun bu inan.", isMainCharacter: false },
      { speaker: "Ayu", text: "Oh, get mak. Lon bantu i dapô beoh.", isMainCharacter: true },
    ]
  },
  {
    id: "perpustakaan",
    title: "Di Perpustakaan",
    description: "Ani dan Budi mencari buku dan belajar bersama di perpustakaan.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    dialogue: [
      { speaker: "Ani", text: "duek ju disinan, loen jak cok buku dile.", isMainCharacter: true },
      { speaker: "Budi", text: "Na buku pelajaran bak rak nyan?", isMainCharacter: false },
      { speaker: "Ani", text: "Na. Buku nyan ka lon teume, tapi kereutah hana sep.", isMainCharacter: true },
      { speaker: "Budi", text: "Hana peu are , eunteuk tapike lom", isMainCharacter: false },
      { speaker: "Ani", text: "get , jak tapeugot ju man tugas nyan.", isMainCharacter: true },
    ]
  }
];
