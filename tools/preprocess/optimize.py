#!/usr/bin/env python3
"""Losslessly optimizes a PNG/JPEG (palette reduction, metadata strip)
before it enters the format-conversion stage.

Usage (from repo root):
    python -m tools.preprocess.optimize --input <path> --output <path>

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    return parser.parse_args()


def optimize(input_path: Path, output_path: Path) -> None:
    """Strips metadata and re-compresses `input_path`, writing the result
    to `output_path`.

    Not yet implemented — this is pipeline scaffolding.
    """
    raise NotImplementedError("optimize is scaffolding only; implement before first use")


def main() -> None:
    args = parse_args()
    optimize(args.input, args.output)


if __name__ == "__main__":
    main()
