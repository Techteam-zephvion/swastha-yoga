#!/usr/bin/env python3
"""Generates cloud overlay textures (soft, layered, transparent PNGs) for
the CloudFar/CloudMid layers.

Usage (from repo root):
    python -m tools.generate.clouds --output-dir <dir> --count <n>

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--count", type=int, default=3, help="Number of cloud variants to generate")
    return parser.parse_args()


def generate_clouds(output_dir: Path, count: int) -> list[Path]:
    """Procedurally generates `count` cloud overlay PNGs into
    `output_dir` (numpy/scikit-image noise field → alpha mask, per
    tools/README.md).

    Not yet implemented — this is pipeline scaffolding.
    """
    raise NotImplementedError("generate_clouds is scaffolding only; implement before first use")


def main() -> None:
    args = parse_args()
    generate_clouds(args.output_dir, args.count)


if __name__ == "__main__":
    main()
