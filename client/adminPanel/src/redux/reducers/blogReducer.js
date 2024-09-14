import { createSlice } from "@reduxjs/toolkit";
import {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../actions/blogActions";

const initialState = {
  popups: {
    addBlogPopup: false,
  },
  blogs: [],
  blog: {},
  totalCount: 0,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleOpenPopup(state, action) {
      state.popups[action.payload] = !state.popups[action.payload];
    },
    handleResetBlog(state) {
      state.blog = initialState.blog;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.totalCount = action.payload[0]?.total_count;
    });
    builder.addCase(getBlogById.fulfilled, (state, action) => {
      state.blog = action.payload;
      state.popups.addBlogPopup = true;
    });
    builder.addCase(addBlog.fulfilled, (state) => {
      state.popups.addBlogPopup = false;
    });
    builder.addCase(updateBlog.fulfilled, (state) => {
      state.popups.addBlogPopup = false;
    });
  },
});

export const { handleOpenPopup, handleResetBlog } = blogSlice.actions;

export default blogSlice.reducer;
