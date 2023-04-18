import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addToOrders: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { addToOrders } = orderSlice.actions;

export default orderSlice.reducer;
