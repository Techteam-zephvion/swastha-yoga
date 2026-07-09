#!/usr/bin/env python3
"""Generates soft ground-mist overlay textures for the MistBack/MistFront
layers.

Usage (from repo root):
    python -m tools.generate.mist --output-dir <dir> --count <n>

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--count", type=int, default=2, help="Number of mist variants to generate")
    return parser.parse_args()


def generate_mist(output_dir: Path, count: int) -> list[Path]:
    """Procedurally generates `count` mist overlay PNGs into
    `output_dir`.

    Not yet implemented — this is pipeline scaffolding.
    """
    raise NotImplementedError("generate_mist is scaffolding only; implement before first use")


def main() -> None:
    args = parse_args()
    generate_mist(args.output_dir, args.count)


if __name__ == "__main__":
    main()
