import { SORT_ORDER } from "./constants";

export const sortList = (list = [], criteria, order) => {
  const sortedList = [...list].sort((a, b) => {
    let item1, item2;
    const isAscend = order === SORT_ORDER[0].value;
    if (criteria === "price") {
      //TODO: this exception could be also compatible for more numeric criterias in the future
      item1 = a?.[criteria] ? parseInt(a?.[criteria]) : 0;
      item2 = b?.[criteria] ? parseInt(b?.[criteria]) : 0;
    } else {
      item1 = a?.[criteria].toUpperCase();
      item2 = b?.[criteria].toUpperCase();
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
