import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prediksi Kemahiran Berbahasa Aceh",
  description: "Uji kemampuan bahasa Aceh-mu dengan format standar yang interaktif.",
  keywords: ["prediksi kemahiran bahasa aceh", "tes bahasa aceh", "ujian bahasa aceh", "tes kemampuan bahasa aceh"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
