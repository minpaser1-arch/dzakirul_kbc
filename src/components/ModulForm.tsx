import React, { useState } from "react";
import { Sparkles, Heart, School, BookOpen, Clock, Calendar, User, ShieldCheck, Wand2, RefreshCw, PenLine, ListFilter } from "lucide-react";
import { SUBJECT_PRESETS, KBC_TOPIC_OPTIONS, SUBJECT_DROPDOWN_GROUPS, SubjectPreset } from "../data/presets";

export interface FormInputs {
  namaSekolah: string;
  mataPelajaran: string;
  faseKelas: string;
  semester: string;
  materi: string;
  alokasiWaktu: string;
  topikKbc: string;
  materiInsersiKbc: string;
  namaGuru: string;
  nipGuru: string;
  namaKepala: string;
  nipKepala: string;
  tempatTanggal: string;
  lingkunganBelajar: string;
  pemanfaatanDigital: string;
}

interface ModulFormProps {
  onGenerate: (inputs: FormInputs) => Promise<void>;
  isLoading: boolean;
}

export const ModulForm: React.FC<ModulFormProps> = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState<FormInputs>({
    namaSekolah: "",
    mataPelajaran: "Fikih",
    faseKelas: "Fase E / Kelas X",
    semester: "Ganjil",
    materi: "Pengelolaan Zakat, Infak, dan Sedekah untuk Keadilan Sosial",
    alokasiWaktu: "2 JP x 45 Menit",
    topikKbc: "Cinta Sesama Manusia, Empati Sosial, dan Kedermawanan",
    materiInsersiKbc: "Menumbuhkan empati mendalam terhadap penderitaan sesama, memupuk kedermawanan tanpa pamrih, dan merawat keadilan sosial ekonomi",
    namaGuru: "",
    nipGuru: "",
    namaKepala: "",
    nipKepala: "",
    tempatTanggal: "",
    lingkunganBelajar: "Ruang kelas kolaboratif, meja U-shape untuk musyawarah, iklim saling menghormati",
    pemanfaatanDigital: "Simulasi kalkulator zakat digital, infografis interaktif BAZNAS, kuis Quizizz",
  });

  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [isCustomSubject, setIsCustomSubject] = useState<boolean>(false);

  const handlePresetSelect = (preset: SubjectPreset) => {
    setIsCustomSubject(false);
    setFormData((prev) => ({
      ...prev,
      mataPelajaran: preset.mataPelajaran,
      faseKelas: preset.faseKelas,
      semester: preset.semester,
      materi: preset.materiEsensial,
      alokasiWaktu: preset.alokasiWaktu,
      topikKbc: preset.topikKbc,
      materiInsersiKbc: preset.materiInsersiKbc,
      lingkunganBelajar: preset.lingkunganBelajar,
      pemanfaatanDigital: preset.pemanfaatanDigital,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.mataPelajaran.trim() || !formData.materi.trim()) {
      alert("Mohon isi Mata Pelajaran dan Materi Pembelajaran terlebih dahulu.");
      return;
    }
    onGenerate(formData);
  };

  const filteredPresets = activeCategory === "Semua"
    ? SUBJECT_PRESETS
    : SUBJECT_PRESETS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
      
      {/* Banner Form */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/60 border border-emerald-400/30 text-emerald-100 mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-300 fill-amber-300/30" />
            <span>Versi Kemenag RI • KBC & Pembelajaran Mendalam</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Susun RPP / Modul Ajar Berbasis Cinta (KBC)
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 leading-relaxed">
            Menghasilkan dokumen RPP 2 Halaman resmi sesuai format Kemenag lengkap dengan 3 Tahapan Deep Learning (Memahami, Mengaplikasi, Merefleksi) dan 5 Lampiran (LKPD, Ringkasan Bahan Ajar, Kisi-kisi & Soal HOTS, Remedial, Refleksi).
          </p>
        </div>
      </div>

      {/* Quick Presets Section */}
      <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Pilih Contoh Cepat / Preset Madrasah
            </span>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {["Semua", "PAI & Madrasah", "Umum / Sains & Sosial"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-emerald-700 text-white shadow-2xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Preset Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {filteredPresets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handlePresetSelect(preset)}
              className="text-left p-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-emerald-500 hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {preset.mataPelajaran}
                  </span>
                  <span className="text-[9px] text-slate-400 font-medium">{preset.jenjang}</span>
                </div>
                <div className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-emerald-900">
                  {preset.materiEsensial}
                </div>
              </div>
              <div className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                <Heart className="w-3 h-3 text-emerald-500" />
                <span className="truncate">{preset.topikKbc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Form Fields */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        
        {/* Section 1: Identitas Madrasah & Mata Pelajaran */}
        <div>
          <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-200 text-slate-900 font-bold text-sm">
            <School className="w-4 h-4 text-emerald-700" />
            <span>1. Identitas Madrasah & Mata Pelajaran</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Nama Sekolah */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Sekolah / Madrasah
              </label>
              <input
                type="text"
                value={formData.namaSekolah}
                onChange={(e) => setFormData({ ...formData, namaSekolah: e.target.value })}
                placeholder="Contoh: MAN 1 Paser / MTsN 1 / MIS..."
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <span className="text-[10px] text-slate-400">Kosongkan jika ingin memakai placeholder resmi</span>
            </div>

            {/* Mata Pelajaran Dropdown */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Mata Pelajaran <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const nextCustom = !isCustomSubject;
                    setIsCustomSubject(nextCustom);
                    if (nextCustom && !formData.mataPelajaran) {
                      setFormData({ ...formData, mataPelajaran: "" });
                    }
                  }}
                  className="text-[10px] text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 transition-colors"
                >
                  <PenLine className="w-3 h-3" />
                  <span>{isCustomSubject ? "Pilih dari Dropdown" : "Ketik Manual"}</span>
                </button>
              </div>

              {!isCustomSubject ? (
                <select
                  value={formData.mataPelajaran}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "Lainnya") {
                      setIsCustomSubject(true);
                      setFormData({ ...formData, mataPelajaran: "" });
                    } else {
                      setFormData({ ...formData, mataPelajaran: val });
                    }
                  }}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white font-medium text-slate-800 shadow-2xs"
                >
                  <option value="" disabled>-- Pilih Mata Pelajaran --</option>
                  {SUBJECT_DROPDOWN_GROUPS.map((group) => (
                    <optgroup key={group.groupName} label={group.groupName}>
                      {group.items.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              ) : (
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    value={formData.mataPelajaran}
                    onChange={(e) => setFormData({ ...formData, mataPelajaran: e.target.value })}
                    placeholder="Ketikkan nama mata pelajaran..."
                    className="w-full text-xs px-3 py-2 rounded-lg border border-emerald-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-medium bg-emerald-50/20"
                    autoFocus
                  />
                  <span className="text-[10px] text-slate-500 block">
                    Mode ketik manual aktif. Klik &quot;Pilih dari Dropdown&quot; untuk memilih kembali dari daftar baku Kemenag.
                  </span>
                </div>
              )}
            </div>

            {/* Fase / Kelas */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fase / Kelas <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.faseKelas}
                onChange={(e) => setFormData({ ...formData, faseKelas: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
              >
                <option value="Fase A / Kelas I">Fase A / Kelas I (MI)</option>
                <option value="Fase A / Kelas II">Fase A / Kelas II (MI)</option>
                <option value="Fase B / Kelas III">Fase B / Kelas III (MI)</option>
                <option value="Fase B / Kelas IV">Fase B / Kelas IV (MI)</option>
                <option value="Fase C / Kelas V">Fase C / Kelas V (MI)</option>
                <option value="Fase C / Kelas VI">Fase C / Kelas VI (MI)</option>
                <option value="Fase D / Kelas VII">Fase D / Kelas VII (MTs)</option>
                <option value="Fase D / Kelas VIII">Fase D / Kelas VIII (MTs)</option>
                <option value="Fase D / Kelas IX">Fase D / Kelas IX (MTs)</option>
                <option value="Fase E / Kelas X">Fase E / Kelas X (MA / MAK)</option>
                <option value="Fase F / Kelas XI">Fase F / Kelas XI (MA / MAK)</option>
                <option value="Fase F / Kelas XII">Fase F / Kelas XII (MA / MAK)</option>
              </select>
            </div>

            {/* Semester */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Semester
              </label>
              <select
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
              >
                <option value="Ganjil">Semester Ganjil</option>
                <option value="Genap">Semester Genap</option>
              </select>
            </div>

            {/* Alokasi Waktu */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Alokasi Waktu <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.alokasiWaktu}
                onChange={(e) => setFormData({ ...formData, alokasiWaktu: e.target.value })}
                placeholder="Contoh: 2 JP x 45 Menit (Pertemuan ke-1)"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Tanggal Penandatanganan */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kota & Tanggal Penandatanganan
              </label>
              <input
                type="text"
                value={formData.tempatTanggal}
                onChange={(e) => setFormData({ ...formData, tempatTanggal: e.target.value })}
                placeholder="Contoh: Paser, 15 Juli 2025"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Materi Esensial */}
          <div className="mt-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Materi Esensial / Pokok Bahasan <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.materi}
              onChange={(e) => setFormData({ ...formData, materi: e.target.value })}
              placeholder="Contoh: Pengelolaan Zakat, Infak, dan Sedekah untuk Keadilan Sosial"
              className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium text-slate-900"
            />
          </div>
        </div>

        {/* Section 2: Integrasi KBC (Kurikulum Berbasis Cinta) */}
        <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
            <Heart className="w-4 h-4 text-emerald-700 fill-emerald-600/30" />
            <span>2. Muatan Insersi KBC (Kurikulum Berbasis Cinta Kemenag)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Topik KBC */}
            <div>
              <label className="block text-xs font-semibold text-emerald-900 mb-1">
                Topik KBC
              </label>
              <select
                value={formData.topikKbc}
                onChange={(e) => setFormData({ ...formData, topikKbc: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg border border-emerald-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                {KBC_TOPIC_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Topik KBC jika ingin bebas */}
            <div>
              <label className="block text-xs font-semibold text-emerald-900 mb-1">
                Penyesuaian Tema KBC (Opsional)
              </label>
              <input
                type="text"
                value={formData.topikKbc}
                onChange={(e) => setFormData({ ...formData, topikKbc: e.target.value })}
                placeholder="Tulis tema cinta/karakter spesifik..."
                className="w-full text-xs px-3 py-2 rounded-lg border border-emerald-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
          </div>

          {/* Materi Insersi KBC */}
          <div>
            <label className="block text-xs font-semibold text-emerald-900 mb-1">
              Materi Insersi KBC (Nilai Kasih Sayang & Sikap yang Diintegrasikan)
            </label>
            <textarea
              rows={2}
              value={formData.materiInsersiKbc}
              onChange={(e) => setFormData({ ...formData, materiInsersiKbc: e.target.value })}
              placeholder="Contoh: Menumbuhkan empati terhadap sesama, memupuk kedermawanan, serta membangun sikap toleransi dan anti-perundungan..."
              className="w-full text-xs px-3 py-2 rounded-lg border border-emerald-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white leading-relaxed"
            />
          </div>
        </div>

        {/* Section 3: Data Guru & Kepala Madrasah (Opsional) */}
        <div>
          <div className="flex items-center justify-between pb-2 mb-4 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <User className="w-4 h-4 text-emerald-700" />
              <span>3. Data Guru & Kepala Madrasah</span>
            </div>
            <span className="text-[11px] text-slate-400">
              *Data dibiarkan formal titik-titik jika belum diisi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Nama Guru</label>
              <input
                type="text"
                value={formData.namaGuru}
                onChange={(e) => setFormData({ ...formData, namaGuru: e.target.value })}
                placeholder="Nama lengkap & gelar"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">NIP Guru</label>
              <input
                type="text"
                value={formData.nipGuru}
                onChange={(e) => setFormData({ ...formData, nipGuru: e.target.value })}
                placeholder="19xxxxxxxxxxxxxx"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Nama Kepala Madrasah</label>
              <input
                type="text"
                value={formData.namaKepala}
                onChange={(e) => setFormData({ ...formData, namaKepala: e.target.value })}
                placeholder="Nama lengkap & gelar"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">NIP Kepala Madrasah</label>
              <input
                type="text"
                value={formData.nipKepala}
                onChange={(e) => setFormData({ ...formData, nipKepala: e.target.value })}
                placeholder="19xxxxxxxxxxxxxx"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Sarana & Digital (Opsional) */}
        <div>
          <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-200 text-slate-900 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>4. Lingkungan Belajar & Pemanfaatan Digital (Opsional)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Lingkungan Pembelajaran
              </label>
              <input
                type="text"
                value={formData.lingkunganBelajar}
                onChange={(e) => setFormData({ ...formData, lingkunganBelajar: e.target.value })}
                placeholder="Ruang kelas kondusif, area diskusi kelompok, suasana damai..."
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pemanfaatan Digital
              </label>
              <input
                type="text"
                value={formData.pemanfaatanDigital}
                onChange={(e) => setFormData({ ...formData, pemanfaatanDigital: e.target.value })}
                placeholder="Proyektor, aplikasi Quizizz, modul digital, video YouTube..."
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Sesuai Surat Edaran & Panduan Pembelajaran Kemenag RI</span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all ${
              isLoading
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 shadow-emerald-700/25 active:scale-98"
            }`}
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Menyusun Modul Ajar Kemenag...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 text-amber-300" />
                <span>Buatkan Modul Ajar KBC Sekarang</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};
