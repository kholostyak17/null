import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Search from "../components/Search";

const API_URL = "https://front-test-api.herokuapp.com/api";
const SORT_CRITERIA = [
  { label: "Name", value: "name" },
  { label: "Price", value: "price" },
  { label: "Brand", value: "brand" },
];

const ProductList = () => {
  const [list, setList] = useState([]);
  const [sortOption, setSortOption] = useState(SORT_CRITERIA[0].value);

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

  useEffect(() => {
    console.log(list);
    const sortedList = list.sort((item1, item2) => {
      if (item1?.[sortOption] > item2?.[sortOption]) {
        return 1;
      }
      if (item1?.[sortOption] < item2?.[sortOption]) {
        return -1;
      }
      return 0;
    });
    setList(sortedList);
  }, [sortOption]);

  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div>
        <div>
          <select
            name="select"
            onChange={(event) => {
              setSortOption(event.target.value);
            }}
          >
            {SORT_CRITERIA.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
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
