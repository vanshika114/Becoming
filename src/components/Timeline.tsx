import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { Subtask } from "@/types";
import { Badge, priorityTone } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function Timeline({ tasks }: { tasks: Subtask[] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-indigo)] via-white/15 to-transparent" />

      <div className="flex flex-col gap-6">
        {tasks.map((task, i) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="relative"
          >
            <span
              className={cn(
                "absolute -left-8 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-[var(--color-base)]",
                task.priority === "critical" && "bg-[var(--color-coral)]",
                task.priority === "high" && "bg-[var(--color-amber)]",
                task.priority === "medium" && "bg-[var(--color-blue)]",
                task.priority === "low" && "bg-[var(--color-mint)]"
              )}
            />
            <div className="glass rounded-2xl p-4 hover:border-white/20 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-[var(--color-violet)]">{task.schedule}</span>
                <Badge tone={priorityTone[task.priority]}>{task.priority}</Badge>
              </div>
              <h4 className="mt-2 font-display text-sm font-semibold text-ink">{task.title}</h4>
              <p className="mt-1 text-sm text-muted leading-relaxed">{task.description}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-faint font-mono">
                <Clock size={12} /> {task.estimated_minutes} min duration
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
