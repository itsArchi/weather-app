import { Sun, Cloud, CloudRain, CloudSnow, Zap } from "lucide-react"
import { Card, CardContent } from "../Elements/Card.jsx"
import Favorite from "../Elements/Favorite.jsx"
import { useFavoritesStore } from "../Store/favoriteStore.js"

const getWeatherIcon = (iconCode) => {
  const iconMap = {
    "01d": <Sun className="w-24 h-24 text-yellow-500" />,
    "01n": <Sun className="w-24 h-24 text-yellow-300" />,
    "02d": <Cloud className="w-24 h-24 text-gray-400" />,
    "02n": <Cloud className="w-24 h-24 text-gray-500" />,
    "03d": <Cloud className="w-24 h-24 text-gray-500" />,
    "03n": <Cloud className="w-24 h-24 text-gray-600" />,
    "04d": <Cloud className="w-24 h-24 text-gray-600" />,
    "04n": <Cloud className="w-24 h-24 text-gray-700" />,
    "09d": <CloudRain className="w-24 h-24 text-blue-500" />,
    "09n": <CloudRain className="w-24 h-24 text-blue-600" />,
    "10d": <CloudRain className="w-24 h-24 text-blue-500" />,
    "10n": <CloudRain className="w-24 h-24 text-blue-600" />,
    "11d": <Zap className="w-24 h-24 text-yellow-600" />,
    "11n": <Zap className="w-24 h-24 text-yellow-700" />,
    "13d": <CloudSnow className="w-24 h-24 text-blue-200" />,
    "13n": <CloudSnow className="w-24 h-24 text-blue-300" />,
    "50d": <Cloud className="w-24 h-24 text-gray-400" />,
    "50n": <Cloud className="w-24 h-24 text-gray-500" />,
  }
  return iconMap[iconCode] || <Sun className="w-24 h-24 text-yellow-500" />
}

const WeatherCard = ({ weather }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore()

  if (!weather) return null

  const isCurrentlyFavorite = isFavorite(weather.name, weather.country)

  const handleFavoriteToggle = () => {
    if (isCurrentlyFavorite) {
      removeFavorite(weather.name, weather.country)
    } else {
      addFavorite(weather)
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg max-w-md mx-auto">
      <CardContent className="p-8 text-center relative">
        <div className="absolute top-4 right-4">
          <Favorite
            isFavorite={isCurrentlyFavorite}
            onClick={handleFavoriteToggle}
            className="bg-white/10 hover:bg-white/20"
          />
        </div>

        <div className="flex justify-center mb-6">{getWeatherIcon(weather.icon)}</div>

        <h2 className="text-2xl font-bold text-white mb-2">{weather.name}</h2>

        <p className="text-blue-100 text-lg mb-4">{weather.country}</p>

        <div className="text-6xl font-bold text-white mb-4">{weather.temperature}°C</div>

        <p className="text-blue-100 text-xl capitalize">{weather.description}</p>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
