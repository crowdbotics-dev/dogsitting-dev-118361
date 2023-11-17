import axios from "axios"
const dan = axios.create({
  baseURL: "https://web.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
