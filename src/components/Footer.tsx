import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)]">
              <Sparkles size={15} className="text-white" />
            </span>
            Becoming
          </div>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            From intention to action. An AI companion that turns overwhelming deadlines into achievable plans.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-faint">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="hover:text-ink cursor-pointer transition-colors">Dashboard</li>
              <li className="hover:text-ink cursor-pointer transition-colors">Generate Plan</li>
              <li className="hover:text-ink cursor-pointer transition-colors">Timeline</li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-faint">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="hover:text-ink cursor-pointer transition-colors">About</li>
              <li className="hover:text-ink cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-ink cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-faint">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="hover:text-ink cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-ink cursor-pointer transition-colors">Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-6 py-6 text-center text-xs text-faint">
        © 2026 Becoming. Built for the intentional.
      </div>
    </footer>
  );
}
