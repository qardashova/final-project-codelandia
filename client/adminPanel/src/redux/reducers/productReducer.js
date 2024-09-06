import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popups: {
    addProductPopup: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleOpenPopup(state, action) {
      state.popups[action.payload] = !state.popups[action.payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { handleOpenPopup } = authSlice.actions;

export default authSlice.reducer;
