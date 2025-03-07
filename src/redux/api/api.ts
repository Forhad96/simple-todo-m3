import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redux-todo-eight-psi.vercel.app/",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/tasks",
          method: "GET",
          params:priority,
        };
      },
      providesTags: ["todo"],
    }),
    getSingleTodo: builder.query({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "GET",
        };
      },
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
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (payload) => {
        console.log("task update data from api", payload);
        return {
          url: `/task/${payload.id}`,
          method: "PUT",
          body: payload.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});
export const { useGetTodosQuery,useGetSingleTodoQuery, useAddTodoMutation,useUpdateTodoMutation } = baseApi;
