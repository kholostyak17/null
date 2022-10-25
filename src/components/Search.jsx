import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilter } from "../store/features/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.search.filter);

  const setNewTextFilter = (filter) => {
    if (filter.length >= 3) {
      dispatch(setFilter(filter));
    } else {
      dispatch(resetFilter());
    }
  };

  return (
    <input
      data-testid="search"
      placeholder="search here)"
      defaultValue={filter}
      onChange={(event) => setNewTextFilter(event.target.value)}
      type="text"
    />
  );
};

export default Search;
