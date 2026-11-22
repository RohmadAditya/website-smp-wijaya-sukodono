import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const berita = defineCollection({
  loader: glob({ base: './src/content/berita', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    tanggal: z.coerce.date(),
    kategori: z.enum(['Kegiatan', 'Prestasi', 'Pengumuman', 'Akademik']),
    thumbnail: z.string().optional(),
    ringkasan: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { berita };
