import { useEffect, useState } from "react";
import { FetchCoins } from "../../../hooks/fetch";
import { Coin } from "../../../interfaces/interface";
export function TrendingCoin() {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);
  useEffect(() => {
    FetchCoins().then((data) => {
      setTrendingCoins(data);
    });
  }, []);
  return (
    <>
      <div>
        <h1>Trending Coins</h1>
        <ul>
          {trendingCoins.map((coin) => {
            return <li key={coin.item.coin_id}>{coin.item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
