/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    logging: 'verbose',
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
