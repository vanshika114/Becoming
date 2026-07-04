import { motion } from "framer-motion";
import { BrainCircuit, Zap, Radio } from "lucide-react";
import type { Plan } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressRing } from "@/components/ProgressRing";

export function AIOverviewCard({ plan }: { plan: Plan }) {
  return (
    <Card className="glass-strong relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full mesh-bg blur-3xl opacity-60" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Radio size={12} className="text-[var(--color-mint)] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Live AI Overview</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-lg font-medium leading-snug text-ink md:text-xl"
          >
            {plan.ai_overview}
          </motion.p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="indigo">
              <Zap size={11} /> {(plan.focus_mode ?? "deep-work").replace("-", " ")}
            </Badge>
            <Badge tone="blue">
              <BrainCircuit size={11} /> {plan.energy_level ?? "steady"} energy
            </Badge>
            <Badge tone="violet">Est. {plan.estimated_total_time}</Badge>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-4 md:gap-6">
          <ProgressRing value={plan.risk_score} color="var(--color-coral)" label="Risk Score" size={104} />
          <ProgressRing value={plan.completion_probability} color="var(--color-mint)" label="Completion" size={104} />
          <ProgressRing value={plan.ai_confidence} color="var(--color-blue)" label="AI Confidence" size={104} />
        </div>
      </div>
    </Card>
  );
}
