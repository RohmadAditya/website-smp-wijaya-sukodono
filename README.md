# Website Resmi SMP Wijaya Sukodono (NPSN: 20540036)

> Website resmi lembaga pendidikan menengah pertama SMP Wijaya Sukodono, Desa Pekarungan, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur.

Dibangun dengan arsitektur **GitOps Static Site** berbasis **Astro + Tailwind CSS v4 + Pages CMS + Cloudflare Pages**.

## Fitur Utama

- **Ultra Low-Maintenance & Zero-Cost Hosting**: Hosting di Cloudflare Pages (Rp 0), penyimpanan di GitHub (Rp 0), CMS via Pages CMS (Rp 0). Biaya rutin hanya domain resmi `.sch.id` (± Rp 60rb/tahun).
- **8 Rute Halaman Lengkap**:
  1. `/` — Beranda (Hero, Sambutan Kepsek, Program Unggulan, Pratinjau Fasilitas, Berita Terbaru, CTA SPMB)
  2. `/profil` — Profil, Visi Misi, Data Kemdikbud, & Filosofi Lambang Sekolah
  3. `/fasilitas` — Katalog Sarana Prasarana dengan Filter Kategori & Lightbox Modal
  4. `/guru` — Direktori Guru & Tenaga Kependidikan dengan Filter Bidang & Live Search
  5. `/berita` — Arsip Berita, Prestasi & Pengumuman dengan Filter & Live Search
  6. `/berita/[id]` — Halaman Baca Berita Lengkap, Share WhatsApp & Berita Terkait
  7. `/ppdb` — Informasi SPMB 2026/2027, Alur 4 Langkah, Syarat, Jadwal & FAQ
  8. `/kontak` — Alamat, Telepon, WhatsApp Tata Usaha & Google Maps Interaktif
- **Pages CMS Ready**: File konfigurasi `.pages.yml` siap pakai di root repositori.
- **Standar Desain Modern**: Mengadaptasi ritme layout terstruktur ala SMK YPM 8 Sarirogo dan menurunkan palet warna resmi langsung dari lambang SMP Wijaya Sukodono.

## Perintah Pengembangan

```bash
# Menjalankan server lokal (development)
npm run dev

# Membangun output statis untuk produksi
npm run build

# Meninjau output build statis
npm run preview
```

## Dokumentasi Lengkap & SOP Operator

Dokumentasi lengkap PRD, arsitektur GitOps, spesifikasi sistem desain, dan SOP Operator Tata Usaha siap cetak tersedia pada file [DOKUMENTASI.md](file:///Users/adit/Projects/website-smp-wijaya-sukodono/DOKUMENTASI.md).

Prototipe interaktif mandiri dapat dibuka langsung melalui [public/preview.html](file:///Users/adit/Projects/website-smp-wijaya-sukodono/public/preview.html).
