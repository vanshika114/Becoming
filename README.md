# 🌱 Becoming

> **Because planning isn't enough.**

Becoming is an AI-powered productivity application that transforms goals into structured execution plans. Instead of acting as a simple reminder app, Becoming analyzes your workload, urgency, deadlines, and priorities to generate an intelligent roadmap that maximizes your chances of completing tasks on time.

Whether you're preparing for exams, interviews, assignments, personal projects, fitness goals, or travel plans, Becoming provides actionable plans backed by AI-driven insights.

---

## ✨ Features

- 🧠 AI-powered execution planning using **Google Gemini 2.5 Flash**
- 📋 Automatic task decomposition into realistic subtasks
- ⏱️ Time estimation for every task
- 🚦 Smart priority assignment (Low, Medium, High, Critical)
- ⚠️ AI-generated deadline risk assessment
- 🎯 Completion probability prediction
- 🤖 AI confidence score
- 🔋 Personalized energy level recommendation
- 🎯 Focus mode suggestion
- 💡 Tailored productivity tips
- 🗓️ Dynamic execution timeline
- 📊 AI Insights dashboard
- 💾 Local storage persistence
- 📱 Responsive modern UI with smooth animations

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend

- Node.js
- Express
- TypeScript

### AI

- Google Gemini 2.5 Flash
- Google GenAI SDK

---

## ⚙️ How It Works

```text
User enters a goal
        │
        ▼
React Frontend
        │
        ▼
Express Backend
        │
        ▼
Google Gemini 2.5 Flash
        │
        ▼
Structured JSON Response
        │
        ▼
Dashboard
Timeline
AI Insights
```

---

## 📂 Project Structure

```text
becoming/
│
├── backend/
│   ├── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── public/
│
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vanshika114/Becoming.git

cd Becoming
```

---

### 2. Install Frontend Dependencies

```bash
npm install
```

---

### 3. Install Backend Dependencies

```bash
cd backend

npm install
```

---

### 4. Create Environment Variables

Create a `.env` file inside the **backend** directory.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

You can generate an API key from:

https://aistudio.google.com/app/apikey

---

### 5. Start the Backend

```bash
cd backend

npx tsx server.ts
```

Backend runs on:

```
http://localhost:3001
```

---

### 6. Start the Frontend

Open a new terminal.

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 💬 Example Prompt

```text
I have a science exam tomorrow, a coding interview on Friday, and two assignments due this week. I have about five hours available today. Help me plan everything.
```

---

## 📤 Example AI Output

For every prompt, Becoming generates:

- Executive AI overview
- Risk score
- Risk explanation
- Completion probability
- AI confidence score
- Estimated completion time
- Recommended focus mode
- Recommended energy level
- Next best action
- Personalized productivity tip
- Motivational message
- Structured subtasks with priorities, schedules, and time estimates

---

## 🌟 Why Becoming?

Most productivity apps help you remember tasks.

**Becoming helps you finish them.**

Instead of creating another checklist, Becoming combines AI planning, behavioral psychology, and project management principles to help users execute their goals efficiently and confidently.

---

## 🔮 Future Improvements

- User authentication
- Cloud synchronization
- Multiple saved plans
- Calendar integration
- Daily AI check-ins
- Progress analytics
- Task completion tracking
- Notifications & reminders
- Editable execution plans
- Dark / Light theme toggle

---

## 👩‍💻 Author

**Vanshika Sharma**

GitHub: https://github.com/vanshika114
