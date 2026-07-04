import type { InsightTrendPoint, AdviceEntry } from "@/types";

export const productivityTrend: InsightTrendPoint[] = [
  { label: "Mon", value: 62 },
  { label: "Tue", value: 71 },
  { label: "Wed", value: 58 },
  { label: "Thu", value: 80 },
  { label: "Fri", value: 74 },
  { label: "Sat", value: 45 },
  { label: "Sun", value: 68 },
];

export const completionProbabilityTrend: InsightTrendPoint[] = [
  { label: "Mon", value: 70 },
  { label: "Tue", value: 74 },
  { label: "Wed", value: 69 },
  { label: "Thu", value: 82 },
  { label: "Fri", value: 78 },
  { label: "Sat", value: 60 },
  { label: "Sun", value: 78 },
];

export const riskHistory: InsightTrendPoint[] = [
  { label: "Mon", value: 40 },
  { label: "Tue", value: 35 },
  { label: "Wed", value: 55 },
  { label: "Thu", value: 30 },
  { label: "Fri", value: 48 },
  { label: "Sat", value: 65 },
  { label: "Sun", value: 62 },
];

export const recentAdvice: AdviceEntry[] = [
  {
    id: "adv-1",
    timestamp: "Today, 8:12 AM",
    message:
      "Your risk score jumped 14 points overnight — the hackathon and assignment deadlines are now overlapping. Consider moving the README task to tomorrow.",
    category: "risk",
  },
  {
    id: "adv-2",
    timestamp: "Yesterday, 6:40 PM",
    message:
      "You completed 4 of 5 deep-work blocks this week. Your focus holds strongest between 9–11 AM — protect that window.",
    category: "focus",
  },
  {
    id: "adv-3",
    timestamp: "Yesterday, 1:15 PM",
    message:
      "Energy dipped after your 2 PM block three days running. Try shifting shallow tasks (email, admin) into that slot.",
    category: "energy",
  },
  {
    id: "adv-4",
    timestamp: "2 days ago",
    message:
      "Switching task order to tackle the highest-blocking item first raised your completion probability by 9%.",
    category: "strategy",
  },
];

export const focusRecommendation = {
  title: "Protect your 9–11 AM window",
  detail:
    "Your last 14 days show deep-work sessions started before 11 AM finish 2.3x more often than afternoon sessions.",
};

export const energyRecommendation = {
  title: "Batch shallow tasks after 2 PM",
  detail:
    "Energy consistently dips post-lunch. Save admin, email, and formatting tasks for this window instead of forcing focus work.",
};
