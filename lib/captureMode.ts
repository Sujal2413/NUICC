/**
 * True while the page is being serialized by the Figma capture tool
 * (html-to-design). All entrance motion must be disabled so the DOM
 * snapshot shows content at full opacity in its final position.
 */
export function isCaptureMode(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hash.includes("figmacapture") || window.location.search.includes("nomotion");
}
