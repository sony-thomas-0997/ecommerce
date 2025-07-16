import { createSlice } from "@reduxjs/toolkit";

const RecentlyviewdSlice = createSlice({
  name: "recently viewed products",
  initialState: [],

  reducers: {
    addtorecentlyviewdarray: (state, action) => {
      console.log("add calling time", action.payload);
console.log(action.payload);

      return action.payload;
    },
    rearrangerecentlyviewdarray: (state, action) => {
      return action.payload;
    },
  },
});

export const { addtorecentlyviewdarray, rearrangerecentlyviewdarray } =
  RecentlyviewdSlice.actions;
export default RecentlyviewdSlice.reducer;
