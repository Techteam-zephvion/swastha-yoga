"""One-time asset prep: cut the yoga master's handstand figure out of the
Ladakh mountain-lake travel photo using rembg, and save a tight-cropped
transparent WEBP for use as the Hero section's floating depth-3 subject.

Run once, manually, from within this folder's venv:
    source .venv/bin/activate
    python3 cutout_figure.py

Never invoked at Next.js build/runtime — output is committed as a static asset.
"""

from pathlib import Path

from PIL import Image
from rembg import remove

HERE = Path(__file__).parent
SRC = (
    HERE
    / "../../manjunath_poojari_whatsapp/images/travel-poses"
    / "WhatsApp Image 2026-07-08 at 10.48.06 AM.jpeg"
).resolve()
OUT = (HERE / "../../public/hero/hero-figure-cutout.webp").resolve()

PAD = 20


def main() -> None:
    with open(SRC, "rb") as f:
        input_bytes = f.read()

    output_bytes = remove(input_bytes)
    img = Image.open(__import__("io").BytesIO(output_bytes)).convert("RGBA")

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

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "WEBP", quality=90, method=6)
    print(f"saved {OUT} size={img.size}")


if __name__ == "__main__":
    main()
