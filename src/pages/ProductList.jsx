import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Search from "../components/Search";
import { API_URL, SORT_CRITERIA, SORT_ORDER } from "../common/constants";
import { sortList } from "../common/helper";

const ProductList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(SORT_CRITERIA[0].value); //TODO: catch from localstorage
  const [sortOrder, setSortOrder] = useState(SORT_ORDER[0].value); //TODO: catch from localstorage
  const [listContent, setListContent] = useState(<></>);

  const getData = async () => {
    const response = await fetch(`${API_URL}/product`);
    const list = await response.json();
    try {
      console.log(response, list, "this is the original data");
      setOriginalData(list);
    } catch {
      //set error here
    }
  };

  const getContent = () => {
    const sortedList = sortList(originalData, sortCriteria, sortOrder);
    const listContent = sortedList.map((item) => (
      <Item data={item} key={item.id} />
    ));
    setListContent(listContent);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (originalData) {
      getContent();
    }
  }, [originalData, sortCriteria, sortOrder]);

  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div>
        <div>
          <select
            name="select"
            defaultValue={sortCriteria}
            onChange={(event) => {
              setSortCriteria(event.target.value);
            }}
          >
            {SORT_CRITERIA.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            name="select"
            defaultValue={sortOrder}
            onChange={(event) => {
              const isAscend =
                event.target.value === SORT_ORDER[0].value.toString();
              setSortOrder(isAscend);
            }}
          >
            {SORT_ORDER.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
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
