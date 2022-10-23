import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Search from "../components/Search";

const API_URL = "https://front-test-api.herokuapp.com/api";
const SORT_CRITERIA = [
  { label: "Name", value: "model" },
  { label: "Price", value: "price" },
  { label: "Brand", value: "brand" },
];
const SORT_ORDER = [
  { label: "Ascending", value: "ascending" },
  { label: "Descending", value: "descending" },
];

const ProductList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortOrder, setSortOrder] = useState(true);
  const [listContent, setListContent] = useState(<></>);

  const getList = async () => {
    const response = await fetch(`${API_URL}/product`);
    const list = await response.json();
    try {
      console.log(response, list, "this is the original data");
      setOriginalData(list);
    } catch {
      //set error here
    }
  };

  useEffect(() => {
    getList();
    setSortCriteria(SORT_CRITERIA[0].value); //TODO: catch from localstorage
    setSortOrder(SORT_ORDER[0].value); //TODO: catch from localstorage
  }, []);

  //TODO: move this fn to helper.js
  const sortList = (list = [], sortOption = "name", isAscend = true) => {
    const sortedList = [...list].sort((a, b) => {
      let item1, item2;
      if (sortOption === "price") {
        //TODO: this exception could be also compatible for more numeric criterias in the future
        item1 = a?.[sortOption] ? parseInt(a?.[sortOption]) : 0;
        item2 = b?.[sortOption] ? parseInt(b?.[sortOption]) : 0;
      } else {
        item1 = a?.[sortOption].toUpperCase();
        item2 = b?.[sortOption].toUpperCase();
      }
      if (isAscend ? item1 > item2 : item1 < item2) {
        return 1;
      }
      if (isAscend ? item1 < item2 : item1 > item2) {
        return -1;
      }
      return 0;
    });
    return sortedList;
  };

  useEffect(() => {
    if (originalData) {
      const sortedList = sortList(originalData, sortCriteria, sortOrder);
      const listContent = sortedList.map((item) => (
        <Item data={item} key={item.id} />
      ));
      setListContent(listContent);
    }
  }, [originalData, sortCriteria, sortOrder]);

  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div>
        <div>
          <select
            name="select"
            onChange={(event) => {
              setSortCriteria(event.target.value);
            }}
          >
            {SORT_CRITERIA.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
          <select
            name="select"
            onChange={(event) => {
              const isAscend = event.target.value === SORT_ORDER[0].value;
              setSortOrder(isAscend);
            }}
          >
            {SORT_ORDER.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
          <Search />
        </div>
        <div className="list-elements">{listContent}</div>
      </div>
    </div>
  );
};

export default ProductList;
