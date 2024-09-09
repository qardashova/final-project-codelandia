import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (body, thunkApi) => {
  try {
    const res = await axios.post("http://localhost:3001/auth/login", {
      ...body,
    });
    return res.data?.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
