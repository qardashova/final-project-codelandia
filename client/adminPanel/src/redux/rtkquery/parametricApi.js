import { createApi } from "@reduxjs/toolkit/query/react";
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
      transformResponse: (response) => response.data,
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "parametric/getAllCategories",
        method: "get",
      }),
      transformResponse: (response) => response.data,
    }),
    getAllSizes: builder.query({
      query: () => ({
        url: "parametric/getAllSizes",
        method: "get",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetAllColorsQuery,
  useGetAllCategoriesQuery,
  useGetAllSizesQuery,
} = parametricApi;
