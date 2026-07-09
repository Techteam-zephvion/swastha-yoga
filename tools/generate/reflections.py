#!/usr/bin/env python3
"""Generates a rippled water-reflection layer from a source gate/sky
image (vertical flip + wave distortion + fade).

Usage (from repo root):
    python -m tools.generate.reflections --input <path> --output <path>

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--ripple-strength", type=float, default=0.02)
    return parser.parse_args()


def generate_reflection(input_path: Path, output_path: Path, ripple_strength: float) -> None:
    """Flips `input_path` vertically, applies a subtle sine-wave
    displacement (OpenCV remap) and a downward alpha fade, writing the
    result to `output_path`.

    Not yet implemented — this is pipeline scaffolding.
    """
    raise NotImplementedError("generate_reflection is scaffolding only; implement before first use")


def main() -> None:
    args = parse_args()
    generate_reflection(args.input, args.output, args.ripple_strength)


if __name__ == "__main__":
    main()
