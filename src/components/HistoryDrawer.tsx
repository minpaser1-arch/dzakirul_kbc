import React from "react";
import { X, Trash2, FileText, ArrowRight, Download, Calendar, School } from "lucide-react";
import { ModulAjarKemenag } from "../types/modul";
import { exportModulToWord } from "../utils/wordExport";

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  historyList: ModulAjarKemenag[];
  onSelectModul: (modul: ModulAjarKemenag) => void;
  onDeleteModul: (id: string) => void;
  onClearAll: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  historyList,
  onSelectModul,
  onDeleteModul,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Riwayat Modul Ajar</h3>
              <p className="text-xs text-slate-500">Tersimpan di browser lokal Anda</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {historyList.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
                <FileText className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700">Belum ada riwayat RPP</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Modul ajar yang Anda hasilkan akan otomatis tersimpan di sini sehingga Anda bisa membukanya kembali kapan saja.
              </p>
            </div>
          ) : (
            historyList.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all bg-white shadow-2xs group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 mb-1">
                      {item.identitas.mataPelajaran}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                      {item.identitas.materiEsensial}
                    </h4>
                  </div>
                  <button
                    onClick={() => onDeleteModul(item.id)}
                    className="opacity-60 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                    title="Hapus dari riwayat"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-slate-500 mt-2 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{item.identitas.namaSekolah || "Madrasah"} • {item.identitas.faseKelas}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{new Date(item.timestamp).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => exportModulToWord(item)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800"
                    title="Unduh langsung ke format Microsoft Word"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Word (.doc)
                  </button>

                  <button
                    onClick={() => {
                      onSelectModul(item);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                  >
                    <span>Buka RPP</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {historyList.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Total {historyList.length} RPP tersimpan
            </span>
            <button
              onClick={() => {
                if (window.confirm("Apakah Anda yakin ingin menghapus semua riwayat modul ajar tersimpan?")) {
                  onClearAll();
                }
              }}
              className="text-xs font-medium text-red-600 hover:text-red-800"
            >
              Hapus Semua
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
