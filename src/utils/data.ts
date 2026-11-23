import pengaturanRaw from '../content/data/pengaturan.json';
import guruRaw from '../content/data/guru.json';
import fasilitasRaw from '../content/data/fasilitas.json';
import ekskulRaw from '../content/data/ekstrakurikuler.json';
import spmbRaw from '../content/data/spmb.json';

import {
  PengaturanSchema,
  GuruSchema,
  FasilitasSchema,
  EkstrakurikulerSchema,
  SpmbSchema,
  type Pengaturan,
  type GuruItem,
  type FasilitasItem,
  type EkstrakurikulerItem,
  type Spmb,
} from '../content.config';

// Build-time Zod validation: throws immediately if CMS data is corrupted
export const pengaturan: Pengaturan = PengaturanSchema.parse(pengaturanRaw);
export const guruData = GuruSchema.parse(guruRaw);
export const fasilitasData = FasilitasSchema.parse(fasilitasRaw);
export const ekskulData = EkstrakurikulerSchema.parse(ekskulRaw);
export const spmb: Spmb = SpmbSchema.parse(spmbRaw);

export type { Pengaturan, GuruItem, FasilitasItem, EkstrakurikulerItem, Spmb };
