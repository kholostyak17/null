import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
// import searchReducer from "./features/searchSlice";
import sortingReducer from "./features/sortingSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    // search: searchReducer,
    sorting: sortingReducer,
  },
});
