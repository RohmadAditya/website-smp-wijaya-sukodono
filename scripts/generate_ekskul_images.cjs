const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/images/ekskul');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesData = [
  {
    filename: 'marching-band-1.webp',
    title: 'Gita Wijaya Marching Band',
    subtitle: 'Penampilan Konser Musik & Visual Ensemble',
    category: 'SENI & BUDAYA',
    theme: { bg1: '#082F49', bg2: '#0C4A6E', accent: '#FACC15', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' }
  },
  {
    filename: 'marching-band-2.webp',
    title: 'Latihan Formasi Lapangan',
    subtitle: 'Kekompakan Ritme & Langkah Baris-Berbaris',
    category: 'SENI & BUDAYA',
    theme: { bg1: '#0A3655', bg2: '#0284C7', accent: '#38BDF8', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
  },
  {
    filename: 'marching-band-3.webp',
    title: 'Penganugerahan Juara Harapan 1',
    subtitle: 'Concert Marching Millenial Kab. Sidoarjo',
    category: 'PRESTASI',
    theme: { bg1: '#1E1B4B', bg2: '#312E81', accent: '#FACC15', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' }
  },
  {
    filename: 'voli-1.webp',
    title: 'Wijaya Volleyball Club',
    subtitle: 'Latihan Rutin Passing, Servis & Taktik Pertandingan',
    category: 'OLAHRAGA',
    theme: { bg1: '#064E3B', bg2: '#047857', accent: '#FACC15', icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 3a9 9 0 000 18 M3 12h18' }
  },
  {
    filename: 'voli-2.webp',
    title: 'Turnamen Voli Mini Cup',
    subtitle: 'Ajang Bergengsi Antar-SD se-Kecamatan Sukodono',
    category: 'OLAHRAGA',
    theme: { bg1: '#0F766E', bg2: '#0D9488', accent: '#FEF08A', icon: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.004-6.75V3.75a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v4.5m9 3a4.5 4.5 0 01-9 0m9 0a4.5 4.5 0 01-9 0m9 0c0 1.657-1.343 3-3 3h-3c-1.657 0-3-1.343-3-3' }
  },
  {
    filename: 'pramuka-1.webp',
    title: 'Gudep Pramuka SMP Wijaya',
    subtitle: 'Pionering, Semaphore, Sandi & Jiwa Dasa Darma',
    category: 'KEPEMIMPINAN',
    theme: { bg1: '#78350F', bg2: '#92400E', accent: '#FDE047', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' }
  },
  {
    filename: 'pramuka-2.webp',
    title: 'Perkemahan Karakter Persami',
    subtitle: 'Membina Kemandirian, Kerja Sama & Kepedulian Sosial',
    category: 'KEPEMIMPINAN',
    theme: { bg1: '#713F12', bg2: '#854D0E', accent: '#FEF08A', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
  },
  {
    filename: 'paskibra-1.webp',
    title: 'Pasukan Pengibar Bendera',
    subtitle: 'Formasi Baris-Berbaris Baku & Sikap Tegap Disiplin',
    category: 'KEPEMIMPINAN',
    theme: { bg1: '#1E293B', bg2: '#334155', accent: '#38BDF8', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9' }
  },
  {
    filename: 'paskibra-2.webp',
    title: 'Pengibaran Sang Merah Putih',
    subtitle: 'Petugas Upacara HUT RI & Peringatan Hari Nasional',
    category: 'KEPEMIMPINAN',
    theme: { bg1: '#881337', bg2: '#9F1239', accent: '#FECDD3', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z' }
  },
  {
    filename: 'tari-1.webp',
    title: 'Pentas Seni Tari Tradisional',
    subtitle: 'Kekayaan Budaya Jawa Timur di Purna Widya LXIV',
    category: 'SENI & BUDAYA',
    theme: { bg1: '#4A044E', bg2: '#701A75', accent: '#F472B6', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  },
  {
    filename: 'tari-2.webp',
    title: 'Latihan Gerak Tari Kreasi',
    subtitle: 'Eksplorasi Gerak Estetika & Kepercayaan Diri Siswa',
    category: 'SENI & BUDAYA',
    theme: { bg1: '#581C87', bg2: '#6B21A8', accent: '#E879F9', icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' }
  },
  {
    filename: 'hadrah-1.webp',
    title: 'Seni Rebana Al-Banjari',
    subtitle: 'Lantunan Syair Sholawat & Irama Musik Islami',
    category: 'KEAGAMAAN',
    theme: { bg1: '#064E3B', bg2: '#065F46', accent: '#34D399', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z' }
  },
  {
    filename: 'hadrah-2.webp',
    title: 'Kajian Rohis & PHBI',
    subtitle: 'Pembiasaan Sholat Dhuha, Berjamaah & Kajian Akhlak',
    category: 'KEAGAMAAN',
    theme: { bg1: '#042F2E', bg2: '#115E59', accent: '#2DD4BF', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
  },
  {
    filename: 'futsal-1.webp',
    title: 'Wijaya Futsal Club',
    subtitle: 'Laga Tanding & Pembinaan Sportivitas Fisik Pelajar',
    category: 'OLAHRAGA',
    theme: { bg1: '#1E1B4B', bg2: '#1E3A8A', accent: '#60A5FA', icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 3a9 9 0 000 18' }
  },
  {
    filename: 'literasi-1.webp',
    title: 'Klub Literasi & Majalah Dinding',
    subtitle: 'Karya Puisi, Cerpen & Fotografi Jurnalistik Siswa',
    category: 'MINAT & BAKAT',
    theme: { bg1: '#1C1917', bg2: '#292524', accent: '#FDE047', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' }
  }
];

async function generateAll() {
  for (const item of imagesData) {
    const esc = (s) => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const titleEsc = esc(item.title);
    const subEsc = esc(item.subtitle);
    const catEsc = esc(item.category);

    const svg = `
    <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${item.theme.bg1}"/>
          <stop offset="60%" stop-color="${item.theme.bg2}"/>
          <stop offset="100%" stop-color="#082F49"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.12)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.03)"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="800" height="500" fill="url(#grad)"/>

      <!-- Subtle Geometric Patterns -->
      <g opacity="0.08" stroke="#ffffff" stroke-width="1.5" fill="none">
        <circle cx="700" cy="100" r="220"/>
        <circle cx="700" cy="100" r="160"/>
        <circle cx="700" cy="100" r="100"/>
        <circle cx="100" cy="450" r="180"/>
        <circle cx="100" cy="450" r="120"/>
        <path d="M-50,250 L850,250 M-50,350 L850,350"/>
      </g>

      <!-- Decorative Focus Box -->
      <rect x="40" y="40" width="720" height="420" rx="20" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>

      <!-- Icon Watermark in corner -->
      <g transform="translate(620, 260) scale(4)" opacity="0.12" stroke="#ffffff" stroke-width="1.5" fill="none">
        <path stroke-linecap="round" stroke-linejoin="round" d="${item.theme.icon}"/>
      </g>

      <!-- Category Pill -->
      <rect x="70" y="70" width="160" height="32" rx="16" fill="rgba(255,255,255,0.15)"/>
      <text x="150" y="91" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5" fill="${item.theme.accent}">${catEsc}</text>

      <!-- Center Featured Icon -->
      <g transform="translate(70, 130)">
        <rect width="64" height="64" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <g transform="translate(16, 16) scale(1.35)" stroke="${item.theme.accent}" stroke-width="2" fill="none">
          <path stroke-linecap="round" stroke-linejoin="round" d="${item.theme.icon}"/>
        </g>
      </g>

      <!-- Title & Subtitle -->
      <text x="70" y="240" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="800" fill="#ffffff" letter-spacing="-0.5">${titleEsc}</text>
      <text x="70" y="278" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="500" fill="rgba(224, 242, 254, 0.9)">${subEsc}</text>

      <!-- Bottom Tagline & Brand -->
      <line x1="70" y1="360" x2="730" y2="360" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="70" y="405" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="1" fill="${item.theme.accent}">SMP WIJAYA SUKODONO</text>
      <text x="730" y="405" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" fill="rgba(255,255,255,0.6)">Dokumentasi Kegiatan Siswa &#8226; Sidoarjo</text>
    </svg>
    `;

    const dest = path.join(outputDir, item.filename);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(dest);
    console.log('Generated:', item.filename);
  }
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
