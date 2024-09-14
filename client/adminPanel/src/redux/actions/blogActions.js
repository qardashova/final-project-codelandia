import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";
import { PAGE_LIMIT } from "../../constants/consts";

export const getAllBlogs = createAsyncThunk(
  "blogs/getAllBlogs",
  async (params, thunkApi) => {
    const { search, limit, page } = params;
    try {
      const res = await baseApi.get(
        `/blogs/getAllBlogs?search=${search}&limit=${limit}&page=${page}`
      );
      return res.data?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getBlogById = createAsyncThunk(
  "blogs/getBlogById",
  async (id, thunkApi) => {
    try {
      const res = await baseApi.get(`/blogs/getBlogById/${id}`);
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
      thunkApi.dispatch(
        getAllBlogs({ search: "", limit: PAGE_LIMIT, page: 1 })
      );
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
      console.log(body);
      
      const res = await baseApi.post("/blogs/updateBlog", body);
      thunkApi.dispatch(
        getAllBlogs({ search: "", limit: PAGE_LIMIT, page: 1 })
      );
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
      thunkApi.dispatch(
        getAllBlogs({ search: "", limit: PAGE_LIMIT, page: 1 })
      );
      return res?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


