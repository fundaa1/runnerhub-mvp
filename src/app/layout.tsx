import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* The manifest link is typically added here if not using the metadata object */}
        {/* However, Next.js 13.2+ metadata object handles the manifest link automatically */}
        {/* No need for <link rel="manifest" href="/manifest.json" /> if using metadata.manifest */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
