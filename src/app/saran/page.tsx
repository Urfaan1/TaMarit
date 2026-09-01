"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle, MessageCircle, Mail, Camera } from "lucide-react";

export default function SaranPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Kritik & Saran",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        "service_ttdj606",
        "template_3zzrg46",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "ogyWK2-2kdTKZpWVg",
        }
      );
      console.log("EmailJS success:", result.status, result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "Kritik & Saran", message: "" });
    } catch (err: unknown) {
      if (err && typeof err === "object" && "status" in err && "text" in err) {
        const ejsErr = err as { status: number; text: string };
        console.error("EmailJS error:", ejsErr.status, ejsErr.text);
      } else {
        console.error("EmailJS unexpected error:", err);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full min-h-[80vh] bg-[#F9FAFB] flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 w-full mt-8">
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <h2 className="text-3xl font-serif font-bold text-dark">Hubungi Kami</h2>
          <p className="text-gray-500 mb-4">Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.</p>
          
          <a href="mailto:balaibahasaaceh@kemendikdasmen.go.id" className="flex items-center gap-4 bg-cream p-5 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-red-100">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-dark group-hover:text-red-600">Email</p>
              <p className="text-sm text-gray-500">balaibahasaaceh@kemendikdasmen.go.id</p>
            </div>
          </a>
          
          <a href="https://www.instagram.com/ikadubas.aceh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-cream p-5 rounded-2xl hover:bg-pink-50 hover:text-pink-600 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-pink-100">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-dark group-hover:text-pink-600">Instagram</p>
              <p className="text-sm text-gray-500">@ikadubas.aceh</p>
            </div>
          </a>
        </div>

        <div className="w-full lg:w-2/3">
          <Card hoverable={false} className="p-8 bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-[2.5rem]">
            <h3 className="font-serif text-2xl font-bold text-dark mb-6">Formulir Masukan</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Nama Lengkap"
                  placeholder="e.g. Cut Mutia"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  label="Alamat Email"
                  placeholder="e.g. mutia@email.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1.5 font-sans">
                <label className="text-sm font-semibold text-dark/80 pl-1">
                  Kategori Masukan
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-dark border-2 border-dark/10 rounded-aceh px-4 py-3 text-base outline-none transition-all duration-300 focus:border-accent-green focus:ring-4 focus:ring-accent-green/10"
                >
                  <option value="Kritik & Saran">Kritik & Saran</option>
                  <option value="Tanya Jawab">Tanya Jawab</option>
                  <option value="Kolaborasi">Kolaborasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 font-sans">
                <label className="text-sm font-semibold text-dark/80 pl-1">
                  Pesan Anda
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tulis pesan lengkap Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-dark border-2 border-dark/10 rounded-aceh px-4 py-3 text-base outline-none transition-all duration-300 focus:border-accent-green focus:ring-4 focus:ring-accent-green/10 resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                className="w-full mt-2 py-4 text-lg rounded-2xl"
                leftIcon={<Send className="w-5 h-5" />}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </Button>

              {/* Success/Error Notification */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <CheckCircle className="w-5 h-5 shrink-0 text-green-600" />
                  <p className="text-sm font-semibold">Pesan berhasil terkirim! Terima kasih atas masukan Anda.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <MessageCircle className="w-5 h-5 shrink-0 text-red-500" />
                  <p className="text-sm font-semibold">Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung.</p>
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
