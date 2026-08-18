import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permainan Edukasi",
  description: "Mainkan permainan edukasi yang seru untuk melatih penguasaan kosakata dan bahasa Aceh Anda.",
  keywords: ["permainan bahasa aceh", "game edukasi aceh", "belajar bahasa aceh lewat game", "tebak kata aceh"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
