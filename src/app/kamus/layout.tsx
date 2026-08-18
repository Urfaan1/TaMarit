import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kamus Bahasa Aceh",
  description: "Cari terjemahan dan makna kata bahasa Aceh secara online dan pelajari kosakatanya.",
  keywords: ["kamus aceh", "terjemahan aceh indonesia", "arti kata bahasa aceh", "kamus bahasa aceh online"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
