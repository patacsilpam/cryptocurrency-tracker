import {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { formatMarketCap } from "@/lib/utils";
import { p } from "node_modules/react-router/dist/development/fog-of-war-BhhVTjSZ.d.mts";

// Interface for the market data
interface MarketData {
  active_cryptocurrencies: number;
  total_market_cap: {
    [key: string]: number;
  };
  total_volume: {
    usd: number;
    [key: string]: number;
  };
  market_cap_change_percentage_24h_usd: number;
}
// Context interface
interface CryptoContextType {
  coins: number | null;
  marketCap: number | null;
  marketCapChange: number | null;
  totalVolume: number | null;
  isLoading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

// Context interface
interface CryptoContextType {
  coins: number | null;
  marketCap: number | null;
  marketCapChange: number | null;
  isLoading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

// Create the cont
export const CryptoContext = createContext<CryptoContextType | undefined>(
  undefined
);

export function CryptoDataProvider({ children }: { children: ReactNode }) {
  const [coins, setCoins] = useState<number | null>(null);
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [marketCapChange, setMarketCapChange] = useState<number | null>(null);
  const [totalVolume, setTotalVolume] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const previousMarketCap = useRef<number | null>(null);

  // Fetch market data function
  const fetchMarketData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/global`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();

      // Extract and set all needed data
      const marketCapValue = data.data.total_market_cap.usd;
      setMarketCap(marketCapValue);

      const marketCapPercentage =
        data.data.market_cap_change_percentage_24h_usd;
      setMarketCapChange(marketCapPercentage);

      const activeCoins = data.data.active_cryptocurrencies;
      setCoins(activeCoins);

      // Store current value for future comparison
      previousMarketCap.current = marketCapValue;
      //store total volume
      const totalVolumeValue = data.data.total_volume.usd;
      setTotalVolume(totalVolumeValue);
      console.log("Market Data:", data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to fetch market data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();

    // Set up interval to fetch data every minute
    const intervalId = setInterval(fetchMarketData, 60000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array so it only runs once

  // Context value
  const contextValue = {
    coins,
    marketCap,
    marketCapChange,
    totalVolume,
    isLoading,
    error,
    refreshData: fetchMarketData,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {children}
    </CryptoContext.Provider>
  );
}
// Custom hook to use the crypto data
export function useCryptoData() {
  const context = useContext(CryptoContext);

  if (context === undefined) {
    throw new Error("useCryptoData must be used within a CryptoDataProvider");
  }

  return context;
}

// Updated AllCoins component that uses the context
export function TotalMarketCap() {
  const { marketCap, marketCapChange, isLoading, error } = useCryptoData();

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

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4 rounded-lg text-white">
      {!isLoading && marketCap !== null ? (
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
        <p className="text-gray-400">Loading...</p>
      )}
    </div>
  );
}

export function TotalCoins() {
  const { coins, isLoading, error } = useCryptoData();
  return (
    <div className="p-4 rounded-lg  text-white">
      {!isLoading && coins !== null ? (
        <p className="text-3xl text-blue-700 font-bold">
          {coins.toLocaleString()}
        </p>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
export function TotalVolume() {
  const { totalVolume, isLoading, error } = useCryptoData();
  return (
    <div>
      {!isLoading && totalVolume !== null ? (
        <p className="text-3xl text-blue-700 font-bold">
          {formatMarketCap(totalVolume)}
        </p>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
export function Exchanges() {
  return <div></div>;
}
