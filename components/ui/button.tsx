"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost"
}

const buttonStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default: [
    "relative overflow-hidden",
    "bg-white/10 dark:bg-white/5",
    "backdrop-blur-md",
    "border border-white/30 dark:border-white/10",
    "text-slate-800 dark:text-slate-100",
    "shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(0,0,0,0.1)]",
    "dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.3)]",
    "hover:bg-white/20 dark:hover:bg-white/10",
    "hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_24px_rgba(0,0,0,0.15)]",
    "transition-all duration-200",
  ].join(" "),
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "bg-transparent hover:bg-muted/50",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonStyles[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
