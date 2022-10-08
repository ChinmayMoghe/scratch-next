import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const marvelAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (offset) => `/characters?offset=${offset}`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetCharactersQuery } = marvelAPI;
