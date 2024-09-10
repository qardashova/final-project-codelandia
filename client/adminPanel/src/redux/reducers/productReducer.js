import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popups: {
    addProductPopup: false,
  },
  products: [],
  totalCount: 0,
};

const productSilce = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleOpenPopup(state, action) {
      state.popups[action.payload] = !state.popups[action.payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { handleOpenPopup } = productSilce.actions;

export default productSilce.reducer;
