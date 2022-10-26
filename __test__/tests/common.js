import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

export const store = mockStore({
  products: {
    list: [],
    isError: false,
    isLoading: true,
    cartItems: 3,
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
