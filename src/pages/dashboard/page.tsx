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
//import { CryptoDataProvider } from "@/components/layout/dashboard/AllCoins";
import {
  Exchanges,
  CryptoDataProvider,
  TotalCoins,
  TotalMarketCap,
  TotalVolume,
} from "@/components/layout/dashboard/CryptoMarketStats";
import AllCoins from "@/components/layout/dashboard/AllCoins";
import AllNFTs from "@/components/layout/dashboard/AllNFTs";

// Extend JSX to recognize the custom element

export function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <CryptoDataProvider>
      <SidebarProvider>
        <AppSidebar />
        {children}
        <SidebarInset>
          <header className="bg-black border-b-stone-900 border-b flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="ml-3" />
              <span className="text-white shadow-sm text-xl">Crypto</span>
            </div>
          </header>
          {/*parent*/}
          <div className="flex flex-col px-3 mt-10">
            <div className="grid grid-cols-3 grid-rows-1 gap-7 px-5">
              <div className="flex-1 flex flex-col">
                <DashboardTrendingCoins />
              </div>
              <div className="flex-1 flex flex-col">
                <DashboardTrendingNFTs />
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-5 text-white h-full">
                <div className="bg-[#1a1b2f] bg-opacity-10 p-4 rounded-xl shadow-lg border-[#2a262653] border flex flex-col">
                  <h1 className="font-medium mb-2">Coins</h1>
                  <div className="flex-1 flex items-center justify-center">
                    <TotalCoins />
                  </div>
                </div>

                <div className="bg-[#1a1b2f] bg-opacity-10 p-4 rounded-xl shadow-lg border-[#2a262653] border flex flex-col">
                  <h1 className="font-medium mb-2">Total Market Cap</h1>
                  <div className="flex-1 flex items-center justify-center">
                    <TotalMarketCap />
                  </div>
                </div>

                <div className="bg-[#1a1b2f] bg-opacity-10 p-4 rounded-xl shadow-lg border-[#2a262653] border flex flex-col">
                  <h1 className="font-medium mb-2">Exchanges</h1>
                  <div className="flex-1 flex items-center justify-center">
                    <Exchanges />
                  </div>
                </div>

                <div className="bg-[#1a1b2f] bg-opacity-10 p-4 rounded-xl shadow-lg border-[#2a262653] border flex flex-col">
                  <h1 className="font-medium mb-2">24H Volume</h1>
                  <div className="flex-1 flex items-center justify-center">
                    <TotalVolume />
                  </div>
                </div>
              </div>
            </div>
            {/*tabs*/}
            <div className="py-4">
              <Tabs defaultValue="coins" className="w-full text-white px-4">
                <TabsList>
                  <TabsTrigger value="coins">Coins</TabsTrigger>
                  <TabsTrigger value="nfts">NFTs</TabsTrigger>
                </TabsList>
                <TabsContent value="coins">
                  <AllCoins /> {/* Content for Coins */}
                </TabsContent>
                <TabsContent value="nfts">
                  <AllNFTs /> {/* Content for NFTs */}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </CryptoDataProvider>
  );
}
