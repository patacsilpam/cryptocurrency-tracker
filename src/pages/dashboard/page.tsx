import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs";
import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import { DashboardTrendingCoins } from "@/components/layout/dashboard/DashboardTrendingCoins";
import { DashboardTrendingNFTs } from "@/components/layout/dashboard/DashboardTrendingNft";
import { TrendingCoin } from "@/components/layout/landing/TrendingCoin";

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
        {/*parent*/}
        <div className="flex flex-col">
          <div className="flex gap-4 px-4">
            <div className="flex-1 flex flex-col">
              <DashboardTrendingCoins />
            </div>
            <div className="flex-1 flex flex-col">
              <DashboardTrendingNFTs />
            </div>
            <div className="flex-1 flex flex-col text-white">
              <div>market cap</div>
            </div>
          </div>
          {/*tabs*/}
          <div className="py-4">
            <Tabs defaultValue="" className="w-full text-white px-4">
              <TabsList>
                <TabsTrigger value="coins">Coins</TabsTrigger>
                <TabsTrigger value="nfts">NFTs</TabsTrigger>
              </TabsList>
              <TabsContent value="coins">
                <DashboardTrendingNFTs /> {/* Content for Coins */}
              </TabsContent>
              <TabsContent value="nfts">
                <DashboardTrendingNFTs /> {/* Content for NFTs */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
