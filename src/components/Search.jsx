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
    <div data-testid="search" className="search-box">
      <img className="-icon" src="icons/search.svg" width="22px" />
      <input
        className="search-input"
        placeholder="Type to search..."
        defaultValue={filter}
        onChange={(event) => setNewTextFilter(event.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
