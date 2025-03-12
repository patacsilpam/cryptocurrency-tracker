import type React from "react";
import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import { Navbar } from "@/components/layout/dashboard/Nav-bar";
import { SidebarInset, SidebarProvider } from "@/components/common/Sidebar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="w-screen">
            <Navbar title="Dashboard" subtitle="Welcome back" />
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
