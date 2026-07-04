import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function DashboardCard({ icon: Icon, title, description, children, className, delay = 0 }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className={cn("h-full", className)}>
        <div className="mb-3 flex items-center gap-2.5">
          {Icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/6 text-[var(--color-violet)]">
              <Icon size={15} />
            </div>
          )}
          <h3 className="font-display text-sm font-semibold tracking-tight text-ink">{title}</h3>
        </div>
        {description && <p className="mb-3 text-sm text-muted leading-relaxed">{description}</p>}
        {children}
      </Card>
    </motion.div>
  );
}
