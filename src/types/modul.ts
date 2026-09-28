export interface IdentitasModul {
  namaSekolah: string;
  mataPelajaran: string;
  faseKelas: string;
  semester: string;
  materiEsensial: string;
  topikKbc: string;
  materiInsersiKbc: string;
  alokasiWaktu: string;
  tahunPelajaran?: string;
}

export interface IdentifikasiModul {
  pesertaDidik: string;
  materiPelajaran: string;
  dimensiProfilLulusan: {
    profilPelajarPancasila: string[];
    profilPelajarRahmatanLilAlamin: string[];
  };
}

export interface DesainPembelajaran {
  capaianPembelajaran: string;
  lintasDisiplinIlmu: string;
  tujuanPembelajaran: string[];
  topikPembelajaran: string;
  praktikPedagogis: {
    modelPembelajaran: string;
    metodePembelajaran: string[];
    pendekatan: string;
  };
  kemitraanPembelajaran: string;
  lingkunganPembelajaran: string;
  pemanfaatanDigital: string;
}

export interface IntiKegiatan {
  prinsip: string;
  muatanKbc: string;
  deskripsi: string[];
}

export interface PengalamanBelajar {
  awal: {
    alokasiWaktu: string;
    deskripsi: string[];
  };
  inti: {
    alokasiWaktu: string;
    memahami: IntiKegiatan;
    mengaplikasi: IntiKegiatan;
    merefleksi: IntiKegiatan;
  };
  penutup: {
    alokasiWaktu: string;
    deskripsi: string[];
  };
}

export interface AsesmenPembelajaran {
  formatif: string[];
  sumatif: string[];
}

export interface SoalHots {
  nomor: number;
  soal: string;
  pilihanJawaban?: string[];
  kunciJawaban: string;
  pembahasan: string;
}

export interface KisiKisi {
  nomor: number;
  indikator: string;
  levelKognitif: string;
  bentukSoal: string;
}

export interface RubrikSikap {
  nilaiKarakter: string;
  indikatorPerilaku: string;
  skorKriteria: string;
}

export interface LampiranModul {
  lkpd: {
    judul: string;
    petunjuk: string[];
    stimulusKasus: string;
    aktivitas: string[];
    pertanyaanDiskusi: string[];
    rubrikSingkat: string;
  };
  materiPembelajaran: {
    ringkasanMateri: string;
    integrasiNilaiKbc: string;
    dalilRujukan: string;
  };
  instrumenAsesmen: {
    kisiKisiSoal: KisiKisi[];
    contohSoalHots: SoalHots[];
    rubrikSikapPpra: RubrikSikap[];
  };
  remedialDanPengayaan: {
    remedial: string;
    pengayaan: string;
  };
  refleksi: {
    refleksiGuru: string[];
    refleksiPesertaDidik: string[];
  };
}

export interface PengesahanModul {
  tempatTanggal: string;
  namaKepala: string;
  nipKepala: string;
  namaGuru: string;
  nipGuru: string;
}

export interface ModulAjarKemenag {
  id: string;
  timestamp: number;
  identitas: IdentitasModul;
  identifikasi: IdentifikasiModul;
  desainPembelajaran: DesainPembelajaran;
  pengalamanBelajar: PengalamanBelajar;
  asesmen: AsesmenPembelajaran;
  lampiran: LampiranModul;
  pengesahan: PengesahanModul;
}
