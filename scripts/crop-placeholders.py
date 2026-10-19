"""Recorta fotos PROVISÓRIAS dos mockups (references/mockups) para public/images/ph.

Uso: python -I scripts/crop-placeholders.py <spec.json>
spec: [{"src": "01-home/block-01.png", "box": [x0, y0, x1, y1], "out": "home/hero.webp"}]
Coordenadas no espaço do mockup (≈1672×941). Saída em 2x via upscale suave.

ATENÇÃO: imagens geradas por IA — apenas placeholder até chegarem fotos reais.
"""
import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
MOCKS = ROOT / "references" / "mockups"
OUT = ROOT / "public" / "images" / "ph"

for item in json.loads(Path(sys.argv[1]).read_text(encoding="utf-8")):
    im = Image.open(MOCKS / item["src"]).convert("RGB")
    crop = im.crop(tuple(item["box"]))
    scale = item.get("scale", 1.5)
    crop = crop.resize((int(crop.width * scale), int(crop.height * scale)), Image.LANCZOS)
    dest = OUT / item["out"]
    dest.parent.mkdir(parents=True, exist_ok=True)
    crop.save(dest, "WEBP", quality=82)
    print(dest.relative_to(ROOT), crop.size)
