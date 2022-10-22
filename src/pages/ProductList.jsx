import React from "react";
import Search from "../components/Search";

const SortPicker = () => {
  return (
    <select name="select">
      <option value="value1">Value 1</option>
      <option value="value2" selected>
        Value 2
      </option>
      <option value="value3">Value 3</option>
    </select>
  );
};

const ProductList = () => {
  return (
    <div className="list-page">
      <h1>Smartphones</h1>
      <div>
        <div>
          <SortPicker />
          <Search />
        </div>
        <div className="list-elements">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
