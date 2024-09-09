import { createApi } from "@reduxjs/toolkit/query";
import customBaseQuery from "./api";

export const parametricApi = createApi({
  reducerPath: "parametricApi",
  baseQuery: customBaseQuery,
  keepUnusedDataFor: 120,
  endpoints: (builder) => ({
    getAllColors: builder.query({
      query: () => ({
        url: `parametric/getAllColors`,
        method: "get",
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "parametric/getAllCategories",
        method: "get",
      }),
    }),
    getAllSizes: builder.query({
      query: () => ({
        url: "parametric/getAllSizes",
        method: "get",
      }),
    }),
  }),
});

export const {
  useGetAllColorsQuery,
  useGetAllCategoriesQuery,
  useGetAllSizesQuery,
} = parametricApi;
