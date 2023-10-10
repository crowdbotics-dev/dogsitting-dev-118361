import axios from "axios"
const taylornewconnector = axios.create({
  baseURL: "https://www.google.ca",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
