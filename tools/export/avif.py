#!/usr/bin/env python3
"""Converts a source image to AVIF at the quality configured in
tools/config/settings.yaml (image.avif).

Usage (from repo root):
    python -m tools.export.avif --input <path> --output <path>

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
    return parser.parse_args()


def export_avif(input_path: Path, output_path: Path) -> None:
    """Converts `input_path` to AVIF using the quality setting in
    tools/config/settings.yaml.

    Not yet implemented — this is pipeline scaffolding.
    """
    avif_settings = load_settings()["image"]["avif"]
    raise NotImplementedError(f"export_avif is scaffolding only ({avif_settings}); implement before first use")


def main() -> None:
    args = parse_args()
    export_avif(args.input, args.output)


if __name__ == "__main__":
    main()
