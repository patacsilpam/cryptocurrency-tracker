import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/common/Table";
import { formattedPrice } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SearchBar } from "@/components/common/SearchBar";

interface Coins {
  id: string;
  name: string;
  market_cap_rank: number;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}
interface AllCoinsProps {
  className?: string;
}
export default function AllCoins({ className = "" }: AllCoinsProps) {
  const coinsPerPage = 100;

  const [coins, setCoins] = useState<Coins[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coins[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchTotalCoins = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/coins/list`,
        {
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch coin list");

      const data = await response.json();
      const total = data.length;
      setTotalPages(Math.ceil(total / coinsPerPage));
    } catch (err) {
      console.error("Failed to fetch total coin count:", err);
    }
  };

  const fetchCoins = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch coins");

      const data = await response.json();
      setCoins(data);
      setFilteredCoins(data);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalCoins();
    fetchCoins(1);
  }, []);
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filteredCoins = coins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(term.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(term.toLowerCase())
      );
    });
    setFilteredCoins(filteredCoins);
    setTotalPages(Math.ceil(filteredCoins.length / coinsPerPage));
    setCurrentPage(1);
  };
  return (
    <div>
      <div className="w-full">
        <SearchBar searchTerm={searchTerm} onSearchTerm={handleSearch} />
      </div>
      <div className={className}>
        <Table>
          <thead>
            <TableRow>
              <TableHead className="w-16">Rank</TableHead>
              <TableHead className="w-40">Coin</TableHead>
              <TableHead className="w-24">Symbol</TableHead>
              <TableHead className="w-32">Price</TableHead>
              <TableHead className="w-40">Market Cap</TableHead>
              <TableHead className="w-40">Total Volume</TableHead>
              <TableHead className="w-32">Price Change</TableHead>
            </TableRow>
          </thead>
          <TableBody>
            {filteredCoins.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>{coin.market_cap_rank}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <img src={coin.image} className="h-10" />
                  {coin.name}
                </TableCell>
                <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                <TableCell>{formattedPrice(coin.current_price)}</TableCell>
                <TableCell>{formattedPrice(coin.market_cap)}</TableCell>
                <TableCell>{formattedPrice(coin.total_volume)}</TableCell>
                <TableCell
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          onClick={() => fetchCoins(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className={`flex items-center px-3 py-1 rounded-md ${
            currentPage === 1 || loading
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </button>

        <div className="text-gray-700 dark:text-white">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={() => fetchCoins(currentPage + 1)}
          disabled={currentPage >= totalPages || loading}
          className={`flex items-center px-3 py-1 rounded-md ${
            currentPage >= totalPages || loading
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
