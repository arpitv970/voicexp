import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "partnermarketinghub.withgoogle.com",
        port: "", // Leave blank for default ports
        pathname: "/**", // Allow all paths
      },
    ],
    domains: [
      "lh3.googleusercontent.com",
      "partnermarketinghub.withgoogle.com",
    ],
  },
};

export default nextConfig;
