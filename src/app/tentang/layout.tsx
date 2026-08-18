import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal lebih dekat tim pengembang di balik TaMarit dan misi kami melestarikan bahasa Aceh.",
  keywords: ["tentang tamarit", "profil tamarit", "pengembang aplikasi bahasa aceh", "pelestarian bahasa aceh"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
