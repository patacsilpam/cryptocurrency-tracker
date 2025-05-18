import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import AllCoins from "@/components/layout/dashboard/AllCoins";
import {
  CryptoDataProvider,
  useCryptoData,
} from "@/components/layout/dashboard/CryptoMarketStats";
import { formatMarketCap, formattedPrice } from "@/lib/utils";

export function Coins() {
  return (
    <CryptoDataProvider>
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col">
          <CoinsContent />
        </div>
      </div>
    </CryptoDataProvider>
  );
}
export function CoinsContent() {
  const { coins, marketCap, totalVolume, marketCapChange } = useCryptoData();
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
          <div className="p-7">
            <div>
              <h1 className="text-white text-xl font-medium">
                Top Cryptocurrencies by Market Cap
              </h1>
              <p className=" text-gray-500 py-2">
                The global cryptocurrency market cap today is{" "}
                {formatMarketCap(marketCap ?? 0).replace(/[TBM]$/, "")} Trillion
                , a{" "}
                <span
                  className={
                    marketCapChange !== null && marketCapChange < 0
                      ? "text-red-600"
                      : "text-blue-600"
                  }
                >
                  {marketCapChange?.toFixed(2)}%
                </span>
                &nbsp; change in the last 24 hours.
              </p>
            </div>
            <div className="mt-10">
              <AllCoins className="w-full text-white bg-[#1a1b2f] bg-opacity-10 border-[#2a262653] shadow-lg" />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
