import { useState, useEffect } from "react"
import { Card, CardContent } from "../Elements/Card.jsx"
import SearchBar from "../Elements/SearchBar.jsx"
import WeatherCard from "../Components/WeatherCard.jsx"
import FavoritesList from "../Components/FavoriteList.jsx"
import Tabs from "../Components/Tabs.jsx"
import { weatherApi } from "../api/weatherApi.js"

const Home = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("search")

  const handleCitySearch = async (cityName) => {
    setLoading(true)
    setError("")

    const result = await weatherApi.getWeatherByCity(cityName)

    if (result.success) {
      const transformedData = weatherApi.transformWeatherData(result.data)
      setWeather(transformedData)
    } else {
      setError(result.error)
      setWeather(null)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (activeTab === "search") {
      handleCitySearch("Jakarta")
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Weather App</h1>
          <p className="text-blue-100">Get current weather information for any city</p>
        </div>

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} className="mb-8 max-w-md mx-auto" />

        {activeTab === "search" ? (
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleCitySearch} loading={loading} />

            {error && (
              <Card className="mb-8 bg-red-500/20 backdrop-blur-md border border-red-300/30 rounded-xl shadow-lg">
                <CardContent className="p-4">
                  <p className="text-red-100 text-center">{error}</p>
                </CardContent>
              </Card>
            )}

            <WeatherCard weather={weather} />
          </div>
        ) : (
          <FavoritesList />
        )}
      </div>
    </div>
  )
}

export default Home
