import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getShows } from "service/test";

export const tvBlandThunk = createAsyncThunk("tvBlandThunk", async () => {
  return getShows()
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
});

const initialState = {
  items: [],
  loading: true,
};

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
  },
});

export const { setItems } = tvSlice.actions;

export default tvSlice.reducer;
