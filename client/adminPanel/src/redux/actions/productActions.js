import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";

export const addProduct = createAsyncThunk(
  "products/createProduct",
  async (body, thunkApi) => {
    try {
      console.log(body);
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
      thunkApi.rejectWithValue(error);
    }
  }
);
