import { createSlice } from "@reduxjs/toolkit";
import { onGetClients } from "../api/client";

export type Client = {
  id: number;
  name: string;
};

export interface ClientsState {
  clients: Client[];
  errorClients: string;
}

const initialState: ClientsState = {
  clients: [],
  errorClients: "",
};

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onGetClients.fulfilled, (state, actions) => {
      if (actions.payload.data == null) {
        state.errorClients = actions.payload.error;
      } else {
        state.errorClients = "";
        state.clients = actions.payload.data;
      }
      return state;
    });
  },
});

export default clientSlice.reducer;
