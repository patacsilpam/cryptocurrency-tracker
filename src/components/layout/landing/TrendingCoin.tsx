import { TrendingCryptoCoin } from "../../landing/TrendingCryptoCoin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../common/Tabs";
import { NFTs } from "../../landing/Nfts";

export function TrendingCoin() {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <Tabs defaultValue="trending-crypto">
            <TabsList>
              <TabsTrigger value="trending-crypto">Coins</TabsTrigger>
              <TabsTrigger value="trending-nft">NFTs</TabsTrigger>
            </TabsList>
            <TabsContent value="trending-crypto">
              <TrendingCryptoCoin />
            </TabsContent>
            <TabsContent value="trending-nft">
              <NFTs />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
