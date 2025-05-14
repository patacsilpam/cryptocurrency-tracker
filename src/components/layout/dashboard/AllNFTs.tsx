import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/common/Table";

interface NFTs {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
}

export default function AllNFTs() {
  const coinsPerPage = 50;
  const [coins, setCoins] = useState<NFTs[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const assumedTotalCount = 3010; // Approximate or guessed total count
  const apiPageSize = coinsPerPage; // Since you're using 43 directly in the fetch

  const fetchNFTs = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/nfts/list?order=h24_volume_usd_asc&per_page=${apiPageSize}&page=${page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch NFTs");

      const data = await response.json();
      setCoins(data);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const pages = Math.ceil(assumedTotalCount / coinsPerPage);
    setTotalPages(pages);
    fetchNFTs(1);
  }, []);

  return (
    <div>
      <div className="w-full text-white bg-[#1a1b2f] bg-opacity-10 border-[#2a262653] border rounded-xl shadow-lg">
        <Table>
          <thead>
            <TableRow>
              <TableHead className="w-16">#</TableHead>
              <TableHead className="w-24">Contract Address</TableHead>
              <TableHead className="w-36">Coin</TableHead>
              <TableHead className="w-48">Asset Platform Id</TableHead>
              <TableHead className="w-64">Symbol</TableHead>
            </TableRow>
          </thead>
          <TableBody>
            {coins.map((coin, index) => (
              <TableRow key={coin.id}>
                <TableCell>
                  {(currentPage - 1) * coinsPerPage + index + 1}
                </TableCell>
                <TableCell>{coin.contract_address}</TableCell>
                <TableCell>{coin.name}</TableCell>
                <TableCell>{coin.asset_platform_id.toUpperCase()}</TableCell>
                <TableCell>{coin.symbol?.toUpperCase()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          onClick={() => fetchNFTs(currentPage - 1)}
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
          onClick={() => fetchNFTs(currentPage + 1)}
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
