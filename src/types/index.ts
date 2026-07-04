export type Priority = "low" | "medium" | "high" | "critical";

export type EnergyLevel = "low" | "steady" | "high" | "peak";

export type FocusMode = "deep-work" | "light-tasks" | "recovery" | "sprint";

export interface Subtask {
  id: string;
  title: string;
  description: string;
  estimated_minutes: number;
  priority: Priority;
  schedule: string;
  reason: string;
  completed?: boolean;
}

export interface Plan {
  ai_overview: string;
  risk_score: number;
  risk_reason: string;
  completion_probability: number;
  ai_confidence: number;
  estimated_total_time: string;
  energy_level: EnergyLevel;
  focus_mode: FocusMode;
  next_best_action: string;
  productivity_tip: string;
  motivation: string;
  subtasks: Subtask[];
}

export interface DashboardMetrics {
  riskScore: number;
  completionProbability: number;
  aiConfidence: number;
  energyLevel: EnergyLevel;
  focusMode: FocusMode;
  estimatedTotalTime: string;
}

export interface InsightTrendPoint {
  label: string;
  value: number;
}

export interface AdviceEntry {
  id: string;
  timestamp: string;
  message: string;
  category: "risk" | "focus" | "energy" | "strategy";
}
