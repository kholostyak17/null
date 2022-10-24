import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Search from "../components/Search";
import { API_URL, SORT_CRITERIA, SORT_ORDER } from "../common/constants";
import { applySearchFilter, sortList } from "../common/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCriteria,
  changeOrder,
  resetOptions,
} from "../store/features/sortingSlice";

export const sortCriteriaOptions = [
  { label: "Price", value: SORT_CRITERIA.price },
  { label: "Brand", value: SORT_CRITERIA.brand },
  { label: "Name (model)", value: SORT_CRITERIA.name },
];
export const sortOrderOptions = [
  { label: "Ascending", value: SORT_ORDER.ascending },
  { label: "Descending", value: SORT_ORDER.descending },
];

const ProductList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isGridEnabled, setIsGridEnabled] = useState(true);
  const dispatch = useDispatch();
  const sortingCriteria = useSelector((state) => state.sorting.criteria);
  const sortingOrder = useSelector((state) => state.sorting.order);

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
      sortingCriteria,
      sortingOrder
    );
    setSortedData(sortedList);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (originalData) {
      getContent();
    }
  }, [originalData, filteredData, sortingCriteria, sortingOrder]);

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
          <select
            value={sortingCriteria}
            onChange={(event) => {
              dispatch(changeCriteria(event.target.value));
            }}
          >
            {sortCriteriaOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            value={sortingOrder}
            onChange={(event) => {
              dispatch(changeOrder(event.target.value));
            }}
          >
            {sortOrderOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <button onClick={() => dispatch(resetOptions())}>reset filter</button>
        </div>
        <Search
          searchText={searchText}
          setSearchText={(text) => setSearchText(text)}
        />
      </div>
      <div>
        <button onClick={() => setIsGridEnabled(!isGridEnabled)}>
          viewMode
        </button>
        <div className={`list-items ${isGridEnabled ? "grid" : "list"}`}>
          {sortedData.map((item) => (
            <Item key={item.id} gridEnabled={isGridEnabled} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
