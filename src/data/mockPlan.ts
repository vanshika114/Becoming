import type { Plan } from "@/types";

export const mockPlan: Plan = {
  ai_overview:
    "You have a hackathon submission due in 36 hours and two competing deadlines this week. Your risk is elevated but recoverable if you lock focus blocks today.",
  risk_score: 62,
  risk_reason:
    "Two overlapping deadlines and a 40% drop in yesterday's task completion rate are compounding pressure heading into the weekend.",
  completion_probability: 78,
  ai_confidence: 91,
  estimated_total_time: "6h 45m",
  energy_level: "steady",
  focus_mode: "deep-work",
  next_best_action:
    "Start with the API integration for the demo — it unblocks three other subtasks and carries the highest risk if delayed.",
  productivity_tip:
    "Batch your shallow tasks (slides, README) into one 30-minute block after lunch instead of scattering them through the day.",
  motivation:
    "You've shipped under tighter deadlines before. This plan only needs consistency, not heroics — one block at a time.",
  subtasks: [
    {
      id: "st-1",
      title: "Wire up API integration for live demo",
      description:
        "Connect the mock backend responses to the dashboard so the judges see real interaction, not static screens.",
      estimated_minutes: 90,
      priority: "critical",
      schedule: "Today, 9:00 AM – 10:30 AM",
      reason: "Blocks the demo flow and two downstream UI tasks.",
    },
    {
      id: "st-2",
      title: "Design the AI Overview dashboard card",
      description:
        "Build the hero metrics card with risk, completion probability and confidence rings.",
      estimated_minutes: 60,
      priority: "high",
      schedule: "Today, 10:45 AM – 11:45 AM",
      reason: "This is the first thing judges will see — highest visual impact per minute spent.",
    },
    {
      id: "st-3",
      title: "Write submission README",
      description: "Summarize the problem, approach, and stack in under 400 words.",
      estimated_minutes: 25,
      priority: "medium",
      schedule: "Today, 1:30 PM – 1:55 PM",
      reason: "Low effort but required for submission — batch with other shallow tasks.",
    },
    {
      id: "st-4",
      title: "Record 90-second demo video",
      description: "Screen-record the core flow: generate plan → dashboard → timeline.",
      estimated_minutes: 45,
      priority: "high",
      schedule: "Today, 4:00 PM – 4:45 PM",
      reason: "Video walkthroughs correlate strongly with judge engagement in past hackathons.",
    },
    {
      id: "st-5",
      title: "Polish empty states and loading animations",
      description: "Add skeleton loaders and micro-interactions across the dashboard.",
      estimated_minutes: 40,
      priority: "low",
      schedule: "Tomorrow, 9:00 AM – 9:40 AM",
      reason: "Nice-to-have polish that can slip a day without affecting the core score.",
    },
    {
      id: "st-6",
      title: "Rehearse 2-minute pitch",
      description: "Run through the pitch twice, timed, focusing on the problem framing.",
      estimated_minutes: 20,
      priority: "medium",
      schedule: "Tomorrow, 8:00 AM – 8:20 AM",
      reason: "First impressions with judges are shaped heavily by pitch clarity.",
    },
  ],
};

export const examplePrompts = [
  { label: "Hackathon", value: "I have a hackathon submission due in 36 hours and haven't built the demo yet." },
  { label: "Assignments", value: "I have three assignments due this week across two classes." },
  { label: "Exams", value: "I have a final exam in 5 days and haven't started studying." },
  { label: "Startup", value: "I need to prepare a seed pitch deck and financial model by Friday." },
  { label: "Job interview", value: "I have a final-round interview in 3 days and need to prepare." },
];
