import { createSlice } from "@reduxjs/toolkit";
import { tvBlandInfoThunk, tvBlandThunk } from "./thunk";
import { initialState } from "./initialState";

export const tvSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [tvBlandThunk.pending]: (state) => {
      state.loading = true;
      state.items = [];
    },
    [tvBlandThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    [tvBlandThunk.rejected]: (state) => {
      state.loading = false;
      state.items = [];
    },
    [tvBlandInfoThunk.pending]: (state) => {
      state.filmLoading = true;
      state.filmItems = [];
    },
    [tvBlandInfoThunk.fulfilled]: (state, action) => {
      state.filmItems = action.payload;
      state.filmLoading = false;
    },
    [tvBlandInfoThunk.rejected]: (state) => {
      state.filmLoading = false;
      state.filmItems = [];
    },
  },
});

export const { setItems } = tvSlice.actions;

export default tvSlice.reducer;
