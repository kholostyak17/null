import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.counter += 1;
    // },
    addItem: (state, action) => {
      state.counter += 1;
      state.items = [...state.items, action.payload];
    },
  },
});

export const {
  //   increment,
  addItem,
} = itemsSlice.actions;

export default itemsSlice.reducer;
