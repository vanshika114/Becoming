import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium font-display tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-[#8577ff] to-[var(--color-indigo)] text-white shadow-[0_1px_0_0_#ffffff33_inset,0_8px_24px_-8px_#6d5ef599] hover:brightness-110 active:brightness-95",
        secondary:
          "glass text-ink hover:bg-white/10",
        ghost:
          "text-muted hover:text-ink hover:bg-white/5",
        outline:
          "border border-line text-ink hover:border-white/30 hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-3.5 text-xs",
        md: "h-11 px-5",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
