import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saran & Masukan",
  description: "Beri saran dan masukan untuk TaMarit.",
};

export default function SaranLayout({ children }: { children: React.ReactNode }) {
  return children;
}
