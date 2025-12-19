import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// GitHub Pages project sites are served from `/<repo>`.
// When deploying via Actions, set basePath/assetPrefix so asset URLs resolve correctly.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions && repo ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a static site in `out/` for GitHub Pages.
  output: "export",
  trailingSlash: true,

  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  // Expose basePath to the client so we can prefix static asset URLs (e.g. /images/*)
  // when deployed as a GitHub Pages project site under /<repo>.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    // GitHub Pages can't run the Next.js image optimizer.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
