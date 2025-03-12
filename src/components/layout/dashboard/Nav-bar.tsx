"use client";

import { Bell, ChevronDown, Search, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/common/Sidebar";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Navbar({
  className,
  title = "Dashboard",
  subtitle,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "flex h-16 shrink-0 items-center border-b bg-background px-4 md:px-6",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="h-8 w-8" />
        <div className="hidden md:flex md:flex-col">
          <h1 className="text-lg font-semibold">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-full bg-background pl-8 md:w-80"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
    </header>
  );
}
