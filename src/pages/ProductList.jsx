import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Search from "../components/Search";

const API_URL = "https://front-test-api.herokuapp.com/api";

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
  const [list, setList] = useState([]);

  const getList = async () => {
    const response = await fetch(`${API_URL}/product`);
    const list = await response.json();
    try {
      console.log(response, list, "TRY");
      setList(list);
    } catch {
      console.log(response, list, "CATCHH");
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div>
        <div>
          <SortPicker />
          <Search />
        </div>
        <div className="list-elements">
          {Boolean(list.length) &&
            list.map((item) => {
              return <Item data={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
