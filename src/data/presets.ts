export interface SubjectPreset {
  id: string;
  category: "PAI & Madrasah" | "Umum / Sains & Sosial";
  jenjang: "MI" | "MTs" | "MA / MAK";
  faseKelas: string;
  semester: "Ganjil" | "Genap";
  mataPelajaran: string;
  materiEsensial: string;
  topikKbc: string;
  materiInsersiKbc: string;
  alokasiWaktu: string;
  lingkunganBelajar: string;
  pemanfaatanDigital: string;
}

export const SUBJECT_PRESETS: SubjectPreset[] = [
  {
    id: "fikih-ma-zakat",
    category: "PAI & Madrasah",
    jenjang: "MA / MAK",
    faseKelas: "Fase E / Kelas X",
    semester: "Ganjil",
    mataPelajaran: "Fikih",
    materiEsensial: "Pengelolaan Zakat, Infak, dan Sedekah untuk Keadilan Sosial",
    topikKbc: "Cinta Sesama Manusia, Empati Sosial, dan Kedermawanan (Mahabbah & Rahmah)",
    materiInsersiKbc: "Menumbuhkan empati mendalam terhadap penderitaan sesama, memupuk kedermawanan tanpa pamrih, dan merawat keadilan sosial ekonomi",
    alokasiWaktu: "2 JP x 45 Menit",
    lingkunganBelajar: "Ruang kelas kolaboratif, meja disusun U-shape untuk musyawarah, iklim saling menghormati pendapat",
    pemanfaatanDigital: "Simulasi kalkulator zakat digital, infografis interaktif BAZNAS, dan kuis pemahaman Quizizz",
  },
  {
    id: "qurdis-ma-maun",
    category: "PAI & Madrasah",
    jenjang: "MA / MAK",
    faseKelas: "Fase E / Kelas X",
    semester: "Ganjil",
    mataPelajaran: "Al-Qur'an Hadis",
    materiEsensial: "Menyayangi Anak Yatim dan Kaum Dhuafa (Kajian Tematik QS. Al-Ma'un)",
    topikKbc: "Cinta kepada Kaum Lemah dan Antikekerasan Sosial",
    materiInsersiKbc: "Membiasakan kepedulian nyata kepada sesama, menjauhi sifat kikir dan riya', serta mengamalkan cinta kasih dalam tindakan nyata",
    alokasiWaktu: "2 JP x 45 Menit",
    lingkunganBelajar: "Ruang kelas bernuansa tadarrus mindful, lingkaran diskusi melingkar",
    pemanfaatanDigital: "Aplikasi Al-Qur'an digital kemenag, audio murottal qari internasional, slide tafsir tematik",
  },
  {
    id: "akidah-mts-asmaulhusna",
    category: "PAI & Madrasah",
    jenjang: "MTs",
    faseKelas: "Fase D / Kelas VII",
    semester: "Ganjil",
    mataPelajaran: "Akidah Akhlak",
    materiEsensial: "Meneladani Sifat Kasih Sayang Allah melalui Asmaul Husna (Ar-Rahman, Ar-Rahim, Al-Afuw)",
    topikKbc: "Menebar Rahmat Ilahi, Memaafkan Sesama, dan Mencegah Perundungan (Anti-Bullying)",
    materiInsersiKbc: "Menanamkan karakter pemaaf, bertutur kata santun, mencintai kawan sebaya, dan menolak segala bentuk kekerasan lisan maupun fisik",
    alokasiWaktu: "2 JP x 40 Menit",
    lingkunganBelajar: "Kelas inklusif yang ramah anak, papan pohon kebaikan dan zona apresiasi emosi",
    pemanfaatanDigital: "Video pendek animasi kisah keteladanan akhlak, lembar refleksi diri digital Google Forms",
  },
  {
    id: "ski-ma-madinah",
    category: "PAI & Madrasah",
    jenjang: "MA / MAK",
    faseKelas: "Fase F / Kelas XI",
    semester: "Genap",
    mataPelajaran: "Sejarah Kebudayaan Islam (SKI)",
    materiEsensial: "Piagam Madinah sebagai Fondasi Kerukunan dan Moderasi Beragama",
    topikKbc: "Cinta Tanah Air, Menghargai Kebinekaan, dan Moderasi Beragama (Wasathiyyah)",
    materiInsersiKbc: "Meneladani Rasulullah SAW dalam membangun persatuan lintas suku dan agama, menjunjung tinggi hak asasi, dan hidup berdampingan secara damai",
    alokasiWaktu: "2 JP x 45 Menit",
    lingkunganBelajar: "Ruang kelas simulasi sidang permusyawaratan, galeri poster sejarah",
    pemanfaatanDigital: "Peta digital interaktif jazirah Arab, tayangan video dokudrama Piagam Madinah, padlet kolaboratif",
  },
  {
    id: "arab-mts-taaruf",
    category: "PAI & Madrasah",
    jenjang: "MTs",
    faseKelas: "Fase D / Kelas VII",
    semester: "Ganjil",
    mataPelajaran: "Bahasa Arab",
    materiEsensial: "At-Ta'aruf (Perkenalan Diri) dan Membangun Persahabatan (Mahabbah)",
    topikKbc: "Komunikasi Santun, Saling Menghormati, dan Persaudaraan Sejati",
    materiInsersiKbc: "Menggunakan ungkapan bahasa yang penuh kesantunan, menghargai latar belakang sahabat baru, dan memupuk rasa saling peduli",
    alokasiWaktu: "3 JP x 40 Menit",
    lingkunganBelajar: "Kelas interaktif dengan area role-play dialog berpasangan",
    pemanfaatanDigital: "Kartu audio kosakata digital (flashcard digital), rekaman suara dialog siswa, Wordwall interaktif",
  },
  {
    id: "biologi-ma-lingkungan",
    category: "Umum / Sains & Sosial",
    jenjang: "MA / MAK",
    faseKelas: "Fase E / Kelas X",
    semester: "Genap",
    mataPelajaran: "Biologi / IPA",
    materiEsensial: "Keseimbangan Ekosistem dan Mitigasi Kerusakan Lingkungan Hidup",
    topikKbc: "Cinta Alam Semesta dan Etika Ekologis sebagai Amanah Khalifah fil Ardh",
    materiInsersiKbc: "Menghayati keteraturan ciptaan Tuhan, membangkitkan rasa welas asih terhadap satwa dan tumbuhan, serta tanggung jawab menjaga bumi dari polusi",
    alokasiWaktu: "2 JP x 45 Menit",
    lingkunganBelajar: "Laboratorium alam madrasah, taman toga / green house madrasah, ruang kelas terbuka",
    pemanfaatanDigital: "Aplikasi identifikasi flora/fauna (Seek/PlantNet), simulator ekosistem digital PhET, video dokumenter konservasi",
  },
  {
    id: "matematika-ma-statistika",
    category: "Umum / Sains & Sosial",
    jenjang: "MA / MAK",
    faseKelas: "Fase F / Kelas XII",
    semester: "Ganjil",
    mataPelajaran: "Matematika",
    materiEsensial: "Penyajian dan Analisis Data Statistik untuk Kepedulian Sosial",
    topikKbc: "Kejujuran Data, Integritas Intelektual, dan Kepedulian terhadap Isu Kemiskinan",
    materiInsersiKbc: "Mengembangkan sikap jujur dalam mengolah fakta/angka, menyadari fenomena kesenjangan sosial melalui data riil, dan dorongan berbuat adil",
    alokasiWaktu: "2 JP x 45 Menit",
    lingkunganBelajar: "Ruang komputer / kelas dengan akses laptop per kelompok",
    pemanfaatanDigital: "Google Sheets / Excel untuk visualisasi grafik, data sensus BPS, aplikasi kalkulasi statistik online",
  },
  {
    id: "bindo-mts-cerpen",
    category: "Umum / Sains & Sosial",
    jenjang: "MTs",
    faseKelas: "Fase D / Kelas IX",
    semester: "Ganjil",
    mataPelajaran: "Bahasa Indonesia",
    materiEsensial: "Menelaah dan Menulis Teks Cerita Pendek Bertema Empati Kemanusiaan",
    topikKbc: "Empati Rasa, Kasih Sayang Keluarga, dan Menghargai Perbedaan Sudut Pandang",
    materiInsersiKbc: "Mengasah kepekaan nurani terhadap nasib orang lain melalui penokohan, menumbuhkan jiwa toleransi, dan mengekspresikan cinta lewat karya sastra santun",
    alokasiWaktu: "2 JP x 40 Menit",
    lingkunganBelajar: "Pojok baca literasi madrasah, suasana tenang dan nyaman untuk eksplorasi imajinasi",
    pemanfaatanDigital: "Platform berbagi tulisan daring (Padlet), e-book antologi cerpen madrasah, kuis interaktif unsur intrinsik",
  }
];

export const KBC_TOPIC_OPTIONS = [
  "Cinta Sesama Manusia, Empati Sosial, dan Kedermawanan",
  "Cinta kepada Allah SWT dan Rasul-Nya (Mahabbah Ilahiyyah)",
  "Cinta Alam Semesta, Satwa, dan Lingkungan Hidup (Green Madrasah)",
  "Cinta Tanah Air, Kebangsaan, dan Kerukunan Umat (Muwatanah)",
  "Moderasi Beragama (Wasathiyyah) dan Toleransi Aktif (Tasamuh)",
  "Antikekerasan, Antiperundungan (Anti-Bullying), dan Perdamaian",
  "Kejujuran, Integritas, dan Tanggung Jawab Moral (Amanah)",
  "Kasih Sayang dalam Keluarga dan Berbakti kepada Orang Tua (Birrul Walidain)",
  "Kesetaraan Hak, Keadilan, dan Menghargai Keragaman Insan"
];

export interface SubjectOptionGroup {
  groupName: string;
  items: {
    value: string;
    label: string;
    badge?: string;
  }[];
}

export const SUBJECT_DROPDOWN_GROUPS: SubjectOptionGroup[] = [
  {
    groupName: "PAI & Bahasa Arab (Khas Madrasah / Kemenag)",
    items: [
      { value: "Al-Qur'an Hadis", label: "Al-Qur'an Hadis", badge: "Kemenag" },
      { value: "Akidah Akhlak", label: "Akidah Akhlak", badge: "Kemenag" },
      { value: "Fikih", label: "Fikih", badge: "Kemenag" },
      { value: "Sejarah Kebudayaan Islam (SKI)", label: "Sejarah Kebudayaan Islam (SKI)", badge: "Kemenag" },
      { value: "Bahasa Arab", label: "Bahasa Arab", badge: "Kemenag" },
      { value: "Pendidikan Agama Islam dan Budi Pekerti", label: "Pendidikan Agama Islam dan Budi Pekerti (PAI & BP)" },
    ],
  },
  {
    groupName: "Peminatan Keagamaan (MA Keagamaan)",
    items: [
      { value: "Ilmu Tafsir", label: "Ilmu Tafsir / Tafsir", badge: "MA Keagamaan" },
      { value: "Ilmu Hadis", label: "Ilmu Hadis / Hadis", badge: "MA Keagamaan" },
      { value: "Ushul Fikih", label: "Ushul Fikih", badge: "MA Keagamaan" },
      { value: "Akhlak Tasawuf", label: "Akhlak Tasawuf", badge: "MA Keagamaan" },
      { value: "Bahasa Arab Peminatan", label: "Bahasa Arab Peminatan / Tingkat Lanjut", badge: "MA Keagamaan" },
      { value: "Kajian Kitab Kuning (Turats)", label: "Kajian Kitab Kuning (Turats)", badge: "Khusus" },
      { value: "Tahfidz Al-Qur'an", label: "Tahfidz / Tahsin Al-Qur'an", badge: "Khusus" },
    ],
  },
  {
    groupName: "Mata Pelajaran Umum & Wajib",
    items: [
      { value: "Pendidikan Pancasila", label: "Pendidikan Pancasila (PPKn)" },
      { value: "Bahasa Indonesia", label: "Bahasa Indonesia" },
      { value: "Matematika", label: "Matematika (Umum)" },
      { value: "Bahasa Inggris", label: "Bahasa Inggris" },
      { value: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)", label: "PJOK (Penjasorkes)" },
      { value: "Sejarah", label: "Sejarah (Umum)" },
    ],
  },
  {
    groupName: "MIPA / Sains & Matematika",
    items: [
      { value: "Ilmu Pengetahuan Alam dan Sosial (IPAS)", label: "IPAS (MI / SD)" },
      { value: "Ilmu Pengetahuan Alam (IPA)", label: "IPA (MTs / SMP)" },
      { value: "Biologi", label: "Biologi (MA / SMA)" },
      { value: "Fisika", label: "Fisika (MA / SMA)" },
      { value: "Kimia", label: "Kimia (MA / SMA)" },
      { value: "Matematika Tingkat Lanjut", label: "Matematika Tingkat Lanjut (MA / SMA)" },
      { value: "Informatika", label: "Informatika / TIK" },
      { value: "Riset dan Karya Ilmiah", label: "Riset / Karya Ilmiah Remaja (Madrasah Riset)" },
    ],
  },
  {
    groupName: "IPS / Sosial & Humaniora",
    items: [
      { value: "Ilmu Pengetahuan Sosial (IPS)", label: "IPS (MTs / SMP)" },
      { value: "Sosiologi", label: "Sosiologi (MA / SMA)" },
      { value: "Ekonomi", label: "Ekonomi (MA / SMA)" },
      { value: "Geografi", label: "Geografi (MA / SMA)" },
      { value: "Sejarah Tingkat Lanjut", label: "Sejarah Tingkat Lanjut (MA / SMA)" },
      { value: "Antropologi", label: "Antropologi" },
    ],
  },
  {
    groupName: "Seni, Prakarya & Bahasa Asing",
    items: [
      { value: "Prakarya dan Kewirausahaan (PKWU)", label: "Prakarya dan Kewirausahaan (PKWU)" },
      { value: "Seni Rupa", label: "Seni Rupa" },
      { value: "Seni Musik", label: "Seni Musik" },
      { value: "Seni Tari", label: "Seni Tari" },
      { value: "Seni Teater", label: "Seni Teater" },
      { value: "Bahasa Inggris Tingkat Lanjut", label: "Bahasa Inggris Tingkat Lanjut" },
      { value: "Bahasa Asing Pilihan (Jepang/Mandarin/Jerman)", label: "Bahasa Asing Pilihan (Jepang / Mandarin / Jerman / Prancis)" },
    ],
  },
  {
    groupName: "Bimbingan & Muatan Lokal",
    items: [
      { value: "Bimbingan dan Konseling (BK)", label: "Bimbingan dan Konseling (BK)" },
      { value: "Muatan Lokal Bahasa Daerah", label: "Muatan Lokal (Bahasa Daerah / Budaya Lokal)" },
      { value: "Lainnya", label: "— Mata Pelajaran Lainnya (Ketik Bebas) —" },
    ],
  },
];

export const PPRA_DIMENSIONS = [
  { code: "1", name: "Berkeadaban (Ta'addub)", desc: "Menjunjung tinggi akhlak mulia, sopan santun, dan tata krama dalam berinteraksi." },
  { code: "2", name: "Keteladanan (Qudwah)", desc: "Menjadi pelopor kebaikan dan panutan bagi lingkungan sekitar." },
  { code: "3", name: "Kewarganegaraan & Kebangsaan (Muwatanah)", desc: "Mencintai tanah air, taat hukum, dan setia menjaga persatuan NKRI." },
  { code: "4", name: "Mengambil Jalan Tengah (Tawassut)", desc: "Memilih jalan tengah yang bijak dan tidak ekstrem dalam berpikir maupun bertindak." },
  { code: "5", name: "Berimbang (Tawazun)", desc: "Menjaga keseimbangan antara hak dan kewajiban, akal dan wahyu, serta dunia dan akhirat." },
  { code: "6", name: "Lurus & Tegas (I'tidal)", desc: "Menempatkan sesuatu pada tempatnya dan konsisten menegakkan kebenaran secara adil." },
  { code: "7", name: "Kesetaraan (Musawah)", desc: "Memperlakukan setiap manusia secara setara tanpa diskriminasi." },
  { code: "8", name: "Musyawarah (Syura)", desc: "Mengutamakan dialog dan musyawarah mufakat dalam mengambil keputusan bersama." },
  { code: "9", name: "Toleransi (Tasamuh)", desc: "Menghormati dan menghargai perbedaan keyakinan, pandangan, dan latar belakang." },
  { code: "10", name: "Dinamis & Inovatif (Tatawwur wa Ibtikar)", desc: "Berpikir terbuka, adaptif terhadap kemajuan zaman, dan berani menciptakan inovasi positif." },
];
