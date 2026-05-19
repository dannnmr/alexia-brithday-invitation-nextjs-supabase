"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  wrapperClassName?: string;
}

export function PrimaryButton({
  children,
  icon,
  className,
  wrapperClassName,
  disabled,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "mt-3 min-[380px]:mt-4 w-full flex items-center justify-center gap-2 min-[380px]:gap-3 px-4 min-[380px]:px-8 py-4 min-[380px]:py-5 bg-gradient-to-r from-pink-300/30 via-orange-300/20 to-yellow-400/10 backdrop-blur-xl border border-white/50 text-[#ffffff] rounded-full font-sans tracking-[0.2em] min-[380px]:tracking-[0.3em] uppercase text-[9px] min-[380px]:text-[10px] md:text-xs font-semibold shadow-[0_15px_30px_rgba(255,182,193,0.3)] hover:shadow-[0_20px_40px_rgba(255,182,193,0.5)] hover:from-pink-300/40 hover:via-orange-300/40 hover:to-yellow-300/40 hover:-translate-y-1 transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/60 opacity-20 group-hover:animate-shine" />
      {icon && <span className="relative z-10 shrink-0">{icon}</span>}
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#ff007f] to-[#ffffff]">
        {children}
      </span>
    </button>
  );
}
