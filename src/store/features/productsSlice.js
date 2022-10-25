import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../common/constants";
import { getProductList } from "../../common/services";

const initialState = {
  list: [],
  cart: [],
  isError: false,
  isLoading: true,
};

export const fetchProductList = createAsyncThunk(
  "products/fetchList",
  async () => {
    const response = await getProductList();
    console.log(response);
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.counter += 1;
    // },
    addToCart: (state, action) => {
      state.counter += 1;
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      console.log(action, "fullfilled");
      state.list = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      console.log(action, "rejected");
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const {
  //   increment,
  addToCart,
} = productsSlice.actions;

export default productsSlice.reducer;
