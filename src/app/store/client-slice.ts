import { createSlice } from "@reduxjs/toolkit";
import { onGetClients } from "../api/client";

export type Client = {
  id: number;
  name: string;
};

export interface ClientsState {
  clients: Client[];
}

const initialState: ClientsState = {
  clients: [],
};

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onGetClients.fulfilled, (state, actions) => {
      state.clients = actions.payload;
      return state;
    });
  },
});

export default clientSlice.reducer;
