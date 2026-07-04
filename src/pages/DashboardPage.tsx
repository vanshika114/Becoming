import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  BatteryMedium,
  Compass,
  Lightbulb,
  Heart,
} from "lucide-react";

import type { Plan } from "@/types";

import { AIOverviewCard } from "@/components/AIOverviewCard";
import { MetricCard } from "@/components/MetricCard";
import { DashboardCard } from "@/components/DashboardCard";
import { TaskCard } from "@/components/TaskCard";

export function DashboardPage() {
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
        Generate a plan first to view your dashboard.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Hey There!! 👋
        </h1>

        <p className="mt-1 text-sm text-muted">
          Here's your latest AI execution strategy.
        </p>
      </motion.div>

      <AIOverviewCard plan={plan} />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <MetricCard
          icon={Flame}
          label="Focus Mode"
          value={plan.focus_mode.replace("-", " ")}
          tone="coral"
          delay={0.05}
        />

        <MetricCard
          icon={BatteryMedium}
          label="Energy Level"
          value={plan.energy_level}
          tone="mint"
          delay={0.1}
        />

        <MetricCard
          icon={Compass}
          label="Est. Total Time"
          value={plan.estimated_total_time}
          tone="blue"
          delay={0.15}
        />

        <MetricCard
          icon={Lightbulb}
          label="AI Confidence"
          value={`${plan.ai_confidence}%`}
          tone="amber"
          delay={0.2}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <DashboardCard
          icon={Compass}
          title="Next Best Action"
          className="lg:col-span-2 border-[var(--color-indigo)]/30"
          delay={0.1}
        >
          <p className="text-sm leading-relaxed text-ink/90">
            {plan.next_best_action}
          </p>
        </DashboardCard>

        <DashboardCard
          icon={Lightbulb}
          title="Productivity Tip"
          delay={0.15}
        >
          <p className="text-sm leading-relaxed text-muted">
            {plan.productivity_tip}
          </p>
        </DashboardCard>
      </div>

      <DashboardCard
        icon={Heart}
        title="Motivation"
        delay={0.2}
      >
        <p className="text-sm italic leading-relaxed text-muted">
          "{plan.motivation}"
        </p>
      </DashboardCard>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-ink">
          Smart Task Breakdown
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {plan.subtasks.map((task, i) => (
            <TaskCard
              key={task.id}
              task={task}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}