"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  once = true,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      className={cn("w-full flex flex-col items-center", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
