import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gfa.aero",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
