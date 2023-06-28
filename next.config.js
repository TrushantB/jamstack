/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
