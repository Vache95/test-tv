import { configureStore } from "@reduxjs/toolkit";
import tvBland from "./slice/tvSlice";

export const store = configureStore({
  reducer: {
    tvBland,
  },
});
