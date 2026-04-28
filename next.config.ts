import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Silence the warning about multiple package-locks
    // @ts-ignore
    turbopack: { root: __dirname }
  }
};

export default nextConfig;
