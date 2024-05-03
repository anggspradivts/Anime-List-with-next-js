import { Domain } from 'domain';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.flaticon.com',
        pathname: '/**',
      }
    ],
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;
