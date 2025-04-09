import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../constant/items";

const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
