import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (payload) => {
        console.log("task from api", payload);
        return {
          url: "/tasks",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags:["todo"]
    }),
  }),
});
export const { useGetTodosQuery, useAddTodoMutation } = baseApi;
