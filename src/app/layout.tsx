import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ta-marit.vercel.app"),
  title: {
    template: "%s | TaMarit",
    default: "TaMarit - Pembelajaran Bahasa, Sastra, & Budaya Aceh",
  },
  description: "Platform digital premium untuk mempelajari bahasa, sastra, dan budaya Aceh dengan warisan maritim dan kearifan Serambi Mekkah.",
  keywords: ["bahasa aceh", "belajar bahasa aceh", "kamus bahasa aceh", "sastra aceh", "budaya aceh", "TaMarit", "tes bahasa aceh", "hadih maja"],
  openGraph: {
    title: "TaMarit - Pembelajaran Bahasa, Sastra, & Budaya Aceh",
    description: "Platform digital premium untuk mempelajari bahasa, sastra, dan budaya Aceh dengan warisan maritim dan kearifan Serambi Mekkah.",
    url: "https://ta-marit.vercel.app",
    siteName: "TaMarit",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaMarit - Pembelajaran Bahasa, Sastra, & Budaya Aceh",
    description: "Platform digital premium untuk mempelajari bahasa, sastra, dan budaya Aceh dengan warisan maritim dan kearifan Serambi Mekkah.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col md:flex-row text-dark font-sans bg-transparent">
        <Sidebar />
        <div id="main-scroll-container" className="flex-1 flex flex-col h-[calc(100vh-4rem)] md:h-screen overflow-y-auto mt-16 md:mt-0 w-full">
          <main className="flex-grow p-4 sm:p-6 md:p-8 max-w-6xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
        <AudioPlayer />
      </body>
    </html>
  );
}


