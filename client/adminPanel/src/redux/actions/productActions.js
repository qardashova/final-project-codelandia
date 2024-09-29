import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";
import { PAGE_LIMIT } from "../../constants/consts";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (body, thunkApi) => {
    try {
      const res = await baseApi.post("/products/getAllProducts", body);
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
      thunkApi.dispatch(
        getAllProducts({ search: "", limit: PAGE_LIMIT, page: 1 })
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
      const res = await baseApi.delete(`products/deleteProduct/${id}`);
      thunkApi.dispatch(
        getAllProducts({ search: "", limit: PAGE_LIMIT, page: 1 })
      );
      return res?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
