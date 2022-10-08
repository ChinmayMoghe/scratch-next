import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  character: {},
  page: 1,
  offset: 20,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.characters,
      };
    },
  },
});

export const { setPage } = charactersSlice.actions;

export default charactersSlice.reducer;
