import { createAsyncThunk } from "@reduxjs/toolkit";

export const onGetClients = createAsyncThunk(
  "GET_CLIENTS",
  async (_payload, _thunkApi) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/client`
      );
      if (response.status != 200) console.log("error");
      const data = await response.json();
      return { data, error: "" };
    } catch (error) {
      return { error: "Error to get clients", data: null };
    }
  }
);
