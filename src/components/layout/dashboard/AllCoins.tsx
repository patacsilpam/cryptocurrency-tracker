import { useEffect, useState } from "react";
//import { MarketCap } from "@/interfaces/interface";
import { formatMarketCap } from "@/lib/utils";
interface MarketCap {
  data: {
    total_market_cap: {
      [key: string]: number;
    };
  };
}

export function AllCoins() {
  const [marketCap, setMarketCap] = useState<number | null>(null);
  useEffect(() => {
    const fetchMarketCap = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/global`, {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
          },
        });
        if (!response.ok) {
          throw new Error(`Response status:${response.status}`);
        }
        const data = await response.json();
        setMarketCap(data.data.total_market_cap.usd);
        console.log("Market Cap Data:", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMarketCap();
  });
  return (
    <div>
      {" "}
      {marketCap !== null ? (
        <p className="text-3xl font-bold">{formatMarketCap(marketCap)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
