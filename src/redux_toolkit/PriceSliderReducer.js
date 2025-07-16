import { configureStore, createSlice } from "@reduxjs/toolkit";

const PricesliderSlice = createSlice({
  name: "customer selected min and max value",
  initialState: [],

  reducers: {
    updateMinAndMaxPriceRangeByClient: (state, action) => {
 
      
      return action.payload.slidingValueinstantlyclient;
    },
  },
});
export const { updateMinAndMaxPriceRangeByClient } = PricesliderSlice.actions;
export default PricesliderSlice.reducer;
