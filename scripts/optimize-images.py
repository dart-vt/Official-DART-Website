"""Rebuild committed WebP derivatives: python -m pip install Pillow; python scripts/optimize-images.py.

Original photographs are retained. Build/CI does not require Python or Pillow.
"""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
sources = {
    'arena': 'src/assets/IMG_6262.png',
    'builders': 'src/assets/IMG_9097.png',
    'team': 'public/images/JanGam.jpg',
    'team-mono': 'public/images/team.jpg',
    'workbench': 'public/images/IMG_8931.png',
    'electronics': 'public/images/IMG_9107.png',
    'pinhead': 'public/images/pickl.png',
    'be-careful': 'public/images/saww.png',
    'refuse': 'public/images/Q70A1644.png',
    'goaline': 'public/images/goal.png',
    'pickle-jar': 'public/images/Q70A1683.png',
    'cyclical-subversion': 'public/images/PXL_20251004_170732141.PORTRAIT (1).png',
}

# Retain founders/legacy assets used across site
legacy_portraits = [
    'Trevor Ierardi.png', 'Nick Cowen.png', 'Timothy Fish.png', 'Samartha Madhyastha.jpeg'
]
for name in legacy_portraits:
    sources[Path(name).stem.lower().replace(' ', '-')] = f'public/images/{name}'

# All current CRO CroDart team members
cro_members = [
    'Alex Catalano.jpg', 'Anna Ngo.jpg', 'Antuhan Escalera Elias.jpg', 'Aron Mulugeta.jpg',
    'Brandon Melendez.jpg', 'Britny Jiang.jpg', 'Cade Reading.jpg', 'Declan Blankenship.jpg',
    'Edison Melendez.jpg', 'Eric Louis Bagtas.jpg', 'Hanru Li.jpg', 'Jared Jessup.jpg',
    'Justin Burns.jpg', 'Lucas Haskins.jpg', 'Luke Hartman.jpg', 'Max Aulino.jpg',
    'Min Hein.jpg', 'Nickolas Cowen.jpg', 'Owen Gray.jpg', 'Tiernan Bain.jpg',
    'William Pierce.jpg', 'Willy Wriggers.jpg'
]
for name in cro_members:
    key = Path(name).stem.lower().replace(' ', '-')
    sources[key] = f'public/images/{name}'

output = ROOT / 'public/images/optimized'
output.mkdir(parents=True, exist_ok=True)
manifest = {}
for key, source in sources.items():
    img_file = ROOT / source
    if not img_file.exists():
        print(f"Warning: {img_file} not found, skipping {key}")
        continue
    original = ImageOps.exif_transpose(Image.open(img_file)).convert('RGB')
    width, height = original.size
    limits = [480, 960, 1600] if key in ['arena', 'builders', 'team', 'team-mono'] else [360, 720]
    widths = sorted(set(min(size, width) for size in limits))
    variants = []
    for size in widths:
        resized = original.resize((size, round(size * height / width)), Image.Resampling.LANCZOS)
        filename = f'{key}-{size}.webp'
        resized.save(output / filename, 'WEBP', quality=82, method=6)
        variants.append({'src': f'images/optimized/{filename}', 'width': size})
    manifest[key] = {'width': width, 'height': height, 'variants': variants}

(ROOT / 'src/data/images.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(f'Generated {sum(len(item["variants"]) for item in manifest.values())} images; {sum(p.stat().st_size for p in output.glob("*.webp")):,} bytes total.')
