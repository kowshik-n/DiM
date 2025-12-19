const isAbsoluteUrl = (url: string) =>
  url.startsWith("http://") ||
  url.startsWith("https://") ||
  url.startsWith("//") ||
  url.startsWith("data:") ||
  url.startsWith("blob:");

/**
 * Prefixes a local URL (typically from `/public`) with the Next.js `basePath`.
 *
 * This is required for GitHub Pages project sites served from `/<repo>`.
 */
export function withBasePath(url: string): string {
  if (!url) return url;
  if (isAbsoluteUrl(url)) return url;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath) return url;

  // Prevent double-prefixing
  if (url === basePath || url.startsWith(`${basePath}/`)) return url;

  if (url.startsWith("/")) return `${basePath}${url}`;
  return `${basePath}/${url}`;
}