import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

export const store = mockStore({
  products: {
    list: [],
    isError: false,
    isLoading: true,
    cartItems: 0,
    currentItem: "",
  },
  search: {
    filter: "",
  },
  sorting: {
    criteria: "model",
    order: "ascending",
  },
});
