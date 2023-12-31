import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
