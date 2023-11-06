import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const taylornewconnector4_get_blah_123_read = createAsyncThunk("taylornewconnector4_response_get_DataCallNames/taylornewconnector4_get_blah_123_read", async payload => {
  const response = await apiService.taylornewconnector4_get_blah_123_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const taylornewconnector4_response_get_DataCallNamesSlice = createSlice({
  name: "taylornewconnector4_response_get_DataCallNames",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(taylornewconnector4_get_blah_123_read.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(taylornewconnector4_get_blah_123_read.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(taylornewconnector4_get_blah_123_read.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  taylornewconnector4_get_blah_123_read,
  slice: taylornewconnector4_response_get_DataCallNamesSlice
};