import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com', // replace with your remote image host
        port: '',
        pathname: '/**', // allows all paths
      },
      {
        protocol: 'https',
        hostname: 'static.toiimg.com', // replace with your remote image host
        port: '',
        pathname: '/**', // allows all paths
      },
    ],
  },
};

export default nextConfig;
