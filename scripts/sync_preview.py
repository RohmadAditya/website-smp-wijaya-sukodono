import json
import re

# 1. Load CMS JSON data
with open("src/content/data/guru.json", "r", encoding="utf-8") as f:
    guru_json = json.load(f)

with open("src/content/data/fasilitas.json", "r", encoding="utf-8") as f:
    fasilitas_json = json.load(f)

with open("src/content/data/pengaturan.json", "r", encoding="utf-8") as f:
    pengaturan_json = json.load(f)

# Helper for facility card replacement
old_card_visual = '''<div class="aspect-[4/3] bg-gradient-to-br from-ocean-950 to-ocean-900 p-5 flex flex-col justify-between relative">
            <span class="self-start px-2.5 py-1 rounded-full bg-white/15 text-sky-100 font-mono text-[11px] font-semibold">${item.kategori}</span>
            <div class="flex items-center justify-between">
              <span class="text-white/90 font-bold text-base">${item.nama}</span>
              <button onclick="openFacilityModal(${item.id})" class="px-3 py-1.5 rounded-lg bg-candiGold-400 hover:bg-yellow-300 text-ocean-950 text-xs font-bold transition shrink-0">Lihat Foto</button>
            </div>
          </div>'''

new_card_visual = '''<div class="aspect-[4/3] bg-gradient-to-br from-ocean-950 to-ocean-900 p-5 flex flex-col justify-between relative overflow-hidden">
            ${item.foto ? `<img src="${item.foto}" alt="${item.nama}" class="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-105" onerror="this.style.display=\\'none\\';" />
            <div class="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/30 to-ocean-950/40"></div>` : ''}
            <span class="relative z-10 self-start px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sky-100 font-mono text-[11px] font-semibold">${item.kategori}</span>
            <div class="relative z-10 flex items-center justify-between gap-2">
              <span class="text-white font-bold text-base drop-shadow-md truncate">${item.nama}</span>
              <button onclick="openFacilityModal(${item.id})" class="px-3 py-1.5 rounded-lg bg-candiGold-400 hover:bg-yellow-300 text-ocean-950 text-xs font-bold transition shrink-0 shadow-md">Lihat Foto</button>
            </div>
          </div>'''

old_modal_visual = '''<div id="modal-visual" class="aspect-[16/10] bg-gradient-to-br from-ocean-950 to-ocean-900 flex flex-col items-center justify-center p-8 text-center text-white relative">
        <span id="modal-category" class="px-3 py-1 rounded-full bg-candiGold-400 text-ocean-950 font-mono text-xs font-bold mb-3"></span>
        <div id="modal-title-overlay" class="text-2xl font-extrabold"></div>
        
      </div>'''

new_modal_visual = '''<div id="modal-visual" class="aspect-[16/10] bg-gradient-to-br from-ocean-950 to-ocean-900 flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden">
        <img id="modal-img" src="" alt="" class="hidden absolute inset-0 w-full h-full object-cover" />
        <div id="modal-overlay-bg" class="hidden absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-transparent to-black/30"></div>
        <span id="modal-category" class="relative z-10 px-3 py-1 rounded-full bg-candiGold-400 text-ocean-950 font-mono text-xs font-bold mb-3 shadow"></span>
        <div id="modal-title-overlay" class="relative z-10 text-2xl font-extrabold drop-shadow"></div>
        
      </div>'''

old_open_modal = '''function openFacilityModal(id) {
      const item = facilitiesData.find(f => f.id === id);
      if (!item) return;
      document.getElementById('modal-category').textContent = item.kategori;
      document.getElementById('modal-title-overlay').textContent = item.nama;
      document.getElementById('modal-title').textContent = item.nama;
      document.getElementById('modal-desc').textContent = item.deskripsi;
      document.getElementById('facility-modal').classList.remove('hidden');
    }'''

new_open_modal = '''function openFacilityModal(id) {
      const item = facilitiesData.find(f => f.id === id);
      if (!item) return;
      document.getElementById('modal-category').textContent = item.kategori;
      document.getElementById('modal-title-overlay').textContent = item.nama;
      document.getElementById('modal-title').textContent = item.nama;
      document.getElementById('modal-desc').textContent = item.deskripsi;
      
      const modalImg = document.getElementById('modal-img');
      const modalOverlay = document.getElementById('modal-overlay-bg');
      if (item && item.foto) {
        modalImg.src = item.foto;
        modalImg.classList.remove('hidden');
        if (modalOverlay) modalOverlay.classList.remove('hidden');
      } else {
        modalImg.src = '';
        modalImg.classList.add('hidden');
        if (modalOverlay) modalOverlay.classList.add('hidden');
      }
      document.getElementById('facility-modal').classList.remove('hidden');
    }'''

# 2. Update src/pages/index.astro
with open("src/pages/index.astro", "r", encoding="utf-8") as f:
    astro = f.read()

# Strip any existing frontmatter
if astro.startswith("---"):
    parts = astro.split("---", 2)
    astro = parts[2].lstrip()

frontmatter = """---
import { getCollection } from 'astro:content';
import guruJson from '../content/data/guru.json';
import fasilitasJson from '../content/data/fasilitas.json';
import pengaturanJson from '../content/data/pengaturan.json';

const allBerita = await getCollection('berita', ({ data }) => !data.draft);
const sortedBerita = allBerita.sort((a, b) => b.data.tanggal.getTime() - a.data.tanggal.getTime());

const newsData = sortedBerita.map((item) => {
  const body = item.body || '';
  const paragraphs = body.split(/\\n\\n+/).map(p => p.trim()).filter(p => p.length > 0);
  return {
    id: item.id || item.slug,
    title: item.data.title,
    tanggal: item.data.tanggal.toISOString().split('T')[0],
    kategori: item.data.kategori || 'Kegiatan',
    ringkasan: item.data.ringkasan || '',
    gambar: item.data.thumbnail || '',
    isi: paragraphs.length > 0 ? paragraphs : [item.data.ringkasan || '']
  };
});

const teachersData = guruJson.daftar || [];
const facilitiesData = fasilitasJson.daftar || [];
const settingsData = pengaturanJson || {};
---
"""

astro = frontmatter + astro

# Ensure define:vars is present
define_vars = """  <script is:inline define:vars={{ facilitiesData, teachersData, newsData, settingsData }}>
    window.cmsFacilitiesData = facilitiesData;
    window.cmsTeachersData = teachersData;
    window.cmsNewsData = newsData;
    window.cmsSettingsData = settingsData;
  </script>
"""

marker = "<!-- DATA & INTERACTIVE SCRIPT (VANILLA JS RINGAN) -->"
if "window.cmsTeachersData = teachersData" not in astro:
    astro = astro.replace(marker, marker + "\n" + define_vars)

# In the client-side script (inside <script is:inline>), set the variables safely:
astro = re.sub(
    r"const facilitiesData = .*?;",
    "const facilitiesData = (typeof window !== 'undefined' && window.cmsFacilitiesData) ? window.cmsFacilitiesData : " + json.dumps(fasilitas_json["daftar"], ensure_ascii=False) + ";",
    astro
)
astro = re.sub(
    r"const teachersData = .*?;",
    "const teachersData = (typeof window !== 'undefined' && window.cmsTeachersData) ? window.cmsTeachersData : " + json.dumps(guru_json["daftar"], ensure_ascii=False) + ";",
    astro
)

astro = astro.replace(old_card_visual, new_card_visual)
astro = astro.replace(old_modal_visual, new_modal_visual)
astro = astro.replace(old_open_modal, new_open_modal)

with open("src/pages/index.astro", "w", encoding="utf-8") as f:
    f.write(astro)
print("src/pages/index.astro updated.")

# 3. Update index.html and public/preview.html
for target_path in ["index.html", "public/preview.html"]:
    with open(target_path, "r", encoding="utf-8") as f:
        content = f.read()

    content = re.sub(
        r"const facilitiesData = .*?;",
        "const facilitiesData = " + json.dumps(fasilitas_json["daftar"], ensure_ascii=False, indent=6) + ";",
        content
    )
    content = re.sub(
        r"const teachersData = .*?;",
        "const teachersData = " + json.dumps(guru_json["daftar"], ensure_ascii=False, indent=6) + ";",
        content
    )

    content = content.replace(old_card_visual, new_card_visual)
    content = content.replace(old_modal_visual, new_modal_visual)
    content = content.replace(old_open_modal, new_open_modal)

    with open(target_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"{target_path} updated.")
