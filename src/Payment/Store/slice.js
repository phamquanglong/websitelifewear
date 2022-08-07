import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {
    setPayment(state, action) {
      state.push(action.payload);
    },
  },
});
const { actions, reducer } = paymentSlice;
export const { setPayment } = actions;
export default reducer;
