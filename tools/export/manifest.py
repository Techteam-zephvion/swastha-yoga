#!/usr/bin/env python3
"""Scans tools/output/assets and writes public/asset-manifest.json,
matching the AssetManifest TypeScript interface in
src/lib/assetManifest.ts. This is the final pipeline step — it must run
after every preprocess/generate/export step for a given asset.

Usage (from repo root):
    python -m tools.export.manifest

Dev-only. Not part of the Next.js build or runtime.
"""

from __future__ import annotations

import argparse

from tools.shared import load_paths


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the manifest that would be written without touching public/asset-manifest.json",
    )
    return parser.parse_args()


def build_manifest(dry_run: bool) -> None:
    """Walks the configured working/public asset directories and
    (re)writes public/asset-manifest.json with resolved, web-relative
    paths for background/gateLeft/gateRight/mist/clouds/birds/
    reflection/logo/person — keeping field names in lockstep with
    src/lib/assetManifest.ts's AssetManifest interface.

    Not yet implemented — this is pipeline scaffolding.
    """
    paths = load_paths()
    raise NotImplementedError(f"build_manifest is scaffolding only ({paths}); implement before first use")


def main() -> None:
    args = parse_args()
    build_manifest(args.dry_run)


if __name__ == "__main__":
    main()
