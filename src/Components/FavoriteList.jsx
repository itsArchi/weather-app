import { useState } from "react"
import { Card, CardContent } from "../Elements/Card.jsx"
import { useFavoritesStore } from "../Store/favoriteStore.js"
import { weatherApi } from "../api/weatherApi.js"
import WeatherCard from "./WeatherCard.jsx"
import Button from "../Elements/Button.jsx"

const FavoritesList = () => {
  const { favorites } = useFavoritesStore()
  const [weatherData, setWeatherData] = useState({})
  const [loading, setLoading] = useState({})

  const fetchWeatherForCity = async (cityName) => {
    setLoading((prev) => ({ ...prev, [cityName]: true }))

    const result = await weatherApi.getWeatherByCity(cityName)

    if (result.success) {
      const transformedData = weatherApi.transformWeatherData(result.data)
      setWeatherData((prev) => ({ ...prev, [cityName]: transformedData }))
    }

    setLoading((prev) => ({ ...prev, [cityName]: false }))
  }

  if (favorites.length === 0) {
    return (
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
        <CardContent className="p-8 text-center">
          <p className="text-white text-lg">No favorite cities yet.</p>
          <p className="text-blue-100 mt-2">Search for a city and click the heart icon to add it to favorites!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {favorites.map((favorite) => {
        const weather = weatherData[favorite.name]
        const isLoading = loading[favorite.name]

        return (
          <div key={`${favorite.name}-${favorite.country}`}>
            {weather ? (
              <WeatherCard weather={weather} />
            ) : (
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{favorite.name}</h3>
                  <p className="text-blue-100 mb-4">{favorite.country}</p>
                  <Button
                    onClick={() => fetchWeatherForCity(favorite.name)}
                    disabled={isLoading}
                    className="px-4 py-2 rounded-lg font-medium bg-white/20 hover:bg-white/30 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                  >
                    {isLoading ? "Loading..." : "Get Weather"}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FavoritesList
