import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: { items: itemSlice.reducer, bag: bagSlice.reducer },
});

export type RootStateType = ReturnType<typeof myntraStore.getState>;

export default myntraStore;
