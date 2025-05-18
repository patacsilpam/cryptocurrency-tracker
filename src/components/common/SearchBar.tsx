interface SearchBarProps {
  searchTerm: string;
  onSearchTerm: (term: string) => void;
}
export const SearchBar = ({ searchTerm, onSearchTerm }: SearchBarProps) => {
  return (
    <div className="flex flex-row py-2 space-x-5 mb-5 w-1/2">
      <input
        type="text"
        placeholder="Search coins"
        className="w-1/2 bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        onChange={(e) => onSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
};
