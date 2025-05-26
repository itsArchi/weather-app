import { useState } from "react"
import { Search } from "lucide-react"
import Button from "./Button.jsx"
import Input from "./Input.jsx"
import { Card, CardContent } from "./Card.jsx"

const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  return (
    <Card className="mb-8 bg-white/10 backdrop-blur-md border-white/20 rounded-xl shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full pl-10 px-3 py-2 rounded-lg border bg-white/20 border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-lg font-medium bg-white/20 hover:bg-white/30 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default SearchBar
