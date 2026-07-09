#!/usr/bin/env python3
"""Splits a single gate photograph into left/right halves for the sliding-
door open animation.

Usage (from repo root):
    python -m tools.preprocess.split_gate --input <path> --output-dir <dir>

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True, help="Source gate photo")
    parser.add_argument(
        "--output-dir", type=Path, required=True, help="Directory to write gate-left/gate-right into"
    )
    parser.add_argument(
        "--split-x",
        type=float,
        default=0.5,
        help="Fractional x-coordinate (0-1) of the vertical split line",
    )
    return parser.parse_args()


def split_gate(input_path: Path, output_dir: Path, split_x: float) -> tuple[Path, Path]:
    """Splits `input_path` at fractional x=`split_x` and writes gate-left.png
    / gate-right.png into `output_dir`.

    Not yet implemented — this is pipeline scaffolding. See
    tools/README.md for the planned implementation (OpenCV/Pillow based
    vertical crop along the split line).
    """
    raise NotImplementedError("split_gate is scaffolding only; implement before first use")


def main() -> None:
    args = parse_args()
    split_gate(args.input, args.output_dir, args.split_x)


if __name__ == "__main__":
    main()
