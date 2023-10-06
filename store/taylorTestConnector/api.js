import axios from "axios"
import { TAYLOR_TEST_CONNECTOR_TOKEN } from "react-native-dotenv"
const taylorTestConnector = axios.create({
  baseURL: "https://google.ca",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${TAYLOR_TEST_CONNECTOR_TOKEN}`
  }
})
function taylortestconnector_get__read(payload) {
  return taylorTestConnector.get(`/`)
}
export const apiService = { taylortestconnector_get__read }
