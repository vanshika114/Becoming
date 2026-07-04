import { NavLink } from "react-router-dom";
import { LayoutDashboard, Wand2, CalendarClock, LineChart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/generate", label: "Generate Plan", icon: Wand2 },
  { to: "/timeline", label: "Timeline", icon: CalendarClock },
  { to: "/insights", label: "AI Insights", icon: LineChart },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-white/8 bg-[var(--color-surface)]/60 px-4 py-6 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2 font-display text-lg font-semibold tracking-tight">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)]">
          <Sparkles size={15} className="text-white" />
        </span>
        Becoming
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "focus-ring flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-white/8 text-ink border border-white/10"
                  : "text-muted hover:bg-white/5 hover:text-ink border border-transparent"
              )
            }
          >
            <Icon size={17} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="glass rounded-xl p-4">
        <p className="font-display text-xs font-semibold text-ink">Focus streak</p>
        <p className="mt-1 text-[11px] text-muted leading-relaxed">6 days of consistent deep work. Keep going.</p>
      </div>
    </aside>
  );
}
