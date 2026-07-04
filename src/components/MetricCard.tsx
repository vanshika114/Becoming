import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  tone?: "indigo" | "violet" | "blue" | "mint" | "amber" | "coral";
  delay?: number;
}

const toneMap: Record<string, string> = {
  indigo: "text-[var(--color-indigo)] bg-[var(--color-indigo-soft)]",
  violet: "text-[#dcc2ff] bg-[#a463f724]",
  blue: "text-[#b7d1ff] bg-[#4c8dff24]",
  mint: "text-[#a4f0d6] bg-[#3fd6a324]",
  amber: "text-[#ffd9a0] bg-[#f5b66424]",
  coral: "text-[#ffb8ac] bg-[#fb7c6b24]",
};

export function MetricCard({ icon: Icon, label, value, tone = "indigo", delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="flex items-center gap-3.5 p-4 hover:border-white/20 transition-colors">
        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", toneMap[tone])}>
          <Icon size={18} strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wide text-faint font-mono truncate">{label}</p>
          <p className="font-display text-lg font-semibold text-ink truncate">{value}</p>
        </div>
      </Card>
    </motion.div>
  );
}
