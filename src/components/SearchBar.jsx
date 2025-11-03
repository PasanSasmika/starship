import { useStarshipStore } from '../store/useStarshipStore'

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useStarshipStore()

  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full max-w-md font-second p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  )
}
