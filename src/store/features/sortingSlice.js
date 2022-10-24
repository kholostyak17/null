import { createSlice } from "@reduxjs/toolkit";
import { SORT_CRITERIA, SORT_ORDER } from "../../common/constants";

const savedOptions = JSON.parse(localStorage.getItem("sorting"));
const defaultOptions = {
  criteria: SORT_CRITERIA.name,
  order: SORT_ORDER.ascending,
};

const initialState = savedOptions || defaultOptions;

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    changeCriteria: (state, action) => {
      state.criteria = action.payload;
      localStorage.setItem(
        "sorting",
        JSON.stringify({
          criteria: action.payload,
          order: state.order,
        })
      );
    },
    changeOrder: (state, action) => {
      state.order = action.payload;
      localStorage.setItem(
        "sorting",
        JSON.stringify({
          criteria: state.criteria,
          order: action.payload,
        })
      );
    },
    resetOptions: (state) => {
      state.criteria = defaultOptions.criteria;
      state.order = defaultOptions.order;
      localStorage.setItem("sorting", JSON.stringify(defaultOptions));
    },
  },
});

export const { changeCriteria, changeOrder, resetOptions } =
  sortingSlice.actions;

export default sortingSlice.reducer;
