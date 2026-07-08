"""One-time asset prep: cut the yoga master's handstand figure out of the
Ladakh mountain-lake travel photo using rembg, then grade its colors to
harmonize with the duotone gate background (see duotone_background.py) so it
reads as part of the same photographic world instead of a raw-color photo
pasted over a stylized backdrop. Save a tight-cropped transparent WEBP for use
as the Hero section's floating depth-3 subject.

Run once, manually, from within this folder's venv:
    source .venv/bin/activate
    python3 cutout_figure.py

Never invoked at Next.js build/runtime — output is committed as a static asset.
"""

import io
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps
from rembg import remove

HERE = Path(__file__).parent
SRC = (
    HERE
    / "../../manjunath_poojari_whatsapp/images/travel-poses"
    / "WhatsApp Image 2026-07-08 at 10.48.06 AM.jpeg"
).resolve()
OUT = (HERE / "../../public/hero/hero-figure-cutout.webp").resolve()

PAD = 20

# Brand palette (src/app/globals.css) — brighter highlight than the
# background's gold so the figure still pops as the foreground subject.
INK = "#150f2e"
CREAM = "#f6f2ea"
MID = "#6a5a9e"

# How much of the original color to blend back in over the duotone grade —
# keeps a hint of the real photo (skin tone, camo green) instead of a flat
# graphic silhouette.
ORIGINAL_COLOR_MIX = 0.22


def main() -> None:
    with open(SRC, "rb") as f:
        input_bytes = f.read()

    output_bytes = remove(input_bytes)
    img = Image.open(io.BytesIO(output_bytes)).convert("RGBA")

    bbox = img.getbbox()
    if bbox:
        left, top, right, bottom = bbox
        img = img.crop(
            (
                max(0, left - PAD),
                max(0, top - PAD),
                min(img.width, right + PAD),
                min(img.height, bottom + PAD),
            )
        )

    rgb, alpha = img.convert("RGB"), img.split()[3]

    gray = ImageOps.grayscale(rgb)
    gray = ImageEnhance.Contrast(gray).enhance(1.1)
    toned = ImageOps.colorize(gray, black=INK, white=CREAM, mid=MID)
    graded = Image.blend(toned, rgb, ORIGINAL_COLOR_MIX)
    graded = ImageEnhance.Contrast(graded).enhance(1.05)

    result = graded.convert("RGBA")
    result.putalpha(alpha)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    result.save(OUT, "WEBP", quality=90, method=6)
    print(f"saved {OUT} size={result.size}")


if __name__ == "__main__":
    main()
