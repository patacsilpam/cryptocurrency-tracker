"use client";

import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import { SidebarInset } from "@/components/common/Sidebar";
import { Button } from "@/components/common/Button";
import { supabase } from "@/config/supabaseClient";
export function CoinDetails() {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <h1>Coin Details</h1>
      <Button type="button" onClick={signOut}>
        Sign out
      </Button>
    </div>
  );
}
