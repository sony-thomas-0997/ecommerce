import { createSlice } from "@reduxjs/toolkit";

const brandselectedSlice = createSlice({
  name: "brand selected to filter",
  initialState: [],
  reducers: {
    updateNewBrandToFilter: (state, action) => {
      switch (action.payload.boxChecked) {
        case true:
          state.push(action.payload.boxValue);

          break;
        case false:
          const indexToDeleteFilteValue = state.indexOf(
            action.payload.boxValue
          );

          state.splice(indexToDeleteFilteValue, 1);

          break;
        default:
      }
    },
    removeallbrandsonmenuchange: () => {
      return [];
    },
  },
});

export const { updateNewBrandToFilter,removeallbrandsonmenuchange } = brandselectedSlice.actions;
export default brandselectedSlice.reducer;
