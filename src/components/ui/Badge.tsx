import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium font-mono tracking-wide uppercase",
  {
    variants: {
      tone: {
        neutral: "bg-white/8 text-muted border border-white/10",
        indigo: "bg-[var(--color-indigo-soft)] text-[#c4beff] border border-[#6d5ef54d]",
        violet: "bg-[#a463f724] text-[#dcc2ff] border border-[#a463f74d]",
        coral: "bg-[#fb7c6b24] text-[#ffb8ac] border border-[#fb7c6b4d]",
        mint: "bg-[#3fd6a324] text-[#a4f0d6] border border-[#3fd6a34d]",
        amber: "bg-[#f5b66424] text-[#ffd9a0] border border-[#f5b6644d]",
        blue: "bg-[#4c8dff24] text-[#b7d1ff] border border-[#4c8dff4d]",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

export const priorityTone: Record<string, BadgeProps["tone"]> = {
  low: "mint",
  medium: "blue",
  high: "amber",
  critical: "coral",
};
