import { useEffect, useState } from "react";
import { formattedPrice } from "../../../utils/utils";
import { Coin } from "../../../interfaces/interface";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../common/table";
export interface CoinResponse {
  coins: {
    item: {
      id: string;
      coin_id: string;
      name: string;
      symbol: string;
      thumb: string;
      data: {
        price: number;
        market_cap: string;
      };
    };
  }[];
}
export function TrendingCoin() {
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
          data.coins.map((coin) => ({
            id: coin.item.id,
            coin_id: coin.item.coin_id,
            name: coin.item.name,
            symbol: coin.item.symbol,
            thumb: coin.item.thumb,
            data: {
              price: coin.item.data.price,
              market_cap: coin.item.data.market_cap,
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
    <>
      <div>
        <h1>Trending Coins</h1>
        <div className="flex flex-col">
          <Table>
            <TableCaption>Trending Coins</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead className="w-[300px]">Coin</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trendingCoins.map((item, index) => (
                <TableRow key={item.coin_id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-medium flex items-center gap-2">
                    <img src={item.thumb} alt={item.name} className="h-7" />{" "}
                    {item.name}
                    <small className="text-slate-400">{item.symbol}</small>
                  </TableCell>
                  <TableCell>{formattedPrice(item.data.price)}</TableCell>
                  <TableCell>{item.data.market_cap}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
