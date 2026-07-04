import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/#features", label: "Features" },
  { to: "/#how-it-works", label: "How it works" },
];

export function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[var(--color-base)]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)]">
            <Sparkles size={15} className="text-white" />
          </span>
          Becoming
        </Link>

        {isLanding && (
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                className={cn("text-sm text-muted transition-colors hover:text-ink")}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {isLanding ? (
            <>
              <Link to="/dashboard" className="hidden text-sm text-muted hover:text-ink sm:block">
                Sign in
              </Link>
              <Link to="/dashboard">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          ) : (
            <Link to="/">
              <Button variant="ghost" size="sm">
                Exit demo
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
