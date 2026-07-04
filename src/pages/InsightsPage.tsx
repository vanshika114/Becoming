import { motion } from "framer-motion";
import { TrendingUp, Target, AlertTriangle, Sunrise, BatteryCharging } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Badge } from "@/components/ui/Badge";
import {
  productivityTrend,
  completionProbabilityTrend,
  riskHistory,
  recentAdvice,
  focusRecommendation,
  energyRecommendation,
} from "@/data/mockInsights";
import type { InsightTrendPoint } from "@/types";

function MiniBarChart({ data, color }: { data: InsightTrendPoint[]; color: string }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex h-28 items-end gap-2">
      {data.map((d, i) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-1.5">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(d.value / max) * 100}%` }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="w-full rounded-t-md"
            style={{ background: `linear-gradient(180deg, ${color}, ${color}55)`, minHeight: 4 }}
          />
          <span className="text-[10px] font-mono text-faint">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

const categoryTone: Record<string, "coral" | "blue" | "mint" | "violet"> = {
  risk: "coral",
  focus: "blue",
  energy: "mint",
  strategy: "violet",
};

export function InsightsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">AI Insights</h1>
        <p className="mt-1 text-sm text-muted">Patterns Becoming has noticed about how you work.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <DashboardCard icon={TrendingUp} title="Productivity Trend" delay={0.05}>
          <MiniBarChart data={productivityTrend} color="#6d5ef5" />
        </DashboardCard>
        <DashboardCard icon={Target} title="Completion Probability" delay={0.1}>
          <MiniBarChart data={completionProbabilityTrend} color="#3fd6a3" />
        </DashboardCard>
        <DashboardCard icon={AlertTriangle} title="Risk History" delay={0.15}>
          <MiniBarChart data={riskHistory} color="#fb7c6b" />
        </DashboardCard>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <DashboardCard icon={Sunrise} title="Focus Recommendation" delay={0.2}>
          <p className="font-display text-sm font-semibold text-ink">{focusRecommendation.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{focusRecommendation.detail}</p>
        </DashboardCard>
        <DashboardCard icon={BatteryCharging} title="Energy Recommendation" delay={0.25}>
          <p className="font-display text-sm font-semibold text-ink">{energyRecommendation.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{energyRecommendation.detail}</p>
        </DashboardCard>
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-ink">Recent AI Advice</h2>
        <div className="flex flex-col gap-3">
          {recentAdvice.map((advice, i) => (
            <motion.div
              key={advice.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass flex flex-col gap-2 rounded-2xl p-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <Badge tone={categoryTone[advice.category]}>{advice.category}</Badge>
                <p className="text-sm leading-relaxed text-ink/90">{advice.message}</p>
              </div>
              <span className="shrink-0 font-mono text-[11px] text-faint">{advice.timestamp}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
