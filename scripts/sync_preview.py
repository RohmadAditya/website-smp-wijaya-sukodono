"""
CMS Data Synchronization Helper.
In modern Astro architecture, src/pages/ natively import JSON/Markdown collections
from src/content/data/ and src/content/berita/.
No string replacement in Astro files is required.
"""

def main():
    print("[sync] Astro uses native content collections and JSON imports.")
    print("[sync] Run 'npm run build' or 'npx astro sync' to update build targets.")

if __name__ == "__main__":
    main()
