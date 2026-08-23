/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export mode for brochure site
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
