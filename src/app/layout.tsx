import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    "Shopify Developer Nigeria", "Smart Contract Developer Africa",
    "Big Sam developer"
  ],
  metadataBase: new URL('https://samuelopeyemi.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-NG': '/',
    },
  },
  openGraph: {
    title: "Samuel Opeyemi | Engineering & Strategy",
    description: "Building the future of Web3 and AI from Lagos, Nigeria.",
    url: "https://samuelopeyemi.com",
    siteName: "Samuel Opeyemi Portfolio",
    images: [
      {
        url: "/og-image.png", 
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
    <html 
      lang="en" 
      className={`${jakarta.variable} ${inter.variable} scroll-smooth`} 
      suppressHydrationWarning
    >
      {/* FIXED: selection color now uses Brick Brown for brand consistency */}
      <body className="antialiased selection:bg-[#c2410c] selection:text-white transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}