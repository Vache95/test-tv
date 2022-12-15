import { configureStore } from "@reduxjs/toolkit";
import film from "./slice/tvSlice";

export const store = configureStore({
  reducer: {
    film,
  },
});
