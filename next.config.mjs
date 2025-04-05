/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable the pages directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Ensure proper error handling
  reactStrictMode: true,
  // Configure error handling
  experimental: {
    missingSuspenseWithCSRError: false,
  },
};

export default nextConfig;
