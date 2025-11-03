import { useEffect } from 'react'
import { useStarshipStore } from './store/useStarshipStore'
import SearchBar from './components/SearchBar'
import StarshipCard from './components/StarshipCard'
import LoadingSpinner from './components/LoadingSpinner'
import Theme from './components/Theme'

export default function App() {
  const { allStarships, searchTerm, isLoading, error, fetchStarships } = useStarshipStore()

  useEffect(() => {
    fetchStarships()
  }, [fetchStarships])

  const filteredStarships = allStarships.filter(ship =>
    ship.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-base-100 text-base-content p-4 md:p-8">
      <header className="container mx-auto max-w-4xl flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-main font-bold text-primary mb-4">
            Star Wars Starships
          </h1>
          <SearchBar />
        </div>
        <Theme />
      </header>

      <main className="container mx-auto max-w-6xl">
        {isLoading && <LoadingSpinner />}
        {error && <p className="text-error font-main text-center">Error: {error}</p>}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStarships.map(ship => (
              <StarshipCard key={ship.url} starship={ship} />
            ))}
          </div>
        )}

        {!isLoading && !error && filteredStarships.length === 0 && (
          <p className="text-center font-main text-base-content/60">No starships found.</p>
        )}
      </main>
    </div>
  )
}
