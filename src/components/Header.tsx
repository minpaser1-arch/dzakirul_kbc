import React from "react";
import { BookMarked, HelpCircle, History, Sparkles, PlusCircle } from "lucide-react";

interface HeaderProps {
  onOpenGuide: () => void;
  onOpenHistory: () => void;
  onNewModul: () => void;
  historyCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenGuide,
  onOpenHistory,
  onNewModul,
  historyCount,
}) => {
  return (
    <header className="bg-white border-b border-emerald-100/80 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3.5">
            {/* Kemenag Badge Emblem */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 flex items-center justify-center shadow-md shadow-emerald-900/10 text-white font-bold p-1 border border-emerald-600/30">
              <div className="text-center leading-tight">
                <span className="text-[10px] sm:text-xs block tracking-tighter text-emerald-200 font-medium">IKHLAS</span>
                <span className="text-[9px] sm:text-[10px] block font-extrabold text-amber-300">BERAMAL</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Modul Ajar Generator</span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Kemenag RI
                  </span>
                </h1>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Format RPP Kurikulum Berbasis Cinta (KBC) & Pembelajaran Mendalam
              </p>
            </div>
          </div>

          {/* Action Navigation */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Pelajari Panduan KBC & Pembelajaran Mendalam"
            >
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              <span className="hidden md:inline">Panduan KBC & Format</span>
            </button>

            <button
              onClick={onOpenHistory}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-2xs"
              title="Lihat RPP yang Pernah Dibuat"
            >
              <History className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Riwayat</span>
              {historyCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-emerald-600 text-white">
                  {historyCount}
                </span>
              )}
            </button>

            <button
              onClick={onNewModul}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-xs shadow-emerald-700/20 transition-all hover:shadow-emerald-700/30 active:scale-98"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Susun Baru</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
