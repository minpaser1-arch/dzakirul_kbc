import { GoogleGenAI } from "@google/genai";

export async function generateModulService(data: any) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "API Key belum dikonfigurasi di Vercel / Server. Mohon tambahkan Environment Variable GEMINI_API_KEY di pengaturan proyek Vercel (Project Settings > Environment Variables), lalu redeploy proyek Anda."
    );
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  const {
    namaSekolah = "",
    mataPelajaran = "",
    faseKelas = "",
    semester = "Ganjil",
    materi = "",
    alokasiWaktu = "2 JP x 45 Menit",
    topikKbc = "",
    materiInsersiKbc = "",
    namaGuru = "",
    nipGuru = "",
    namaKepala = "",
    nipKepala = "",
    tempatTanggal = "",
    lingkunganBelajar = "",
    pemanfaatanDigital = "",
  } = data;

  if (!mataPelajaran || !materi) {
    throw new Error("Mata Pelajaran dan Materi Pelajaran wajib diisi.");
  }

  const schoolDisplay = namaSekolah.trim() || "[Nama Madrasah / Sekolah]";
  const teacherDisplay = namaGuru.trim() || "[Nama Guru Mata Pelajaran]";
  const nipGuruDisplay = nipGuru.trim() || "....................................................";
  const headDisplay = namaKepala.trim() || "[Nama Kepala Madrasah]";
  const nipHeadDisplay = nipKepala.trim() || "....................................................";
  const dateDisplay = tempatTanggal.trim() || ".........................., ........................ 2025";

  const prompt = `Anda adalah Tim Pengembang Kurikulum Kementerian Agama Republik Indonesia (Kemenag RI) yang sangat ahli dalam menyusun Modul Ajar dan Rencana Pelaksanaan Pembelajaran (RPP) Kurikulum Merdeka Terintegrasi:
1. KBC (Kurikulum Berbasis Cinta / Karakter Berbasis Cinta: cinta kepada Allah & Rasul-Nya, cinta sesama manusia tanpa membeda-bedakan, cinta lingkungan alam, cinta tanah air, moderasi beragama, keadilan, kasih sayang, dan nir-kekerasan).
2. Pembelajaran Mendalam (Deep Learning) dengan 3 tahapan inti:
   - MEMAHAMI (Prinsip: Berkesadaran/Mindful, Bermakna/Meaningful, Menggembirakan/Joyful, insersi muatan materi KBC)
   - MENGAPLIKASI (Prinsip: Berkesadaran, Bermakna, Menggembirakan, insersi muatan materi KBC)
   - MEREFLEKSI (Prinsip: Berkesadaran, Bermakna, Menggembirakan, insersi muatan materi KBC)
3. Dimensi Profil Pelajar Pancasila dan Profil Pelajar Rahmatan Lil 'Alamin (PPRA Kemenag: Berkeadaban/Ta'addub, Keteladanan/Qudwah, Kewarganegaraan & Kebangsaan/Muwatanah, Mengambil Jalan Tengah/Tawassut, Berimbang/Tawazun, Lurus & Tegas/I'tidal, Kesetaraan/Musawah, Musyawarah/Syura, Toleransi/Tasamuh, Dinamis & Inovatif/Tatawwur wa Ibtikar).

TUGAS:
Buatkan Modul Ajar / RPP lengkap, terstruktur, sistematis, menggunakan bahasa formal pedagogis pendidikan Indonesia yang bernas, mendalam, dan aplikatif.
PENTING: Jangan mengarang data sekolah atau nama guru yang belum diberikan. Gunakan placeholder yang sudah disediakan:
- Nama Sekolah/Madrasah: "${schoolDisplay}"
- Mata Pelajaran: "${mataPelajaran}"
- Fase / Kelas: "${faseKelas || "Fase E / Kelas X"}"
- Semester: "${semester}"
- Materi Esensial: "${materi}"
- Alokasi Waktu: "${alokasiWaktu}"
- Topik KBC: "${topikKbc || "Cinta Sesama Manusia, Empati, dan Moderasi Beragama"}"
- Materi Insersi KBC: "${materiInsersiKbc || "Internalisasi nilai kasih sayang, kepedulian sosial, dan toleransi aktif dalam kehidupan bermasyarakat"}"
- Guru: "${teacherDisplay}" (NIP: ${nipGuruDisplay})
- Kepala Madrasah: "${headDisplay}" (NIP: ${nipHeadDisplay})
- Tempat & Tanggal: "${dateDisplay}"
${lingkunganBelajar ? `- Lingkungan Belajar Khusus: ${lingkunganBelajar}` : ""}
${pemanfaatanDigital ? `- Pemanfaatan Digital Khusus: ${pemanfaatanDigital}` : ""}

FORMAT OUTPUT: Wajib menghasilkan JSON murni yang valid sesuai struktur berikut tanpa pembungkus markdown tambahan:
{
  "identitas": {
    "namaSekolah": "${schoolDisplay}",
    "mataPelajaran": "${mataPelajaran}",
    "faseKelas": "${faseKelas || "Fase E / Kelas X"}",
    "semester": "${semester}",
    "materiEsensial": "${materi}",
    "topikKbc": "${topikKbc || "Cinta Sesama Manusia, Empati, dan Moderasi Beragama"}",
    "materiInsersiKbc": "${materiInsersiKbc || "Internalisasi nilai kasih sayang dan kepedulian sosial"}",
    "alokasiWaktu": "${alokasiWaktu}"
  },
  "identifikasi": {
    "pesertaDidik": "Deskripsi karakteristik kesiapan belajar, profil modalitas belajar (visual, auditori, kinestetik), dan kebutuhan diferensiasi peserta didik madrasah.",
    "materiPelajaran": "Uraian peta konsep materi esensial, struktur keilmuan, dan keterkaitannya dengan kehidupan nyata siswa.",
    "dimensiProfilLulusan": {
      "profilPelajarPancasila": [
        "Beriman, Bertakwa kepada Tuhan YME, dan Berakhlak Mulia",
        "Bernalar Kritis",
        "Bergotong Royong"
      ],
      "profilPelajarRahmatanLilAlamin": [
        "Berkeadaban (Ta'addub)",
        "Keteladanan (Qudwah)",
        "Toleransi (Tasamuh)",
        "Berimbang (Tawazun)"
      ]
    }
  },
  "desainPembelajaran": {
    "capaianPembelajaran": "Rumusan Capaian Pembelajaran (CP) elemen terkait yang relevan dan mendalam sesuai standar Kemenag.",
    "lintasDisiplinIlmu": "Keterkaitan materi ini dengan disiplin ilmu lain (misal keterkaitan agama dengan sains, sosiologi, etika moral, atau teknologi).",
    "tujuanPembelajaran": [
      "Melalui kegiatan pengamatan dan eksplorasi bermakna, peserta didik mampu ...",
      "Melalui diskusi kolaboratif berbasis KBC, peserta didik mampu ...",
      "Melalui penugasan aplikatif, peserta didik mampu merefleksikan ..."
    ],
    "topikPembelajaran": "Sub-topik pembelajaran spesifik yang akan dibahas pada pertemuan ini.",
    "praktikPedagogis": {
      "modelPembelajaran": "Problem-Based Learning (PBL) terintegrasi Deep Learning",
      "metodePembelajaran": ["Diskusi Kelompok", "Studi Kasus Kontekstual", "Tanya Jawab Bermakna", "Refleksi Terbimbing"],
      "pendekatan": "Deep Learning (Mindful, Meaningful, Joyful Learning) dengan Insersi KBC"
    },
    "kemitraanPembelajaran": "Bentuk kemitraan (misal pelibatan orang tua dalam pembiasaan akhlak cinta di rumah, rekan sejawat guru lintas mapel, atau komunitas masyarakat sekitar).",
    "lingkunganPembelajaran": "Penyediaan ruang kelas yang aman, inklusif, saling menghargai pendapat, bebas perundungan, sarana multimedia, dan budaya madrasah yang religius.",
    "pemanfaatanDigital": "Penggunaan media proyektor LCD/smartboard, slide presentasi interaktif, video inspiratif, aplikasi asesmen online (Quizizz/Kahoot/Google Form), dan e-book madrasah."
  },
  "pengalamanBelajar": {
    "awal": {
      "alokasiWaktu": "15 Menit",
      "deskripsi": [
        "Guru membuka pembelajaran dengan salam hangat penuh kasih sayang, membaca doa bersama dan Asmaul Husna.",
        "Mengecek kehadiran peserta didik dengan sapaan empatik yang membangun suasana positif (Mindful Presence).",
        "Apersepsi: Mengaitkan materi pembelajaran sebelumnya dengan materi yang akan dipelajari serta pengalaman kontekstual peserta didik.",
        "Pertanyaan Pemantik: Mengajukan 2-3 pertanyaan pemantik menggugah nalar kritis dan empati hati peserta didik.",
        "Menyampaikan tujuan pembelajaran, pemahaman bermakna, dan alur kegiatan yang akan dilakukan."
      ]
    },
    "inti": {
      "alokasiWaktu": "60 Menit",
      "memahami": {
        "prinsip": "Berkesadaran (Mindful), Bermakna (Meaningful), dan Menggembirakan (Joyful)",
        "muatanKbc": "Insersi nilai cinta kasih dan penghayatan nilai spiritual",
        "deskripsi": [
          "Peserta didik secara sadar penuh (mindful) mengamati tayangan stimulus/fenomena kasus nyata yang disajikan guru.",
          "Peserta didik bersama guru mendiskusikan konsep esensial dengan suasana dialogis yang menyenangkan dan saling menghargai.",
          "Peserta didik menggali pemahaman mendalam tentang nilai KBC yang tersemat dalam materi."
        ]
      },
      "mengaplikasi": {
        "prinsip": "Bermakna (Meaningful) dan Kolaboratif",
        "muatanKbc": "Insersi kepedulian sosial, gotong royong, dan saling tolong-menolong",
        "deskripsi": [
          "Peserta didik dibagi menjadi beberapa kelompok heterogen untuk menyelesaikan LKPD berbasis pemecahan masalah kontekstual.",
          "Setiap kelompok berdiskusi secara demokratis, berbagi peran dengan adil, dan mempraktikkan sikap saling menghormati sudut pandang.",
          "Guru berkeliling memberikan bimbingan (scaffolding) dan afirmasi positif terhadap kerja sama peserta didik."
        ]
      },
      "merefleksi": {
        "prinsip": "Berkesadaran (Mindful) dan Transformatif",
        "muatanKbc": "Internalisasi hikmah, syukur, dan komitmen aksi nyata cinta sesama",
        "deskripsi": [
          "Perwakilan kelompok mempresentasikan hasil pemecahan masalah dengan percaya diri dan santun.",
          "Kelompok lain memberikan apresiasi dan tanggapan konstruktif.",
          "Peserta didik bersama guru merefleksikan makna pembelajaran bagi pengembangan diri, akhlak, dan kehidupan sehari-hari."
        ]
      }
    },
    "penutup": {
      "alokasiWaktu": "15 Menit",
      "deskripsi": [
        "Peserta didik dengan bimbingan guru menyimpulkan butir-butir esensial pembelajaran hari ini.",
        "Guru memberikan penguatan (afirmasi) atas pencapaian dan sikap positif yang ditunjukkan peserta didik.",
        "Pelaksanaan asesmen formatif singkat / refleksi diri peserta didik.",
        "Penyampaian rencana materi atau tindak lanjut untuk pertemuan pekan depan.",
        "Pembelajaran ditutup dengan doa kaffaratul majelis, rasa syukur, dan salam hangat."
      ]
    }
  },
  "asesmen": {
    "formatif": [
      "Asesmen Awal (Diagnostik): Pertanyaan lisan/pemantik untuk memetakan kesiapan awal dan pemahaman awal konsep siswa.",
      "Asesmen Proses: Observasi sikap berdimensi KBC & PPRA (Kejujuran, Empati, Tawazun, Tasamuh) selama diskusi kelompok.",
      "Asesmen Kinerja: Penilaian unjuk kerja diskusi kelompok dan presentasi menggunakan lembar observasi."
    ],
    "sumatif": [
      "Tes Tertulis / Kuis HOTS pada akhir lingkup materi untuk mengukur pemahaman konsep esensial.",
      "Tugas Portofolio / Analisis Studi Kasus Kontekstual yang mengintegrasikan pemahaman materi dengan aksi nyata nilai KBC."
    ]
  },
  "lampiran": {
    "lkpd": {
      "judul": "Lembar Kerja Peserta Didik (LKPD): Kolaborasi dan Pembelajaran Mendalam Berbasis KBC",
      "petunjuk": [
        "Berdoalah sebelum memulai kegiatan belajar bersama kelompokmu.",
        "Bacalah dengan saksama stimulus kasus dan instruksi yang tertera.",
        "Diskusikan pemecahan masalah dengan mengedepankan musyawarah, sikap saling menghargai, dan cinta kasih.",
        "Tuliskan hasil telaah kelompokmu pada lembar yang disediakan."
      ],
      "stimulusKasus": "Tuliskan narasi stimulus studi kasus kontekstual yang relevan dengan materi ${materi} dan muatan KBC...",
      "aktivitas": [
        "Aktivitas 1: Analisis fakta dan rumusan masalah utama berdasarkan stimulus kasus di atas.",
        "Aktivitas 2: Hubungkan permasalahan dengan konsep esensial dan nilai Kurikulum Berbasis Cinta (KBC).",
        "Aktivitas 3: Rancang alternatif solusi konkret yang bijaksana dan berkeadilan."
      ],
      "pertanyaanDiskusi": [
        "Apa hikmah utama yang dapat kalian petik dari studi kasus tersebut jika dikaitkan dengan materi?",
        "Bagaimana nilai kasih sayang (KBC) dan moderasi beragama dapat diterapkan dalam mengatasi persoalan tersebut?",
        "Aksi konkret apa yang dapat kalian lakukan dalam kehidupan sehari-hari di madrasah atau lingkungan rumah?"
      ],
      "rubrikSingkat": "Pedoman Penilaian LKPD: Kerapian & Kelengkapan (25%), Kedalaman Analisis (35%), Integrasi Nilai KBC/Akhlak (25%), Kerja Sama Kelompok (15%)."
    },
    "materiPembelajaran": {
      "ringkasanMateri": "Ringkasan komprehensif, padat, dan ilmiah mengenai materi esensial ${materi} yang disesuaikan dengan jenjang ${faseKelas || "Fase E / Kelas X"}.",
      "integrasiNilaiKbc": "Uraian filosofis dan praktis bagaimana materi ini membina cinta kepada Allah, cinta kepada sesama insan, cinta lingkungan, dan kedamaian.",
      "dalilRujukan": "Kutipan ayat Al-Qur'an / Hadis Nabi SAW / Kaidah Fikih / Kata Mutiara Kebijaksanaan yang menjadi landasan spiritual dan moral materi ini beserta artinya."
    },
    "instrumenAsesmen": {
      "kisiKisiSoal": [
        {
          "nomor": 1,
          "indikator": "Disajikan ilustrasi kasus kontekstual, peserta didik dapat menganalisis solusi pemecahan masalah sesuai konsep esensial materi.",
          "levelKognitif": "C4 (Analisis / HOTS)",
          "bentukSoal": "Pilihan Ganda"
        },
        {
          "nomor": 2,
          "indikator": "Peserta didik dapat mengevaluasi penerapan nilai Kurikulum Berbasis Cinta dalam interaksi sosial sehari-hari.",
          "levelKognitif": "C5 (Evaluasi / HOTS)",
          "bentukSoal": "Uraian / Esai"
        }
      ],
      "contohSoalHots": [
        {
          "nomor": 1,
          "soal": "Soal pilihan ganda kontekstual HOTS terkait materi esensial dan nilai cinta/moralitas...",
          "pilihanJawaban": ["A. ...", "B. ...", "C. ...", "D. ...", "E. ..."],
          "kunciJawaban": "C",
          "pembahasan": "Penjelasan rinci mengapa opsi C benar dikaitkan dengan konsep materi dan prinsip KBC."
        },
        {
          "nomor": 2,
          "soal": "Soal uraian analisis HOTS yang menuntut siswa mengkritisi situasi dan merumuskan sikap berkeadaban...",
          "kunciJawaban": "Kriteria jawaban ideal peserta didik...",
          "pembahasan": "Rubrik penilaian jawaban uraian dan skor maksimal."
        }
      ],
      "rubrikSikapPpra": [
        {
          "nilaiKarakter": "Berkeadaban (Ta'addub) & Cinta Sesama",
          "indikatorPerilaku": "Menunjukkan tutur kata yang santun, menghargai teman sebaya, dan peduli terhadap anggota kelompok yang mengalami kesulitan belajar.",
          "skorKriteria": "SB (Sangat Baik): Konsisten tanpa diminta; B (Baik): Tampak sering; C (Cukup): Perlu bimbingan."
        },
        {
          "nilaiKarakter": "Mengambil Jalan Tengah (Tawassut) & Berimbang (Tawazun)",
          "indikatorPerilaku": "Mampu bersikap moderat dalam menyikapi perbedaan pendapat saat berdiskusi dan tidak memaksakan kehendak.",
          "skorKriteria": "SB (Sangat Baik): Mengajak rekan bersikap adil; B (Baik): Menerima perbedaan; C (Cukup): Kadang masih emosional."
        }
      ]
    },
    "remedialDanPengayaan": {
      "remedial": "Bagi peserta didik yang belum mencapai ketuntasan tujuan pembelajaran: Diberikan bimbingan terfokus secara personal atau tutor sebaya, penyederhanaan stimulus bacaan, serta latihan terarah dengan afirmasi empati.",
      "pengayaan": "Bagi peserta didik yang telah melampaui ketuntasan tujuan pembelajaran: Diberikan penugasan berbasis proyek riset mini, membaca literatur komparatif mendalam, atau menjadi mentor sebaya yang melatih kepemimpinan berlandaskan cinta kasih."
    },
    "refleksi": {
      "refleksiGuru": [
        "Apakah tahapan pembelajaran mendalam (Memahami, Mengaplikasi, Merefleksi) telah berjalan sesuai alokasi waktu dan mengaktifkan seluruh peserta didik?",
        "Bagian mana dari insersi materi KBC yang paling menyentuh dan diresapi oleh peserta didik?",
        "Apa strategi perbaikan yang perlu dipersiapkan untuk memfasilitasi peserta didik yang masih membutuhkan dukungan?"
      ],
      "refleksiPesertaDidik": [
        "Apa hal paling bermakna dan menggembirakan yang kamu pelajari pada pertemuan hari ini?",
        "Nilai cinta kasih atau kebaikan apa yang paling ingin segera kamu terapkan dalam pertemananmu setelah mempelajari materi ini?",
        "Apakah ada bagian dari materi ini yang masih membingungkan dan ingin kamu diskusikan lebih lanjut?"
      ]
    }
  },
  "pengesahan": {
    "tempatTanggal": "${dateDisplay}",
    "namaKepala": "${headDisplay}",
    "nipKepala": "${nipHeadDisplay}",
    "namaGuru": "${teacherDisplay}",
    "nipGuru": "${nipGuruDisplay}"
  }
}

PASTIKAN SEMUA BIDANG TERISI LENGKAP DENGAN KONTEN BERMUTU TINGGI, BAHASA INDONESIA RESMI BAKU KEMENAG, DAN MENJADIKAN RPP INI SIAP DIGUNAKAN SERTA SIAP DICETAK OLEH GURU MADRASAH.`;

  const modelsToTry = ["gemini-3.1-flash-lite", "gemini-3.8-flash", "gemini-flash-latest"];
  let lastErr = null;

  for (const modelName of modelsToTry) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const resp = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            temperature: 0.7,
          },
        });
        if (resp.text) {
          let parsedData;
          try {
            parsedData = JSON.parse(resp.text);
          } catch {
            const cleanJson = resp.text.replace(/```json/g, "").replace(/```/g, "").trim();
            parsedData = JSON.parse(cleanJson);
          }
          parsedData.id = "rpp_" + Date.now();
          parsedData.timestamp = Date.now();
          return parsedData;
        }
      } catch (err: any) {
        lastErr = err;
        console.warn(`Model ${modelName} attempt ${attempt + 1} failed: ${err?.message || err}.`);
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    }
  }

  throw lastErr || new Error("Gagal memanggil model Gemini");
}

export async function refineSectionService(data: any) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "API Key belum dikonfigurasi di Vercel. Mohon tambahkan GEMINI_API_KEY di Environment Variables proyek Vercel Anda."
    );
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  const { sectionName, currentContent, instruction, subject, topic } = data;

  const prompt = `Anda adalah pakar kurikulum Kemenag RI untuk Kurikulum Merdeka terintegrasi KBC (Kurikulum Berbasis Cinta) dan Pembelajaran Mendalam.
Mata Pelajaran: ${subject || "Mata Pelajaran Madrasah"}
Materi Pokok: ${topic || "Materi Pelajaran"}
Bagian yang disempurnakan: ${sectionName}

Konten saat ini:
${JSON.stringify(currentContent, null, 2)}

Instruksi Penyempurnaan dari Guru:
"${instruction}"

Berikan hasil penyempurnaan berkualitas tinggi dalam format JSON dengan kunci "refinedContent".
Jawab HANYA dengan JSON valid.`;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });

  const parsed = JSON.parse(response.text || "{}");
  return parsed.refinedContent || parsed;
}
