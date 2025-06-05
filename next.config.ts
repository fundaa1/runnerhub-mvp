import type { NextConfig } from "next";
// import withPWAInit from "@ducanh2912/next-pwa"; // Temporarily comment out

// const withPWA = withPWAInit({
//   dest: "public",
//   register: true,
//   disable: process.env.NODE_ENV === "development", // Disable PWA in development to avoid caching issues
//   fallbacks: {
//     document: "/offline", // This should match your offline page route
//     // You can add fallbacks for images, fonts, etc. if needed later
//     // image: "/static/images/fallback.png",
//     // font: "/static/fonts/fallback.woff2",
//   },
// });

const nextConfig: NextConfig = {
  // Your existing Next.js configurations can go here if you have any
  // For example:
  // reactStrictMode: true,
};

// export default withPWA(nextConfig); // Temporarily comment out PWA wrapping
export default nextConfig; // Export plain config
