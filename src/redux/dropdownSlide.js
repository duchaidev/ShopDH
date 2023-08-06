import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueDropdown: "All items",
  dataDropdown: [
    {
      id: 0,
      text: "All items",
    },
    {
      id: 1,
      text: "Item 1",
    },
    {
      id: 2,
      text: "Item 2",
    },
    {
      id: 3,
      text: "Item 3",
    },
    {
      id: 4,
      text: "Item 4",
    },
  ],
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
