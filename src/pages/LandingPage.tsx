import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Target, Brain, CalendarClock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { OrbitCluster } from "@/components/OrbitCluster";

const features = [
  {
    icon: Brain,
    title: "AI execution strategy",
    description: "Becoming doesn't just remind you — it breaks intentions into a sequenced, achievable plan.",
  },
  {
    icon: Target,
    title: "Risk-aware planning",
    description: "Every plan carries a live risk score and completion probability, so you know where you stand.",
  },
  {
    icon: CalendarClock,
    title: "Timeline that adapts",
    description: "Subtasks are scheduled around your energy and focus, not just a generic calendar grid.",
  },
  {
    icon: TrendingUp,
    title: "Insights that compound",
    description: "Track productivity trends and get advice that improves with every plan you generate.",
  },
];

const steps = [
  { title: "Describe your goal", detail: "Tell Becoming what you're trying to accomplish, in your own words." },
  { title: "Get a strategy, not a list", detail: "The AI breaks it down into prioritized, time-boxed subtasks." },
  { title: "Execute with confidence", detail: "Follow your timeline as risk and completion probability update live." },
];

export function LandingPage() {
  return (
    <div className="mesh-bg">
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 pb-24 pt-16 md:pt-24 lg:flex-row lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">AI productivity companion</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl"
          >
            Meet <span className="text-gradient">Becoming.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg leading-relaxed text-muted"
          >
            The AI companion that turns overwhelming deadlines into achievable action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/generate" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <PlayCircle size={16} /> View Demo
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitCluster />
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Built to think ahead of you
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          Not another to-do list. An AI command center for how you actually get things done.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]">
                  <f.icon size={18} />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          How it works
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <Card className="h-full">
                <span className="font-display text-3xl font-semibold text-gradient">{`0${i + 1}`}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/generate">
            <Button size="lg">
              Generate your first plan <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
