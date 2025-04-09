import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BagItem } from "../types/types";

const bagSlice = createSlice({
  name: "bag",
  initialState: [] as BagItem[],
  reducers: {
    addToBag: (state, action: PayloadAction<BagItem>) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
