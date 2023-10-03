import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./Slices/pageSlices";
import sugSlice from "./Slices/sugSlice";

export const store = configureStore({
  reducer: {
    pageNo: pageSlice,
    sug : sugSlice
  }
});
