/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Disable the pages directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
