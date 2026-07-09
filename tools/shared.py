"""Shared utilities for the tools/ asset pipeline.

Every pipeline script imports its configuration through here rather than
reading tools/config/settings.yaml directly, so path resolution and
defaults stay in exactly one place.

This module — and everything under tools/ — is dev-only. It must never be
imported from src/ or run as part of the Next.js build/runtime.
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
SETTINGS_PATH = REPO_ROOT / "tools" / "config" / "settings.yaml"


@dataclass(frozen=True)
class PipelinePaths:
    source: Path
    working: Path
    public: Path
    manifest: Path


def load_settings() -> dict[str, Any]:
    """Loads tools/config/settings.yaml as a plain dict."""
    with SETTINGS_PATH.open("r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_paths() -> PipelinePaths:
    """Resolves the `paths` section of settings.yaml to absolute Paths."""
    settings = load_settings()
    paths = settings["paths"]
    return PipelinePaths(
        source=REPO_ROOT / paths["source"],
        working=REPO_ROOT / paths["working"],
        public=REPO_ROOT / paths["public"],
        manifest=REPO_ROOT / paths["manifest"],
    )
