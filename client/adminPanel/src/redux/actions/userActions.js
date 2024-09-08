import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";

export const getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (_, thunkApi) => {
    try {
      const result = await baseApi.get("/users/getUserInfo");
      return result.data?.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
