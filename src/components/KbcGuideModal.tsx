import React from "react";
import { X, Heart, Sparkles, BookOpen, Users, Compass, CheckCircle2 } from "lucide-react";
import { PPRA_DIMENSIONS } from "../data/presets";

interface KbcGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KbcGuideModal: React.FC<KbcGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-emerald-100 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-xl backdrop-blur-xs">
              <Heart className="w-6 h-6 text-emerald-200 fill-emerald-200/30" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Panduan Kurikulum Berbasis Cinta (KBC)</h2>
              <p className="text-xs text-emerald-100/90 mt-0.5">
                Konsep Pembelajaran Mendalam (Deep Learning) & RPP Resmi Kemenag RI
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          
          {/* Section 1: Apa itu KBC */}
          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4.5">
            <div className="flex items-center gap-2 text-emerald-900 font-semibold text-base mb-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Hakikat Kurikulum Berbasis Cinta (KBC) Kemenag</span>
            </div>
            <p className="text-slate-600">
              <strong>Kurikulum Berbasis Cinta (KBC)</strong> di lingkungan madrasah dan kementerian agama adalah pendekatan pendidikan yang menempatkan rasa cinta, kasih sayang (<em>rahmah</em>), empati kemanusiaan, dan moderasi beragama sebagai poros utama proses belajar-mengajar. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-3 pt-2 border-t border-emerald-200/60">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-emerald-950"><strong>Cinta kepada Allah & Rasul:</strong> Menghayati ilmu sebagai bentuk ibadah dan syukur.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-emerald-950"><strong>Cinta kepada Sesama:</strong> Membangun ukhuwah, empati, tolong-menolong, dan anti-bullying.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-emerald-950"><strong>Cinta Lingkungan & Alam:</strong> Merawat kelestarian ciptaan Tuhan di bumi (<em>khalifah fil ardh</em>).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-emerald-950"><strong>Cinta Tanah Air & Kerukunan:</strong> Menjaga persatuan bangsa dan moderasi beragama (<em>wasathiyyah</em>).</span>
              </div>
            </div>
          </div>

          {/* Section 2: Deep Learning 3 Tahapan */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-3">
              <BookOpen className="w-5 h-5 text-teal-700" />
              <span>Sintaks Pembelajaran Mendalam (Deep Learning) pada RPP Kemenag</span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Dalam format RPP Kemenag terbaru, kegiatan inti tidak lagi kaku, melainkan mengalir dalam 3 pilar Pembelajaran Mendalam:
            </p>
            <div className="space-y-3">
              <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/70">
                <div className="font-semibold text-emerald-900 flex items-center justify-between">
                  <span>1. MEMAHAMI (Mindful, Meaningful, Joyful)</span>
                  <span className="text-[11px] font-normal bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">Kegiatan Inti 1</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Peserta didik diajak hadir secara utuh (<em>mindful presence</em>), mengamati stimulus nyata, menggali konsep esensial yang bermakna bagi kehidupannya, serta mengalami suasana belajar yang menggembirakan tanpa rasa takut salah.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/70">
                <div className="font-semibold text-teal-900 flex items-center justify-between">
                  <span>2. MENGAPLIKASI (Kolaboratif & Kontekstual)</span>
                  <span className="text-[11px] font-normal bg-teal-100 text-teal-800 px-2 py-0.5 rounded-md">Kegiatan Inti 2</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Peserta didik berkolaborasi dalam kelompok kecil heterogen, memecahkan permasalahan nyata yang berkaitan dengan materi, serta menginternalisasikan nilai cinta kasih dan gotong royong dalam tindakan konkret.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/70">
                <div className="font-semibold text-indigo-900 flex items-center justify-between">
                  <span>3. MEREFLEKSI (Kesadaran Diri & Aksi Nyata)</span>
                  <span className="text-[11px] font-normal bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md">Kegiatan Inti 3</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Peserta didik mempresentasikan karya, memberikan apresiasi santun terhadap rekan sebaya, mengevaluasi proses berpikirnya, dan merumuskan komitmen akhlak mulia yang akan diamalkan di luar kelas.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: 10 Dimensi PPRA */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-2">
              <Compass className="w-5 h-5 text-emerald-700" />
              <span>10 Dimensi Profil Pelajar Rahmatan Lil &apos;Alamin (PPRA Kemenag)</span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Dimensi kekhasan madrasah yang melengkapi Profil Pelajar Pancasila:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PPRA_DIMENSIONS.map((dim) => (
                <div key={dim.code} className="p-2.5 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 transition-colors">
                  <div className="font-semibold text-emerald-900">{dim.name}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{dim.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Guru */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 flex items-start gap-3">
            <Users className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Catatan untuk Guru Madrasah:</strong>
              <p className="mt-0.5 text-amber-900/90 leading-relaxed">
                Generator ini menyusun RPP sesuai format 2 halaman resmi Kementerian Agama RI beserta 5 lampiran komprehensif (LKPD kontekstual, Ringkasan Bahan Ajar, Kisi-kisi HOTS & Rubrik Sikap PPRA, Program Remedial/Pengayaan, serta Instrumen Refleksi). Anda dapat langsung mencetak, mengunduh dalam format Microsoft Word (.doc) untuk diserahkan ke Kepala Madrasah / Pengawas.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg shadow-xs transition-colors"
          >
            Mengerti & Lanjutkan
          </button>
        </div>

      </div>
    </div>
  );
};
