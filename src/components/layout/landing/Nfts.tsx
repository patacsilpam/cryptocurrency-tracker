import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../common/Table";
import { useEffect, useState } from "react";
import { NFTResponse, NFT } from "../../../interfaces/interface";
import { formattedPrice } from "../../../utils/utils";

export function NFTs() {
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
          data.nfts.map((coin) => ({
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
    <Table>
      <TableCaption>Trending Coins</TableCaption>
      <TableHeader style={{ pointerEvents: "none" }}>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead className="w-[300px]">NFT</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24H Price Change</TableHead>
          <TableHead>Chart</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trendingCoins.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium flex items-center gap-2">
              <img src={item.thumb} alt={item.name} className="h-7" />{" "}
              {item.name}
              <small className="text-slate-400">{item.symbol}</small>
            </TableCell>
            <TableCell>{formattedPrice(item.data.floor_price)}</TableCell>
            <TableCell>
              <span
                className={`${
                  Number(item.data.floor_price_in_usd_24h_percentage_change) < 0
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
  );
}
