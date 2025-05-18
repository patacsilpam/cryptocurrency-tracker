import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
export function Exchanges() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="bg-black border-b-stone-900 border-b flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="ml-3" />
              <span className="text-white shadow-sm text-xl">Crypto</span>
            </div>
          </header>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
