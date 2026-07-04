import { mockPlan } from "@/data/mockPlan";
import { Timeline } from "@/components/Timeline";

export function TimelinePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">Timeline</h1>
        <p className="mt-1 text-sm text-muted">Your subtasks, sequenced across the next two days.</p>
      </div>

      <div className="max-w-2xl">
        <Timeline tasks={mockPlan.subtasks} />
      </div>
    </div>
  );
}
