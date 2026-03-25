import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
