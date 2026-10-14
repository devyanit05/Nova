"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Float({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div
      className={cn(reduce ? undefined : delay > 0.2 ? "float-slower" : "float-slow", className)}
      style={reduce ? undefined : { animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
