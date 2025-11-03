import axios from 'axios'
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
      const res = await axios.get(API_URL)
      set({ allStarships: res.data.results })
    } catch (e) {
      set({ error: e.response?.statusText || e.message })
    } finally {
      set({ isLoading: false })
    }
  },
}))
