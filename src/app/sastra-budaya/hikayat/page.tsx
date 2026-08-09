"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowLeft, BookOpenText } from "lucide-react";
import Link from "next/link";

export default function HikayatPage() {
  const hikayatList = [
    {
      title: "1. Hikayat Putroe Phang",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Aceh</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed italic border-l-4 border-primary/20 pl-4 py-1">
              Putroe Phang nyan salah satoe putroe rajeu geutanyoe nyang ka masyhur lam sejarah Aceh Darussalam. Putroe Phang asal jih nibak negeri Pahang (Phang) di tanah Melayu. Jih ka teuka u Aceh sebab geupeunangka ngon Sultan Iskandar Muda Meukuta Alam, rajeu Aceh nyang gagah that lom bijaksana.{"\n\n"}
              Watee Putroe Phang troh u Aceh, jih hana gadoh rasa rindu keu negerinya. Walaupun Aceh nyan negeri nyang kaya, rame, ngon meugah, tapi Putroe Phang tetap keuingat gunong, ie krueng, ngon adat istiadat di Pahang. Rasa rindu nyan meuhaba u dalam ate jih tiap-tiap uroe.{"\n\n"}
              Sultan Iskandar Muda nyang teupaham ate putroe jih, lalu geupeurintah beurangkah satu taman nyang indah, nyang mirip ngon keadaan di negeri asal Putroe Phang. Taman nyan dikenal ngen Taman Gunongan. Gunongan nyan geupeugot dalam rupa gunong kecil, sebagai tanda cinta Sultan Iskandar Muda keu Putroe Phang.{"\n\n"}
              Laju Putroe Phang tinggai di Aceh sebagai permaisuri. Jih dikenal sebagai putroe nyang leumah lembut, bijaksana, ngon meuhormat adat. Putroe Phang hana seulangah hana meungah-meungah, tapi jih troh lam keududukan tinggi, tetap meumulia rakyat.{"\n\n"}
              Hikayat Putroe Phang nyan ngajarkeun geutanyoe tentang makna cinta, kesetiaan, ngon pengorbanan. Cinta hana semata-mata kata, tapi perbuatan. Sultan Iskandar Muda geupeulheuh rasa rindu Putroe Phang ngen cara nyang mulia, tanpa meulupa tanggung jawab jih sebagai rajeu.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Indonesia</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed border-l-4 border-accent-gold/30 pl-4 py-1">
              Putroe Phang adalah salah satu permaisuri Kerajaan Aceh Darussalam yang sangat terkenal dalam sejarah Aceh. Putroe Phang berasal dari negeri Pahang di tanah Melayu. Ia datang ke Aceh karena dinikahkan dengan Sultan Iskandar Muda Meukuta Alam, raja Aceh yang terkenal gagah dan bijaksana.{"\n\n"}
              Ketika Putroe Phang tiba di Aceh, ia tidak bisa menghilangkan rasa rindu terhadap kampung halamannya. Meskipun Aceh adalah negeri yang makmur, ramai, dan indah, Putroe Phang tetap teringat akan gunung, sungai, dan adat istiadat di Pahang. Rasa rindu itu selalu ada di dalam hatinya setiap hari.{"\n\n"}
              Sultan Iskandar Muda yang memahami perasaan istrinya kemudian memerintahkan pembangunan sebuah taman yang indah, mirip dengan keadaan alam di negeri asal Putroe Phang. Taman tersebut dikenal dengan nama Taman Gunongan. Gunongan dibuat menyerupai gunung kecil sebagai tanda cinta Sultan Iskandar Muda kepada Putroe Phang.{"\n\n"}
              Putroe Phang kemudian menetap di Aceh sebagai permaisuri. Ia dikenal sebagai perempuan yang lembut, bijaksana, dan menjunjung tinggi adat. Walaupun memiliki kedudukan yang tinggi, ia tetap rendah hati dan menghormati rakyat.{"\n\n"}
              Hikayat Putroe Phang mengajarkan tentang makna cinta, kesetiaan, dan pengorbanan. Cinta tidak hanya diungkapkan dengan kata-kata, tetapi juga melalui tindakan nyata. Sultan Iskandar Muda menunjukkan perhatiannya terhadap kerinduan Putroe Phang dengan cara yang mulia, tanpa melupakan tanggung jawabnya sebagai raja.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2. Hikayat Prang Sabi",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Aceh</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed italic border-l-4 border-primary/20 pl-4 py-1">
              Hikayat Prang Sabi nyan dikarang le ulama Aceh keu peuget semangat jihad ureung Aceh lawan kaphe Belanda nyang ka jajah nanggroe Aceh. Hikayat nyoe disebarkan keu gampông-gampông, dibaca di meunasah, dayah, ngon di tempat ureung meupeusaboh diri keu prang.{"\n\n"}
              Dalam hikayat nyoe, ulama peugah bahwa Belanda nyan kaphe nyang jak rampok tanah Islam. Barangsoe nyang rela jak prang lawan kaphe, maka gobnyan ka meulaksanakan peureintah Allah. Jihad nyan hana semata-mata prang ngon senjata, tapi juga prang keu bela agama, keluarga, ngon kehormatan.{"\n\n"}
              Hikayat nyoe peugah keutamaan jihad. Disebutkan bahwa ureung nyang gugur di medan prang hana maté lagee ureung biasa, tapi maté syahid. Darah syuhada hana sia-sia, tapi jadi saksi di hadapan Allah. Syuhada hana meurasakan sakét maté, hanya lagee dicubit seudikit.{"\n\n"}
              Dalam hikayat nyoe juga diceritakan balasan surga keu ureung nyang syahid. Di dalam surga, gobnyan meunang kenikmatan nyang hana meukeureuja: istana indah, sungai susu ngon madu, pakaian sutra, ngon ditemani bidadari. Karena balasan nyoe, ureung mukmin hana peurle takut maté.{"\n\n"}
              Hikayat Prang Sabi juga peuingatkan ureung nyang tinggal di gampông. Istri ureung prang disuruh sabar, hana ratap. Aneuk yatim disanjung karena ayahnyan gugur syahid. Ureung kaya dianjurkan peubantu prang dengan harta, sedangkan ureung miskin dengan tenaga.{"\n\n"}
              Ulama dalam hikayat nyoe meugah bahwa ureung nyang hana mau bantu jihad, padahal mampu, maka gobnyan ka meuhianat agama. Nyan sabab jih, hikayat nyoe meuh keu nasehat ngon ancaman supaya ureung Aceh hana takut lawan penjajah.{"\n\n"}
              Akhir hikayat nyoe menegaskan bahwa prang sabi nyan jalan mulia. Nanggroe Aceh hana pat tamong keu tangan kaphe. Selama iman masih ada, jihad tetap jalan sampai agama Islam mulia ngon Aceh bebas.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Indonesia</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed border-l-4 border-accent-gold/30 pl-4 py-1">
              Hikayat Prang Sabi ditulis oleh para ulama Aceh untuk membangkitkan semangat jihad rakyat Aceh melawan penjajah Belanda. Hikayat ini disebarkan ke desa-desa dan dibacakan di meunasah, dayah, serta tempat berkumpulnya rakyat yang bersiap berperang.{"\n\n"}
              Dalam hikayat ini, para ulama menyampaikan bahwa Belanda adalah orang kafir yang merampas tanah Islam. Siapa pun yang rela berperang melawan penjajah berarti telah melaksanakan perintah Allah. Jihad tidak hanya berarti berperang dengan senjata, tetapi juga membela agama, keluarga, dan kehormatan.{"\n\n"}
              Hikayat ini menjelaskan keutamaan jihad. Orang yang gugur di medan perang tidak dianggap mati biasa, melainkan mati syahid. Darah para syuhada tidak sia-sia, melainkan menjadi saksi di hadapan Allah. Orang yang mati syahid tidak merasakan sakitnya kematian, hanya seperti cubitan ringan.{"\n\n"}
              Hikayat Prang Sabi juga menggambarkan balasan surga bagi para syuhada. Di surga, mereka mendapatkan kenikmatan yang luar biasa seperti istana yang indah, sungai susu dan madu, pakaian sutra, serta ditemani bidadari. Karena balasan inilah, orang beriman tidak perlu takut mati.{"\n\n"}
              Selain itu, hikayat ini menasihati keluarga yang ditinggalkan. Istri para pejuang diminta untuk bersabar dan tidak meratap. Anak yatim yang ayahnya gugur dianggap mulia. Orang kaya dianjurkan membantu perjuangan dengan harta, sedangkan orang miskin dengan tenaga.{"\n\n"}
              Ulama juga memperingatkan bahwa orang yang mampu berjihad tetapi enggan membantu berarti telah mengkhianati agama. Oleh karena itu, hikayat ini berisi nasihat keras sekaligus ancaman agar rakyat Aceh tidak takut melawan penjajah.{"\n\n"}
              Di akhir cerita, ditegaskan bahwa Prang Sabi adalah jalan yang mulia. Tanah Aceh tidak pantas dikuasai penjajah. Selama iman masih ada, perjuangan jihad akan terus berlanjut sampai Islam dimuliakan dan Aceh merdeka.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Hikayat Malem Dagang",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Aceh</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed italic border-l-4 border-primary/20 pl-4 py-1">
              Dengô lé droe wahai tuan,{"\n"}
              Lon kisah haba jameun,{"\n"}
              Hikayat Malam Dagang nyan,{"\n"}
              Peuneuh nasehat ngon keuleun.{"\n\n"}
              Malam nyan malam sunyi,{"\n"}
              Angèn sepoi lam gelap,{"\n"}
              Si dagang troh u rantô,{"\n"}
              Hana sanak hana sahabat.{"\n\n"}
              Dagang nyan tinggai gampông,{"\n"}
              Peulheuh diri keu rezeki,{"\n"}
              Neuk cari hidup ngon halal,{"\n"}
              Walau susah hana meuhenti.{"\n\n"}
              Lam rantô dagang meutemô,{"\n"}
              Susah senang silih ganti,{"\n"}
              Kadang lapar kadang sakit,{"\n"}
              Kadang geutanyoe hana dihargai.{"\n\n"}
              Teutapi dagang sabar that,{"\n"}
              Teuga ate hana rapôh,{"\n"}
              Ingat keu Tuhan nyang Maha Kuasa,{"\n"}
              Doa geupeugah tiap malam troh.{"\n\n"}
              Malam hari jih meureungoh,{"\n"}
              Langit ngon bintang geulihat,{"\n"}
              Rindu keu ayah ngon ummi,{"\n"}
              Rindu keu gampông nyang leugat.{"\n\n"}
              Hikayat Malam Dagang nyan,{"\n"}
              Ngajarkan ate keu geutanyoe,{"\n"}
              Meun jadi ureung di rantô,{"\n"}
              Sabar ngon ikhlas keu kunci meugoe.{"\n\n"}
              Dunia nyan hana lam gampông mantong,{"\n"}
              Ilmu ngon adat bek ditinggai,{"\n"}
              Ureung nyang tabah ngon jujur,{"\n"}
              Akhir jih meugah meuhai.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Indonesia</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed border-l-4 border-accent-gold/30 pl-4 py-1">
              Dengarkanlah wahai tuan,{"\n"}
              Aku akan menceritakan kisah zaman dahulu,{"\n"}
              Inilah Hikayat Malam Dagang,{"\n"}
              Penuh dengan nasihat dan teladan.{"\n\n"}
              (Kisah ini menceritakan tentang seseorang yang merantau mencari rezeki yang halal dan menghadapi berbagai cobaan, susah maupun senang di perantauan. Meskipun terkadang merasa lapar, sakit, atau tidak dihargai, ia tetap bersabar dan kuat hati, selalu mengingat Tuhan Yang Maha Kuasa dan berdoa setiap malam. Meskipun di malam hari ia menatap langit dan merindukan ayah, ibu, dan kampung halamannya, ia menyadari bahwa dunia tidak hanya seluas kampung. Kesabaran, keikhlasan, ketabahan, kejujuran, serta menjaga ilmu dan adat di perantauan adalah kunci untuk mencapai keberhasilan yang mulia pada akhirnya.)
            </p>
          </div>
        </div>
      )
    },
    {
      title: "4. Hikayat Meurah Meuh",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Aceh</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed italic border-l-4 border-primary/20 pl-4 py-1">
              Meurah Meuh nyan salah satoe pahlawan Aceh nyang masyhur lam haba jameun. Jih dikenal sebagai ureung nyang gagah, tabah, ngon hana peuriseh lam meulawan musoh. Meurah Meuh hidup lam masa Aceh ka meuhadapan ngon aneuk bangsa luwa nyang teuka keu jajah negeri.{"\n\n"}
              Sejak muda, Meurah Meuh ka deuk jih peumulia agama ngon adat. Jih dididik keu jadi ureung nyang jujur, teupat janji, ngon taat keu perintah Tuhan. Lam ate jih hana le that peurihal diri droe, nyang diingat mantong nyan keselamatan negeri Aceh.{"\n\n"}
              Watee musoh teuka meuganggu gampông-gampông Aceh, Meurah Meuh hana tinggai lam rumoh. Jih bangkit meulawan, meugabungkan ureung gampông keu sama-sama teuga meulawan penjajah. Walaupun alat perang hana lengkap, tapi semangat jih ngon rakyat hana peuubit.{"\n\n"}
              Lam peperangan, Meurah Meuh geupeulihat keberanian nyang luwa biasa. Jih hana takut mate, sebab jih yakin mate lam jalan jihat nyan mulia. Rakyat meupandang Meurah Meuh sebagai pemimpin nyang adil, hana seunang peumegang kuasa, tapi meuhormat rakyat jelata.{"\n\n"}
              Akhirna, Meurah Meuh gugur lam peperangan. Mate jih hana sia-sia, sebab jih ka meutempa semangat rakyat Aceh keu terus meulawan. Namo Meurah Meuh troh u jinoe tetap diingat sebagai lambang keberanian, pengorbanan, ngon cinta keu agama ngon tanah air.{"\n\n"}
              Hikayat Meurah Meuh nyan ngajarkan geutanyoe supaya hana takut meulawan kezaliman, teuga membela kebenaran, ngon siap beukorban demi kepentingan umat ngon bangsa.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Indonesia</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed border-l-4 border-accent-gold/30 pl-4 py-1">
              Meurah Meuh adalah salah satu pahlawan Aceh yang terkenal dalam cerita masa lampau. Ia dikenal sebagai orang yang gagah, tabah, dan tidak pernah gentar dalam melawan musuh. Meurah Meuh hidup pada masa ketika Aceh menghadapi kedatangan bangsa asing yang ingin menjajah negeri.{"\n\n"}
              Sejak muda, Meurah Meuh dididik untuk menjunjung tinggi agama dan adat. Ia dibesarkan menjadi pribadi yang jujur, menepati janji, dan taat kepada perintah Tuhan. Dalam hatinya, ia tidak memikirkan kepentingan pribadi, melainkan selalu mengutamakan keselamatan negeri Aceh.{"\n\n"}
              Ketika musuh datang mengganggu kampung-kampung di Aceh, Meurah Meuh tidak tinggal diam di rumah. Ia bangkit melawan dan mengajak masyarakat kampung untuk bersama-sama melawan penjajah. Walaupun senjata dan perlengkapan perang sangat terbatas, semangatnya dan semangat rakyat tidak pernah surut.{"\n\n"}
              Dalam peperangan, Meurah Meuh menunjukkan keberanian yang luar biasa. Ia tidak takut mati karena ia yakin bahwa gugur di jalan perjuangan adalah suatu kemuliaan. Rakyat memandang Meurah Meuh sebagai pemimpin yang adil, tidak tamak terhadap kekuasaan, dan selalu menghormati rakyat kecil.{"\n\n"}
              Pada akhirnya, Meurah Meuh gugur di medan perang. Namun kematiannya tidak sia-sia karena ia telah menanamkan semangat perjuangan kepada rakyat Aceh untuk terus melawan penjajahan. Nama Meurah Meuh tetap dikenang hingga kini sebagai simbol keberanian, pengorbanan, serta kecintaan terhadap agama dan tanah air.{"\n\n"}
              Hikayat Meurah Meuh mengajarkan kita agar tidak takut melawan ketidakadilan, berani membela kebenaran, dan siap berkorban demi kepentingan umat dan bangsa.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "5. Hikayat Si Ubit",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Aceh</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed italic border-l-4 border-primary/20 pl-4 py-1">
              Si Ubit nyan aneuk ureueng gasieng nyang keubit that awak jih. Jih tinggai lam gampông ureueng biasa, hana harta hana pangkat. Walaupun awak jih keubit, tapi ate jih rayeuk, akai jih ceudah, ngon tingkah lakè jih that bijaksana.{"\n\n"}
              Sejak ubit, Si Ubit ka biasa meulakon ureueng tuha jih keu jak bak sawah, jak bak uteun, ngon jak bak ureueng kaya keu meukerja. Hana watee jih mengeluh walaupun awak jih hana kuasa. Jih teupat janji, jujur, ngon hana peudusta.{"\n\n"}
              Suatu uroe, rajeu lam negeri nyan meulaksanô sayembara. Rajeu geupeugah, siapa nyang sanggup meulara masalah negeri, jih nyan akan geupeugah hadiah. Ureueng rayeuk ngon ureung pangkat meutemô sayembara, tapi hana sidroe nyang hasil.{"\n\n"}
              Si Ubit, walaupun awak jih keubit, neukat jih teuka. Ngen akai cerdik, jih sanggup meupuléh masalah nyan. Rajeu teuhéran, sebab hana peureutina ureung keubit sanggup meulakon nyan.{"\n\n"}
              Akhirna, rajeu geupeugah Si Ubit hadiah, ngon jih geupeujak lam istana. Si Ubit hana sombong, hana lupô diri. Jih tetap meuhormat ureung tuha, meumulia ureung gasieng, ngon meujaga adat.{"\n\n"}
              Hikayat Si Ubit nyan ngajarkan geutanyoe bahwa awak nyang keubit hana tanda ureung hana mulia. Kejujuran, kecerdikan, ngon akhlak nyang baik nyan nyang meujadi ukuran kemuliaan ureung.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-2 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> Bahasa Indonesia</h4>
            <p className="text-dark/80 whitespace-pre-line leading-relaxed border-l-4 border-accent-gold/30 pl-4 py-1">
              Si Ubit adalah seorang anak yang bertubuh sangat kecil. Ia hidup di sebuah kampung sebagai orang biasa, tanpa harta dan tanpa kedudukan. Walaupun tubuhnya kecil, hatinya besar, pikirannya cerdas, dan perilakunya sangat bijaksana.{"\n\n"}
              Sejak kecil, Si Ubit sudah terbiasa membantu orang tuanya bekerja di sawah, di hutan, dan bekerja kepada orang kaya. Ia tidak pernah mengeluh meskipun tubuhnya lemah. Ia selalu menepati janji, jujur, dan tidak pernah berbohong.{"\n\n"}
              Suatu hari, raja di negeri tersebut mengadakan sebuah sayembara. Raja mengatakan bahwa siapa pun yang mampu menyelesaikan masalah negeri akan diberi hadiah. Banyak orang besar dan berpangkat mencoba mengikuti sayembara tersebut, tetapi tidak ada satu pun yang berhasil.{"\n\n"}
              Si Ubit, walaupun bertubuh kecil, memberanikan diri untuk ikut. Dengan kecerdikannya, ia mampu menyelesaikan masalah tersebut. Raja pun merasa heran karena tidak menyangka orang bertubuh kecil dapat melakukan hal sebesar itu.{"\n\n"}
              Akhirnya, raja memberikan hadiah kepada Si Ubit dan mengundangnya ke istana. Si Ubit tidak menjadi sombong dan tidak lupa diri. Ia tetap menghormati orang tua, memuliakan orang miskin, dan menjaga adat.{"\n\n"}
              Hikayat Si Ubit mengajarkan bahwa tubuh yang kecil bukanlah tanda rendahnya derajat seseorang. Kejujuran, kecerdasan, dan akhlak yang baik adalah ukuran kemuliaan manusia.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      <Section
        background="cream"
        title="Hikayat Aceh"
        subtitle="Kumpulan cerita rakyat, epos kepahlawanan, dan kisah teladan dari masa lalu masyarakat Aceh yang disajikan dalam dua bahasa."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <Link href="/#sastra-budaya" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Kategori
        </Link>
        <Accordion items={hikayatList} />
      </div>
    </div>
  );
}
