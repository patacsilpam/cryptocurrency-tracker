"use client";

import { Home, BarChart2, Users, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/common/Sidebar";
import { supabase } from "@/config/supabaseClient";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart2, label: "News", href: "/news" },
  { icon: Users, label: "Coin Details", href: "/coin-details" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function AppSidebar() {
  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        // Extract first and last name
        const fullName = data.user.user_metadata?.full_name || "";
        const nameParts = fullName.split(" ");

        setFirstName(nameParts[0] || null); // First name
        setLastName(nameParts.slice(1).join(" ") || null); // Everything else as last name
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <a href={item.href}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarContent>
          <button>{`${firstName} ${lastName}`}</button>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
