/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add unsplash.com to allowed domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Disable image optimization for static export
  },
  // Enable static exports for static site generation
  output: 'export',
  // Disable server components since we're using "use client" extensively
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = nextConfig; 