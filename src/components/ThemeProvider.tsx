"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/invitation";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const { colors } = siteConfig.theme;

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    };

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--primary-rgb", hexToRgb(colors.primary));
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--secondary-rgb", hexToRgb(colors.secondary));
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty("--card", colors.card);
  }, []);

  return <>{children}</>;
}
