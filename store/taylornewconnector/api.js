import axios from "axios"
const taylornewconnector = axios.create({
  baseURL: "https://www.google.ca",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function taylornewconnector4_get_blah_123_read(payload) {
  return taylornewconnector.get(`/blah/123`, {
    params: { new_param: payload.new_param, new_param_2: payload.new_param_2 }
  })
}
export const apiService = { taylornewconnector4_get_blah_123_read }
