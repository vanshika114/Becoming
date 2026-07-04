import { motion } from "framer-motion";

export function OrbitCluster() {
  return (
    <div className="relative flex h-[340px] w-[340px] items-center justify-center md:h-[420px] md:w-[420px]">
      <div className="absolute inset-0 rounded-full mesh-bg blur-2xl opacity-70 animate-drift" />

      {[420, 340, 260].map((d, i) => (
        <div
          key={d}
          className="absolute rounded-full border border-white/10"
          style={{ width: d, height: d, opacity: 0.5 - i * 0.1 }}
        />
      ))}

      <motion.div
        className="absolute h-[340px] w-[340px] md:h-[420px] md:w-[420px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-violet)] shadow-[0_0_16px_4px_#a463f78a]" />
      </motion.div>
      <motion.div
        className="absolute h-[260px] w-[260px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute right-2 top-1/3 h-2.5 w-2.5 rounded-full bg-[var(--color-blue)] shadow-[0_0_14px_4px_#4c8dff8a]" />
      </motion.div>

      <div className="glass-strong relative flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Becoming</span>
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl font-semibold text-gradient"
        >
          78%
        </motion.span>
        <span className="mt-1 text-[11px] text-muted">on track</span>
      </div>
    </div>
  );
}
