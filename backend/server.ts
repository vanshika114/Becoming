import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const systemPrompt = `
You are Becoming AI.

You MUST return ONLY valid JSON.

The JSON MUST exactly match this structure.

{
  "ai_overview": "string",
  "risk_score": 0,
  "risk_reason": "string",
  "completion_probability": 0,
  "ai_confidence": 0,
  "estimated_total_time": "string",
  "energy_level": "low | steady | high | peak",
  "focus_mode": "deep-work | light-tasks | recovery | sprint",
  "next_best_action": "string",
  "productivity_tip": "string",
  "motivation": "string",
  "subtasks": [
    {
      "id": "1",
      "title": "string",
      "description": "string",
      "estimated_minutes": 30,
      "priority": "low | medium | high | critical",
      "schedule": "string",
      "reason": "string",
      "completed": false
    }
  ]
}

Rules:

- Return ONLY JSON.
- No markdown.
- No explanations.
- No code fences.
- risk_score must be a number.
- completion_probability must be a number.
- ai_confidence must be a number.
- estimated_total_time must never be empty.
- energy_level must be one of:
  low
  steady
  high
  peak

- focus_mode must be one of:
  deep-work
  light-tasks
  recovery
  sprint

- Every subtask MUST include:
  id
  title
  description
  estimated_minutes
  priority
  schedule
  reason
  completed

Never omit any field.
`;

app.post("/generate-plan", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
      },
    });

    const text = response.text ?? "";

    console.log("\n========== RAW GEMINI ==========");
    console.log(text);
    console.log("================================\n");

    let plan;

    try {
      plan = JSON.parse(text);
    } catch {
      return res.status(500).json({
        error: "Gemini returned invalid JSON",
        raw: text,
      });
    }

    // Fill missing fields so the frontend never crashes
    plan.ai_overview ??= "";
    plan.risk_score ??= 0;
    plan.risk_reason ??= "";
    plan.completion_probability ??= 0;
    plan.ai_confidence ??= 0;
    plan.estimated_total_time ??= "";
    plan.energy_level ??= "steady";
    plan.focus_mode ??= "deep-work";
    plan.next_best_action ??= "";
    plan.productivity_tip ??= "";
    plan.motivation ??= "";

    if (!Array.isArray(plan.subtasks)) {
      plan.subtasks = [];
    }

    plan.subtasks = plan.subtasks.map((task: any, index: number) => ({
      id: task.id ?? String(index + 1),
      title: task.title ?? "",
      description: task.description ?? "",
      estimated_minutes: task.estimated_minutes ?? 30,
      priority: task.priority ?? "medium",
      schedule: task.schedule ?? "",
      reason: task.reason ?? "",
      completed: task.completed ?? false,
    }));

    console.log("\n========== FINAL JSON ==========");
    console.dir(plan, { depth: null });
    console.log("================================\n");

    res.json(plan);
  } catch (err: any) {
    console.error(err);

    res.status(500).json({
      error: err.message || "Failed to generate plan",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});