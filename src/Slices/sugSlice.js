import { createSlice } from "@reduxjs/toolkit";

const sugSlice = createSlice({
  initialState: [],
  name: "Suggestion",
  reducers: {
    setSug: (s, action) => action.payload
  }
});

export const { setSug } = sugSlice.actions;
export default sugSlice.reducer;
