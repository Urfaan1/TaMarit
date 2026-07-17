import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const articlesData = [
  {
    category: "sastra",
    title: "Hikayat Prang Sabi",
    author: "Tgk. Chik Pante Kulu",
    period: "Abad ke-19",
    summary: "Karya sastra epik kepahlawanan legendaris Aceh yang digubah untuk membangkitkan kesadaran membela tanah air dari penjajahan.",
    fullContent: "Hikayat Prang Sabi adalah karya sastra monumental berbentuk syair Aceh yang disusun oleh Teungku Chik Pante Kulu pada tahun 1881 saat beliau dalam perjalanan pulang dari Mekkah. Syair ini dibacakan di berbagai masjid dan garis pertahanan untuk memotivasi prajurit Aceh mempertahankan tanah air. Karya ini melambangkan keberanian religius dan kesadaran spiritual yang mendalam, menjadikannya salah satu motor penggerak perjuangan rakyat Aceh terlama.",
    badgeText: "Hikayat",
    badgeVariant: "primary",
    keyTerm: "Prang Sabi",
    keyTermMeaning: "Perjuangan mempertahankan iman dan kedaulatan tanah air secara kolektif.",
  },
  {
    category: "sastra",
    title: "Khazanah Hadih Maja",
    author: "Anonim / Warisan Lisan",
    period: "Turun-temurun",
    summary: "Kompilasi pepatah, petuah bijak, dan nilai etis kehidupan bermasyarakat rakyat Aceh yang diwariskan lisan.",
    fullContent: "Hadih Maja adalah bentuk peribahasa, sindiran, tamsilan, dan falsafah hidup lisan masyarakat Aceh. Ia berfungsi sebagai hukum adat tidak tertulis yang mendidik akhlak, menjaga harmoni sosial, dan menasihati kepemimpinan. Hadih Maja sering kali diucapkan dalam pidato adat perkawinan (seumapa), pertemuan desa, maupun pengajaran moral kepada anak-anak.",
    badgeText: "Hadih Maja",
    badgeVariant: "gold",
    keyTerm: "Seumapa",
    keyTermMeaning: "Tradisi berbalas pantun adat Aceh dalam upacara penyambutan tamu pengantin.",
  },
  {
    category: "sastra",
    title: "Hikayat Malem Diwa",
    author: "Warisan Rakyat",
    period: "Klasik",
    summary: "Kisah romansa fantasi tradisional tentang kepahlawanan, cinta surgawi, dan makhluk mitologi khas nusantara.",
    fullContent: "Hikayat Malem Diwa menceritakan perjalanan petualangan pemuda bernama Malem Diwa yang memiliki ilmu bela diri tinggi dan kisah cintanya dengan Putri Bungsu dari khayangan. Cerita ini memadukan mitologi lokal pra-Islam dengan nilai moralitas kesantunan sosial, menjadikannya dongeng pengantar tidur yang mendidik imajinasi sastra generasi muda Aceh selama berabad-abad.",
    badgeText: "Fiksi Klasik",
    badgeVariant: "green",
    keyTerm: "Malem",
    keyTermMeaning: "Gelar kehormatan sastra lisan Aceh untuk pemuda tampan dan bijaksana.",
  },
  {
    category: "budaya",
    title: "Rumoh Aceh: Arsitektur Cerdas Tahan Gempa",
    summary: "Struktur rumah panggung kayu khas Aceh yang didesain adaptif terhadap bencana alam tanpa paku besi.",
    fullContent: "Rumoh Aceh merupakan rumah panggung kayu setinggi 2.5 hingga 3 meter di atas tiang kayu bulat pilihan. Konstruksi sambungan kayu tidak memakai paku melainkan pasak kayu (baji) dan tali ijuk. Desain elastis ini terbukti sangat kokoh menahan guncangan gempa tektonik tinggi. Kolong bawah berfungsi untuk menyimpan alat penumbuk padi (jengki), menyimpan hasil panen, sekaligus meminimalkan ancaman banjir luapan sungai.",
    badgeText: "Arsitektur",
    badgeVariant: "green",
    keyTerm: "Jengki",
    keyTermMeaning: "Alat tradisional penumbuk padi bertenaga kayuhan kaki terbuat dari kayu tebal.",
  },
  {
    category: "budaya",
    title: "Rhythm & Solidarity: Tari Saman & Seudati",
    summary: "Kesenian pertunjukan tepuk tangan dan dada berirama cepat yang melambangkan kebersamaan dan kekompakan.",
    fullContent: "Tari Saman (dari dataran tinggi Gayo) dan Tari Seudati (dari pesisir) adalah seni gerak tubuh berirama tanpa iringan alat musik eksternal, melainkan murni dari vokal nyanyian (syahi) dan ketukan tubuh penari. Gerakan yang presisi, cepat, dan serasi mengekspresikan nilai sportivitas tinggi, kepemimpinan yang harmonis, serta rasa solidaritas kebersamaan komunal.",
    badgeText: "Seni Tari",
    badgeVariant: "primary",
    keyTerm: "Syahi",
    keyTermMeaning: "Penyanyi utama pembawa syair pengarah tempo gerakan tari tradisional.",
  },
  {
    category: "budaya",
    title: "Kejayaan Jalur Rempah Maritim",
    summary: "Sejarah emas Bandar Aceh Darussalam sebagai pelabuhan perdagangan komoditas lada dan rempah dunia.",
    fullContent: "Pada abad ke-16 dan 17, Kesultanan Aceh Darussalam menempati posisi sentral dalam perdagangan lada global. Pelabuhannya terbuka bagi pedagang Arab, Tiongkok, India, Inggris, dan Belanda. Sistem kelautan diawasi ketat oleh Panglima Laôt yang mengatur pajak kapal, keselamatan nelayan, dan kelestarian pantai. Ekspor rempah melimpah ini mendanai pembangunan infrastruktur megah dan menegakkan kedaulatan politik Aceh di kancah global.",
    badgeText: "Sejarah Maritim",
    badgeVariant: "gold",
    keyTerm: "Panglima Laôt",
    keyTermMeaning: "Pemimpin adat nelayan Aceh pelindung aturan kelautan tradisional.",
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const a of articlesData) {
    const article = await prisma.article.create({
      data: a,
    })
    console.log(`Created article with id: ${article.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
