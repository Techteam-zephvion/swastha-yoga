# Architecture

Foundation for the Swastha Yoga cinematic landing page — a peaceful
sunrise-landscape hero scene followed by the rest of the site. This
document covers the **foundation** (folder structure, the animation/
layer/state systems, the asset pipeline) and the hero itself, which is
implemented on top of it.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**, `src/` layout
- **Tailwind CSS v4** (CSS-first config via `@theme inline` in `globals.css`) + CSS Modules where component-scoped styles are clearer than utilities + CSS custom properties for every design token
- **GSAP** + **ScrollTrigger** for entrance/scroll-linked motion, **Lenis** for smooth scrolling
- **Zustand** for the small amount of cross-cutting scene state (reduced motion, scene-ready, scroll progress)
- **Lucide** for icons, **clsx** + **class-variance-authority** for conditional/variant class composition
- **ESLint** (flat config, bridged to `eslint-config-next` via `FlatCompat`) + **Prettier** (`prettier-plugin-tailwindcss`)
- **Python 3.12** dev-only pipeline (`tools/`) for asset preprocessing/generation/export — never runs in production

## Folder structure

```
src/
  app/                    Next.js App Router — routes, layout, global CSS
  components/
    hero/                 One folder per hero layer component —
                           HeroScene, Background, Clouds, Sunlight,
                           Mountains, Logo, Subtitle, Fog, Particles,
                           Birds, Nav
    providers.tsx          Root client wiring: reduced-motion sync + Lenis
  animations/              GSAP timeline modules (see below) — the only
                           place gsap.* calls are allowed to live
  hooks/                   useReducedMotion, useLenis, useIntersectionObserver
  lib/                     layers.ts, store.ts, gsap.ts, assetManifest.ts
  styles/                  tokens.css — every CSS variable in the app

assets/                    RAW, unprocessed source imagery (pipeline input)
  backgrounds/ gate/ clouds/ mist/ birds/ particles/ light/ reflection/
  person/ logo/

public/                    Final optimized assets served to the browser,
                           plus asset-manifest.json (pipeline output)

tools/                     Dev-only Python asset pipeline (see below)

scripts/                   Repo-level shell/node utility scripts (empty —
                           populated as needed, e.g. asset-refresh wrapper)
```

Raw imagery lives in `assets/` (project root, sibling to `public/`) rather
than under `src/`, because `src/` is source code only — pipeline *input*
isn't code, and pipeline *output* is `public/`, already the Next.js
static-asset convention.

## Design system

`src/styles/tokens.css` is the single source of truth for every color,
spacing value, font size, motion duration/easing, blur, glow, shadow, and
z-index used anywhere in the app — nothing should be hardcoded in a
component. `globals.css` imports it and re-exposes the color tokens
through Tailwind's `@theme inline` block, so both raw `var(--color-...)`
CSS and Tailwind utilities (`bg-sky-dawn-top`, `text-ink`, etc.) stay
backed by the same values.

The z-index scale in `tokens.css` (`--z-sky` through `--z-chrome`) is
authoritative and must stay in sync with `src/lib/layers.ts`.

## Layer system

`src/lib/layers.ts` defines `LAYER_REGISTRY`, a typed map from every hero
layer name, back to front — `sky`, `cloudFar`, `cloudMid`, `cloudNear`,
`sunlight`, `mountainsFar`, `logo`, `subtitle`, `mountainsNear`, `fog`,
`particles`, `birds`, `nav` — to:

- its z-index token (from `tokens.css`)
- its `pointer-events` value (everything is `none` except `nav`, which
  needs to remain clickable)
- which animation module (`heroTimeline`, `scrollTimeline`,
  `cloudTimeline`, `birdTimeline`, or `null`) drives it

`getLayerStyle(name)` returns the layer's z-index/pointer-events style,
ready to spread onto its root element — deliberately *not* `position`/
`inset`, so full-bleed layers set `position: absolute; inset: 0` in their
own CSS module while layers with custom geometry (logo, subtitle, nav,
birds) position themselves freely without an inline `inset: 0`
clobbering it. This keeps stacking order and interactivity declared in
exactly one place instead of scattered `z-50` classes across components.

`LayerRefs` (`Partial<Record<LayerName, HTMLElement | null>>`) is how the
hero scene hands animation modules their DOM nodes — `HeroScene` collects
one ref per layer and passes the whole map into `runSceneTimelines`,
which forwards it to every `TimelineBuilder` as `refs`. Animation modules
key into `refs` by layer name; they never `querySelector` the DOM
themselves (except birds, which queries its own `[data-bird]` children —
still inside the animation module, never inside a component).

## Animation architecture

**No inline GSAP in components, no animation logic inside components.**
Every tween/ScrollTrigger is created inside a module in `src/animations/`:

- `timeline.ts` — the manager. `runSceneTimelines(scope, builders, { reducedMotion })` opens a single `gsap.context()` scoped to the hero root, runs every registered `TimelineBuilder` inside it, and returns one cleanup function that reverts everything. This is the only place `gsap.context` is created — centralizing it guarantees consistent teardown on unmount/hot-reload instead of each component managing its own context.
- `heroTimeline.ts` — the master entrance + ambient sequence: the wordmark rises from below the horizon (never a fade), the subtitle fades in as it settles, then — only once the logo has landed — the transparent nav slides down from above. Sunlight/particles settle into slow breathing loops. Orchestrates every layer that isn't clouds/mountains/fog (`cloudTimeline`) or birds (`birdTimeline`).
- `scrollTimeline.ts` — ScrollTrigger-driven scroll handoff (logo/subtitle drift, cloud parallax, fog thinning). Unimplemented stub until the rest of the page exists to scroll into.
- `cloudTimeline.ts` — continuous ambient drift for the three cloud depth layers, the fog band, and the individual ridges within both mountain ranges (`[data-ridge]`) — each element at its own slightly different speed.
- `birdTimeline.ts` — periodic (15–20s) crossings of the whole bird flock (`[data-flock]`) as one group.

Every `TimelineBuilder` has the signature
`({ scope: HTMLElement, reducedMotion: boolean, refs: LayerRefs }) => void`
and must check `reducedMotion` before creating any motion.

`src/lib/gsap.ts` registers `ScrollTrigger` exactly once (client-only,
idempotent) — every animation module imports `gsap`/`ScrollTrigger` from
there, never directly from the `gsap` package, so plugin registration is
never accidentally skipped.

## State

`src/lib/store.ts` exports a small Zustand store: `sceneReady`,
`reducedMotion`, `scrollProgress`. Deliberately minimal — most animation
state should live inside GSAP timelines themselves, not React state. The
store exists for the handful of things other systems (accessibility
messaging, conditional rendering, the Python-pipeline-adjacent asset
gating) need to read outside of GSAP.

`useReducedMotion()` (in `hooks/`) is the single source of truth for the
live `prefers-reduced-motion` value; it syncs into the store on change.
`useLenis(reducedMotion)` initializes Lenis and ticks it via
`gsap.ticker`, and is a no-op when reduced motion is on.

## Asset pipeline (`tools/`)

Dev-only Python 3.12 pipeline, never imported by `src/` or run during the
Next.js build:

```
tools/
  preprocess/   split_gate.py, remove_background.py, optimize.py
  generate/     clouds.py, mist.py, particles.py, reflections.py
  export/       webp.py, avif.py, manifest.py
  config/       settings.yaml
  shared.py     config/path loader used by every script
  output/assets/  intermediate working output (gitignored, except .gitkeep)
```

Every script is a complete, typed argparse CLI (`python -m
tools.preprocess.split_gate --input ... --output-dir ...`) with its
processing function raising `NotImplementedError` — the interface and
config wiring are final; the OpenCV/rembg/scikit-image logic itself is
implemented alongside the hero build, not in this pass, per "don't
generate fake assets."

`tools/config/settings.yaml` centralizes paths (`assets/` → `tools/output/assets/`
→ `public/`) and format/quality settings (PNG compression, WebP/AVIF
quality, mipmap scales, rembg model) so no script hardcodes them.

`export/manifest.py` is always the last pipeline step: it (will) scan
`tools/output/assets/` and write `public/asset-manifest.json`, matching
the `AssetManifest` TypeScript interface in `src/lib/assetManifest.ts`
field-for-field (`background`, `sunlightOverlay`, `wordmark`). All three
fields currently point at real, unprocessed source imagery copied
directly into `public/hero/` — the `tools/` pipeline itself has not
been run. `background` and `wordmark` are raster (webp); `sunlightOverlay`
is the original vector SVG, served as-is.

`src/lib/assetManifest.ts` (`"server-only"`) is the *only* sanctioned way
for a server component to resolve a hero asset path — filenames are never
hardcoded in `components/hero/*`; they come from the manifest, which
comes from the pipeline.

## Hero implementation status

The HeroScene is a cinematic editorial composition — a peaceful sunrise
landscape with a large, asymmetric wordmark embedded into it, closer in
spirit to an art-directed magazine cover than a typical marketing hero.
Paint order (back to front): `Background` (the one static photograph)
→ `CloudLayer` far/mid/near (SVG cloud puffs) → `Sunlight` (the real
SVG sun-glow overlay, screen-blended, plus a radial-gradient wash) →
`MountainLayer` `mountainsFar` (two soft, low-amplitude ridge segments
around the photo's horizon, behind the type) → `Logo` (the real brand
wordmark PNG, trimmed and alpha-cut) → `Subtitle` → `MountainLayer`
`mountainsNear` (two short foothill segments plus the Fuji-cone segment
whose tip rises up to touch the subtitle — mountains emerging up
through the composition, not sitting flatly behind it) → `FogLayer`
(SVG) → `Particles` (floating dust) → `Birds` (a small flock crossing
together) → `Nav` (small, transparent, no background).

**Mountains are not generated paths.** `public/mountains/*.webp` are
real alpha-mask cutouts traced from the client's own sunrise photograph
(`assets/Sunrise_overlay.svg`, rasterized at high density, cropped to
three ridge segments — left/right/peak — with a compositing seam from
the source file's original tiling baked out via a small blur before the
alpha extraction). `MountainLayer` applies each one as a CSS
`mask-image` with a flat token color behind it (`background-color:
currentColor`), so every ridge is a genuine organic photographic
silhouette, not an SVG polygon — only its color/opacity/blur/scale/
position (i.e. which depth it reads as) comes from CSS. Every other
non-photo layer is real vector SVG or plain CSS; the background and the
mountain masks are the only raster assets in the scene, and both derive
from the two source images the client provided.

All layers are thin `forwardRef` components with no animation logic,
composed by `HeroScene.tsx` and driven by `heroTimeline` / `cloudTimeline`
/ `birdTimeline` via `runSceneTimelines`. The color palette
(`tokens.css`) is deliberately desaturated — warm ivory, dusty gold,
muted peach, morning lavender, soft charcoal — and the background photo
itself is pulled toward it with a CSS filter plus a soft-light duotone
wash, so the one photographic layer reads as part of the same muted
system as every vector layer in front of it. The background photo
itself never animates — only the overlay layers in front of it do,
which is what sells the depth.

Remaining, out of scope for this pass: `scrollTimeline` (scroll-out
behavior below the hero) is still an unimplemented stub and unregistered
in `HeroScene`; the Python asset pipeline has not been run.

Next steps when resuming: run/implement the `tools/` pipeline for
proper AVIF/WebP/mipmap output instead of serving the raw images
directly; verify 60fps (Chrome Performance panel), reduced-motion
fallback, and responsive behavior across desktop/tablet/mobile/
ultra-wide/landscape; wire `scrollTimeline` when the rest of the page
exists to scroll into.

## Performance strategy

- **GPU-accelerated transforms only**: animations move `transform`
  (`translate3d`, `scale`) and `opacity`, never `top/left/width/height`,
  to stay off the main thread's layout pass.
- **`next/image`** for every raster asset (automatic AVIF/WebP
  negotiation, responsive `sizes`, lazy loading below the fold).
- **`IntersectionObserver`** (`useIntersectionObserver`) gates
  below-the-fold layers so they don't animate or even mount until near
  the viewport.
- **One shared `gsap.context`** per scene (via `runSceneTimelines`)
  instead of per-component contexts, avoiding redundant ticker
  subscriptions and guaranteeing full teardown.
- **`prefers-reduced-motion`** is checked at the store level
  (`useReducedMotion`) and threaded into every `TimelineBuilder` and into
  `useLenis`, which skips smooth-scroll entirely when it's set.
- **Memoization**: hero layer components are expected to be wrapped in
  `React.memo` once built, since their props (asset URLs) are static
  after the manifest loads and re-renders should never come from parent
  scroll-state changes — GSAP mutates the DOM directly, outside React's
  render cycle.
