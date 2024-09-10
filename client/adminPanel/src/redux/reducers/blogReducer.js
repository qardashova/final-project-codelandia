import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../actions/userActions";

const initialState = {
  popups: {
    addBlogPopup: false,
  },
  blogs: [],
  totalCount: 0,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleOpenPopup(state, action) {
      state.popups[action.payload] = !state.popups[action.payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { handleOpenPopup } = blogSlice.actions;

export default blogSlice.reducer;
