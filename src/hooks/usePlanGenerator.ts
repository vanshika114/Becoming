import { useState, useCallback } from "react";
import type { Plan } from "@/types";
import { mockPlan } from "@/data/mockPlan";

interface UsePlanGeneratorResult {
  plan: Plan | null;
  isGenerating: boolean;
  error: string | null;
  generate: (prompt: string) => Promise<void>;
  reset: () => void;
}

/**
 * Mocks an AI plan generation call. Swap the body of `generate` for a real
 * request (e.g. to Gemini or your backend) — the return shape must match
 * the `Plan` interface in `src/types/index.ts`.
 */
export function usePlanGenerator(): UsePlanGeneratorResult {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (prompt: string) => {
    setIsGenerating(true);
    setError(null);
    try {
      if (!prompt.trim()) throw new Error("Tell Becoming what you're trying to accomplish first.");
      await new Promise((resolve) => setTimeout(resolve, 2200));
      console.log("Sending Prompt:", prompt);
      const response = await fetch("http://localhost:3001/generate-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

      const data = await response.json();

      console.log("Backend Response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Backend Error");
      }

      setPlan(data);
      console.log("Plan loaded successfully!");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong generating your plan.");
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const reset = useCallback(() => {
    setPlan(null);
    setError(null);
  }, []);

  return { plan, isGenerating, error, generate, reset };
}
