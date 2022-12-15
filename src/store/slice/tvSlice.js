import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShows, getShowsFilm } from 'service/test';

export const tvBlandThunk = createAsyncThunk('tvBlandThunk', async () => {
  return getShows()
    .then((data) => {
      // console.log(data.data);
      return data.data;
    })
    .catch((err) => {
      return err;
    });
});

export const tvBlandInfoThunk = createAsyncThunk('tvBlandInfoThunk', async (data) => {
  return getShowsFilm(data)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
});

const initialState = {
  items: [],
  filmItems: [],
  loading: true,
  filmLoading: true,
};

export const tvSlice = createSlice({
  name: 'pizza',
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
