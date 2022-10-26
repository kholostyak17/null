import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductList } from "../../common/services";

const initialState = {
  list: [],
  isError: false,
  isLoading: true,
  cartItems: parseInt(localStorage.getItem("cartItems")) || 0,
  currentItem: "",
};

export const fetchProductList = createAsyncThunk(
  "products/fetchList",
  async () => {
    const response = await getProductList();
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementCart: (state, action) => {
      const totalCartItems = state.cartItems + parseInt(action.payload);
      state.cartItems = totalCartItems;
      localStorage.setItem("cartItems", totalCartItems);
    },
    resetCart: (state) => {
      state.cartItems = 0;
      localStorage.removeItem("cartItems");
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    removeCurrentItem: (state) => {
      state.currentItem = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(fetchProductList.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { incrementCart, resetCart, setCurrentItem, removeCurrentItem } =
  productsSlice.actions;

export default productsSlice.reducer;
