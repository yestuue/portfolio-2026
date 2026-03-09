import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// Optimizing fonts for a professional, welcoming feel
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-display",
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Samuel Opeyemi — Full Stack Developer, Blockchain & AI Engineer",
  description: "Samuel Opeyemi is a Lagos-based engineer specializing in Web3 protocols, AI-driven automation, and high-conversion Shopify stores. Trusted globally.",
  keywords: [
    "Samuel Opeyemi developer", "Full Stack Developer Lagos Nigeria", 
    "Blockchain Developer Nigeria", "AI Developer Lagos", 
    "Shopify Developer Nigeria", "Smart Contract Developer Africa"
  ],
  metadataBase: new URL('https://samuelopeyemi.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-NG': '/',
    },
  },
  openGraph: {
    title: "Samuel Opeyemi | Engineering & Strategy",
    description: "Building the future of Web3 and AI from Lagos, Nigeria.",
    url: "https://samuelopeyemi.dev",
    siteName: "Samuel Opeyemi Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in your /public folder
        width: 1200,
        height: 630,
        alt: "Samuel Opeyemi — Full Stack, Blockchain & AI Engineer",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Opeyemi | Full Stack, Blockchain & AI Engineer",
    description: "Shipping high-performance products, from Shopify to Smart Contracts.",
    creator: "@mrsamuelopeyemi",
    images: ["/og-image.png"],
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}