import { ModulAjarKemenag } from "../types/modul";

export function exportModulToWord(modul: ModulAjarKemenag) {
  const { identitas, identifikasi, desainPembelajaran, pengalamanBelajar, asesmen, lampiran, pengesahan } = modul;

  const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>${identitas.mataPelajaran} - ${identitas.materiEsensial}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: 21.0cm 29.7cm; /* A4 */
      margin: 2.0cm 2.0cm 2.0cm 2.5cm;
      mso-page-orientation: portrait;
    }
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 11pt;
      line-height: 1.35;
      color: #000;
    }
    h1, h2, h3, h4 {
      font-family: 'Times New Roman', Times, serif;
      margin: 0;
      padding: 0;
    }
    .header-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.5pt solid #000;
      margin-bottom: 12pt;
    }
    .header-table td {
      padding: 8pt;
      vertical-align: middle;
    }
    .title-cell {
      text-align: center;
      font-weight: bold;
      font-size: 14pt;
      letter-spacing: 0.5pt;
    }
    .meta-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 14pt;
    }
    .meta-table td {
      padding: 3pt 4pt;
      vertical-align: top;
      font-size: 11pt;
    }
    .section-title {
      font-weight: bold;
      font-size: 11.5pt;
      margin-top: 10pt;
      margin-bottom: 4pt;
      text-transform: uppercase;
    }
    .sub-section-title {
      font-weight: bold;
      font-size: 11pt;
      margin-top: 6pt;
      margin-bottom: 2pt;
    }
    .content-box {
      margin-bottom: 8pt;
      text-align: justify;
    }
    .custom-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 6pt;
      margin-bottom: 12pt;
    }
    .custom-table th, .custom-table td {
      border: 1pt solid #000;
      padding: 6pt 8pt;
      vertical-align: top;
      font-size: 10.5pt;
    }
    .custom-table th {
      background-color: #f2f2f2;
      font-weight: bold;
      text-align: center;
    }
    .ttd-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 24pt;
      page-break-inside: avoid;
    }
    .ttd-table td {
      padding: 4pt;
      font-size: 11pt;
    }
    .page-break {
      page-break-before: always;
    }
    ul, ol {
      margin-top: 2pt;
      margin-bottom: 4pt;
      padding-left: 20pt;
    }
    li {
      margin-bottom: 2pt;
      text-align: justify;
    }
  </style>
</head>
<body>

  <!-- HEADER DOKUMEN SESUAI FORMAT KEMENAG (HALAMAN 1) -->
  <table class="header-table">
    <tr>
      <td style="width: 15%; text-align: center; border-right: 1.5pt solid #000;">
        <div style="font-weight: bold; font-size: 12pt; color: #15803d;">KEMENAG</div>
        <div style="font-size: 8pt; color: #555;">Kementerian Agama RI</div>
      </td>
      <td class="title-cell">
        RENCANA PELAKSANAAN PEMBELAJARAN (RPP)<br>
        <span style="font-size: 11pt; font-weight: normal;">KURIKULUM MERDEKA - TERINTEGRASI KBC & PEMBELAJARAN MENDALAM</span>
      </td>
      <td style="width: 15%; text-align: center; border-left: 1.5pt solid #000;">
        <div style="font-weight: bold; font-size: 11pt;">LOGO</div>
        <div style="font-size: 9pt;">MADRASAH</div>
      </td>
    </tr>
  </table>

  <!-- TABEL IDENTITAS -->
  <table class="meta-table">
    <tr>
      <td style="width: 25%;"><strong>Nama Madrasah / Sekolah</strong></td>
      <td style="width: 3%;">:</td>
      <td>${identitas.namaSekolah}</td>
    </tr>
    <tr>
      <td><strong>Mata Pelajaran</strong></td>
      <td>:</td>
      <td>${identitas.mataPelajaran}</td>
    </tr>
    <tr>
      <td><strong>Fase / Kelas / Semester</strong></td>
      <td>:</td>
      <td>${identitas.faseKelas} / ${identitas.semester}</td>
    </tr>
    <tr>
      <td><strong>Materi Esensial</strong></td>
      <td>:</td>
      <td>${identitas.materiEsensial}</td>
    </tr>
    <tr>
      <td><strong>Topik KBC</strong></td>
      <td>:</td>
      <td>${identitas.topikKbc}</td>
    </tr>
    <tr>
      <td><strong>Materi Insersi KBC</strong></td>
      <td>:</td>
      <td>${identitas.materiInsersiKbc}</td>
    </tr>
    <tr>
      <td><strong>Alokasi Waktu</strong></td>
      <td>:</td>
      <td>${identitas.alokasiWaktu}</td>
    </tr>
  </table>

  <hr style="border: 0.5pt solid #000; margin-bottom: 10pt;" />

  <!-- A. IDENTIFIKASI -->
  <div class="section-title">A. IDENTIFIKASI</div>
  
  <div class="sub-section-title">1. Peserta Didik (Opsional)</div>
  <div class="content-box">${identifikasi.pesertaDidik}</div>

  <div class="sub-section-title">2. Materi Pelajaran (Opsional)</div>
  <div class="content-box">${identifikasi.materiPelajaran}</div>

  <div class="sub-section-title">3. Dimensi Profil Lulusan</div>
  <div class="content-box">
    <strong>a. Profil Pelajar Pancasila:</strong>
    <ul>
      ${identifikasi.dimensiProfilLulusan.profilPelajarPancasila.map(p => `<li>${p}</li>`).join("")}
    </ul>
    <strong>b. Profil Pelajar Rahmatan Lil 'Alamin (PPRA Kemenag):</strong>
    <ul>
      ${identifikasi.dimensiProfilLulusan.profilPelajarRahmatanLilAlamin.map(p => `<li>${p}</li>`).join("")}
    </ul>
  </div>

  <!-- B. DESAIN PEMBELAJARAN -->
  <div class="section-title">B. DESAIN PEMBELAJARAN</div>

  <div class="sub-section-title">1. Capaian Pembelajaran (Opsional)</div>
  <div class="content-box">${desainPembelajaran.capaianPembelajaran}</div>

  <div class="sub-section-title">2. Lintas Disiplin Ilmu (Opsional)</div>
  <div class="content-box">${desainPembelajaran.lintasDisiplinIlmu}</div>

  <div class="sub-section-title">3. Tujuan Pembelajaran</div>
  <div class="content-box">
    <ol>
      ${desainPembelajaran.tujuanPembelajaran.map(tp => `<li>${tp}</li>`).join("")}
    </ol>
  </div>

  <div class="sub-section-title">4. Topik Pembelajaran (Opsional)</div>
  <div class="content-box">${desainPembelajaran.topikPembelajaran}</div>

  <div class="sub-section-title">5. Praktik Pedagogis</div>
  <div class="content-box">
    <strong>Model Pembelajaran:</strong> ${desainPembelajaran.praktikPedagogis.modelPembelajaran}<br>
    <strong>Metode Pembelajaran:</strong> ${desainPembelajaran.praktikPedagogis.metodePembelajaran.join(", ")}<br>
    <strong>Pendekatan:</strong> ${desainPembelajaran.praktikPedagogis.pendekatan}
  </div>

  <div class="sub-section-title">6. Kemitraan Pembelajaran (Opsional)</div>
  <div class="content-box">${desainPembelajaran.kemitraanPembelajaran}</div>

  <div class="sub-section-title">7. Lingkungan Pembelajaran</div>
  <div class="content-box">${desainPembelajaran.lingkunganPembelajaran}</div>

  <div class="sub-section-title">8. Pemanfaatan Digital (Opsional)</div>
  <div class="content-box">${desainPembelajaran.pemanfaatanDigital}</div>

  <!-- HALAMAN 2: PENGALAMAN BELAJAR & ASESMEN -->
  <div class="page-break"></div>

  <!-- C. PENGALAMAN BELAJAR -->
  <div class="section-title">C. PENGALAMAN BELAJAR</div>
  <p style="font-size: 10pt; font-style: italic; margin-bottom: 6pt;">
    (Terintegrasi Prinsip Pembelajaran Mendalam: Berkesadaran / Mindful, Bermakna / Meaningful, Menggembirakan / Joyful, dan Insersi Muatan KBC)
  </p>

  <table class="custom-table">
    <thead>
      <tr>
        <th style="width: 20%;">Tahapan Pembelajaran</th>
        <th style="width: 65%;">Deskripsi Kegiatan</th>
        <th style="width: 15%;">Alokasi Waktu</th>
      </tr>
    </thead>
    <tbody>
      <!-- Awal -->
      <tr>
        <td style="font-weight: bold; text-align: center;">Awal</td>
        <td>
          <ol>
            ${pengalamanBelajar.awal.deskripsi.map(d => `<li>${d}</li>`).join("")}
          </ol>
        </td>
        <td style="text-align: center;">${pengalamanBelajar.awal.alokasiWaktu}</td>
      </tr>

      <!-- Inti -->
      <tr>
        <td rowspan="3" style="font-weight: bold; text-align: center; vertical-align: middle;">
          Inti
        </td>
        <td>
          <div style="font-weight: bold; margin-bottom: 2pt;">
            Memahami <span style="font-weight: normal; font-style: italic; font-size: 9.5pt;">(tuliskan prinsip pembelajaran mendalam yang digunakan: berkesadaran, bermakna, dan/atau menggembirakan, insersi muatan materi KBC)</span>
          </div>
          <div style="font-size: 9.5pt; color: #166534; margin-bottom: 4pt;">
            Prinsip: ${pengalamanBelajar.inti.memahami.prinsip} | Insersi KBC: ${pengalamanBelajar.inti.memahami.muatanKbc}
          </div>
          <ul>
            ${pengalamanBelajar.inti.memahami.deskripsi.map(d => `<li>${d}</li>`).join("")}
          </ul>
        </td>
        <td rowspan="3" style="text-align: center; vertical-align: middle;">${pengalamanBelajar.inti.alokasiWaktu}</td>
      </tr>
      <tr>
        <td>
          <div style="font-weight: bold; margin-bottom: 2pt;">
            Mengaplikasi <span style="font-weight: normal; font-style: italic; font-size: 9.5pt;">(tuliskan prinsip pembelajaran mendalam yang digunakan: berkesadaran, bermakna, dan/atau menggembirakan, insersi muatan materi KBC)</span>
          </div>
          <div style="font-size: 9.5pt; color: #0f766e; margin-bottom: 4pt;">
            Prinsip: ${pengalamanBelajar.inti.mengaplikasi.prinsip} | Insersi KBC: ${pengalamanBelajar.inti.mengaplikasi.muatanKbc}
          </div>
          <ul>
            ${pengalamanBelajar.inti.mengaplikasi.deskripsi.map(d => `<li>${d}</li>`).join("")}
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <div style="font-weight: bold; margin-bottom: 2pt;">
            Merefleksi <span style="font-weight: normal; font-style: italic; font-size: 9.5pt;">(tuliskan prinsip pembelajaran mendalam yang digunakan: berkesadaran, bermakna, dan/atau menggembirakan, insersi muatan materi KBC)</span>
          </div>
          <div style="font-size: 9.5pt; color: #3730a3; margin-bottom: 4pt;">
            Prinsip: ${pengalamanBelajar.inti.merefleksi.prinsip} | Insersi KBC: ${pengalamanBelajar.inti.merefleksi.muatanKbc}
          </div>
          <ul>
            ${pengalamanBelajar.inti.merefleksi.deskripsi.map(d => `<li>${d}</li>`).join("")}
          </ul>
        </td>
      </tr>

      <!-- Penutup -->
      <tr>
        <td style="font-weight: bold; text-align: center;">Penutup</td>
        <td>
          <ol>
            ${pengalamanBelajar.penutup.deskripsi.map(d => `<li>${d}</li>`).join("")}
          </ol>
        </td>
        <td style="text-align: center;">${pengalamanBelajar.penutup.alokasiWaktu}</td>
      </tr>
    </tbody>
  </table>

  <!-- D. ASESMEN PEMBELAJARAN -->
  <div class="section-title">D. ASESMEN PEMBELAJARAN</div>
  <table class="custom-table">
    <thead>
      <tr>
        <th style="width: 50%;">Asesmen Formatif</th>
        <th style="width: 50%;">Asesmen Sumatif</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul>
            ${asesmen.formatif.map(af => `<li>${af}</li>`).join("")}
          </ul>
        </td>
        <td>
          <ul>
            ${asesmen.sumatif.map(as => `<li>${as}</li>`).join("")}
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- TANDA TANGAN -->
  <table class="ttd-table">
    <tr>
      <td style="width: 50%;"></td>
      <td style="width: 50%; text-align: left;">
        ${pengesahan.tempatTanggal}
      </td>
    </tr>
    <tr>
      <td>
        Mengetahui,<br>
        Kepala Madrasah<br><br><br><br>
        <strong>${pengesahan.namaKepala}</strong><br>
        NIP. ${pengesahan.nipKepala}
      </td>
      <td>
        Guru Mata Pelajaran<br><br><br><br><br>
        <strong>${pengesahan.namaGuru}</strong><br>
        NIP. ${pengesahan.nipGuru}
      </td>
    </tr>
  </table>

  <!-- LAMPIRAN-LAMPIRAN -->
  <div class="page-break"></div>

  <div style="text-align: center; margin-bottom: 14pt;">
    <h2 style="font-size: 14pt; font-weight: bold;">LAMPIRAN-LAMPIRAN</h2>
    <div style="font-size: 11pt;">MODUL AJAR / RPP KURIKULUM MERDEKA BERBASIS CINTA</div>
  </div>

  <!-- LAMPIRAN 1: LKPD -->
  <div class="section-title">LAMPIRAN 1: LEMBAR KERJA PESERTA DIDIK (LKPD)</div>
  <div style="border: 1pt solid #000; padding: 10pt; margin-bottom: 14pt;">
    <div style="font-weight: bold; font-size: 12pt; text-align: center; margin-bottom: 8pt;">
      ${lampiran.lkpd.judul}
    </div>
    
    <strong>Petunjuk Kerja:</strong>
    <ol>
      ${lampiran.lkpd.petunjuk.map(p => `<li>${p}</li>`).join("")}
    </ol>

    <div style="margin-top: 8pt; margin-bottom: 8pt; background-color: #fafafa; border-left: 3pt solid #15803d; padding: 6pt;">
      <strong>Stimulus Kasus / Kasus Kontekstual:</strong><br>
      ${lampiran.lkpd.stimulusKasus}
    </div>

    <strong>Langkah Aktivitas Kolaboratif:</strong>
    <ul>
      ${lampiran.lkpd.aktivitas.map(a => `<li>${a}</li>`).join("")}
    </ul>

    <strong>Pertanyaan Analisis & Diskusi:</strong>
    <ol>
      ${lampiran.lkpd.pertanyaanDiskusi.map(q => `<li>${q}</li>`).join("")}
    </ol>

    <div style="margin-top: 8pt; font-size: 9.5pt; color: #444;">
      <strong>Pedoman Penilaian Singkat:</strong> ${lampiran.lkpd.rubrikSingkat}
    </div>
  </div>

  <!-- LAMPIRAN 2: MATERI PEMBELAJARAN -->
  <div class="section-title">LAMPIRAN 2: RINGKASAN MATERI PEMBELAJARAN & INTEGRASI KBC</div>
  <div class="content-box">
    <strong>A. Materi Esensial:</strong><br>
    ${lampiran.materiPembelajaran.ringkasanMateri}
  </div>
  <div class="content-box" style="margin-top: 8pt;">
    <strong>B. Integrasi Nilai KBC (Kurikulum Berbasis Cinta):</strong><br>
    ${lampiran.materiPembelajaran.integrasiNilaiKbc}
  </div>
  <div class="content-box" style="margin-top: 8pt; background-color: #f9fdfa; border: 1pt dashed #15803d; padding: 8pt;">
    <strong>C. Dalil Rujukan / Pepatah Hikmah:</strong><br>
    ${lampiran.materiPembelajaran.dalilRujukan}
  </div>

  <!-- LAMPIRAN 3: INSTRUMEN ASESMEN -->
  <div class="section-title" style="margin-top: 14pt;">LAMPIRAN 3: INSTRUMEN ASESMEN PEMBELAJARAN</div>

  <div class="sub-section-title">A. Kisi-Kisi Soal Formatif / Sumatif</div>
  <table class="custom-table">
    <thead>
      <tr>
        <th style="width: 10%;">No</th>
        <th style="width: 55%;">Indikator Soal</th>
        <th style="width: 20%;">Level Kognitif</th>
        <th style="width: 15%;">Bentuk Soal</th>
      </tr>
    </thead>
    <tbody>
      ${lampiran.instrumenAsesmen.kisiKisiSoal.map(k => `
        <tr>
          <td style="text-align: center;">${k.nomor}</td>
          <td>${k.indikator}</td>
          <td style="text-align: center;">${k.levelKognitif}</td>
          <td style="text-align: center;">${k.bentukSoal}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>

  <div class="sub-section-title">B. Contoh Soal HOTS & Kunci Jawaban</div>
  ${lampiran.instrumenAsesmen.contohSoalHots.map(s => `
    <div style="margin-bottom: 8pt; border-bottom: 0.5pt dashed #ccc; padding-bottom: 6pt;">
      <strong>Soal ${s.nomor}:</strong> ${s.soal}<br>
      ${s.pilihanJawaban ? `<ul style="list-style-type: none; padding-left: 10pt;">${s.pilihanJawaban.map(pj => `<li>${pj}</li>`).join("")}</ul>` : ""}
      <div style="margin-top: 4pt;">
        <strong>Kunci:</strong> ${s.kunciJawaban} | <strong>Pembahasan:</strong> ${s.pembahasan}
      </div>
    </div>
  `).join("")}

  <div class="sub-section-title">C. Rubrik Penilaian Sikap (Profil Pelajar Rahmatan Lil 'Alamin & KBC)</div>
  <table class="custom-table">
    <thead>
      <tr>
        <th style="width: 30%;">Nilai Karakter / Dimensi</th>
        <th style="width: 45%;">Indikator Perilaku yang Diamati</th>
        <th style="width: 25%;">Kriteria Penilaian</th>
      </tr>
    </thead>
    <tbody>
      ${lampiran.instrumenAsesmen.rubrikSikapPpra.map(r => `
        <tr>
          <td><strong>${r.nilaiKarakter}</strong></td>
          <td>${r.indikatorPerilaku}</td>
          <td>${r.skorKriteria}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>

  <!-- LAMPIRAN 4: REMEDIAL & PENGAYAAN -->
  <div class="section-title">LAMPIRAN 4: PROGRAM REMEDIAL DAN PENGAYAAN</div>
  <div class="content-box">
    <strong>A. Program Remedial:</strong><br>
    ${lampiran.remedialDanPengayaan.remedial}
  </div>
  <div class="content-box" style="margin-top: 6pt;">
    <strong>B. Program Pengayaan:</strong><br>
    ${lampiran.remedialDanPengayaan.pengayaan}
  </div>

  <!-- LAMPIRAN 5: REFLEKSI GURU & SISWA -->
  <div class="section-title" style="margin-top: 10pt;">LAMPIRAN 5: LEMBAR REFLEKSI GURU DAN PESERTA DIDIK</div>
  <div class="content-box">
    <strong>A. Refleksi Guru:</strong>
    <ul>
      ${lampiran.refleksi.refleksiGuru.map(rg => `<li>${rg}</li>`).join("")}
    </ul>
  </div>
  <div class="content-box" style="margin-top: 6pt;">
    <strong>B. Refleksi Peserta Didik:</strong>
    <ul>
      ${lampiran.refleksi.refleksiPesertaDidik.map(rs => `<li>${rs}</li>`).join("")}
    </ul>
  </div>

</body>
</html>
  `;

  const blob = new Blob([htmlContent], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const fileName = `RPP_${identitas.mataPelajaran.replace(/\s+/g, "_")}_${identitas.faseKelas.replace(/[\s\/]+/g, "_")}_KBC.doc`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
