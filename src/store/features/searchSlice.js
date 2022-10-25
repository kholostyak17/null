import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = "";
    },
  },
});

export const { setFilter, resetFilter } = searchSlice.actions;

export default searchSlice.reducer;
