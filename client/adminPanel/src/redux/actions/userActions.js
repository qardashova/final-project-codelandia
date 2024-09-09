import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";

export const getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (_, thunkApi) => {
    try {
      const result = await baseApi.get("/users/getUserInfo");
      return result.data?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkApi) => {
    try {
      const result = await baseApi.get("/users/getAllUsers");
      return result.data?.data;
    } catch (error) {
     return thunkApi.rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (body, thunkApi) => {
    try {
      const result = await baseApi.post("/users/addUser", body);
      return result.data?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, thunkApi) => {
    try {
      const result = await baseApi.delete(`/users/deleteUser/${id}`);
      return result?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
