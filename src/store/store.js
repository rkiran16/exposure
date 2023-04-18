import { configureStore } from '@reduxjs/toolkit';
import homeSliceReducer from './homeSlice';
import searchSliceReducer from './searchSlice';
import cartSliceReducer from './cartSlice';
import orderSliceReducer from './orderSlice';

export default configureStore({
  reducer: {
    search: searchSliceReducer,
    home: homeSliceReducer,
    cart: cartSliceReducer,
    order: orderSliceReducer,
  },
});
