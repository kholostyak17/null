import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import searchReducer from "./features/searchSlice";
import sortingReducer from "./features/sortingSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    sorting: sortingReducer,
  },
});
