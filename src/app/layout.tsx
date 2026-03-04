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
    default: "David Arnold - Engineer, Builder, Writer",
    template: "%s | David Arnold",
  },
  description:
    "Software engineer building developer tools, mobile apps, and platforms for human connection through AI agent orchestration.",
  keywords: [
    "software engineer",
    "developer tools",
    "React Native",
    "TypeScript",
    "AI agent orchestration",
    "accessibility",
    "open source",
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
