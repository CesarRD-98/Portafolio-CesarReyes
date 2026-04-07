import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allowedDevOrigins: ['000.000.0.000'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rekydsbimkpqukrlqkbi.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ]
  }
};

export default nextConfig;
