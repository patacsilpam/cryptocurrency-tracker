"use client";

import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import { SidebarInset } from "@/components/common/Sidebar";

export function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex flex-col flex-1">
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-card text-card-foreground rounded-lg shadow-sm p-4"
              >
                <h2 className="font-semibold mb-2">Card {i + 1}</h2>
                <p>This is some placeholder content for the dashboard.</p>
              </div>
            ))}
          </div>
        </main>
      </SidebarInset>
    </div>
  );
}
