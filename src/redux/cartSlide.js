import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   add: {
  //     loading: false,
  //     error: false,
  //     data: null,
  //   },
  getAllProductInCart: {
    loading: false,
    error: false,
    data: null,
  },
};

export const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addStart: (state) => {
    //   state.add.loading = true;
    //   state.add.error = false;
    // },
    // addSuccess: (state, action) => {
    //   state.add.loading = false;
    //   state.add.error = false;
    //   state.add.data = action.payload;
    // },
    // addError: (state) => {
    //   state.add.loading = false;
    //   state.add.error = true;
    // },
    getCartStart: (state) => {
      state.getAllProductInCart.loading = true;
      state.getAllProductInCart.error = false;
    },
    getCartSuccess: (state, action) => {
      state.getAllProductInCart.loading = false;
      state.getAllProductInCart.error = false;
      state.getAllProductInCart.data = action.payload;
    },
    getCartError: (state) => {
      state.getAllProductInCart.loading = false;
      state.getAllProductInCart.error = true;
    },
  },
});

export const { getCartStart, getCartSuccess, getCartError } = cartSlide.actions;
export default cartSlide.reducer;
