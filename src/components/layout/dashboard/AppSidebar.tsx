import {
  LayoutDashboard,
  Bitcoin,
  HandCoins,
  Currency,
  Newspaper,
} from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";

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
  const [isActive, setIsActive] = useState<string>("");
  const handleToggle = (url: string) => {
    setIsActive(url);
  };
  return (
    <Sidebar>
      {" "}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex flex-col gap-0.5 leading-none">
                <div className="flex items-center justify-center py-4">
                  <span className="font-semibold">
                    <img src="/vite.svg" />
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-14">
        <SidebarGroup className="px-0 rounded-md">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`${
                        isActive === item.title
                          ? "bg-[#000C35] text-white"
                          : "text-gray-700"
                      }flex flex-col items-center py-5 hover:text-[#4359d5]`}
                      onClick={() => handleToggle(item.title)}
                    >
                      <p className="px-2">
                        <item.icon />
                      </p>

                      <p className="text-sm  font-medium">{item.title}</p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className="my-10 text-center">
                <button className="">Logout</button>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
