import { motion } from "framer-motion";
import { Clock, CalendarClock, Sparkles } from "lucide-react";
import type { Subtask } from "@/types";
import { Card, CardTitle } from "@/components/ui/Card";
import { Badge, priorityTone } from "@/components/ui/Badge";

interface TaskCardProps {
  task: Subtask;
  index?: number;
}

export function TaskCard({ task, index = 0 }: TaskCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Card className="group hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="leading-snug">{task.title}</CardTitle>
          <Badge tone={priorityTone[task.priority]}>{task.priority}</Badge>
        </div>
        <p className="mt-2 text-sm text-muted leading-relaxed">{task.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-faint font-mono">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} /> {task.estimated_minutes}m
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock size={13} /> {task.schedule}
          </span>
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
          <Sparkles size={14} className="mt-0.5 shrink-0 text-[var(--color-violet)]" />
          <p className="text-xs leading-relaxed text-muted">{task.reason}</p>
        </div>
      </Card>
    </motion.div>
  );
}
