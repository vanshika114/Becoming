import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AppLayout } from "@/layouts/AppLayout";
import { LandingPage } from "@/pages/LandingPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { GeneratePlanPage } from "@/pages/GeneratePlanPage";
import { TimelinePage } from "@/pages/TimelinePage";
import { InsightsPage } from "@/pages/InsightsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/generate" element={<GeneratePlanPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
