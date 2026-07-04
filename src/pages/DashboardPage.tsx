import { motion } from "framer-motion";
import { Flame, BatteryMedium, Compass, Lightbulb, Heart } from "lucide-react";
import { mockPlan } from "@/data/mockPlan";
import { AIOverviewCard } from "@/components/AIOverviewCard";
import { MetricCard } from "@/components/MetricCard";
import { DashboardCard } from "@/components/DashboardCard";
import { TaskCard } from "@/components/TaskCard";

export function DashboardPage() {
  const plan = mockPlan;

  return (
    <div className="flex flex-col gap-6">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Good Evening, Vanshika 👋
        </h1>
        <p className="mt-1 text-sm text-muted">Here's where things stand today.</p>
      </motion.div>

      <AIOverviewCard plan={plan} />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <MetricCard icon={Flame} label="Focus Mode" value={plan.focus_mode.replace("-", " ")} tone="coral" delay={0.05} />
        <MetricCard icon={BatteryMedium} label="Energy Level" value={plan.energy_level} tone="mint" delay={0.1} />
        <MetricCard icon={Compass} label="Est. Total Time" value={plan.estimated_total_time} tone="blue" delay={0.15} />
        <MetricCard icon={Lightbulb} label="Risk Reason" value="See overview" tone="amber" delay={0.2} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <DashboardCard icon={Compass} title="Next Best Action" className="lg:col-span-2 border-[var(--color-indigo)]/30" delay={0.1}>
          <p className="text-sm leading-relaxed text-ink/90">{plan.next_best_action}</p>
        </DashboardCard>
        <DashboardCard icon={Lightbulb} title="Productivity Tip" delay={0.15}>
          <p className="text-sm leading-relaxed text-muted">{plan.productivity_tip}</p>
        </DashboardCard>
      </div>

      <DashboardCard icon={Heart} title="Motivation" delay={0.2}>
        <p className="text-sm leading-relaxed text-muted italic">"{plan.motivation}"</p>
      </DashboardCard>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-ink">Smart Task Breakdown</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {plan.subtasks.map((task, i) => (
            <TaskCard key={task.id} task={task} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
