import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../config/interceptors";
import { PAGE_LIMIT } from "../../constants/consts";

export const getAllFAQ = createAsyncThunk(
  "faq/getAllFAQ",
  async (params, thunkApi) => {
    const { search, limit, page } = params;
    try {
      const res = await baseApi.get(
        `/faq/getAllFAQ?search=${search}&limit=${limit}&page=${page}`
      );
      return res.data?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getFAQById = createAsyncThunk(
    "faq/getFAQById",
    async (id, thunkApi) => {
      try {
        const res = await baseApi.get(
          `/faq/getFAQById/${id}`
        );
        return res.data?.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

export const addFAQ = createAsyncThunk(
    "faq/addFAQ",
    async (body, thunkApi) => {
      try {
        const res = await baseApi.post(`/faq/addFAQ`, body);
        thunkApi.dispatch(
          getAllFAQ({ search: "", limit: PAGE_LIMIT, page: 1 })
        );
        return res?.data?.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
);

export const updateFAQ = createAsyncThunk(
    "faq/updateFAQ",
    async (body, thunkApi) => {
      try {
        const res = await baseApi.post("/faq/updateFAQ", body);
        thunkApi.dispatch(
          getAllFAQ({ search: "", limit: PAGE_LIMIT, page: 1 })
        );
        return res?.data.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

  export const deleteFAQ = createAsyncThunk(
    "faq/deleteFAQ",
    async (id, thunkApi) => {
      try {
        const res = await baseApi.delete(`faq/deleteFAQ/${id}`);
        thunkApi.dispatch(
          getAllFAQ({ search: "", limit: PAGE_LIMIT, page: 1 })
        );
        return res?.data.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );