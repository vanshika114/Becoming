import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { AIOverviewCard } from "@/components/AIOverviewCard";
import { TaskCard } from "@/components/TaskCard";
import { usePlanGenerator } from "@/hooks/usePlanGenerator";
import { examplePrompts } from "@/data/mockPlan";

export function GeneratePlanPage() {
  const [prompt, setPrompt] = useState("");
  const { plan, isGenerating, error, generate } = usePlanGenerator();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">Generate Plan</h1>
        <p className="mt-1 text-sm text-muted">Tell Becoming what you're trying to accomplish.</p>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <Textarea
          rows={5}
          placeholder="What are you trying to accomplish?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="mt-3 flex flex-wrap gap-2">
          {examplePrompts.map((ex) => (
            <button
              key={ex.label}
              onClick={() => setPrompt(ex.value)}
              className="focus-ring rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-white/25 hover:text-ink"
            >
              {ex.label}
            </button>
          ))}
        </div>

        {error && <p className="mt-3 text-sm text-[var(--color-coral)]">{error}</p>}

        <Button
          size="lg"
          className="mt-6 w-full"
          onClick={() => generate(prompt)}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Generating your plan…
            </>
          ) : (
            <>
              <Wand2 size={18} /> Generate Plan
            </>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {plan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <AIOverviewCard plan={plan} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {plan.subtasks.map((task, i) => (
                <TaskCard key={task.id} task={task} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
