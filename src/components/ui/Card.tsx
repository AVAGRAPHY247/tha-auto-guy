import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-bg-600 bg-bg-800 p-6 transition-all duration-300 hover:border-gold-500/30 hover:bg-bg-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
