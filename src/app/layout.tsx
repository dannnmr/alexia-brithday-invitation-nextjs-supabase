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
  metadataBase: new URL("https://alexia-brithday-invitation-nextjs-s.vercel.app/"),
  title: `Mis XV Años de ${siteConfig.client.name} — ¡Estás Invitado!`,
  description: `Acompáñame a celebrar mis XV Años el 5 de Junio de 2026 a las 19:00 hrs. Una noche mágica llena de amor, música y recuerdos. ¡Espero verte allí!`,
  openGraph: {
    title: `Mis XV Años de ${siteConfig.client.name} — ¡Estás Invitado!`,
    description: `Acompáñame a celebrar mis XV Años el 5 de Junio de 2026 a las 19:00 hrs. Una noche mágica llena de amor, música y recuerdos. ¡Espero verte allí!`,
    url: "https://alexia-brithday-invitation-nextjs-s.vercel.app/",
    siteName: `Mis XV - ${siteConfig.client.name}`,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Mis XV Años de ${siteConfig.client.name} — ¡Estás Invitado!`,
    description: `Acompáñame a celebrar mis XV Años el 5 de Junio de 2026 a las 19:00 hrs. Una noche mágica llena de amor, música y recuerdos. ¡Espero verte allí!`,
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
