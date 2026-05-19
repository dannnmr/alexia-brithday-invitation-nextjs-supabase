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

export const metadata: Metadata = {
  title: `Mis XV - ${siteConfig.client.name}`,
  description: `Te invito a celebrar la fiesta de 15 años de ${siteConfig.client.name}.`,
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
