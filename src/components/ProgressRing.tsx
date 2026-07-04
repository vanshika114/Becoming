import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressRingProps {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  sublabel?: string;
  className?: string;
  valueClassName?: string;
}

export function ProgressRing({
  value,
  size = 108,
  strokeWidth = 8,
  color = "var(--color-indigo)",
  trackColor = "#ffffff12",
  label,
  sublabel,
  className,
  valueClassName,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = circumference - (clamped / 100) * circumference;
  const gradientId = `ring-gradient-${label?.replace(/\s+/g, "") ?? Math.round(value)}`;

  return (
    <div className={cn("relative inline-flex flex-col items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={trackColor} strokeWidth={strokeWidth} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={cn("font-display text-xl font-semibold text-ink", valueClassName)}
        >
          {Math.round(clamped)}
          <span className="text-xs text-faint">%</span>
        </motion.span>
        {sublabel && <span className="mt-0.5 text-[10px] uppercase tracking-wider text-faint font-mono">{sublabel}</span>}
      </div>
      {label && <span className="mt-2 text-xs text-muted text-center">{label}</span>}
    </div>
  );
}
