import api from "./index.js"

export const weatherApi = {
  // Get weather by city name
  getWeatherByCity: async (cityName) => {
    try {
      const response = await api.get(`/weather?q=${cityName}&units=metric`)
      return {
        success: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        error: "City not found. Please try again.",
      }
    }
  },

  // FORMAT 
  transformWeatherData: (data) => {
    return {
      name: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    }
  },
}
