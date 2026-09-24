import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900",
        {
          "bg-gold-500 text-bg-900 hover:bg-gold-400 active:bg-gold-600 shadow-[0_0_24px_rgba(212,175,55,0.25)] hover:shadow-[0_0_32px_rgba(212,175,55,0.4)]":
            variant === "primary",
          "border border-gold-500/40 text-gold-400 hover:border-gold-500 hover:bg-gold-500/10":
            variant === "secondary",
          "text-foreground/70 hover:text-gold-400 hover:bg-bg-700/50":
            variant === "ghost",
          "px-6 py-2.5 text-sm": size === "sm",
          "px-8 py-3 text-base": size === "md",
          "px-10 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}
