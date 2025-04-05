import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import { useEffect } from "react";
import { DashboardTrendingCoins } from "@/components/layout/dashboard/DashboardTrendingCoins";
import { DashboardTrendingNFTs } from "@/components/layout/dashboard/DashboardTrendingNft";

// Extend JSX to recognize the custom element

export function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            buildin
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div>
              <DashboardTrendingCoins />
            </div>
            <div>
              <DashboardTrendingNFTs />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
const CoinConverterWidget = () => {
  useEffect(() => {
    // Load the CoinGecko widget script dynamically
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/gecko-coin-price-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <gecko-coin-price-chart-widget
        locale="en"
        dark-mode="true"
        outlined="true"
        initial-currency="usd"
        width="499"
      ></gecko-coin-price-chart-widget>
    </div>
  );
};
