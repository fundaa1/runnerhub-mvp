import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RunnerHub - Sindi's Store",
  description: "Shop 24/7 for the latest gear with fast WhatsApp orders from Sindi.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* The manifest link is typically added here if not using the metadata object */}
        {/* However, Next.js 13.2+ metadata object handles the manifest link automatically */}
        {/* No need for <link rel="manifest" href="/manifest.json" /> if using metadata.manifest */}
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
