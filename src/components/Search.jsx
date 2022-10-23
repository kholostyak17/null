import React from "react";

const Search = ({ searchText, setSearchText }) => {
  const setNewTextFilter = (filter) => {
    if (filter.length >= 3) {
      setSearchText(filter);
    } else {
      setSearchText("");
    }
  };

  return (
    <input
      placeholder="search here)"
      defaultValue={searchText}
      onChange={(event) => setNewTextFilter(event.target.value)}
      type="text"
    />
  );
};

export default Search;
