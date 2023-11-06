import axios from "axios";
import { PLUGIN_70_TOKEN } from "react-native-dotenv";
const plugin = axios.create({
  baseURL: "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7155/storyboard/8204/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${PLUGIN_70_TOKEN}`
  }
});
export const apiService = {};