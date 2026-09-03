import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit, Fraunces } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edemadzogenu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Edem Adzogenu",
    template: "%s | Edem Adzogenu",
  },
  description:
    "Edem Adzogenu is an International Business and Policy Consultant, entrepreneur, and Founder & Co Chair of AfroChampions.",
  keywords: [
    "Edem Adzogenu",
    "AfroChampions",
    "AfCFTA",
    "Africa business policy",
    "African economic transformation",
  ],
  authors: [{ name: "Edem Adzogenu" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Edem Adzogenu",
    title: "Edem Adzogenu",
    description:
      "Edem Adzogenu is an International Business and Policy Consultant, entrepreneur, and Founder & Co Chair of AfroChampions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edem Adzogenu",
    description:
      "Edem Adzogenu is an International Business and Policy Consultant, entrepreneur, and Founder & Co Chair of AfroChampions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${fraunces.variable} h-full antialiased`}
      >
        
          <Navbar />
          <main className="flex-1">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}
