import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "i.postimg.cc",
      },
    ],
  },
};

export default nextConfig;
