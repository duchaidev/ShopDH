import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  add: {
    loading: false,
    error: false,
    data: null,
  },
  getAllProductSeller: {
    loading: false,
    error: false,
    data: null,
  },
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    addStart: (state) => {
      state.add.loading = true;
      state.add.error = false;
    },
    addSuccess: (state, action) => {
      state.add.loading = false;
      state.add.error = false;
      state.add.data = action.payload;
    },
    addError: (state) => {
      state.add.loading = false;
      state.add.error = true;
    },
    getProductSellerStart: (state) => {
      state.getAllProductSeller.loading = true;
      state.getAllProductSeller.error = false;
    },
    getProductSellerSuccess: (state, action) => {
      state.getAllProductSeller.loading = false;
      state.getAllProductSeller.error = false;
      state.getAllProductSeller.data = action.payload;
    },
    getProductSellerError: (state) => {
      state.getAllProductSeller.loading = false;
      state.getAllProductSeller.error = true;
    },
  },
});

export const {
  addStart,
  addSuccess,
  addError,
  getProductSellerStart,
  getProductSellerSuccess,
  getProductSellerError,
} = productSlide.actions;
export default productSlide.reducer;
