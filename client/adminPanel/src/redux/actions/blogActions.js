import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";

export const getAllBlogs = createAsyncThunk(
  "blogs/getAllBlogs",
  async (_, thunkApi) => {
    try {
      const res = await baseApi.get("/blogs/getAllBlogs");
      return res.data?.dataƒ;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getBlogById = createAsyncThunk(
  "blogs/getBlogById",
  async (id, thunkApi) => {
    try {
      const res = await baseApi.get(`/blogs/getProductById/${id}`);
      return res?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addBlog = createAsyncThunk(
  "blogs/addBlog",
  async (body, thunkApi) => {
    try {
      const res = await baseApi.post(`/blogs/addBlog`, body);
      return res?.data?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async (body, thunkApi) => {
    try {
      const res = await baseApi.post("/blogs/updateBlog", body);
      return res?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id, thunkApi) => {
    try {
      const res = await baseApi.delete(`blogs/deleteBlog/${id}`);
      return res?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
