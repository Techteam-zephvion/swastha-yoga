"""One-time asset prep: grade the Bali temple-gate photo into a moody
ink-purple/gold duotone for use as the Hero section's full-bleed depth-0
background. Pillow only, no rembg needed.

Run once, manually, from within this folder's venv:
    source .venv/bin/activate
    python3 duotone_background.py

Never invoked at Next.js build/runtime — output is committed as a static asset.
"""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

HERE = Path(__file__).parent
SRC = (
    HERE
    / "../../manjunath_poojari_whatsapp/images/travel-poses"
    / "WhatsApp Image 2026-07-08 at 10.48.07 AM (2).jpeg"
).resolve()
OUT = (HERE / "../../public/hero/hero-bg-duotone.webp").resolve()

# Brand palette (src/app/globals.css)
INK = "#150f2e"
GOLD = "#d8b978"
MID = "#4a3d78"


def main() -> None:
    img = Image.open(SRC).convert("RGB")

    # Source is only 750x1333 — upscale so it reads well full-bleed; the
    # duotone grade + blur below mask the upscale softness.
    img = img.resize((img.width * 2, img.height * 2), Image.LANCZOS)

    gray = ImageOps.grayscale(img)
    gray = ImageEnhance.Contrast(gray).enhance(1.15)

    duotone = ImageOps.colorize(gray, black=INK, white=GOLD, mid=MID)
    duotone = duotone.filter(ImageFilter.GaussianBlur(1.2))
    duotone = ImageEnhance.Brightness(duotone).enhance(0.85)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    duotone.save(OUT, "WEBP", quality=85, method=6)
    print(f"saved {OUT} size={duotone.size}")


if __name__ == "__main__":
    main()
