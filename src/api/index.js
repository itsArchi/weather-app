import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        apikey: API_KEY
    }
});

export default api;