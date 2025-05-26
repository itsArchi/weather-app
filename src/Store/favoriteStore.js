import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (city) => {
        const { favorites } = get()
        const exists = favorites.find((fav) => fav.name === city.name && fav.country === city.country)

        if (!exists) {
          set({ favorites: [...favorites, city] })
        }
      },

      removeFavorite: (cityName, country) => {
        const { favorites } = get()
        set({
          favorites: favorites.filter((fav) => !(fav.name === cityName && fav.country === country)),
        })
      },

      isFavorite: (cityName, country) => {
        const { favorites } = get()
        return favorites.some((fav) => fav.name === cityName && fav.country === country)
      },

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "weather-favorites",
    },
  ),
)
