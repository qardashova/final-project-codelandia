import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FAQs: [],
  popups: {
    addFAQpopup: false,
  },
  totalCount: 0,
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    handleOpenPopup(state, action) {
      state.popups[action.payload] = !state.popups[action.payload];
    },
  },
  extraReducers: (builder) => {
    
  },
});

export const { handleOpenPopup } = faqSlice.actions;

export default faqSlice.reducer;
