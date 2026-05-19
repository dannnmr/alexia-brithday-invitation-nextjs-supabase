import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative z-10 w-full bg-[#0a0a0a]/90 rounded-[2.5rem] min-[380px]:rounded-[3.5rem] shadow-[0_20px_50px_rgba(214,25,88,0.06)] border border-[#f9e9e1] backdrop-blur-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
