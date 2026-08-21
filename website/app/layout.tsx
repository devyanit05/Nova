import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nova — A Life Operating System",
    template: "%s · Nova",
  },
  description: site.description,
  keywords: [
    "Life OS",
    "Nova",
    "workspaces",
    "journal",
    "finance tracker",
    "habit tracker",
    "intentional living",
  ],
  openGraph: {
    title: "Nova — One place for your entire life.",
    description: site.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova — A Life Operating System",
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8F7F5] font-sans text-[#1F2937]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
