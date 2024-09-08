import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../actions/userActions";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
