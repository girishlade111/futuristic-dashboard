/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/futuristic-dashboard',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig