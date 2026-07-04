import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  AlertTriangle,
  Sunrise,
  BatteryCharging,
} from "lucide-react";

import { DashboardCard } from "@/components/DashboardCard";
import { Badge } from "@/components/ui/Badge";
import type { Plan } from "@/types";

function ProgressBar({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
  return (
    <div className="mt-5">
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            background: color,
          }}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs text-muted">
        <span>0%</span>
        <span className="font-semibold text-ink">{value}%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

const categoryTone: Record<
  string,
  "coral" | "blue" | "mint" | "violet"
> = {
  risk: "coral",
  focus: "blue",
  energy: "mint",
  strategy: "violet",
};

export function InsightsPage() {
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("becoming-plan");

    if (saved) {
      setPlan(JSON.parse(saved));
    }
  }, []);

  if (!plan) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted">
        Generate a plan first to unlock AI Insights.
      </div>
    );
  }

  const focusRecommendation = {
    title: plan.focus_mode.replace("-", " "),
    detail: plan.next_best_action,
  };

  const energyRecommendation = {
    title: `${plan.energy_level.toUpperCase()} Energy`,
    detail: plan.productivity_tip,
  };

  const recentAdvice = [
    {
      id: "1",
      category: "risk",
      message: plan.risk_reason,
      timestamp: "Now",
    },
    {
      id: "2",
      category: "focus",
      message: plan.next_best_action,
      timestamp: "Now",
    },
    {
      id: "3",
      category: "strategy",
      message: plan.productivity_tip,
      timestamp: "Now",
    },
    {
      id: "4",
      category: "energy",
      message: plan.motivation,
      timestamp: "Now",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          AI Insights
        </h1>

        <p className="mt-1 text-sm text-muted">
          Personalized insights generated from your latest execution plan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <DashboardCard
          icon={TrendingUp}
          title={`AI Confidence (${plan.ai_confidence}%)`}
          delay={0.05}
        >
          <ProgressBar
            value={plan.ai_confidence}
            color="#6d5ef5"
          />
        </DashboardCard>

        <DashboardCard
          icon={Target}
          title={`Completion Probability (${plan.completion_probability}%)`}
          delay={0.1}
        >
          <ProgressBar
            value={plan.completion_probability}
            color="#3fd6a3"
          />
        </DashboardCard>

        <DashboardCard
          icon={AlertTriangle}
          title={`Risk Score (${plan.risk_score}%)`}
          delay={0.15}
        >
          <ProgressBar
            value={plan.risk_score}
            color="#fb7c6b"
          />
        </DashboardCard>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <DashboardCard
          icon={Sunrise}
          title="Focus Recommendation"
          delay={0.2}
        >
          <p className="font-display text-sm font-semibold text-ink capitalize">
            {focusRecommendation.title}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-muted">
            {focusRecommendation.detail}
          </p>
        </DashboardCard>

        <DashboardCard
          icon={BatteryCharging}
          title="Energy Recommendation"
          delay={0.25}
        >
          <p className="font-display text-sm font-semibold text-ink">
            {energyRecommendation.title}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-muted">
            {energyRecommendation.detail}
          </p>
        </DashboardCard>
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-ink">
          Recent AI Advice
        </h2>

        <div className="flex flex-col gap-3">
          {recentAdvice.map((advice, i) => (
            <motion.div
              key={advice.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
              }}
              className="glass flex flex-col gap-2 rounded-2xl p-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <Badge tone={categoryTone[advice.category]}>
                  {advice.category}
                </Badge>

                <p className="text-sm leading-relaxed text-ink/90">
                  {advice.message}
                </p>
              </div>

              <span className="shrink-0 font-mono text-[11px] text-faint">
                {advice.timestamp}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}