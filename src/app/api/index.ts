import { createAsyncThunk } from "@reduxjs/toolkit";

export const onGetBillings = createAsyncThunk(
  "GET_BILLINGS",
  async (_payload, _thunkApi) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/billing`
      );
      if (response.status != 200) console.log("error");
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const onGetBillingsPending = createAsyncThunk(
  "GET_BILLINGS_PENDING",
  async (payload: string, _thunkApi) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }/billing/pending?ClientId=${payload}`
      );
      if (response.status != 200) console.log("error");
      const result = await response.json();
      return result;
    } catch (error) {}
  }
);

export const onGetBillingsSearch = createAsyncThunk(
  "GET_BILLING_SEARCH",
  async (payload: string, _thunkApi) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/billing/search?category=${payload}`
      );
      if (response.status != 200) console.log("error");
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const onGetBillingsHistory = createAsyncThunk(
  "GET_BILLING_HISTORY",
  async (_payload, _thunkApi) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/billing/history`
      );
      if (response.status != 200) console.log("error");
      const result = await response.json();
      return result;
    } catch (error) {}
  }
);

export const onCreateBilling = createAsyncThunk(
  "CREATE_BILLING",
  async (payload: {}, _thunkApi) => {
    try {
      console.log({ payload });
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/billing/bills`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.status != 200) console.log("error");
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const onPayBilling = createAsyncThunk(
  "PAY_BILLING",
  async (payload: {}, _thunkApi) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/billing/pay`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.status != 200) console.log("error");
      const result = await response.json();
      return result;
    } catch (error) {}
  }
);
