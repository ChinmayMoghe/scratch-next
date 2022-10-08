import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { charactersSlice } from "./reducers/characters/reducer";
import { marvelAPI } from "./service/service";

const createStore = () => {
  return configureStore({
    reducer: {
      [marvelAPI.reducerPath]: marvelAPI.reducer,
      [charactersSlice.name]: charactersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(marvelAPI.middleware),
    devTools: process.env.NODE_ENV === "development",
  });
};

export const wrapper = createWrapper(createStore);
