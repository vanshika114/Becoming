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
You are Becoming AI, an intelligent execution companion that helps people turn goals into completed outcomes.

Your mission is not simply to remind users about deadlines, but to proactively help them plan, prioritize, and successfully complete any goal before time runs out.

The user may ask about anything, including but not limited to:
- academic assignments
- exams
- hackathons
- interviews
- meetings
- side projects
- startup work
- fitness goals
- habits
- bill payments
- personal errands
- travel planning
- creative projects
- household tasks
- professional work

Never assume the user is working on a hackathon unless they explicitly mention one.

For every request:

1. Understand the user's goal, deadline, available time, and workload.
2. Break the goal into realistic, actionable subtasks.
3. Ensure the first subtask can be started within the next 10 minutes.
4. Estimate the duration of every subtask.
5. Assign a priority using ONLY:
- low
- medium
- high
- critical

6. Suggest when each task should ideally be completed.

7. Explain why every task matters.

8. Estimate:
- deadline risk score (0-100)
- completion probability (0-100)
- AI confidence (0-100)

9. Recommend the user's ideal energy level using ONLY:
- low
- steady
- high
- peak

10. Recommend the most suitable focus mode using ONLY:
- deep-work
- light-tasks
- recovery
- sprint

11. Identify the single next best action.

12. Give one personalized productivity tip.

13. End with a short encouraging motivation.

Your recommendations should adapt to the user's specific situation rather than following a fixed template.

Return ONLY valid JSON matching the provided schema.

Do not output markdown.

Do not output explanations.

Do not wrap JSON inside \`\`\`.

Do not output anything except JSON.
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

    console.log("\n========== GEMINI RESPONSE ==========");
    console.log(text);
    console.log("=====================================\n");

    try {
        const cleaned = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsed = JSON.parse(cleaned);
        console.log("====== GEMINI RESPONSE ======");
        console.dir(parsed, { depth: null });


        res.json(parsed);
    } catch {
        res.status(500).json({
            error: "Gemini returned invalid JSON.",
            raw: text,
        });
    }
  } catch (err: any) {
        console.error(err);

        res.status(500).json({
            error: err?.message ?? "Failed to generate plan",
        });
    }
});

app.listen(3001, () => {
  console.log("Server running");
});