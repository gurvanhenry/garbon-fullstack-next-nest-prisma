/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: 'http://localhost:3000',
  },
};

module.exports = nextConfig;
