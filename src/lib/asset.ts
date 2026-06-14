/**
 * In a static export served from a sub-path (GitHub Pages project site),
 * `next/image` with `unoptimized` does not prepend the configured basePath
 * to raw `src` values. This helper does it explicitly.
 *
 * `NEXT_PUBLIC_BASE_PATH` is injected from next.config.mjs at build time.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
