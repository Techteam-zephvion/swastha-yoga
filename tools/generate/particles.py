#!/usr/bin/env python3
"""Generates dust-particle sprite textures (small, soft, glowing dots) for
the Particles layer.

Usage (from repo root):
    python -m tools.generate.particles --output-dir <dir> --count <n>

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--count", type=int, default=4, help="Number of particle sprite variants to generate")
    return parser.parse_args()


def generate_particles(output_dir: Path, count: int) -> list[Path]:
    """Procedurally generates `count` particle sprite PNGs into
    `output_dir`.

    Not yet implemented — this is pipeline scaffolding.
    """
    raise NotImplementedError("generate_particles is scaffolding only; implement before first use")


def main() -> None:
    args = parse_args()
    generate_particles(args.output_dir, args.count)


if __name__ == "__main__":
    main()
