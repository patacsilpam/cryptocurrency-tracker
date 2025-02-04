/*export interface Coin {
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

export interface NFT {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  data: {
    floor_price: number;
    floor_price_in_usd_24h_percentage_change: string;
    sparkline: string;
  };
}

export interface NFTResponse {
  nfts: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    data: {
      floor_price: number;
      floor_price_in_usd_24h_percentage_change: string;
      sparkline: string;
    };
  }[];
}
*/

interface BaseAsset {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
}
// interface for trending coins
interface CoinData {
  price: number;
  market_cap: string;
  sparkline: string;
  price_change_percentage_24h: {
    usd: number;
  };
}

export interface Coin extends BaseAsset {
  coin_id: string;
  data: CoinData;
}

export interface CoinResponse {
  coins: {
    item: Coin;
  }[];
}

//interface for trending NFTs
interface NFTData {
  floor_price: number;
  floor_price_in_usd_24h_percentage_change: string;
  sparkline: string;
}

export interface NFT extends BaseAsset {
  data: NFTData;
}

export interface NFTResponse {
  nfts: NFT[];
}

//interface for testimonies
export interface Testimony {
  id: number;
  name: string;
  role: string;
  testimony: [];
}
