const Tabs = ({ activeTab, onTabChange, className = "" }) => {
  return (
    <div className={`flex bg-white/10 rounded-lg p-1 ${className}`}>
      <button
        onClick={() => onTabChange("search")}
        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          activeTab === "search" ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
        }`}
      >
        Search
      </button>
      <button
        onClick={() => onTabChange("favorites")}
        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          activeTab === "favorites" ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
        }`}
      >
        Favorites
      </button>
    </div>
  )
}

export default Tabs