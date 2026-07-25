"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowLeft, BookOpen, User, Landmark } from "lucide-react";
import Link from "next/link";

export default function SejarahPage() {
  const sejarahList = [
    {
      title: "1. Kerajaan Samudra Pasai",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Kerajaan Samudra Pasai merupakan kerajaan Islam pertama di Nusantara yang berdiri sekitar abad ke-13 M di wilayah yang sekarang dikenal sebagai Kabupaten Aceh Utara. Kerajaan ini didirikan oleh Sultan Malik As-Saleh, yang sebelumnya dikenal dengan nama Meurah Silu. Samudra Pasai berkembang menjadi pusat perdagangan internasional karena letaknya yang strategis di jalur pelayaran Selat Malaka. Pedagang dari Arab, Persia, India, dan Tiongkok sering singgah untuk melakukan perdagangan sekaligus menyebarkan agama Islam. Selain menjadi pusat perdagangan, Samudra Pasai juga menjadi pusat pendidikan Islam. Banyak ulama datang untuk mengajarkan ilmu agama kepada masyarakat. Mata uang emas yang disebut dirham digunakan sebagai alat transaksi, menunjukkan bahwa kerajaan ini telah memiliki sistem ekonomi yang maju.</p>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-primary mb-3 flex items-center gap-1.5"><User className="w-3.5 h-3.5"/> Tokoh Penting</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Sultan Malik As-Saleh</li>
                <li>Sultan Muhammad Malik Az-Zahir</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai yang Dapat Dipetik</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Semangat berdagang</li>
                <li>Menuntut ilmu</li>
                <li>Toleransi terhadap pendatang</li>
                <li>Penyebaran Islam secara damai</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Kesultanan Aceh Darussalam",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Kesultanan Aceh Darussalam berdiri pada akhir abad ke-15 dan berkembang pesat hingga abad ke-17. Kesultanan ini didirikan oleh Sultan Ali Mughayat Syah. Aceh menjadi pusat perdagangan rempah-rempah sekaligus pusat penyebaran agama Islam. Hubungan diplomatik dijalin dengan berbagai negara seperti Turki Utsmani, India, Arab, dan Eropa. Pada masa kejayaannya, Aceh memiliki armada laut yang kuat sehingga mampu menjaga keamanan jalur perdagangan di Selat Malaka.</p>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-primary mb-3 flex items-center gap-1.5"><User className="w-3.5 h-3.5"/> Tokoh Penting</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Sultan Ali Mughayat Syah</li>
                <li>Sultan Alauddin Riayat Syah</li>
                <li>Sultan Iskandar Muda</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai yang Dapat Dipetik</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Kepemimpinan</li>
                <li>Persatuan</li>
                <li>Kerja sama internasional</li>
                <li>Kemandirian</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. Sultan Iskandar Muda",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Sultan Iskandar Muda memerintah Kesultanan Aceh pada tahun 1607–1636. Masa pemerintahannya dikenal sebagai masa keemasan Aceh. Beliau berhasil memperluas wilayah kekuasaan Aceh hingga meliputi sebagian besar Sumatra, Semenanjung Malaya, serta beberapa wilayah di pesisir barat Sumatra. Di bidang ekonomi, perdagangan berkembang pesat melalui ekspor lada, emas, kapur barus, dan hasil bumi lainnya. Di bidang pendidikan, banyak ulama terkenal datang ke Aceh sehingga kerajaan ini dikenal sebagai pusat ilmu pengetahuan Islam. Sultan Iskandar Muda juga menyusun berbagai aturan pemerintahan yang memperkuat hukum adat dan syariat Islam.</p>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-primary mb-3 flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5"/> Peninggalan</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Taman Gunongan</li>
                <li>Pinto Khop</li>
                <li>Sistem pemerintahan yang kuat</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai yang Dapat Dipetik</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Kepemimpinan</li>
                <li>Disiplin</li>
                <li>Keberanian</li>
                <li>Keadilan</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "4. Putroe Phang dan Taman Gunongan",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Putroe Phang berasal dari Kerajaan Pahang di Semenanjung Melayu. Setelah menikah dengan Sultan Iskandar Muda, ia tinggal di Aceh sebagai permaisuri. Karena sering merindukan kampung halamannya, Sultan Iskandar Muda membangun sebuah taman yang menyerupai bukit-bukit di Pahang. Taman tersebut dikenal sebagai Gunongan. Gunongan hingga kini menjadi salah satu situs sejarah penting di Kota Banda Aceh.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai yang Dapat Dipetik</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Kasih sayang</li>
              <li>Menghargai budaya</li>
              <li>Kepedulian terhadap keluarga</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "5. Masjid Raya Baiturrahman",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Masjid Raya Baiturrahman pertama kali dibangun pada masa Kesultanan Aceh. Pada masa Perang Aceh, bangunan masjid mengalami kerusakan akibat peperangan. Pemerintah kolonial Belanda kemudian membangun kembali masjid tersebut. Kini Masjid Raya Baiturrahman menjadi simbol agama, budaya, dan persatuan masyarakat Aceh. Saat tsunami tahun 2004, masjid ini tetap berdiri kokoh sehingga menjadi tempat berlindung bagi banyak masyarakat.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai yang Dapat Dipetik</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Keteguhan iman</li>
              <li>Persatuan</li>
              <li>Ketahanan menghadapi bencana</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "6. Perang Aceh",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Perang Aceh berlangsung sejak tahun 1873 hingga awal abad ke-20. Perang ini terjadi setelah Belanda berusaha menguasai Aceh. Rakyat Aceh melakukan perlawanan dengan semangat jihad dan mempertahankan tanah air. Perang berlangsung sangat lama karena masyarakat Aceh terus memberikan perlawanan meskipun menghadapi persenjataan yang lebih modern.</p>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-primary mb-3 flex items-center gap-1.5"><User className="w-3.5 h-3.5"/> Tokoh</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Teuku Umar</li>
                <li>Cut Nyak Dhien</li>
                <li>Cut Meutia</li>
                <li>Panglima Polem</li>
                <li>Tgk. Chik di Tiro</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[200px] p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
              <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
              <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
                <li>Patriotisme</li>
                <li>Pengorbanan</li>
                <li>Persatuan</li>
                <li>Cinta tanah air</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "7. Pahlawan Aceh",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Aceh memiliki banyak pahlawan nasional yang berjuang melawan penjajah.</p>
          <ul className="list-disc pl-4 text-sm text-dark/80 space-y-2">
            <li><strong>Teuku Umar</strong> terkenal dengan strategi perang gerilya.</li>
            <li><strong>Cut Nyak Dhien</strong> melanjutkan perjuangan suaminya hingga akhir hayat.</li>
            <li><strong>Cut Meutia</strong> memimpin perlawanan di Aceh Utara.</li>
            <li><strong>Tgk. Chik di Tiro</strong> membangkitkan semangat perjuangan rakyat melalui dakwah.</li>
          </ul>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Pantang menyerah</li>
              <li>Berani</li>
              <li>Rela berkorban</li>
              <li>Kepemimpinan</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "8. Tsunami Aceh 26 Desember 2004",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Pada tanggal 26 Desember 2004, gempa bumi berkekuatan sekitar 9,1–9,3 magnitudo terjadi di dasar Samudra Hindia di lepas pantai barat Aceh. Gempa tersebut memicu gelombang tsunami yang menghantam wilayah pesisir Aceh dan beberapa negara lain di sekitar Samudra Hindia. Di Aceh, tsunami menyebabkan kerusakan yang sangat besar. Banyak bangunan hancur, infrastruktur rusak, dan ratusan ribu orang meninggal dunia atau dinyatakan hilang. Peristiwa ini juga mengubah kondisi sosial dan ekonomi masyarakat Aceh. Setelah bencana tersebut, bantuan kemanusiaan datang dari berbagai negara dan organisasi internasional. Pemerintah bersama masyarakat membangun kembali Aceh melalui berbagai program rehabilitasi dan rekonstruksi.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Kepedulian</li>
              <li>Gotong royong</li>
              <li>Ketabahan</li>
              <li>Semangat untuk bangkit kembali</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "9. Perdamaian Aceh (MoU Helsinki)",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Pada 15 Agustus 2005, Pemerintah Republik Indonesia dan Gerakan Aceh Merdeka (GAM) menandatangani Nota Kesepahaman (Memorandum of Understanding/MoU) di Helsinki, Finlandia. Kesepakatan ini mengakhiri konflik bersenjata yang telah berlangsung selama puluhan tahun di Aceh. Perdamaian membuka jalan bagi pembangunan, peningkatan kesejahteraan masyarakat, dan terciptanya suasana yang lebih aman untuk belajar, bekerja, dan beraktivitas.</p>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Perdamaian</li>
              <li>Musyawarah</li>
              <li>Persatuan</li>
              <li>Toleransi</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "10. Warisan Budaya Aceh",
      content: (
        <div className="space-y-4">
          <p><strong>Materi:</strong> Aceh memiliki beragam warisan budaya yang masih dilestarikan hingga saat ini, antara lain:</p>
          <ul className="list-disc pl-4 text-sm text-dark/80 space-y-2">
            <li><strong>Tari Saman</strong>, tarian tradisional yang dikenal karena gerakan yang kompak dan telah diakui UNESCO sebagai Warisan Budaya Takbenda.</li>
            <li><strong>Tari Seudati</strong>, tarian yang menggambarkan semangat, keberanian, dan nilai-nilai keislaman.</li>
            <li><strong>Rumoh Aceh</strong>, rumah adat tradisional yang dibangun di atas tiang dengan arsitektur yang menyesuaikan kondisi alam.</li>
            <li><strong>Rencong</strong>, senjata tradisional yang menjadi simbol keberanian masyarakat Aceh.</li>
            <li><strong>Hadih Maja</strong>, kumpulan pepatah yang berisi nasihat dan nilai kehidupan.</li>
            <li><strong>Hikayat Aceh</strong>, karya sastra yang menceritakan sejarah, kepahlawanan, dan ajaran moral.</li>
            <li><strong>Motif Pinto Aceh dan Bungong Jeumpa</strong>, ornamen khas yang banyak digunakan pada bangunan, pakaian adat, dan kerajinan.</li>
          </ul>
          <div className="p-4 bg-white rounded-xl border border-dark/5 shadow-sm">
            <span className="text-xs font-bold uppercase text-accent-gold mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5"/> Nilai</span>
            <ul className="list-disc pl-4 text-sm text-dark/80 space-y-1">
              <li>Cinta budaya</li>
              <li>Melestarikan tradisi</li>
              <li>Menghargai warisan leluhur</li>
              <li>Memperkuat identitas daerah</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Sejarah Aceh"
        subtitle="Eksplorasi jejak sejarah kejayaan, perjuangan, dan kebangkitan masyarakat Aceh dari masa ke masa."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <Link href="/sastra-budaya" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Kategori
        </Link>
        <Accordion items={sejarahList} />
      </div>
    </div>
  );
}
