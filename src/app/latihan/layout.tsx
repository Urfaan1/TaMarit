import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latihan Soal & Materi",
  description: "Materi pembelajaran bahasa Aceh yang interaktif, dari kosakata dasar hingga struktur kalimat kompleks.",
  keywords: ["latihan bahasa aceh", "belajar dasar bahasa aceh", "materi bahasa aceh", "pelajaran bahasa aceh"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
