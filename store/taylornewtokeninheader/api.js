import axios from "axios";
import { TAYLOR_NEW_TOKEN_IN_HEADER_TOKEN } from "react-native-dotenv";
const taylornewtokeninheader = axios.create({
  baseURL: "https://www.google.ca",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${TAYLOR_NEW_TOKEN_IN_HEADER_TOKEN}`
  }
});
export const apiService = {};