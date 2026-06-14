/** @type {import('next').NextConfig} */

// GitHub Pages serves this project under /avaye-edalat-kerman-website.
// In development we run at the root so the base path is empty.
const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/avaye-edalat-kerman-website";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  trailingSlash: true, // emit /route/index.html for clean Pages routing
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? repoBasePath : "",
  images: {
    unoptimized: true, // no image-optimization server on static hosting
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBasePath : "",
  },
  reactStrictMode: true,
};

export default nextConfig;
