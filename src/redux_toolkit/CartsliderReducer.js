import { createSlice } from "@reduxjs/toolkit";

const CartListslice = createSlice({
  name: "products in cart array",
  initialState: [],
  reducers: {
    addprdttocart: (state, action) => {
      state.push(action.payload);
    },
    deleteprdtfromcartfnstore: (state, action) => {
 
      state.splice(action.payload.indexofvaluetodelete,1)
    },
  },
});

export default CartListslice.reducer;
export const { addprdttocart,deleteprdtfromcartfnstore } = CartListslice.actions;
