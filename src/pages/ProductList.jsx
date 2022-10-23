import React, { useEffect, useState } from "react";
import Item, { VARIANTS } from "../components/Item";
import Search from "../components/Search";
import { API_URL, SORT_CRITERIA, SORT_ORDER } from "../common/constants";
import { applySearchFilter, sortList } from "../common/helper";

const ProductList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(SORT_CRITERIA[0].value); //TODO: catch from localstorage
  const [sortOrder, setSortOrder] = useState(SORT_ORDER[0].value); //TODO: catch from localstorage
  const [listSorted, setListSorted] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isGridEnabled, setIsGridEnabled] = useState(true);

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
    const sortedList = sortList(
      Boolean(searchText) ? filteredData : originalData,
      sortCriteria,
      sortOrder
    );
    setListSorted(sortedList);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (originalData) {
      getContent();
    }
  }, [originalData, filteredData, sortCriteria, sortOrder]);

  useEffect(() => {
    if (searchText) {
      const filteredList = applySearchFilter(originalData, searchText);
      setFilteredData(filteredList);
    } else {
      setFilteredData([]);
    }
  }, [searchText]);

  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div>
        <div>
          <button onClick={() => setIsGridEnabled(!isGridEnabled)}>
            change list
          </button>
          {/* <button onClick={() => setIsGridEnabled(!isGridEnabled)}>
            reset filter
          </button> */}
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
          <Search
            searchText={searchText}
            setSearchText={(text) => setSearchText(text)}
          />
        </div>
        <div className={`list-items ${isGridEnabled ? "grid" : "list"}`}>
          {listSorted.map((item) => (
            <Item key={item.id} gridEnabled={isGridEnabled} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
