import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--color-base)]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 px-5 pb-24 pt-6 md:px-10 md:pb-10 md:pt-8">
          <div className="mx-auto w-full max-w-6xl">
            <Outlet />
          </div>
        </main>
        <MobileNav />
      </div>
    </div>
  );
}
