import { configureStore } from "@reduxjs/toolkit";
import paymentSlice from "./slice";
const store = configureStore({
  reducer: {
    payment: paymentSlice,
  },
});

export default store;
