import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ModulForm, FormInputs } from "./components/ModulForm";
import { ModulPreview } from "./components/ModulPreview";
import { KbcGuideModal } from "./components/KbcGuideModal";
import { HistoryDrawer } from "./components/HistoryDrawer";
import { ModulAjarKemenag } from "./types/modul";
import { Sparkles, BookOpen, Heart, ShieldCheck, AlertCircle, FileCheck, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "kemenag_rpp_history_v1";

export default function App() {
  const [currentModul, setCurrentModul] = useState<ModulAjarKemenag | null>(null);
  const [historyList, setHistoryList] = useState<ModulAjarKemenag[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setHistoryList(parsed);
          // Set latest as default if available
          setCurrentModul(parsed[0]);
        }
      }
    } catch (e) {
      console.error("Gagal membaca riwayat dari local storage:", e);
    }
  }, []);

  // Save history to localStorage
  const saveToHistory = (newModul: ModulAjarKemenag) => {
    setHistoryList((prev) => {
      const filtered = prev.filter((m) => m.id !== newModul.id);
      const updated = [newModul, ...filtered].slice(0, 30);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error("Gagal menyimpan ke local storage:", err);
      }
      return updated;
    });
  };

  const deleteFromHistory = (id: string) => {
    setHistoryList((prev) => {
      const updated = prev.filter((m) => m.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error("Gagal menghapus dari local storage:", err);
      }
      return updated;
    });
    if (currentModul?.id === id) {
      setCurrentModul(null);
    }
  };

  const clearAllHistory = () => {
    setHistoryList([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error("Gagal mengosongkan riwayat:", err);
    }
  };

  const handleGenerate = async (inputs: FormInputs) => {
    setIsLoading(true);
    setErrorMessage(null);
    setLoadingStep(0);

    const stepInterval = setInterval(() => {
      setLoadingStep((s) => (s < 4 ? s + 1 : s));
    }, 2800);

    try {
      const res = await fetch("/api/generate-modul", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Gagal menyusun modul ajar.");
      }

      const generatedModul: ModulAjarKemenag = result.data;
      setCurrentModul(generatedModul);
      saveToHistory(generatedModul);
    } catch (err: any) {
      console.error("Generate error:", err);
      setErrorMessage(
        err.message || "Terjadi kendala saat menyusun RPP. Pastikan koneksi stabil dan coba kembali."
      );
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  const loadingSteps = [
    "Menghubungkan ke Tim Pengembang Kurikulum Kemenag RI...",
    "Menganalisis Capaian Pembelajaran & 10 Dimensi PPRA...",
    "Mengintegrasikan muatan Kurikulum Berbasis Cinta (KBC)...",
    "Merumuskan Pembelajaran Mendalam (Memahami, Mengaplikasi, Merefleksi)...",
    "Menyusun LKPD, Instrumen Asesmen HOTS & Rubrik Sikap...",
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-emerald-200">
      
      {/* Top Header */}
      <Header
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onNewModul={() => {
          setCurrentModul(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        historyCount={historyList.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 shadow-xs">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1 text-xs sm:text-sm">
              <span className="font-bold">Gagal Menyusun Modul: </span>
              {errorMessage}
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-red-700 hover:text-red-900 font-bold text-xs"
            >
              Tutup
            </button>
          </div>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center border border-emerald-100">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="w-16 h-16 rounded-full border-4 border-emerald-100 border-t-emerald-700 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-emerald-600 animate-pulse fill-emerald-600/30" />
                </div>
              </div>

              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                Menyusun Modul Ajar KBC
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                Mengintegrasikan nilai cinta dan pembelajaran mendalam resmi Kemenag
              </p>

              {/* Progress Steps */}
              <div className="space-y-2 text-left bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                {loadingSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs">
                    {idx < loadingStep ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : idx === loadingStep ? (
                      <div className="w-4 h-4 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                    )}
                    <span
                      className={`${
                        idx === loadingStep
                          ? "font-bold text-emerald-900"
                          : idx < loadingStep
                          ? "text-slate-500 line-through"
                          : "text-slate-400"
                      } truncate`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View Switching: Form or Preview */}
        {!currentModul ? (
          <div className="space-y-8">
            
            {/* Generator Input Form */}
            <ModulForm onGenerate={handleGenerate} isLoading={isLoading} />

            {/* Quick Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                  <Heart className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Kurikulum Berbasis Cinta (KBC)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Menghubungkan materi pelajaran dengan cinta Ilahi, cinta sesama manusia, cinta alam semesta, empati sosial, dan moderasi beragama.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-teal-100 text-teal-800 shrink-0">
                  <BookOpen className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Pembelajaran Mendalam (Deep Learning)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Sintaks kegiatan berkesadaran (<em>mindful</em>), bermakna (<em>meaningful</em>), dan menggembirakan (<em>joyful</em>) pada tahap Memahami, Mengaplikasi, dan Merefleksi.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-800 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Format Resmi Kemenag 2 Halaman + Lampiran
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Tabel Identitas, Desain Pembelajaran, Pengalaman Belajar, Asesmen Formatif-Sumatif, LKPD, Bahan Ajar, HOTS & Rubrik PPRA, siap cetak & unduh Word (.doc).
                  </p>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="space-y-6">
            <ModulPreview
              modul={currentModul}
              onBackToForm={() => setCurrentModul(null)}
              onUpdateModul={(updated) => {
                setCurrentModul(updated);
                saveToHistory(updated);
              }}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="no-print bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-emerald-800">Kementerian Agama RI</span>
            <span>•</span>
            <span>Kurikulum Merdeka Madrasah</span>
          </div>
          <p>
            Generator Modul Ajar Terintegrasi KBC (Kurikulum Berbasis Cinta) & Pembelajaran Mendalam
          </p>
        </div>
      </footer>

      {/* Guide Modal */}
      <KbcGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />

      {/* History Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        historyList={historyList}
        onSelectModul={(modul) => {
          setCurrentModul(modul);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onDeleteModul={deleteFromHistory}
        onClearAll={clearAllHistory}
      />

    </div>
  );
}
