/** A single stylized cumulus silhouette — several overlapping rounded
 *  lobes along a flat base, drawn once and reused (scaled/positioned) for
 *  every cloud instance across all three depth layers. Kept as a real SVG
 *  shape rather than a blurred circle so clouds read as clouds instead of
 *  ambient light blobs. */
const CLOUD_PUFF_PATH =
  "M14 60 C4 60 0 50 8 44 C4 34 16 24 28 28 C32 14 54 10 64 22 C78 12 98 16 96 32 C112 30 116 46 102 50 C106 58 98 64 88 60 Z";

export function CloudPuff({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 64" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path d={CLOUD_PUFF_PATH} fill="currentColor" />
    </svg>
  );
}
