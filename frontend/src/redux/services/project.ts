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
    createProject: builder.mutation<any, any>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
    updateProject: builder.mutation<any, any>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteProject: builder.mutation<any, any>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProjectQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectApi;
