import { createSlice } from "@reduxjs/toolkit";
import {
  onCreateBilling,
  onGetBillings,
  onGetBillingsHistory,
  onGetBillingsPending,
  onGetBillingsSearch,
  onPayBilling,
} from "../api";

export type Billing = {
  id: number;
  clientId: number;
  period: number;
  charge: number;
  category: string;
  status: string;
  name: string;
};

export interface BillingsState {
  billings: Billing[];
  billingsPending: Billing[];
  billingsHistory: Billing[];
  payBilling: Billing | null;
}

const initialState: BillingsState = {
  billings: [],
  billingsPending: [],
  billingsHistory: [],
  payBilling: null,
};

export const billingSlice = createSlice({
  name: "billings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(onGetBillings.fulfilled, (state, actions) => {
        state.billings = actions.payload;
        return state;
      })
      .addCase(onGetBillingsPending.fulfilled, (state, actions) => {
        state.billingsPending = actions.payload;
        return state;
      })
      .addCase(onGetBillingsSearch.fulfilled, (state, actions) => {
        state.billings = actions.payload;
        return state;
      })
      .addCase(onGetBillingsHistory.fulfilled, (state, actions) => {
        state.billingsHistory = actions.payload;
        return state;
      })
      .addCase(onCreateBilling.fulfilled, (state, actions) => {
        state.billings.push(actions.payload);
        return state;
      })
      .addCase(onPayBilling.fulfilled, (state, actions) => {
        state.payBilling = actions.payload;
        return state;
      });
  },
});

export default billingSlice.reducer;
