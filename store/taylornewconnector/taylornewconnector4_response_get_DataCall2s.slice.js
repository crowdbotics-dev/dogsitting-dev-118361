import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const taylornewconnector4_get__read = createAsyncThunk("taylornewconnector4_response_get_DataCall2s/taylornewconnector4_get__read", async payload => {
  const response = await apiService.taylornewconnector4_get__read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const taylornewconnector4_response_get_DataCall2sSlice = createSlice({
  name: "taylornewconnector4_response_get_DataCall2s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(taylornewconnector4_get__read.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(taylornewconnector4_get__read.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(taylornewconnector4_get__read.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  taylornewconnector4_get__read,
  slice: taylornewconnector4_response_get_DataCall2sSlice
};