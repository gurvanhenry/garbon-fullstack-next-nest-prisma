/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: 'http://localhost:3000',
  },
};

const globalConfig = withPWA(nextConfig);

module.exports = globalConfig;
