import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Search from "../components/Search";
import { SORT_CRITERIA, SORT_ORDER } from "../common/constants";
import { applySearchFilter, sortList } from "../common/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCriteria,
  changeOrder,
  resetOptions,
} from "../store/features/sortingSlice";
import {
  fetchProductList,
  removeCurrentItem,
} from "../store/features/productsSlice";

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
  const dispatch = useDispatch();
  const originalData = useSelector((state) => state.products.list);
  const [filteredData, setFilteredData] = useState(originalData);
  const [sortedData, setSortedData] = useState([]);
  const [isGridEnabled, setIsGridEnabled] = useState(true);
  const sortingCriteria = useSelector((state) => state.sorting.criteria);
  const sortingOrder = useSelector((state) => state.sorting.order);
  const searchFilter = useSelector((state) => state.search.filter);
  const isError = useSelector((state) => state.products.isError);
  const isResetFilterButtonEnabled = !(
    sortingCriteria === SORT_CRITERIA.name &&
    sortingOrder === SORT_ORDER.ascending
  );

  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(removeCurrentItem());
  }, []);

  useEffect(() => {
    //filtering the products if any search filter is applied
    if (searchFilter) {
      const filteredList = applySearchFilter(originalData, searchFilter);
      setFilteredData(filteredList);
    } else {
      setFilteredData(originalData);
    }
  }, [originalData, searchFilter]);

  useEffect(() => {
    //sorting products after filtering
    const sortedList = sortList(filteredData, sortingCriteria, sortingOrder);
    setSortedData(sortedList);
  }, [filteredData, sortingCriteria, sortingOrder]);

  return (
    <div className="container">
      <div className="list-page" data-testid="list-page">
        <h1 className="title list-page-title">Smartphones</h1>
        <div className="list-bar">
          <div className="sorting-bar">
            <div className="sorting-selector">
              <img
                className="sorting-icon"
                src="icons/sort_criteria.svg"
                width="20px"
              />
              <select
                className="selector criteria-selector"
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
            </div>
            <div className="sorting-selector">
              <img
                className="sorting-icon"
                src="icons/sort_order.svg"
                width="20px"
              />
              <select
                className="selector order-selector"
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
            </div>
            {isResetFilterButtonEnabled && (
              <span
                className="reset-filter"
                onClick={() => dispatch(resetOptions())}
              >
                Reset filter
              </span>
            )}
          </div>
          <Search />
        </div>
        <div>
          <div className="view-mode-button">
            <img
              src={`icons/${!isGridEnabled ? "grid" : "list"}.svg`}
              width="24px"
              onClick={() => setIsGridEnabled(!isGridEnabled)}
            />
          </div>
          <div className={`items ${isGridEnabled ? "grid" : "list"}`}>
            {sortedData.length ? (
              sortedData.map((item) => (
                <Item key={item.id} gridEnabled={isGridEnabled} data={item} />
              ))
            ) : (
              <div>{isError ? "loading error!" : "loading..."}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
