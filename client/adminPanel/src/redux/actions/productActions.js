import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkApi) => {
    try {
      const res = await baseApi.get("/products/getAllProducts");
      return res?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, thunkApi) => {
    try {
      const res = await baseApi.get(`/products/getProductById/${id}`);
      return res?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/createProduct",
  async (body, thunkApi) => {
    try {
      const res = await baseApi.post(
        "products/addProduct",
        body
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      return res.data?.data;
    } catch (error) {
     return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkApi) => {
    try {
      const res = await baseApi.delete(`/deleteProduct/${id}`);
      return res?.data.data;
    } catch (error) {
     return thunkApi.rejectWithValue(error);
    }
  }
);
