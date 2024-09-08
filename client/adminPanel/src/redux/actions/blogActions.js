import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";

export const getAllBlogs = createAsyncThunk(
  "/blogs/getAllBlogs",
  async (_, thunkApi) => {
    try {
        const res = await baseApi.get('/blogs/getAllBlogs');
        return res.data?.dataƒ
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
