import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaMarit - Pembelajaran Bahasa, Sastra, & Budaya Aceh",
  description: "Platform digital premium untuk mempelajari bahasa, sastra, dan budaya Aceh dengan warisan maritim dan kearifan Serambi Mekkah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex text-dark font-sans bg-transparent">
        <Sidebar />
        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
          <main className="flex-grow p-6 md:p-8 max-w-6xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


