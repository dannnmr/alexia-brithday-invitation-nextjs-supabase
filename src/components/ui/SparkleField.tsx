"use client";

import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  top: string;
  left: string;
  color: string;
  size: number;
  duration: string;
  delay: string;
};

interface SparkleFieldProps {
  mobileCount?: number;
  desktopCount?: number;
}

export function SparkleField({ mobileCount = 8, desktopCount = 24 }: SparkleFieldProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? mobileCount : desktopCount;
    setSparkles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        color: i % 5 === 0 ? "#ff007f" : "rgba(220,220,240,0.7)",
        size: Math.random() * 3 + 2,
        duration: `${(Math.random() * 3 + 4).toFixed(2)}s`,
        delay: `${(Math.random() * 8).toFixed(2)}s`,
      }))
    );
  }, [mobileCount, desktopCount]);

  if (!sparkles.length) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle-css"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size * 5}px`,
            height: `${s.size * 5}px`,
            color: s.color,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
