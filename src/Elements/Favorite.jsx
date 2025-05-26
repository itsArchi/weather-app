import { Heart } from "lucide-react"

const Favorite = ({ isFavorite, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`p-2 rounded-full transition-colors ${className}`}>
      <Heart
        className={`w-6 h-6 transition-colors ${
          isFavorite ? "fill-red-500 text-red-500" : "text-white hover:text-red-300"
        }`}
      />
    </button>
  )
}

export default Favorite