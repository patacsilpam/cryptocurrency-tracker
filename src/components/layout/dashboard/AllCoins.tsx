import { useEffect, useState, useRef } from "react";
//import { MarketCap } from "@/interfaces/interface";
import { formatMarketCap } from "@/lib/utils";
interface MarketCap {
  data: {
    total_market_cap: {
      [key: string]: number;
    };
    market_cap_change_percentage_24h_usd: number;
  };
}

export function AllCoins() {
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [marketCapChange, setMarketCapChange] = useState<number | null>(null);
  const previousMarketCap = useRef<number | null>(null);
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
        const marketCapValue = data.data.total_market_cap.usd;
        setMarketCap(marketCapValue);
        // Calculate market cap change percentage
        const marketCapPercentage =
          data.data.market_cap_change_percentage_24h_usd;
        setMarketCapChange(marketCapPercentage);
        // Calculate the change from the previous market cap value
        previousMarketCap.current = marketCapValue;
        console.log("Market Cap Data:", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMarketCap();
    // Set up interval to fetch data every minute
    const intervalId = setInterval(fetchMarketCap, 60000);

    return () => clearInterval(intervalId);
  });
  // Determine trend color
  const getTrendColor = () => {
    if (marketCapChange === null) return "text-gray-500";
    return marketCapChange >= 0 ? "text-green-600" : "text-red-600";
  };

  // Trend arrow
  const getTrendArrow = () => {
    if (marketCapChange === null) return "";
    return marketCapChange >= 0 ? "↑" : "↓";
  };
  return (
    <div>
      {marketCap !== null ? (
        <div>
          <p className={`text-3xl font-bold ${getTrendColor()}`}>
            {formatMarketCap(marketCap)}
          </p>
          <p className={`text-sm ${getTrendColor()}`}>
            {getTrendArrow()}
            {marketCapChange != null ? marketCapChange.toFixed(2) : "0"}%
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
