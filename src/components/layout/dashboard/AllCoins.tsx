import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/common/Table";
import { formattedPrice } from "@/lib/utils";
import { useEffect, useState } from "react";
interface Coins {
  id: string;
  name: string;
  symbol: string;
  image: string;
  symbols: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

export default function AllCoins() {
  const [coins, setCoins] = useState<Coins[]>([]);
  const coinsPerPage = 100;
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch all coins data from the API
  useEffect(() => {
    const fetchCoins = async (page = currentPage) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/coins/markets?vs_currency=usd`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // If we get data back but it's an empty array, we've reached the end of available pages
        if (data.length === 0 && page > 1) {
          setCurrentPage(page - 1);
          return;
        }

        setCoins(data);
      } catch (error) {
        console.error("Error fetching coins:", error);
        return null;
      }
    };

    fetchCoins();
  }, [currentPage]);
  return (
    <div className="w-full text-white bg-[#1a1b2f] bg-opacity-10 border-[#2a262653] border rounded-xl shadow-lg">
      <Table>
        <TableHead className="w-16">Rank</TableHead>
        <TableHead className="w-40">Coin</TableHead>
        <TableHead className="w-24">Symbol</TableHead>
        <TableHead className="w-32">Price</TableHead>
        <TableHead className="w-40">Market Cap</TableHead>
        <TableHead className="w-40">Total Volume</TableHead>
        <TableHead className="w-32">Price Change</TableHead>
        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell>{coin.market_cap_rank}</TableCell>
              <TableCell className="flex items-center gap-2">
                <img src={coin.image} className="h-10" />
                {coin.name}
              </TableCell>
              <TableCell>{coin.symbol.toUpperCase()}</TableCell>
              <TableCell>{formattedPrice(coin.current_price)}</TableCell>
              <TableCell>{formattedPrice(coin.market_cap)}</TableCell>
              <TableCell>{formattedPrice(coin.total_volume)}</TableCell>
              <TableCell
                className={
                  coin.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
