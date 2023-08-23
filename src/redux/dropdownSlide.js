import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueDropdown: "All items",
};

const dropdownSlide = createSlice({
  name: "dropdownSlide",
  initialState,
  reducers: {
    setValueDropdown: (state, action) => {
      state.valueDropdown = action.payload;
    },
  },
});

export default dropdownSlide.reducer;
export const { setValueDropdown } = dropdownSlide.actions;
