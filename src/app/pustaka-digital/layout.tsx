import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pustaka Digital",
  description: "Koleksi buku cerita anak interaktif dan literatur inspiratif dalam bahasa Aceh.",
  keywords: ["pustaka digital aceh", "buku cerita anak bahasa aceh", "literatur aceh", "pustaka bahasa aceh", "dongeng aceh"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
