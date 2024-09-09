import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";
import { PAGE_LIMIT } from "../../constants/consts";

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
  async (params, thunkApi) => {
    const { search, limit, page } = params;
    try {
      const result = await baseApi.get(
        `/users/getAllUsers?search=${search}&limit=${limit}&page=${page}`
      );
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
      thunkApi.dispatch(
        getAllUsers({ search: "", limit: PAGE_LIMIT, page: 1 })
      );
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
      thunkApi.dispatch(
        getAllUsers({ search: "", limit: PAGE_LIMIT, page: 1 })
      );
      return result?.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
