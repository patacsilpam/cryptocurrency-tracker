import { useEffect, useState } from "react";
import { formattedPrice } from "../../../utils/utils";
export function TrendingCoin() {
  interface Coin {
    item: {
      id: string;
      coin_id: string;
      name: string;
      symbol: string;
      market_cap_rank: number;
      thumb: string;
      data: {
        price: number;
      };
    };
  }

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
        const json = await response.json();

        setTrendingCoins(json.coins);
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
          {trendingCoins.map((coin) => (
            <div
              key={coin.item.coin_id}
              className="flex flex-row items-center space-x-5"
            >
              <div>
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  className="h-16"
                  loading="lazy"
                />
              </div>
              <div>
                <p>{coin.item.name}</p>
                <p> {coin.item.symbol}</p>
                <p>{formattedPrice(coin.item.data.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
