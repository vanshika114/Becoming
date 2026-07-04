import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "focus-ring w-full resize-none rounded-2xl glass px-5 py-4 text-base text-ink placeholder:text-faint leading-relaxed",
        "focus:border-white/25 transition-colors",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
