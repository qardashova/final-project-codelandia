import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const parametricApi = createApi({
  reducerPath: "parametricApi",
  baseQuery: fetchBaseQuery("/"),
  endpoints: (builder) => ({}),
});
