import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sastra & Budaya Aceh",
  description: "Eksplorasi kekayaan sastra Aceh, Hadih Maja, sejarah, dan tarian tradisional Aceh yang penuh makna.",
  keywords: ["sastra aceh", "hadih maja", "tarian adat aceh", "sejarah aceh", "kebudayaan aceh", "pepatah aceh"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
