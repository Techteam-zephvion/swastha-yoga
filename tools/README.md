# tools/ — asset pipeline (dev-only)

Python scripts that turn raw photography in `assets/` into the optimized,
web-ready images the app reads from `public/`, via
`public/asset-manifest.json`.

**This directory never runs in production.** Nothing under `src/` imports
from it, and it is not part of the Next.js build. It's a local/CI dev
tool, run manually (or from a `predev`/asset-refresh script) whenever
source imagery changes.

## Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r tools/requirements.txt
```

## Pipeline stages

Run from the repo root as modules (`python -m tools....`), not as bare
scripts, so relative imports (`tools.shared`) resolve correctly.

1. **`preprocess/`** — turns a raw photo into a usable source element.
   - `split_gate.py` — splits one gate photo into left/right halves for
     the sliding-door open animation.
   - `remove_background.py` — rembg cutout → transparent PNG.
   - `optimize.py` — lossless recompression / metadata strip.
2. **`generate/`** — procedurally generates supporting overlay textures.
   - `clouds.py`, `mist.py`, `particles.py` — noise-based transparent
     overlay sprites.
   - `reflections.py` — derives a rippled water reflection from a
     gate/sky source image.
3. **`export/`** — final format conversion + manifest.
   - `webp.py`, `avif.py` — format conversion at the quality settings in
     `config/settings.yaml`.
   - `manifest.py` — scans `output/assets/` and (re)writes
     `public/asset-manifest.json`. Always the last step.

## Configuration

All paths and quality settings live in `config/settings.yaml` — scripts
read from there via `tools/shared.py` rather than hardcoding values.

## Status

Every script above is currently a typed, argparse-complete **skeleton**
(`raise NotImplementedError`) — the CLI surface and config wiring are
final, but the actual image-processing logic ships alongside the hero
scene build, not in this foundation pass.
