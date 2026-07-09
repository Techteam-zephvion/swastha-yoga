#!/usr/bin/env python3
"""Removes the background from a source photo (gate, yoga figure) using
rembg, producing a transparent PNG cutout.

Usage (from repo root):
    python -m tools.preprocess.remove_background --input <path> --output <path>

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from tools.shared import load_settings


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--model", type=str, default=None, help="Overrides rembg model from settings.yaml")
    return parser.parse_args()


def remove_background(input_path: Path, output_path: Path, model: str | None) -> None:
    """Runs rembg against `input_path` and writes a transparent PNG to
    `output_path`, using the model configured in
    tools/config/settings.yaml (background_removal.model) unless
    overridden.

    Not yet implemented — this is pipeline scaffolding.
    """
    resolved_model = model or load_settings()["background_removal"]["model"]
    raise NotImplementedError(
        f"remove_background is scaffolding only (model={resolved_model}); implement before first use"
    )


def main() -> None:
    args = parse_args()
    remove_background(args.input, args.output, args.model)


if __name__ == "__main__":
    main()
