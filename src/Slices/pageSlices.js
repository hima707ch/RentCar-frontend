import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  initialState: 1,
  name: "Page",
  reducers: {
    next: (state) => Math.min(state + 1,10),
    prev: (s) => Math.max(1,s - 1),
    set: (s, action) => action.payload
  }
});

export const { next, prev, set } = pageSlice.actions;
export default pageSlice.reducer;
