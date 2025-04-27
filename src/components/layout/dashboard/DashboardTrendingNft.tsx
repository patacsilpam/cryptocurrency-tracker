import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/common/Table";
import { useEffect, useState } from "react";
import { NFTResponse, NFT } from "@/interfaces/interface";

export function DashboardTrendingNFTs() {
  const [trendingCoins, setTrendingCoins] = useState<NFT[]>([]);
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/search/trending`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Response status:${response.status}`);
        }
        const data: NFTResponse = await response.json();
        setTrendingCoins(
          data.nfts.slice(0, 5).map((coin) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            thumb: coin.thumb,
            data: {
              floor_price: coin.data.floor_price,
              floor_price_in_usd_24h_percentage_change:
                coin.data.floor_price_in_usd_24h_percentage_change,
              sparkline: coin.data.sparkline,
            },
          }))
        );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchTrendingCoins();
  }, []);
  console.log(trendingCoins);
  return (
    <div className="bg-slate-800/50 p-4 rounded-xl shadow-md h-[50vh]">
      <p className="text-white font-medium text-lg">Trending NFTs</p>
      <div className="flex flex-col justify-center py-2">
        <Table>
          <TableBody>
            {trendingCoins.map((item, index) => (
              <TableRow
                key={item.id}
                className="border-transparent hover:bg-transparent"
              >
                <TableCell className="font-medium text-white">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium flex items-center gap-2 text-white">
                  <img src={item.thumb} alt={item.name} className="h-7" />{" "}
                  {item.name}
                </TableCell>
                <TableCell>
                  <span
                    className={`${
                      Number(
                        item.data.floor_price_in_usd_24h_percentage_change
                      ) < 0
                        ? "text-red-500"
                        : "text-green-500"
                    } font-medium`}
                  >
                    {Number(
                      item.data.floor_price_in_usd_24h_percentage_change
                    ).toFixed(2)}
                    %
                  </span>
                </TableCell>
                <TableCell>
                  <img
                    src={item.data.sparkline}
                    alt={`${item.name} chart`}
                    className="h-7"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
