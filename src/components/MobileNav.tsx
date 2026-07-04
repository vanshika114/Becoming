import { NavLink } from "react-router-dom";
import { LayoutDashboard, Wand2, CalendarClock, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/dashboard", label: "Home", icon: LayoutDashboard },
  { to: "/generate", label: "Generate", icon: Wand2 },
  { to: "/timeline", label: "Timeline", icon: CalendarClock },
  { to: "/insights", label: "Insights", icon: LineChart },
];

export function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-white/10 bg-[var(--color-surface)]/90 px-2 py-2.5 backdrop-blur-xl md:hidden">
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-[10px] font-medium",
              isActive ? "text-ink" : "text-faint"
            )
          }
        >
          <Icon size={18} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
