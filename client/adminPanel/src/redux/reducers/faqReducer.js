import { createSlice } from "@reduxjs/toolkit";
import {
  addFAQ,
  getAllFAQ,
  getFAQById,
  updateFAQ,
} from "../actions/faqActions";

const initialState = {
  FAQs: [],
  popups: {
    addFAQpopup: false,
  },
  totalCount: 0,
  faq: {},
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    handleOpenPopup(state, action) {
      state.popups[action.payload] = !state.popups[action.payload];
    },
    handleResetFAQ(state) {
      state.faq = initialState.faq;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFAQ.fulfilled, (state, action) => {
      state.FAQs = action.payload;
      state.totalCount = action.payload[0]?.total_count;
    });
    builder.addCase(getFAQById.fulfilled, (state, action) => {
      state.faq = action.payload;
      state.popups.addFAQpopup = true;
    });
    builder.addCase(addFAQ.fulfilled, (state) => {
      state.popups.addFAQpopup = false;
    });
    builder.addCase(updateFAQ.fulfilled, (state) => {
      state.popups.addFAQpopup = false;
    });
  },
});

export const { handleOpenPopup, handleResetFAQ } = faqSlice.actions;

export default faqSlice.reducer;
