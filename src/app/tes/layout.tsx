import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uji Kemahiran Berbahasa Aceh (UKBA)",
  description: "Evaluasi kemampuan tata bahasa, kosakata, dan pemahaman kalimat bahasa Aceh Anda dengan tes adaptif komprehensif.",
  keywords: ["uji kemahiran bahasa aceh", "tes bahasa aceh", "ukba", "ujian bahasa aceh", "tes kemampuan bahasa aceh"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
