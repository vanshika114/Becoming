import { useEffect, useState } from "react";
import type { Plan } from "@/types";
import { Timeline } from "@/components/Timeline";

export function TimelinePage() {
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("becoming-plan");

    if (saved) {
      setPlan(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Timeline
        </h1>

        <p className="mt-1 text-sm text-muted">
          Your personalized execution timeline.
        </p>
      </div>

      {plan ? (
        <div className="max-w-2xl">
          <Timeline tasks={plan.subtasks} />
        </div>
      ) : (
        <p className="text-muted">
          Generate a plan first to see your timeline.
        </p>
      )}
    </div>
  );
}