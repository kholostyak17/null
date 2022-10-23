import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
// import searchFilterReducer from "./features/searchFilterSlice";
// import sortingOptionsReducer from "./features/sortingOptionsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    // searchFilter: searchFilterReducer,
    // sortingOptions: sortingOptionsReducer,
  },
});
