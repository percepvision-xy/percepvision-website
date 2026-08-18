import { htmlRewrites } from "./site-routes.generated.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: htmlRewrites,
    }
  },
}

export default nextConfig
