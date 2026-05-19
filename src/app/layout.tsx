import type { Metadata } from "next";
import { Outfit, Great_Vibes, Pinyon_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

import { siteConfig } from "@/config/invitation";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'));

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Mis XV - ${siteConfig.client.name}`,
  description: `Te invito a celebrar la fiesta de 15 años de ${siteConfig.client.name}.`,
  openGraph: {
    title: `Mis XV - ${siteConfig.client.name}`,
    description: `Te invito a celebrar la fiesta de 15 años de ${siteConfig.client.name}.`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `Mis XV - ${siteConfig.client.name}`,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Mis XV - ${siteConfig.client.name}`,
    description: `Te invito a celebrar la fiesta de 15 años de ${siteConfig.client.name}.`,
    images: ["/twitter-image.png"],
  }
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${greatVibes.variable} ${pinyonScript.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
