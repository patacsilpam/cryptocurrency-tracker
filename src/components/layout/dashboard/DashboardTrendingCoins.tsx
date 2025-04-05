import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/Table";
import { useEffect, useState } from "react";
import { CoinResponse, Coin } from "@/interfaces/interface";
import { formattedPrice } from "@/lib/utils";

export function DashboardTrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);
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
        const data: CoinResponse = await response.json();
        setTrendingCoins(
          data.coins.slice(0, 5).map((coin) => ({
            id: coin.item.id,
            coin_id: coin.item.coin_id,
            name: coin.item.name,
            symbol: coin.item.symbol,
            thumb: coin.item.thumb,
            data: {
              price: coin.item.data.price,
              market_cap: coin.item.data.market_cap,
              sparkline: coin.item.data.sparkline,
              price_change_percentage_24h: {
                usd: coin.item.data.price_change_percentage_24h.usd,
              },
            },
          }))
        );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchTrendingCoins();
  }, []);
  return (
    <div className="bg-slate-800/50 p-5 rounded-xl shadow-md flex flex-col gap-4">
      <p className="text-white">Trending Coins</p>
      <Table>
        <TableBody>
          {trendingCoins.map((item, index) => (
            <TableRow
              key={item.coin_id}
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
                    item.data.price_change_percentage_24h.usd < 0
                      ? "text-red-500"
                      : "text-green-500"
                  } font-medium`}
                >
                  {item.data.price_change_percentage_24h.usd.toFixed(2)}%
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
  );
}
