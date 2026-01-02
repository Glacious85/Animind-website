/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
}

module.exports = nextConfig

