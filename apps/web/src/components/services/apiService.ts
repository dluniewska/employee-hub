import axios from "axios";

export const apiAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_HOST
})