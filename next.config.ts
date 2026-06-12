import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  images: {
    qualities: [50, 75],
    remotePatterns: [
      // YouTube poster frames for the lite video facades
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
