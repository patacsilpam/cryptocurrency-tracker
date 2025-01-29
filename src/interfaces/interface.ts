export interface Coin {
  id: string;
  coin_id: string;
  name: string;
  symbol: string;
  thumb: string;
  data: {
    price: number;
    market_cap: string;
    sparkline: string;
    price_change_percentage_24h: {
      usd: number;
    };
  };
}

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
        sparkline: string;
        price_change_percentage_24h: {
          usd: number;
        };
      };
    };
  }[];
}
