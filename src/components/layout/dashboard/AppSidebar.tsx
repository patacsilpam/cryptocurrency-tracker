import {
  LayoutDashboard,
  Bitcoin,
  HandCoins,
  Currency,
  Newspaper,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Coins",
    url: "#",
    icon: Bitcoin,
  },
  {
    title: "NFTs",
    url: "#",
    icon: Currency,
  },
  {
    title: "Exchange",
    url: "#",
    icon: HandCoins,
  },
  {
    title: "News",
    url: "#",
    icon: Newspaper,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex flex-col items-center py-4"
                    >
                      <p className="p-3">
                        {" "}
                        <item.icon />
                      </p>
                      <p className="text-sm">{item.title}</p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
