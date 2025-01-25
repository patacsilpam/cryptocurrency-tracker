export interface Coin {
  id: string;
  coin_id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  data: {
    price: number;
  };
}
