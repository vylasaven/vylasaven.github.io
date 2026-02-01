import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
  title: {
    default: "David Arnold - Researcher, Engineer, Writer",
    template: "%s | David Arnold",
  },
  description:
    "Independent researcher working at the intersection of AI consciousness, computational semantics, and social technology.",
  keywords: [
    "AI consciousness",
    "computational semantics",
    "researcher",
    "software engineer",
    "writer",
  ],
  authors: [{ name: "David Arnold" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "David Arnold",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
