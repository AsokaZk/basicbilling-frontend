import { createAsyncThunk } from "@reduxjs/toolkit";

export const onGetClients = createAsyncThunk(
  "GET_CLIENTS",
  async (_payload, _thunkApi) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/client`
      );
      if (response.status != 200) console.log("error");
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
