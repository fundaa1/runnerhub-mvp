import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa"; // Re-enable

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development", // Keep PWA disabled in dev for now
  fallbacks: {
    document: "/offline",
  },
});

const nextConfig: NextConfig = {
  // Your existing Next.js configurations can go here if you have any
  // For example:
  // reactStrictMode: true,
};

export default withPWA(nextConfig); // Re-enable PWA wrapping
// export default nextConfig; // Comment out plain config
