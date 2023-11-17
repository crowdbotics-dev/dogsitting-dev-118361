import axios from "axios"
import { TAYLOR_NEW_CONNECTOR_WITH_TOKEN_SECRET } from "react-native-dotenv"
const taylornewconnectorwithtoken = axios.create({
  baseURL: "https://www.google.ca",
  params: { private_key: TAYLOR_NEW_CONNECTOR_WITH_TOKEN_SECRET },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
