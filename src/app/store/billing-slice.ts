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
  errorBilling: string;
}

const initialState: BillingsState = {
  billings: [],
  billingsPending: [],
  billingsHistory: [],
  payBilling: null,
  errorBilling: "",
};

export const billingSlice = createSlice({
  name: "billings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(onGetBillings.fulfilled, (state, actions) => {
        if (actions.payload.data == null) {
          state.errorBilling = actions.payload.error;
        } else {
          state.errorBilling = "";
          state.billings = actions.payload.data;
        }
        return state;
      })
      .addCase(onGetBillingsPending.fulfilled, (state, actions) => {
        if (actions.payload.data == null) {
          state.errorBilling = actions.payload.error;
        } else {
          state.errorBilling = "";
          state.billingsPending = actions.payload.data;
        }
        return state;
      })
      .addCase(onGetBillingsSearch.fulfilled, (state, actions) => {
        if (actions.payload.data == null) {
          state.errorBilling = actions.payload.error;
        } else {
          state.errorBilling = "";
          state.billings = actions.payload.data;
        }
        return state;
      })
      .addCase(onGetBillingsHistory.fulfilled, (state, actions) => {
        if (actions.payload.data == null) {
          state.errorBilling = actions.payload.error;
        } else {
          state.errorBilling = "";
          state.billingsHistory = actions.payload.data;
        }
        return state;
      })
      .addCase(onCreateBilling.fulfilled, (state, actions) => {
        if (actions.payload.data == null) {
          state.errorBilling = actions.payload.error;
        } else {
          state.errorBilling = "";
          state.billings.push(actions.payload.data);
        }
        return state;
      })
      .addCase(onPayBilling.fulfilled, (state, actions) => {
        if (actions.payload.data == null) {
          state.errorBilling = actions.payload.error;
        } else {
          state.errorBilling = "";
          const billingPaidId = actions.payload.data.id;
          const billingsPending = state.billingsPending.filter(
            (billing) => billing.id != billingPaidId
          );
          const billings = state.billings.filter(
            (billing) => billing.id != billingPaidId
          );
          state.billingsPending = billingsPending;
          state.billings = billings;
          state.payBilling = actions.payload.data;
        }
        return state;
      });
  },
});

export default billingSlice.reducer;
