import React, { useState } from "react";
import { Download, Printer, Copy, Edit3, Check, ArrowLeft, FileText, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { ModulAjarKemenag } from "../types/modul";
import { exportModulToWord } from "../utils/wordExport";

interface ModulPreviewProps {
  modul: ModulAjarKemenag;
  onBackToForm: () => void;
  onUpdateModul: (updated: ModulAjarKemenag) => void;
}

export const ModulPreview: React.FC<ModulPreviewProps> = ({
  modul,
  onBackToForm,
  onUpdateModul,
}) => {
  const [activeTab, setActiveTab] = useState<"rpp" | "lampiran" | "all">("all");
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textData = `
==================================================
RENCANA PELAKSANAAN PEMBELAJARAN (RPP)
KEMENTERIAN AGAMA REPUBLIK INDONESIA
KURIKULUM MERDEKA - TERINTEGRASI KBC & PEMBELAJARAN MENDALAM
==================================================

IDENTITAS:
- Nama Sekolah/Madrasah : ${modul.identitas.namaSekolah}
- Mata Pelajaran        : ${modul.identitas.mataPelajaran}
- Fase/Kelas/Semester   : ${modul.identitas.faseKelas} / ${modul.identitas.semester}
- Materi Esensial       : ${modul.identitas.materiEsensial}
- Topik KBC             : ${modul.identitas.topikKbc}
- Materi Insersi KBC    : ${modul.identitas.materiInsersiKbc}
- Alokasi Waktu         : ${modul.identitas.alokasiWaktu}

A. IDENTIFIKASI
1. Peserta Didik:
${modul.identifikasi.pesertaDidik}

2. Materi Pelajaran:
${modul.identifikasi.materiPelajaran}

3. Dimensi Profil Lulusan:
- Profil Pelajar Pancasila: ${modul.identifikasi.dimensiProfilLulusan.profilPelajarPancasila.join(", ")}
- Profil Pelajar Rahmatan Lil 'Alamin: ${modul.identifikasi.dimensiProfilLulusan.profilPelajarRahmatanLilAlamin.join(", ")}

B. DESAIN PEMBELAJARAN
1. Capaian Pembelajaran: ${modul.desainPembelajaran.capaianPembelajaran}
2. Lintas Disiplin Ilmu: ${modul.desainPembelajaran.lintasDisiplinIlmu}
3. Tujuan Pembelajaran:
${modul.desainPembelajaran.tujuanPembelajaran.map((tp, i) => `  ${i + 1}. ${tp}`).join("\n")}
4. Topik Pembelajaran: ${modul.desainPembelajaran.topikPembelajaran}
5. Praktik Pedagogis:
  - Model: ${modul.desainPembelajaran.praktikPedagogis.modelPembelajaran}
  - Metode: ${modul.desainPembelajaran.praktikPedagogis.metodePembelajaran.join(", ")}
  - Pendekatan: ${modul.desainPembelajaran.praktikPedagogis.pendekatan}
6. Kemitraan Pembelajaran: ${modul.desainPembelajaran.kemitraanPembelajaran}
7. Lingkungan Pembelajaran: ${modul.desainPembelajaran.lingkunganPembelajaran}
8. Pemanfaatan Digital: ${modul.desainPembelajaran.pemanfaatanDigital}

C. PENGALAMAN BELAJAR (DEEP LEARNING: MINDFUL, MEANINGFUL, JOYFUL & KBC)
1. Tahapan Awal (${modul.pengalamanBelajar.awal.alokasiWaktu}):
${modul.pengalamanBelajar.awal.deskripsi.map((d) => `  - ${d}`).join("\n")}

2. Tahapan Inti (${modul.pengalamanBelajar.inti.alokasiWaktu}):
  a. Memahami (Prinsip: ${modul.pengalamanBelajar.inti.memahami.prinsip}; Insersi KBC: ${modul.pengalamanBelajar.inti.memahami.muatanKbc}):
${modul.pengalamanBelajar.inti.memahami.deskripsi.map((d) => `     * ${d}`).join("\n")}
  b. Mengaplikasi (Prinsip: ${modul.pengalamanBelajar.inti.mengaplikasi.prinsip}; Insersi KBC: ${modul.pengalamanBelajar.inti.mengaplikasi.muatanKbc}):
${modul.pengalamanBelajar.inti.mengaplikasi.deskripsi.map((d) => `     * ${d}`).join("\n")}
  c. Merefleksi (Prinsip: ${modul.pengalamanBelajar.inti.merefleksi.prinsip}; Insersi KBC: ${modul.pengalamanBelajar.inti.merefleksi.muatanKbc}):
${modul.pengalamanBelajar.inti.merefleksi.deskripsi.map((d) => `     * ${d}`).join("\n")}

3. Tahapan Penutup (${modul.pengalamanBelajar.penutup.alokasiWaktu}):
${modul.pengalamanBelajar.penutup.deskripsi.map((d) => `  - ${d}`).join("\n")}

D. ASESMEN PEMBELAJARAN
- Asesmen Formatif:
${modul.asesmen.formatif.map((f) => `  - ${f}`).join("\n")}
- Asesmen Sumatif:
${modul.asesmen.sumatif.map((s) => `  - ${s}`).join("\n")}

LAMPIRAN-LAMPIRAN:
1. Lembar Kerja Peserta Didik (LKPD): ${modul.lampiran.lkpd.judul}
2. Materi Pembelajaran & Integrasi KBC: ${modul.lampiran.materiPembelajaran.ringkasanMateri}
3. Kisi-kisi & Contoh Soal HOTS
4. Remedial & Pengayaan
5. Lembar Refleksi Guru & Siswa

Mengetahui, ${modul.pengesahan.tempatTanggal}
Kepala Madrasah: ${modul.pengesahan.namaKepala} (NIP: ${modul.pengesahan.nipKepala})
Guru Mata Pelajaran: ${modul.pengesahan.namaGuru} (NIP: ${modul.pengesahan.nipGuru})
    `;
    navigator.clipboard.writeText(textData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action Bar (Hidden on Print) */}
      <div className="no-print bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-16 z-30">
        
        {/* Left: Back & Title Info */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={onBackToForm}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Form</span>
          </button>
          <div className="hidden sm:block">
            <span className="text-xs font-bold text-slate-800 block truncate max-w-xs">
              {modul.identitas.mataPelajaran} - {modul.identitas.materiEsensial}
            </span>
            <span className="text-[11px] text-emerald-700 font-medium">
              RPP KBC & Deep Learning Tersusun
            </span>
          </div>
        </div>

        {/* Center: Tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-medium w-full md:w-auto justify-center">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "all"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Semua Halaman
          </button>
          <button
            onClick={() => setActiveTab("rpp")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "rpp"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            RPP Resmi (Hal 1-2)
          </button>
          <button
            onClick={() => setActiveTab("lampiran")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "lampiran"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Lampiran Lengkap
          </button>
        </div>

        {/* Right: Export Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              isEditing
                ? "bg-amber-100 text-amber-800 border border-amber-300"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            title="Klik untuk menyunting langsung teks sebelum diekspor"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? "Selesai Edit" : "Edit Teks"}</span>
          </button>

          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Salin semua teks ke papan klip"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white transition-colors shadow-xs"
            title="Cetak atau Simpan sebagai PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak / PDF</span>
          </button>

          <button
            onClick={() => exportModulToWord(modul)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors shadow-xs"
            title="Download file Microsoft Word (.doc) yang siap dibuka dan diedit di Word"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Word (.doc)</span>
          </button>
        </div>

      </div>

      {/* DOCUMENT CANVAS CONTAINER (A4 Formal Layout) */}
      <div className="max-w-4xl mx-auto space-y-8 print:m-0 print:p-0 print:max-w-none">
        
        {/* ======================================================== */}
        {/* HALAMAN 1: IDENTIFIKASI & DESAIN PEMBELAJARAN           */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "rpp") && (
          <div className="bg-white rounded-xl shadow-lg border border-slate-300 p-8 sm:p-12 font-serif text-[13.5px] leading-relaxed text-black print:shadow-none print:border-none print:p-0 print:rounded-none page-sheet">
            
            {/* Header Box sesuai format PDF Halaman 1 */}
            <div className="border-2 border-black grid grid-cols-12 mb-5 items-center">
              
              {/* Logo Kemenag Cell */}
              <div className="col-span-2 border-r-2 border-black p-3 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-emerald-700 flex items-center justify-center bg-emerald-50 mb-1">
                  <div className="text-[10px] font-black text-emerald-800 leading-tight">
                    KEMENAG
                  </div>
                </div>
                <span className="text-[9px] font-bold text-slate-700 block">Kemenag RI</span>
              </div>

              {/* Title Cell */}
              <div className="col-span-8 p-3 text-center">
                <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">
                  Rencana Pelaksanaan Pembelajaran (RPP)
                </h2>
                <p className="text-[11px] font-sans text-slate-700 mt-0.5">
                  Kurikulum Merdeka • Terintegrasi KBC & Pembelajaran Mendalam
                </p>
              </div>

              {/* Logo Madrasah Cell */}
              <div className="col-span-2 border-l-2 border-black p-3 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-lg border border-slate-400 border-dashed flex items-center justify-center bg-slate-50 mb-1">
                  <span className="text-[9px] font-bold text-slate-500">LOGO</span>
                </div>
                <span className="text-[9px] font-bold text-slate-700 block uppercase truncate max-w-full">
                  {modul.identitas.namaSekolah ? "MADRASAH" : "MADRASAH"}
                </span>
              </div>

            </div>

            {/* Identitas Table */}
            <table className="w-full mb-6 border-collapse text-[13px]">
              <tbody>
                {modul.identitas.namaSekolah && (
                  <tr>
                    <td className="w-48 py-1 font-bold">Nama Madrasah / Sekolah</td>
                    <td className="w-4 py-1 text-center">:</td>
                    <td className="py-1">
                      {isEditing ? (
                        <input
                          type="text"
                          className="border-b border-slate-400 w-full px-1"
                          value={modul.identitas.namaSekolah}
                          onChange={(e) =>
                            onUpdateModul({
                              ...modul,
                              identitas: { ...modul.identitas, namaSekolah: e.target.value },
                            })
                          }
                        />
                      ) : (
                        <span>{modul.identitas.namaSekolah}</span>
                      )}
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="w-48 py-1 font-bold">Mata Pelajaran</td>
                  <td className="w-4 py-1 text-center">:</td>
                  <td className="py-1 font-semibold">{modul.identitas.mataPelajaran}</td>
                </tr>
                <tr>
                  <td className="py-1 font-bold">Fase/Kelas/Semester</td>
                  <td className="py-1 text-center">:</td>
                  <td className="py-1">{modul.identitas.faseKelas} / {modul.identitas.semester}</td>
                </tr>
                <tr>
                  <td className="py-1 font-bold">Materi Esensial</td>
                  <td className="py-1 text-center">:</td>
                  <td className="py-1 font-medium">{modul.identitas.materiEsensial}</td>
                </tr>
                <tr>
                  <td className="py-1 font-bold text-emerald-950">Topik KBC</td>
                  <td className="py-1 text-center">:</td>
                  <td className="py-1">{modul.identitas.topikKbc}</td>
                </tr>
                <tr>
                  <td className="py-1 font-bold text-emerald-950">Materi Insersi KBC</td>
                  <td className="py-1 text-center">:</td>
                  <td className="py-1">{modul.identitas.materiInsersiKbc}</td>
                </tr>
                <tr>
                  <td className="py-1 font-bold">Alokasi Waktu</td>
                  <td className="py-1 text-center">:</td>
                  <td className="py-1">{modul.identitas.alokasiWaktu}</td>
                </tr>
              </tbody>
            </table>

            <hr className="border-t border-black my-4" />

            {/* A. IDENTIFIKASI */}
            <div className="space-y-3 mb-6">
              <h3 className="font-bold text-sm tracking-wide uppercase">A. IDENTIFIKASI</h3>

              <div className="pl-4 space-y-2.5">
                <div>
                  <h4 className="font-bold text-[13px]">1. Peserta Didik (Opsional)</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.identifikasi.pesertaDidik}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">2. Materi Pelajaran (Opsional)</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.identifikasi.materiPelajaran}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">3. Dimensi Profil Lulusan</h4>
                  <div className="mt-1 space-y-1.5 text-slate-800">
                    <div>
                      <span className="font-semibold text-xs">a. Profil Pelajar Pancasila:</span>
                      <ul className="list-disc pl-5 text-xs space-y-0.5 mt-0.5">
                        {modul.identifikasi.dimensiProfilLulusan.profilPelajarPancasila.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-emerald-950">
                        b. Profil Pelajar Rahmatan Lil &apos;Alamin (PPRA Kemenag):
                      </span>
                      <ul className="list-disc pl-5 text-xs space-y-0.5 mt-0.5">
                        {modul.identifikasi.dimensiProfilLulusan.profilPelajarRahmatanLilAlamin.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B. DESAIN PEMBELAJARAN */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm tracking-wide uppercase">B. DESAIN PEMBELAJARAN</h3>

              <div className="pl-4 space-y-2.5">
                <div>
                  <h4 className="font-bold text-[13px]">1. Capaian Pembelajaran (Opsional)</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.desainPembelajaran.capaianPembelajaran}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">2. Lintas Disiplin Ilmu (Opsional)</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.desainPembelajaran.lintasDisiplinIlmu}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">3. Tujuan Pembelajaran</h4>
                  <ol className="list-decimal pl-5 text-slate-800 mt-0.5 space-y-1">
                    {modul.desainPembelajaran.tujuanPembelajaran.map((tp, i) => (
                      <li key={i} className="text-justify">{tp}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">4. Topik Pembelajaran (Opsional)</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.desainPembelajaran.topikPembelajaran}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">5. Praktik Pedagogis</h4>
                  <div className="text-slate-800 text-xs mt-1 space-y-0.5">
                    <div><strong>Model Pembelajaran:</strong> {modul.desainPembelajaran.praktikPedagogis.modelPembelajaran}</div>
                    <div><strong>Metode Pembelajaran:</strong> {modul.desainPembelajaran.praktikPedagogis.metodePembelajaran.join(", ")}</div>
                    <div><strong>Pendekatan:</strong> {modul.desainPembelajaran.praktikPedagogis.pendekatan}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">6. Kemitraan Pembelajaran (Opsional)</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.desainPembelajaran.kemitraanPembelajaran}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">7. Lingkungan Pembelajaran</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.desainPembelajaran.lingkunganPembelajaran}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[13px]">8. Pemanfaatan Digital (Opsional)</h4>
                  <p className="text-justify text-slate-800 mt-0.5">{modul.desainPembelajaran.pemanfaatanDigital}</p>
                </div>
              </div>
            </div>

            {/* Page 1 Footer indicator */}
            <div className="text-right text-xs text-slate-400 mt-6 pt-2 border-t border-slate-200">
              Halaman 1
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* HALAMAN 2: PENGALAMAN BELAJAR, ASESMEN & TTD             */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "rpp") && (
          <div className="bg-white rounded-xl shadow-lg border border-slate-300 p-8 sm:p-12 font-serif text-[13.5px] leading-relaxed text-black print:shadow-none print:border-none print:p-0 print:rounded-none page-break page-sheet">
            
            {/* C. PENGALAMAN BELAJAR */}
            <div className="mb-6">
              <h3 className="font-bold text-sm tracking-wide uppercase mb-2">
                C. PENGALAMAN BELAJAR
              </h3>
              <p className="text-xs italic text-slate-600 mb-3">
                (Pembelajaran Mendalam: Berkesadaran / Mindful, Bermakna / Meaningful, Menggembirakan / Joyful, dan Insersi Muatan Materi KBC)
              </p>

              {/* Table Pengalaman Belajar sesuai Template Gambar 2 */}
              <div className="border border-black overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-black bg-slate-100/80 font-bold text-center text-xs">
                      <th className="p-2.5 border-r border-black w-24">Tahapan Pembelajaran</th>
                      <th className="p-2.5 border-r border-black">Deskripsi Kegiatan</th>
                      <th className="p-2.5 w-20">Alokasi Waktu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black text-[12.5px]">
                    
                    {/* Tahapan Awal */}
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold text-center align-top bg-slate-50/50">
                        Awal
                      </td>
                      <td className="p-2.5 border-r border-black align-top">
                        <ol className="list-decimal pl-4 space-y-1">
                          {modul.pengalamanBelajar.awal.deskripsi.map((d, i) => (
                            <li key={i} className="text-justify">{d}</li>
                          ))}
                        </ol>
                      </td>
                      <td className="p-2.5 text-center align-top font-sans text-xs">
                        {modul.pengalamanBelajar.awal.alokasiWaktu}
                      </td>
                    </tr>

                    {/* Tahapan Inti: Memahami, Mengaplikasi, Merefleksi dengan baris tabel terpisah (rowSpan=3) */}
                    <tr>
                      <td rowSpan={3} className="p-3 border-r border-black font-bold text-center align-middle bg-slate-50/50 w-24">
                        Inti
                      </td>
                      <td className="p-3 border-r border-black border-b border-black align-top">
                        <div className="font-bold text-slate-900 text-xs">
                          Memahami <span className="font-normal italic text-[11px] text-slate-700">
                            (tuliskan prinsip pembelajaran mendalam yang digunakan: berkesadaran, bermakna, dan/atau menggembirakan, insersi muatan materi KBC)
                          </span>
                        </div>
                        <div className="text-[11px] font-medium text-emerald-900 mt-0.5">
                          Prinsip: {modul.pengalamanBelajar.inti.memahami.prinsip} | Insersi KBC: {modul.pengalamanBelajar.inti.memahami.muatanKbc}
                        </div>
                        <ul className="list-disc pl-4 mt-1.5 space-y-1">
                          {modul.pengalamanBelajar.inti.memahami.deskripsi.map((d, i) => (
                            <li key={i} className="text-justify">{d}</li>
                          ))}
                        </ul>
                      </td>
                      <td rowSpan={3} className="p-2.5 text-center align-middle font-sans text-xs w-20">
                        {modul.pengalamanBelajar.inti.alokasiWaktu}
                      </td>
                    </tr>

                    <tr>
                      <td className="p-3 border-r border-black border-b border-black align-top">
                        <div className="font-bold text-slate-900 text-xs">
                          Mengaplikasi <span className="font-normal italic text-[11px] text-slate-700">
                            (tuliskan prinsip pembelajaran mendalam yang digunakan: berkesadaran, bermakna, dan/atau menggembirakan, insersi muatan materi KBC)
                          </span>
                        </div>
                        <div className="text-[11px] font-medium text-teal-900 mt-0.5">
                          Prinsip: {modul.pengalamanBelajar.inti.mengaplikasi.prinsip} | Insersi KBC: {modul.pengalamanBelajar.inti.mengaplikasi.muatanKbc}
                        </div>
                        <ul className="list-disc pl-4 mt-1.5 space-y-1">
                          {modul.pengalamanBelajar.inti.mengaplikasi.deskripsi.map((d, i) => (
                            <li key={i} className="text-justify">{d}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-3 border-r border-black align-top">
                        <div className="font-bold text-slate-900 text-xs">
                          Merefleksi <span className="font-normal italic text-[11px] text-slate-700">
                            (tuliskan prinsip pembelajaran mendalam yang digunakan: berkesadaran, bermakna, dan/atau menggembirakan, insersi muatan materi KBC)
                          </span>
                        </div>
                        <div className="text-[11px] font-medium text-indigo-900 mt-0.5">
                          Prinsip: {modul.pengalamanBelajar.inti.merefleksi.prinsip} | Insersi KBC: {modul.pengalamanBelajar.inti.merefleksi.muatanKbc}
                        </div>
                        <ul className="list-disc pl-4 mt-1.5 space-y-1">
                          {modul.pengalamanBelajar.inti.merefleksi.deskripsi.map((d, i) => (
                            <li key={i} className="text-justify">{d}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>

                    {/* Tahapan Penutup */}
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold text-center align-top bg-slate-50/50">
                        Penutup
                      </td>
                      <td className="p-2.5 border-r border-black align-top">
                        <ol className="list-decimal pl-4 space-y-1">
                          {modul.pengalamanBelajar.penutup.deskripsi.map((d, i) => (
                            <li key={i} className="text-justify">{d}</li>
                          ))}
                        </ol>
                      </td>
                      <td className="p-2.5 text-center align-top font-sans text-xs">
                        {modul.pengalamanBelajar.penutup.alokasiWaktu}
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* D. ASESMEN PEMBELAJARAN */}
            <div className="mb-6">
              <h3 className="font-bold text-sm tracking-wide uppercase mb-2">
                D. ASESMEN PEMBELAJARAN
              </h3>

              <div className="border border-black overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-black bg-slate-100/80 font-bold text-center text-xs">
                      <th className="p-2.5 border-r border-black w-1/2">Asesmen Formatif</th>
                      <th className="p-2.5 w-1/2">Asesmen Sumatif</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12.5px]">
                    <tr>
                      <td className="p-3 border-r border-black align-top">
                        <ul className="list-disc pl-4 space-y-1">
                          {modul.asesmen.formatif.map((f, i) => (
                            <li key={i} className="text-justify">{f}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-3 align-top">
                        <ul className="list-disc pl-4 space-y-1">
                          {modul.asesmen.sumatif.map((s, i) => (
                            <li key={i} className="text-justify">{s}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DAFTAR LAMPIRAN */}
            <div className="mb-8 text-xs text-slate-800">
              <div className="font-bold mb-1">Lampiran-lampiran:</div>
              <ol className="list-decimal pl-5 space-y-0.5">
                <li>Lembar Kerja Peserta Didik (LKPD)</li>
                <li>Materi Pembelajaran</li>
                <li>Instrumen Asesmen Pembelajaran</li>
              </ol>
            </div>

            {/* TANDA TANGAN RESMI */}
            <div className="pt-4 text-xs">
              <div className="grid grid-cols-2 gap-8">
                <div></div>
                <div className="text-left font-medium">
                  {modul.pengesahan.tempatTanggal || "............................, .................... 2025"}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-2">
                {/* Kepala Madrasah */}
                <div className="text-left">
                  <div>Mengetahui,</div>
                  <div>Kepala Madrasah</div>
                  <div className="h-20"></div>
                  <div className="font-bold underline">
                    {modul.pengesahan.namaKepala || "......................................................."}
                  </div>
                  <div>NIP. {modul.pengesahan.nipKepala || "......................................................."}</div>
                </div>

                {/* Guru Mata Pelajaran */}
                <div className="text-left">
                  <div>Guru Mata Pelajaran {modul.identitas.mataPelajaran}</div>
                  <div className="h-20"></div>
                  <div className="font-bold underline">
                    {modul.pengesahan.namaGuru || "......................................................."}
                  </div>
                  <div>NIP. {modul.pengesahan.nipGuru || "......................................................."}</div>
                </div>
              </div>
            </div>

            {/* Page 2 Footer indicator */}
            <div className="text-right text-xs text-slate-400 mt-8 pt-2 border-t border-slate-200">
              Halaman 2
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* LAMPIRAN-LAMPIRAN LENGKAP                                */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "lampiran") && (
          <div className="bg-white rounded-xl shadow-lg border border-slate-300 p-8 sm:p-12 font-serif text-[13px] leading-relaxed text-black print:shadow-none print:border-none print:p-0 print:rounded-none page-break page-sheet space-y-8">
            
            <div className="text-center pb-4 border-b border-black">
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-tight">
                LAMPIRAN-LAMPIRAN MODUL AJAR
              </h2>
              <p className="text-xs text-slate-600 font-sans mt-0.5">
                {modul.identitas.mataPelajaran} • {modul.identitas.materiEsensial}
              </p>
            </div>

            {/* LAMPIRAN 1: LKPD */}
            <div className="space-y-3">
              <div className="bg-emerald-50/80 p-2.5 border-l-4 border-emerald-700 font-bold text-xs uppercase tracking-wide">
                Lampiran 1: Lembar Kerja Peserta Didik (LKPD)
              </div>

              <div className="border border-slate-300 rounded-lg p-5 space-y-3">
                <div className="text-center font-bold text-sm text-slate-900">
                  {modul.lampiran.lkpd.judul}
                </div>

                <div>
                  <span className="font-bold text-xs">Petunjuk Pengisian:</span>
                  <ol className="list-decimal pl-5 text-xs text-slate-700 mt-1 space-y-0.5">
                    {modul.lampiran.lkpd.petunjuk.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ol>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-md">
                  <span className="font-bold text-xs text-emerald-950 block mb-1">
                    Stimulus Kasus Kontekstual Berbasis Nilai Cinta & Empati:
                  </span>
                  <p className="text-justify text-xs text-slate-700 leading-relaxed">
                    {modul.lampiran.lkpd.stimulusKasus}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-xs">Aktivitas Kolaboratif Kelompok:</span>
                  <ul className="list-disc pl-5 text-xs text-slate-700 mt-1 space-y-0.5">
                    {modul.lampiran.lkpd.aktivitas.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-xs">Pertanyaan Diskusi & Analisis:</span>
                  <ol className="list-decimal pl-5 text-xs text-slate-700 mt-1 space-y-1">
                    {modul.lampiran.lkpd.pertanyaanDiskusi.map((q, i) => (
                      <li key={i} className="text-justify">{q}</li>
                    ))}
                  </ol>
                </div>

                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  <strong>Rubrik LKPD:</strong> {modul.lampiran.lkpd.rubrikSingkat}
                </div>
              </div>
            </div>

            {/* LAMPIRAN 2: MATERI PEMBELAJARAN */}
            <div className="space-y-3">
              <div className="bg-emerald-50/80 p-2.5 border-l-4 border-emerald-700 font-bold text-xs uppercase tracking-wide">
                Lampiran 2: Bahan Bacaan & Ringkasan Materi
              </div>

              <div className="space-y-3 pl-2">
                <div>
                  <h4 className="font-bold text-xs">A. Ringkasan Materi Esensial</h4>
                  <p className="text-justify text-xs text-slate-700 mt-1 leading-relaxed">
                    {modul.lampiran.materiPembelajaran.ringkasanMateri}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs text-emerald-950">
                    B. Integrasi Nilai Kurikulum Berbasis Cinta (KBC)
                  </h4>
                  <p className="text-justify text-xs text-slate-700 mt-1 leading-relaxed">
                    {modul.lampiran.materiPembelajaran.integrasiNilaiKbc}
                  </p>
                </div>

                <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-lg">
                  <h4 className="font-bold text-xs text-emerald-900 mb-1">
                    C. Dalil Rujukan / Pepatah Hikmah
                  </h4>
                  <p className="text-justify text-xs text-slate-800 italic">
                    {modul.lampiran.materiPembelajaran.dalilRujukan}
                  </p>
                </div>
              </div>
            </div>

            {/* LAMPIRAN 3: INSTRUMEN ASESMEN */}
            <div className="space-y-3">
              <div className="bg-emerald-50/80 p-2.5 border-l-4 border-emerald-700 font-bold text-xs uppercase tracking-wide">
                Lampiran 3: Instrumen Asesmen Pembelajaran
              </div>

              {/* Kisi-kisi Table */}
              <div>
                <h4 className="font-bold text-xs mb-2">A. Kisi-Kisi Soal Penilaian</h4>
                <div className="border border-black overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 border-b border-black font-bold text-center">
                      <tr>
                        <th className="p-2 border-r border-black w-10">No</th>
                        <th className="p-2 border-r border-black">Indikator Soal</th>
                        <th className="p-2 border-r border-black w-24">Level Kognitif</th>
                        <th className="p-2 w-24">Bentuk Soal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black">
                      {modul.lampiran.instrumenAsesmen.kisiKisiSoal.map((k) => (
                        <tr key={k.nomor}>
                          <td className="p-2 border-r border-black text-center">{k.nomor}</td>
                          <td className="p-2 border-r border-black">{k.indikator}</td>
                          <td className="p-2 border-r border-black text-center">{k.levelKognitif}</td>
                          <td className="p-2 text-center">{k.bentukSoal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contoh Soal HOTS */}
              <div className="pt-2">
                <h4 className="font-bold text-xs mb-2">B. Contoh Soal HOTS & Kunci Jawaban</h4>
                <div className="space-y-3">
                  {modul.lampiran.instrumenAsesmen.contohSoalHots.map((soal) => (
                    <div key={soal.nomor} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5">
                      <div className="font-bold text-slate-900">
                        Soal No. {soal.nomor}: {soal.soal}
                      </div>
                      {soal.pilihanJawaban && (
                        <div className="pl-4 space-y-0.5 text-slate-700">
                          {soal.pilihanJawaban.map((pj, idx) => (
                            <div key={idx}>{pj}</div>
                          ))}
                        </div>
                      )}
                      <div className="pt-1.5 border-t border-slate-200 text-[11px] text-emerald-900 font-medium">
                        <strong>Kunci Jawaban:</strong> {soal.kunciJawaban} | <strong>Pembahasan:</strong> {soal.pembahasan}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rubrik Sikap PPRA */}
              <div className="pt-2">
                <h4 className="font-bold text-xs mb-2">
                  C. Rubrik Penilaian Sikap (Profil Pelajar Rahmatan Lil &apos;Alamin & KBC)
                </h4>
                <div className="border border-black overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 border-b border-black font-bold text-center">
                      <tr>
                        <th className="p-2 border-r border-black w-1/3">Dimensi Karakter</th>
                        <th className="p-2 border-r border-black w-5/12">Indikator Perilaku</th>
                        <th className="p-2 w-1/4">Kriteria Penilaian</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black">
                      {modul.lampiran.instrumenAsesmen.rubrikSikapPpra.map((r, i) => (
                        <tr key={i}>
                          <td className="p-2 border-r border-black font-semibold">{r.nilaiKarakter}</td>
                          <td className="p-2 border-r border-black">{r.indikatorPerilaku}</td>
                          <td className="p-2">{r.skorKriteria}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* LAMPIRAN 4: REMEDIAL & PENGAYAAN */}
            <div className="space-y-2">
              <div className="bg-emerald-50/80 p-2.5 border-l-4 border-emerald-700 font-bold text-xs uppercase tracking-wide">
                Lampiran 4: Program Remedial dan Pengayaan
              </div>
              <div className="text-xs space-y-2 pl-2">
                <div>
                  <strong>A. Remedial:</strong>
                  <p className="text-slate-700 mt-0.5">{modul.lampiran.remedialDanPengayaan.remedial}</p>
                </div>
                <div>
                  <strong>B. Pengayaan:</strong>
                  <p className="text-slate-700 mt-0.5">{modul.lampiran.remedialDanPengayaan.pengayaan}</p>
                </div>
              </div>
            </div>

            {/* LAMPIRAN 5: REFLEKSI GURU & SISWA */}
            <div className="space-y-2">
              <div className="bg-emerald-50/80 p-2.5 border-l-4 border-emerald-700 font-bold text-xs uppercase tracking-wide">
                Lampiran 5: Instrumen Refleksi Guru dan Peserta Didik
              </div>
              <div className="text-xs space-y-2 pl-2">
                <div>
                  <strong>A. Refleksi Guru:</strong>
                  <ul className="list-disc pl-5 mt-0.5 space-y-0.5 text-slate-700">
                    {modul.lampiran.refleksi.refleksiGuru.map((rg, i) => (
                      <li key={i}>{rg}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>B. Refleksi Peserta Didik:</strong>
                  <ul className="list-disc pl-5 mt-0.5 space-y-0.5 text-slate-700">
                    {modul.lampiran.refleksi.refleksiPesertaDidik.map((rs, i) => (
                      <li key={i}>{rs}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
