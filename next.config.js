/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  basePath: '',
  assetPrefix: '',
  distDir: 'dist',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://rebornz.com',
  },
}

module.exports = nextConfig
