export interface Coin {
  id: string;
  coin_id: string;
  name: string;
  symbol: string;
  thumb: string;
  data: {
    price: number;
    market_cap: string;
  };
}
