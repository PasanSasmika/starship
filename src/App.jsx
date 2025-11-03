import { useEffect } from 'react'
import { useStarshipStore } from './store/useStarshipStore'
import SearchBar from './components/SearchBar'
import StarshipCard from './components/StarshipCard'
import LoadingSpinner from './components/LoadingSpinner'

export default function App() {
  const { allStarships, searchTerm, isLoading, error, fetchStarships } = useStarshipStore()

  useEffect(() => {
    fetchStarships()
  }, [fetchStarships])

  const filteredStarships = allStarships.filter(ship =>
    ship.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      
      <header className="container mx-auto max-w-4xl text-center mb-8">
        <h1 className="text-5xl font-main font-bold text-yellow-400 mb-4">
          Star Wars Starships
        </h1>
        <SearchBar />
      </header>
      
      <main className="container mx-auto max-w-6xl">
        {isLoading && <LoadingSpinner />}
        
        {error && <p className="text-red-500 font-main text-center">Error: {error}</p>}
        
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStarships.map(ship => (
              <StarshipCard key={ship.url} starship={ship} />
            ))}
          </div>
        )}
        
        {!isLoading && !error && filteredStarships.length === 0 && (
          <p className="text-center font-main text-gray-400">No starships found.</p>
        )}
      </main>
    </div>
  )
}
