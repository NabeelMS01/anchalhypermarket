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
  // Disable pages directory
  useFileSystemPublicRoutes: false,
  // Configure 404 handling
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
