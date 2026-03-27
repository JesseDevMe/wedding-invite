import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
  images: {
    qualities: [40, 60, 80,100],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
