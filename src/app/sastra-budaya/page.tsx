"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Tooltip } from "@/components/ui/Tooltip";
import { PintoAceh, BungongJeumpa } from "@/components/ui/Motifs";
import { BookOpen, Compass, Search, ChevronDown, ChevronUp, Calendar, User } from "lucide-react";

interface CulturalArticle {
  id: number;
  category: "sastra" | "budaya";
  title: string;
  author?: string;
  period?: string;
  summary: string;
  fullContent: string;
  badgeText: string;
  badgeVariant: "primary" | "gold" | "green";
  keyTerm?: string;
  keyTermMeaning?: string;
}



export default function SastraBudayaPage() {
  const [activeTab, setActiveTab] = useState<"sastra" | "budaya">("sastra");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [articles, setArticles] = useState<CulturalArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/articles');
        if (res.ok) {
          const data = await res.json();
          setArticles(data);
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const toggleExpand = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((eid) => eid !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const getFilteredArticles = () => {
    return articles.filter((article) => {
      const matchesTab = article.category === activeTab;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  };

  return (
    <div className="w-full min-h-[70vh] bg-cream">
      {/* Title Header */}
      <Section
        background="cream"
        title="Khazanah Sastra & Budaya"
        subtitle="Jelajahi karya sastra klasik, falsafah Hadih Maja, sejarah maritim, dan filosofi adat masyarakat Aceh."
        showDivider
        centerTitle
        className="pt-12 pb-6"
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Navigation & Search Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 pb-6 border-b border-dark/5">
          {/* Tabs */}
          <div className="flex gap-2 w-full md:w-auto">
            <Button
              variant={activeTab === "sastra" ? "primary" : "ghost"}
              onClick={() => {
                setActiveTab("sastra");
                setExpandedIds([]);
              }}
              leftIcon={<BookOpen className="w-4 h-4" />}
              className="flex-1 md:flex-none"
            >
              Kanya Sastra
            </Button>
            <Button
              variant={activeTab === "budaya" ? "primary" : "ghost"}
              onClick={() => {
                setActiveTab("budaya");
                setExpandedIds([]);
              }}
              leftIcon={<Compass className="w-4 h-4" />}
              className="flex-1 md:flex-none"
            >
              Warisan Budaya
            </Button>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80">
            <Input
              placeholder="Cari artikel..."
              leftIcon={<Search className="w-5 h-5" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Articles List */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : getFilteredArticles().length > 0 ? (
          <div className="flex flex-col gap-6">
            {getFilteredArticles().map((article) => {
              const isExpanded = expandedIds.includes(article.id);
              return (
                <Card
                  key={article.id}
                  hoverable={!isExpanded}
                  withMotif={!isExpanded}
                  motifVariant="pinto"
                  headerAccent={article.badgeVariant}
                  className="bg-white border border-dark/5 p-6 md:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <Badge variant={article.badgeVariant} className="mb-2.5">
                        {article.badgeText}
                      </Badge>
                      <h3 className="font-serif text-2xl font-bold text-dark">
                        {article.title}
                      </h3>
                    </div>

                    {/* Metadata tags */}
                    {(article.author || article.period) && (
                      <div className="flex items-center gap-4 text-xs text-dark/40 font-semibold mt-1">
                        {article.author && (
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-primary" /> {article.author}
                          </span>
                        )}
                        {article.period && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#B28A00]" /> {article.period}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Summary paragraph */}
                  <p className="text-sm md:text-base text-dark/70 leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  {/* Expanded Content Section */}
                  {isExpanded && (
                    <div className="border-t border-dark/5 pt-6 mt-4 animate-fade-in text-sm md:text-base text-dark/80 leading-relaxed space-y-4">
                      <p>{article.fullContent}</p>

                      {/* Vocabulary Highlight (Tooltip support) */}
                      {article.keyTerm && (
                        <div className="p-4 bg-cream/40 rounded-aceh border border-dark/5 flex flex-wrap items-center gap-2 mt-4">
                          <span className="text-xs font-bold text-primary uppercase tracking-wide">
                            Glosarium Istilah:
                          </span>
                          <Tooltip content={article.keyTermMeaning || ""}>
                            <span className="font-bold underline cursor-help text-dark hover:text-primary flex items-center gap-1">
                              <BungongJeumpa size={14} className="text-accent-gold" />
                              {article.keyTerm}
                            </span>
                          </Tooltip>
                          <span className="text-xs text-dark/50 italic">
                            (Arahkan kursor ke kata bergaris untuk arti)
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Read More Trigger */}
                  <div className="flex justify-start border-t border-dark/5 pt-4 mt-6">
                    <button
                      onClick={() => toggleExpand(article.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline outline-none"
                    >
                      {isExpanded ? (
                        <>
                          Sembunyikan Artikel <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Baca Selengkapnya <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-dark/5 rounded-aceh shadow-soft flex flex-col items-center gap-4">
            <Search className="w-12 h-12 text-dark/20" />
            <p className="text-dark/60 font-semibold">Tidak menemukan artikel yang cocok.</p>
          </div>
        )}
      </div>
    </div>
  );
}
