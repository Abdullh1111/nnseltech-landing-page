/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseUrl } from "@/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/project` }),
  endpoints: (builder) => ({
    getAllProject: builder.query<any, void>({
      query: () => `/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProjectQuery } = projectApi;
