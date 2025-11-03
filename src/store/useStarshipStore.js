import { create } from 'zustand'

const API_URL = 'https://swapi.dev/api/starships'

export const useStarshipStore = create((set) => ({
  allStarships: [],
  searchTerm: '',
  isLoading: false,
  error: null,

  setSearchTerm: (term) => set({ searchTerm: term }),

  fetchStarships: async () => {
    set({ isLoading: true, error: null })
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      set({ allStarships: data.results })
    } catch (e) {
      set({ error: e.message })
    } finally {
      set({ isLoading: false })
    }
  },
}))
