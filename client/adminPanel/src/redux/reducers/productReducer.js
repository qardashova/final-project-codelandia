import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getAllProducts } from "../actions/productActions";

const initialState = {
  popups: {
    addProductPopup: false,
    filterPopup: false,
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
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.totalCount = action.payload[0]?.total_count;
    });
    builder.addCase(addProduct.fulfilled, (state) => {
      state.popups.addProductPopup = false;
    });
  },
});

export const { handleOpenPopup } = productSilce.actions;

export default productSilce.reducer;
