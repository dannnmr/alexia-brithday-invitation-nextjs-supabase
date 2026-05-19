import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-8", className)}>
      {subtitle && (
        <p
          className={cn(
            "font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#ff007f] mb-2 font-medium",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      <h3
        className={cn(
          "font-script text-5xl md:text-6xl lg:text-7xl text-[#ff007f] drop-shadow-sm leading-tight",
          titleClassName
        )}
      >
        {title}
      </h3>
    </div>
  );
}
