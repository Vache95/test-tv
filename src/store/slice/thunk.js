import { createAsyncThunk } from "@reduxjs/toolkit";
import { getShows, getShowsFilm } from "service/filmsApi";

export const tvBlandThunk = createAsyncThunk("tvBlandThunk", async () => {
  return getShows()
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
});

export const tvBlandInfoThunk = createAsyncThunk("tvBlandInfoThunk", async (data) => {
  return getShowsFilm(data)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
});
